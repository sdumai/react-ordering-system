import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import classes from "../style/Counter.module.css";
import { useContext } from "react";
import CartText from "../store/CartText";
export default function Counter(props) {
  const { addItem, removeItem } = useContext(CartText);
  return (
    <div className={classes.counter}>
      {/* 如果数量小于 0，不显示减号 */}
      {props.meal.count && props.meal.count > 0 ? (
        <>
          <div className={classes.sub}>
            <FontAwesomeIcon
              className={classes.icon}
              onClick={() => removeItem(props.meal)}
              icon={faMinus}
            ></FontAwesomeIcon>
          </div>
          <span className={classes.amount}>{props.meal.count}</span>
        </>
      ) : null}
      <div className={classes.add}>
        <FontAwesomeIcon className={classes.icon} onClick={() => addItem(props.meal)} icon={faPlus}></FontAwesomeIcon>
      </div>
    </div>
  );
}
