import FoodList from './FoodList';
import morkItems from '../mock.json';
import { useState } from "react";


function App() {
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState(morkItems);
  const sortedItems = items.sort((a,b) => b[order] - a[order]);
  const handleNewestClick = () => {
    setOrder("createdAt");
  }
  const handlecaloClick = () => {
    setOrder("calorie");
  }
  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handlecaloClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
