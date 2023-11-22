import { useState } from "react";
import axios from "axios";

function ShoppingList({ shoppingList }) {
  const [isTogglePurchased, setTogglePurchased] = useState(false);

  const togglePurchased = () => {
    setTogglePurchased(!isTogglePurchased);
  };

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
          <br />
          {shoppingList.quantity}
          <br />
          {shoppingList.unit}
          <button onClick={togglePurchased}>Buy</button>
        </>
      );
    }
  };

  return (
    <>
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
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td
            
                className={item.purchased ? "purchased" : ""}
              >
                {displayPurchased()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ShoppingList;
