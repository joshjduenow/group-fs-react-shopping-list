import { useState } from "react";

function ShoppingItem({ item }) {
  return (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.unit}</td>
    </tr>
  );
}

export default ShoppingItem;
