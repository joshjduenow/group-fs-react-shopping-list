import { useState } from "react";
import axios from "axios";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

function ShoppingList({ shoppingList }, e) {
  e.target;
  const [isTogglePurchased, setTogglePurchased] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  //   const togglePurchased = (e) => {
  //     console.log(e.target);
  //     // if (shoppingList.find(true)) setTogglePurchased(!isTogglePurchased);
  //   };

  const displayPurchased = () => {
    if (isTogglePurchased) {
      return (
        <>
          <p>Purchased</p>
        </>
      );
    } else {
      return (
        <>
          {shoppingList.name}

          {shoppingList.quantity}

          {shoppingList.unit}
          <button onClick={togglePurchased(e)}>Buy</button>
        </>
      );
    }
  };

  return (
    <>
      <div>
        <button>Reset</button>
        <button>Clear Cart</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => (
            <ShoppingItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ShoppingList;
