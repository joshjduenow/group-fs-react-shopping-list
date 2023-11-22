import { useState } from "react";
import axios from "axios";

function ShoppingList({ shoppingList },e) {
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
        <button onClick={togglePurchased(e)}>Reset</button>
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
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td className={item.purchased ? "purchased" : ""}>
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
