import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.scss";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay: React.FC<{ children: any }> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<{ children: any }> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
