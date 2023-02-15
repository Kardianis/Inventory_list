import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

const [items,setItems] = useState([]);
const [newItem, setNewItem] = useState("");
const [newQuantity, setNewQuantity] = useState("");
const [currentIndex, setCurrentIndex] = useState(-1);

// Refs

let itemName = useRef();
let itemQuantity =useRef();
useEffect(()=>{
  itemName.current.focus();
}, [])

function handleItemChange(event){
  setNewItem(event.target.value);
}

function handleQuantityChange(event){
  setNewQuantity(event.target.value);
}

function handleSubmit(event){
  event.preventDefault();
  if(currentIndex >=0){
    const updateItem = [...items];
    updateItem[currentIndex] = { item: newItem, quantity: newQuantity }
    setItems(updateItem);
    setCurrentIndex(-1);
  }else{
    if(itemName.current.value === "" || itemQuantity.current.value === ""){
      window.alert("Add item Name and Quantity");
    }else{
      setItems([...items, { item: newItem, quantity: newQuantity }]);
    }
  }
  setNewItem("");
  setNewQuantity("");
}

  return (
  <div className="container">
    <h1 className="title text-center">Inventory List</h1>
    <form 
    className="d-flex" 
    style={{ justifyContent:"center" }} 
    onSubmit={handleSubmit}>
      <div className="form-group m-1">
        <input 
        placeholder="Item name" 
        style={{border:"1px solid #67339"}}
        ref={itemName}
        value={newItem}
        onChange={handleItemChange}
        />
      </div>
      <div className="form-group m-1">
        <input 
        placeholder="Item quantity" 
        style={{border:"1px solid #67339"}}
        ref={itemQuantity}
        value={newQuantity}
        onChange={handleQuantityChange}
        />
      </div>      
        <button className="btn btn-primary" type="submit">Save</button>
    </form>
    <ul className="container text-left" 
      style={{ width:420 }}>
        
        {items.map((item,index) => (
        <li 
        key={index}
        className="d-flex space-between mb-1" 
        style={{borderBottom:"1px solid #333"}}>
          {item.item} ({item.quantity})
          <div>
            <button className="btn btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">X</button>
          </div>
        </li>
        ))}
     
      </ul>
  </div>
  );
}

export default App;
