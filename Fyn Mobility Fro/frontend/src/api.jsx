import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Components
export const addComponent = (data) => API.post("components/", data);
export const getComponents = () => API.get("components/");

// Vehicles
export const addVehicle = (data) => API.post("vehicles/", data);
export const getVehicles = () => API.get("vehicles/");

// Issues
export const addIssue = (data) => API.post("issues/", data);
export const getIssues = () => API.get("issues/");