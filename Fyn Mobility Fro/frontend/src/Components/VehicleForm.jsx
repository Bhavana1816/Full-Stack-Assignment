import { useState, useEffect } from "react";
import { getVehicles, getComponents, addIssue } from "../api";

function IssueForm() {
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);

  const [vehicle, setVehicle] = useState("");
  const [selectedComponents, setSelected] = useState([]);
  const [labor_charge, setLabor] = useState("");

  // ✅ Define function FIRST
  const fetchData = async () => {
    try {
      const v = await getVehicles();
      const c = await getComponents();

      const vehiclesData = Array.isArray(v.data)
        ? v.data
        : v.data.results;

      const componentsData = Array.isArray(c.data)
        ? c.data
        : c.data.results;

      setVehicles(vehiclesData || []);
      setComponents(componentsData || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // ✅ Then call it
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      await addIssue({
        vehicle,
        components: selectedComponents,
        labor_charge,
      });
      alert("Issue Created!");
    } catch (err) {
      console.error(err);
      alert("Error creating issue");
    }
  };

  return (
    <div>
      <h3>Create Issue</h3>

      <select onChange={(e) => setVehicle(e.target.value)}>
        <option>Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.id} value={v.id}>
            {v.vehicle_number}
          </option>
        ))}
      </select>

      <br />

      <select
        multiple
        onChange={(e) =>
          setSelected(
            Array.from(e.target.selectedOptions, (o) => o.value)
          )
        }
      >
        {components.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <br />

      <input
        placeholder="Labor Charge"
        onChange={(e) => setLabor(e.target.value)}
      />

      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default IssueForm;