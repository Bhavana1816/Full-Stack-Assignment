import { useEffect, useState } from "react";
import { getVehicles, getComponents, addIssue } from "../api";

function IssueForm() {
  const [vehicles, setVehicles] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const v = await getVehicles();
        const c = await getComponents();

        setVehicles(Array.isArray(v.data) ? v.data : []);
        setComponents(Array.isArray(c.data) ? c.data : []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return <h3>Issue Form Loaded ✅</h3>;
}

export default IssueForm;