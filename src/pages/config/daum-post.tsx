// components/DaumPostcode.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// SSR을 위해 dynamic import 사용
const DaumPostcode = dynamic(
    () => import('react-daum-postcode'),
    { ssr: false }
);


interface PopupProps {
    show: boolean;
    onClose: () => void;
    address: any;
    setAddress: any;
}

const AddressSearch: React.FC<PopupProps> = ({show, onClose, address, setAddress}) => {

    const handleComplete = (data: any) => {
        const { zonecode, address } = data;

        setAddress({ zonecode, address });

        onClose();
    };

    if(!show) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px'}}>
                <DaumPostcode onComplete={handleComplete} />
                <div className={'w-full flex justify-center'}>
                    <button className={'w-[100px] h-[40px] rounded-[50px]'} onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default AddressSearch;
