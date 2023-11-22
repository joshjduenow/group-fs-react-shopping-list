import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import axios from "axios";

function App() {
  let [shoppingList, setShoppingList] = useState([]);
  let [newShoppingItem, setNewShoppingItem] = useState("");
  let [newShoppingQuantity, setNewShoppingQuantity] = useState("");
  let [newItemUnit, setNewItemUnit] = useState("");

  useEffect(() => {
    getShoppingList();
  }, []); // <---- Stop Sign

  const getShoppingList = () => {
    axios
      .get("/shopping")
      .then((response) => {
        setShoppingList(response.data);
      })
      .catch((err) => {
        alert("error getting shopping list");
        console.log(err);
      });
  };

  const addShoppingItem = () => {
    axios
      .post("/shopping", {
        item: newShoppingItem,
        quantity: newShoppingQuantity,
        unit: newItemUnit,
      })
      .then((response) => {
        // clear inputs
        setNewShoppingItem("");
        setNewItemUnit("");
        setNewShoppingQuantity("");

        getShoppingList();
      })
      .catch((err) => {
        alert("Error Adding Item");
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h2>ADD AN ITEM</h2>
        <form onSubmit={addShoppingItem}>
          <input
            value={newShoppingItem}
            onChange={(e) => setNewShoppingItem(e.target.value)}
            placeholder="Shopping Item"
          />
          <input
            type="Number"
            value={newShoppingQuantity}
            onChange={(e) => setNewShoppingQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <input
            value={newItemUnit}
            onChange={(e) => setNewItemUnit(e.target.value)}
            placeholder="Unit"
          />
          <button>Add To Cart</button>
        </form>
      </main>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
