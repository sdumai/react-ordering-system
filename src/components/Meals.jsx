import Meal from "./Meal";
import classes from "../style/Meals.module.css";
export function Meals(props) {
  return (
    <div className={classes.Meals}>
      {!props.isLoading ? (
        props.meals.map((item) => <Meal meal={item} key={item.id} cartDetails={props.cartDetails}></Meal>)
      ) : (
        <div className={classes.isLoading}>正在加载中...</div>
      )}
      {props.meals.length === 0 && props.isLoading === false ? (
        <div className={classes.isLoading}>抱歉没有找到您想要的商品</div>
      ) : null}
    </div>
  );
}
