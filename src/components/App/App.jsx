import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import axios from "axios";

function App() {
  let [shoppingList, setShoppingList] = useState([]);

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

  return (
    <div className="App">
      <Header />
      <main>
        <p>Under Construction...</p>
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
