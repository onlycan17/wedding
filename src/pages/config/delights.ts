import React, {useEffect, useRef, useState} from 'react';

interface DelighterOptions {
    attribute: string;
    classNames: string[];
    start: number;
    end: number;
    autoInit: boolean;
}

interface DelighterElement {
    el: HTMLElement;
    id: number;
    start: number;
    end: number;
    debug?: boolean;
    started?: boolean;
    ended?: boolean;
    [key: string]: any;
}

const defaultOptions: DelighterOptions = {
    attribute: 'data-delighter',
    classNames: ['delighter', 'started', 'ended'],
    start: 0.75,
    end: 0.75,
    autoInit: true
};

const Delighters: React.FC = () => {
    const [dels, setDels] = useState<DelighterElement[]>([]);
    const [options, setOptions] = useState<DelighterOptions>(defaultOptions);
    const delsRef = useRef(dels);

    const scroll = () => {
        const viewportHeight = window.innerHeight;
        const updatedDels = [...delsRef.current];
        // console.log(`delRef : ${delsRef.current}`);
        // console.log(`updatedDels : ${updatedDels}`);
        for (let i = 0; i < updatedDels.length; i++) {
            const del = updatedDels[i];
            const box = del.el.getBoundingClientRect();
            const factorStart = box.top / viewportHeight;
            const factorEnd = box.bottom / viewportHeight;

            if (del.debug) {
                if(factorStart >= 0 && factorStart <=1){
                    if(!del.startLine){
                        del.startLine = document.createElement('div');
                        del.startLine.style.position = 'fixed';
                        del.startLine.style.top = (del.start * 100) + 'vh';
                        del.startLine.style.width = '100%';
                        del.startLine.style.height = '0';
                        del.startLine.style.background = 'red';
                        del.startLine.style.borderBottom = 'dotted red 2px';
                        document.body.appendChild(del.startLine);
                    }
                }
                if((factorEnd < del.end) || (factorStart > 1) && del.startLine){
                    del.starLine.parentNode?.removeChild(del.startLine);
                    del.startLine = null;
                }
            }
                console.log(`options.classNames[1] : ${options.classNames[1]}`);
            if (factorStart < del.start && !del.started) {
                del.started = true;
                del.el.classList.add(options.classNames[1]);
            } else if (factorStart > del.start && del.started) {
                del.started = false;
                del.el.classList.remove(options.classNames[1]);
            }
            if (factorEnd < del.end && !del.ended) {
                del.ended = true;
                del.el.classList.add(options.classNames[2]);
            } else if (factorEnd > del.end && del.ended) {
                del.ended = false;
                del.el.classList.remove(options.classNames[2]);
            }
        }
        setDels([...updatedDels]);
        // console.log('scroll test event!!!!!!!!!!');
    };

    const init = () => {
        document.addEventListener('scroll', scroll);
        const els = document.querySelectorAll(`[${options.attribute}]`);
        console.log('init test event!!!!!!!!!!');
        console.log(els);
        const newDels: DelighterElement[] = [];
        for (let i = 0; i < els.length; i++) {
            const el = els[i] as HTMLElement;
            const def = el.getAttribute(options.attribute)!;
            const pairs = def.split(';');
            let del: DelighterElement = {
                el,
                id: newDels.length,
                start: options.start,
                end: options.end
            };

            for (let j = 0; j < pairs.length; j++) {
                const [name, valStr] = pairs[j].split(':');
                const val = isNaN(Number(valStr)) ? valStr : Number(valStr);
                if (name) (del as any)[name] = val ?? true;
            }

            newDels.push(del);
            el.classList.add(options.classNames[0]);
            if (del.debug) el.style.outline = 'solid red 4px';
        }
        delsRef.current = newDels;
        setDels(newDels);
        // console.log('--------------newDels----------------');
        // console.log(newDels);
        // console.log(dels);
        // console.log('--------------newDels----------------');
        scroll();
    };

    useEffect(() => {
        delsRef.current = dels; // dels 상태가 변경될 때만 delsRef를 업데이트합니다.
    }, [dels]);

    useEffect(() => {
        if (typeof window !== 'undefined' && options.autoInit) {
            init();
        }
        return () => {
            if (typeof window !== 'undefined') {
                document.removeEventListener('scroll', scroll);
            }
        };
    }, []);

    const config = (opts: Partial<DelighterOptions>) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            ...opts
        }));
    };

    return null;
};

export default Delighters;
