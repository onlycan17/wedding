// components/Modal.tsx
import React, {FC, ReactNode} from 'react';
import Image from "next/image";

interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({isOpen, handleClose, children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                width: '642px',
            }}>
                <div style={{width: '100%', textAlign: 'right'}}>
                    <Image src="/close.svg" alt="닫기" width={34} height={34} onClick={handleClose}/>
                </div>
                <div style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '30px 30px 0px 0px',
                }}>
                    {children}
                </div>
                <div style={{
                    width: '100%',
                    height: '112px',
                    backgroundColor: '#EFEFEF',
                    borderRadius: '0px 0px 30px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <button style={{
                        width: '320px',
                        height: '52px',
                        background: '#636363',
                        borderRadius: '26px',
                        fontSize: '14px',
                        color: '#FFFFFF',
                    }}
                            onClick={handleClose}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
