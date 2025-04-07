import ReactDOM from "react-dom";
import classes from "../style/Backdrop.module.css";
const backdropRoot = document.getElementById("backdrop-root");

export default function Backdrop(props) {
  return ReactDOM.createPortal(
    // 阻止冒泡
    <div
      onClick={props.clear ? (e) => e.stopPropagation() : () => {}}
      className={`${classes.backdrop} ${props.clear ? classes.clear : ""}`}
    >
      {props.children}
    </div>,
    backdropRoot
  );
}
