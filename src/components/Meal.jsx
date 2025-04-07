import classes from "../style/Meal.module.css";
import Counter from "./Counter";
export default function Meal(props) {
  return (
    <div className={classes.meal}>
      <div className={classes.mealImg}>
        <img src={process.env.PUBLIC_URL + props.meal.img} alt="" />
      </div>
      <div className={classes.mealInfo}>
        <h1 className={classes.title}>{props.meal.title}</h1>
        {props.cartDetails ? null : <p className={classes.desc}>{props.meal.desc}</p>}
        <div className={classes.mealPrice}>
          <p className={classes.price}>{props.meal.price}</p>
          <Counter meal={props.meal} />
        </div>
      </div>
    </div>
  );
}
