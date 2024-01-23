import { useState } from "react";
import FoodList from './FoodList';
import { getFoods } from '../api';


function App() {
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a,b) => b[order] - a[order]);
  const handleNewestClick = () => {
    setOrder("createdAt");
  }
  const handlecaloClick = () => {
    setOrder("calorie");
  }
  const handleLoadClick = async () => {
    const { foods } = await getFoods();
    setItems(foods);
  };
  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handlecaloClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
