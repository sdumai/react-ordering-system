import Backdrop from "./Backdrop";
import classes from "../style/ClearCart.module.css";
import { useContext } from "react";
import CartText from "../store/CartText";
export default function ClearCart(props) {
  const { clearItem } = useContext(CartText);
  const clearCart = () => {
    clearItem();
    props.hideClear();
  };
  return (
    <Backdrop clear={true}>
      <div className={classes.container}>
        <div className={classes.title}>确认清空购物车吗？</div>
        <div className={classes.btn}>
          <button onClick={props.hideClear} className={`${classes.cancel} ${classes.action}`}>
            取消
          </button>
          <button onClick={clearCart} className={`${classes.confirm} ${classes.action}`}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
}
