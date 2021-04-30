import React from 'react'
import Modal from 'react-modal';
import { Heading, Text, BaseLayout,Button } from '@pancakeswap-libs/uikit'
import Unstake from './Unstake'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        maxWidth: "520px",
        border:0,
        borderRadius:"20px",
        position:"relative",
        overflow:"visible",
        padding:"0",
        width:"98%",
    }
};

const { forwardRef, useRef, useImperativeHandle } = React;

const ClaimModal = forwardRef((props, ref) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const childRef = useRef(null);
    useImperativeHandle(ref, () => ({
        openModal: () => {
            setIsOpen(true)
        }
    }));

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal
            // parentSelector={() => document.querySelector('.kokirinner ')}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Unstake  ref={childRef}/>
            <div className="claimmodelouter">
                <img src="images/mozart/mozart-head.png" alt="kokmodal" className="mozarrthead" />
                <div className="modalouter" style={{textAlign: "center" }}>
                    <h2 className="mb-1">Connected</h2>
                    <div>with <a href="/" className="type">Mainnet</a></div>
                    <div className="mt-4">
                        <h3 className="mb-1">Metamask Adress</h3>
                        <div style={{color: "#d92531" }}>0x0abd3E3502c15ec252f90F64341cbA74a24fba06</div>
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-1">Available Balance</h3>
                        <div style={{color: "#756d78" }}>0.0000</div>
                    </div>
                    <div className="gbg my-4">
                        <h3 className="mb-1">Information:</h3>
                        <div style={{color: "#756d78" }}>
                            During the first 4 weeks after opening, a claim fee of 30% will be charged. 
                        </div>
                    </div>
                    <Button style={{minWidth:"160px"}} onClick={() => childRef.current.openModal()}>Claim</Button>
                </div>
            </div>
            <div className="claimmodelouter claimairdrop">
                <h2>Airdrop Stage 2</h2>
                <h3>is coming soon</h3>
            </div>
        </Modal>
    )
})

export default ClaimModal
