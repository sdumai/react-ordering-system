import Backdrop from "./Backdrop";
import classes from "../style/CartDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartText from "../store/CartText";
import { Meals } from "./Meals";
export default function CartDetails(props) {
  const { cartData } = useContext(CartText);
  return (
    <Backdrop>
      {/* 阻止冒泡事件 */}
      <div className={classes.cartDetails} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <div className={classes.title}>购物车详情</div>
          <div className={classes.clear} onClick={props.showClear}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            <span>清空购物车</span>
          </div>
        </div>
        <div className={classes.content}>
          {cartData.meals.length !== 0 ? (
            <Meals meals={cartData.meals} cartDetails></Meals>
          ) : (
            <div className={classes.noMeal}>暂未选择任何商品</div>
          )}
        </div>
      </div>
    </Backdrop>
  );
}
