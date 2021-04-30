import React from 'react'
import Modal from 'react-modal';
import { Heading, Text, BaseLayout,Button } from '@pancakeswap-libs/uikit'

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

const Unstake = forwardRef((props, ref) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
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
            <div className="claimmodelouter">
                <div className="modalouter" style={{textAlign: "center" ,marginTop:"0"}}>
                    <h2 className="mb-1 mt-0">Early Unstake</h2>
                    <div className="gbg my-4">
                        <h3 className="mb-1">Information:</h3>
                        <div style={{color: "#756d78" }}>
                            During the first 4 weeks after opening, a claim fee of 30% will be charged. 
                        </div>
                    </div>
                    <Button style={{minWidth:"160px"}}>Confirm Claim</Button>
                </div>
            </div>
        </Modal>
    )
})

export default Unstake
