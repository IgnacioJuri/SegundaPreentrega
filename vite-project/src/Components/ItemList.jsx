import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:'100%'}}>
      <h1>ItemList</h1>

      <ul style={{display:"grid", gridTemplateColumns: '1fr 1fr 1fr', gap:'5rem' }}>
        {items.map((item) => (
          <li style={{backgroundColor:"beige", width:300, borderRadius: 15, display:"flex", alignItems:"center", justifyContent:"center", padding:'2rem'}} key={item.id}>
            <Link to={`/item/${item.id}`}>
              <h3 style={{all:"unset"}}>{item.name}</h3>
              <p>${item.price}</p>
              <p>{item.category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;