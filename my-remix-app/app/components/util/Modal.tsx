function Modal({ children, onClose } : any) {
    // console.log(children)
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <dialog
          className="modal"
          open
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </dialog>
      </div>
    );
  }
  
  export default Modal;
  