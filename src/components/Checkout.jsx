import ReactDOM from "react-dom";
import classes from "../style/Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartText from "./../store/CartText";
const checkout = document.getElementById("checkout-root");

export default function Checkout(props) {
  const { clearItem } = useContext(CartText);
  return ReactDOM.createPortal(
    <div className={classes.checkout} onClick={clearItem}>
      <div className={classes.close}>
        <span>关闭</span>
        <FontAwesomeIcon onClick={props.closeCheckout} className={classes.icon} icon={faXmark}></FontAwesomeIcon>
      </div>
      <div className={classes.remind}>
        <span>支付成功，请返回...</span>
      </div>
    </div>,
    checkout
  );
}
