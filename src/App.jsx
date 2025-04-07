import { useState } from "react";
import { Meals } from "./components/Meals";
import CartText from "./store/CartText";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
// 食物数据
const MEALS_DATA = [
  {
    id: "1",
    title: "汉堡包",
    desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
    price: 12,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "双层吉士汉堡",
    desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
    price: 20,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "巨无霸",
    desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
    price: 24,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "麦辣鸡腿汉堡",
    desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
    price: 21,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "板烧鸡腿堡",
    desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
    price: 22,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "麦香鸡",
    desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
    price: 14,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "吉士汉堡包",
    desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
    price: 12,
    img: "/img/meals/7.png",
  },
];
function App() {
  // 食物数据
  const [mealsData, setMealsData] = useState(MEALS_DATA);
  // 购物车数据
  const [cartData, setCartData] = useState({
    meals: [],
    totalCount: 0,
    totalPrice: 0,
  });
  // 搜索过滤商品
  const filterItem = (keyword) => {
    const newMealsData = MEALS_DATA.filter((item) => item.title.includes(keyword));
    setMealsData(newMealsData);
  };
  // 接收加载状态
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = (value) => {
    setIsLoading(value);
  };
  // 添加商品
  const addItem = (item) => {
    const newCartData = { ...cartData };
    // 如果原购物车中无该商品
    if (newCartData.meals.indexOf(item) === -1) {
      newCartData.meals.push(item);
      item.count = 1;
    } else {
      item.count++;
    }
    newCartData.totalCount++;
    newCartData.totalPrice += item.price;
    setCartData(newCartData);
  };
  // 减少商品
  const removeItem = (item) => {
    const newCartData = { ...cartData };
    item.count--;
    if (item.count === 0) {
      newCartData.meals = newCartData.meals.filter((cur) => cur.id !== item.id);
    }
    newCartData.totalCount--;
    newCartData.totalPrice -= item.price;
    setCartData(newCartData);
  };
  // 清空购物车
  const clearItem = () => {
    const newCartData = { ...cartData };
    // 把食物数据的数量都置为 0
    newCartData.meals.forEach((item) => {
      item.count = 0;
    });
    // 清空购物车
    newCartData.meals = [];
    newCartData.totalCount = 0;
    newCartData.totalPrice = 0;
    setCartData(newCartData);
  };
  return (
    <div>
      <CartText.Provider
        value={{
          cartData,
          addItem,
          removeItem,
          clearItem,
          totalCount: cartData.totalCount,
          totalPrice: cartData.totalPrice,
        }}
      >
        <Filter filterItem={filterItem} handleLoading={handleLoading}></Filter>
        <Meals meals={mealsData} isLoading={isLoading}></Meals>
        <Cart></Cart>
      </CartText.Provider>
    </div>
  );
}

export default App;
