import React,{useState} from 'react';

import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  
  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  }

  return (
    <div className="App">
    <div className='App-header'>
     <h1>lista de compras v5</h1>
     <input style={{ fontSize: 24 }} type="text" onKeyPress={e => e.key === 'Enter' && addNewItem()} onChange={e => setNewItem(e.target.value)} value={newItem} />
    <button onClick={()=>addNewItem()} style={{ fontSize: 24 }}>Añadir</button>
    <ul>
     {items.map((item,key)=><li key={key}>{item}</li>)}
    </ul>
    </div>
    </div>
  );
}

export default App;
