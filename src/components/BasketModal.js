import React from "react";
import Modal from 'react-modal'

const BasketModal = () =>{
    const [modalIsOpen, setModalIsOpen] = React.useState(true);



    return(
        <>
        
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div>
            <input type="text"/>
            <input type="text"/>
            </div>

        <button onClick={()=> setModalIsOpen(false)}>Modal Open</button>
      </Modal>
      </>
    )
}

export default BasketModal;