import axios from "axios";

export default async function Service() {
  const response = await axios.get("https://fakestoreapi.com/users");
  return response.data;
}
