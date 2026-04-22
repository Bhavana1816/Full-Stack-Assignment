import { useState } from "react";
import { addComponent } from "../api";

function ComponentForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

 const handleSubmit = async () => {
  try {
    await addComponent({
      name,
      price: parseFloat(price),
    });

    alert("Component Added!");
  } catch (err) {
    console.error("FULL ERROR:", err);
    console.error("RESPONSE:", err.response);
    alert("Error");
  }
};

  return (
    <div>
      <h2>Add Component</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ComponentForm;