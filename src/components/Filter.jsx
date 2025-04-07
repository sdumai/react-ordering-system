import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../style/Filter.module.css";
export default function Filter(props) {
  // const [isLoading, setIsLoading] = useState(false);
  // 防抖
  const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
      props.handleLoading(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...args);
        props.handleLoading(false);
      }, delay);
    };
  };

  function handleSearch(e) {
    const keyword = e.target.value.trim();
    props.filterItem(keyword);
  }
  return (
    <div className={classes.filter}>
      <FontAwesomeIcon className={classes.icon} icon={faSearch}></FontAwesomeIcon>
      <input onChange={debounce(handleSearch, 800)} type="text" placeholder="请输入关键字" />
    </div>
  );
}
