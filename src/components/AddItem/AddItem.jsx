import { useState } from "react";
import axios from "axios";

function AddItem( {getShoppingList} ) {
  let [newShoppingItem, setNewShoppingItem] = useState("");
  let [newShoppingQuantity, setNewShoppingQuantity] = useState("");
  let [newItemUnit, setNewItemUnit] = useState("");

  const addShoppingItem = (e) => {
    e.preventDefault();
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
    <main>
      <h2>Add an Item</h2>
      <form onSubmit={addShoppingItem}>
        <input
          value={newShoppingItem}
          onChange={(e) => setNewShoppingItem(e.target.value)}
          placeholder="Shopping Item"
        />
        <br />
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
  );
}
export default AddItem;
