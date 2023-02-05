import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title text-center">Inventory List</h1>
      <form className="d-flex" style={{justyContent:"center"}}>
        <div className="form-group m-1">
          <input type="text" placeholder="Item name" style={{border:"1px solid #7633f9"}}/>
        </div>
        <div className="form-group m-1">
          <input type="text" placeholder="Item quantity" style={{border:"1px solid #7633f9"}}/>
        </div>
        <button className="btn btn-primary">Add</button>
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
