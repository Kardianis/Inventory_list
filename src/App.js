import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [newitems, setNewItems] = useState();
  const [newQuantity, setNewQuantity] = useState();
//Refs

  let itemName = useRef();
  let itemQuantity = useRef();

  useEffect(() =>{
    itemName.current.focus();
  },[] )

  function handleSubmit(event){
    event.preventDefault();
    if(itemName.current.value === "" || itemQuantity.current.value === ""){
      window.alert("Add item name and quantity")
    }else{
      setItems([...items, (item:newItem, quantity: newQuantity)])
    }
  }

  return (
    <div className="container">
      <h1 className="title text-center">Inventory List</h1>
      <form 
      className="d-flex" 
      style={{justyContent:"center"}} 
      onSubmit={handleSubmit}>
        <div className="form-group m-1">
          <input 
          type="text" 
          placeholder="Item name" 
          style={{border:"1px solid #7633f9"}}
          ref={itemName}
          />
        </div>
        <div className="form-group m-1">
          <input 
          type="text" 
          placeholder="Item quantity" 
          style={{border:"1px solid #7633f9"}}/>
          ref={itemQuantity}
        </div>
        <button className="btn btn-primary" type="submit">Add</button>
      </form>
      <ul className="container text-left" style={{width:420}}>
        <li className="d-flex space-between mb-1"
        style={{ borderBottom: "1px solid #333"}}>
        
          name quantity

          <div>
            <button className="btn btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">X</button>
          </div>  
        </li>
      </ul>
    </div>
  );
}

export default App;
