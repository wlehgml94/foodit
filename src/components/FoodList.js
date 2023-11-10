import './food.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item }) {
  const { imgUrl, title, calorie, content, createdAt } = item;

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
    </div>
  );
}

function FoodList({ items }) {
  return (
  <ul>
    {items.map((item) => (
     <li><FoodListItem item={item} /></li>
    ))}
    
  </ul>
  );
}

export default FoodList;
