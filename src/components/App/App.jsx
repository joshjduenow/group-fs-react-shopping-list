import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import axios from "axios";
import AddItem from "../AddItem/AddItem.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";

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
      <AddItem getShoppingList={getShoppingList}/>
      <h2>Shopping List</h2>
      <ShoppingList shoppingList={shoppingList}/>
    </div>
  );
}

export default App;
