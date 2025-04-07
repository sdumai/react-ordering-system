import classes from "../style/Cart.module.css";
import bagImg from "../assets/bag.png";
import { useContext, useState } from "react";
import CartText from "../store/CartText";
import CartDetails from "./CartDetails";
import Checkout from "./Checkout";
import ClearCart from "./ClearCart";
export default function Cart() {
  const { totalCount, totalPrice } = useContext(CartText);
  // 显示购物车详情
  const [isShowCartDetail, setIsShowCartDetail] = useState(false);
  const toggleIsShowDetail = () => {
    setIsShowCartDetail((preValue) => !preValue);
  };
  // 显示结账页面
  const [isShowCheckout, setIsShowCheckout] = useState(false);
  const showCheckout = () => {
    if (totalCount === 0) return;
    setIsShowCheckout(true);
  };
  const closeCheckout = () => {
    setIsShowCheckout(false);
  };
  // 显示清空按钮
  const [isShowClear, setIsShowClear] = useState(false);
  const showClear = () => {
    if (totalCount === 0) return;
    setIsShowClear(true);
  };
  const hideClear = () => {
    setIsShowClear(false);
  };
  return (
    <div className={classes.cart} onClick={toggleIsShowDetail}>
      {isShowClear ? <ClearCart hideClear={hideClear}></ClearCart> : null}
      {isShowCheckout ? <Checkout closeCheckout={closeCheckout}></Checkout> : null}
      {isShowCartDetail ? <CartDetails showClear={showClear}></CartDetails> : null}
      <div className={classes.bag}>
        <img src={bagImg} alt="购物袋" />
        {totalCount === 0 ? null : <div className={classes.count}>{totalCount}</div>}
      </div>
      {totalPrice === 0 ? <span style={{ color: "#aaa" }}>暂未选购商品</span> : <span>￥{totalPrice}</span>}
      <div onClick={showCheckout} className={`${classes.btn} ${totalPrice !== 0 ? "" : classes.noMeal}`}>
        去结算
      </div>
    </div>
  );
}
