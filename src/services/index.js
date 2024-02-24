import axios from "axios";
const customAxios = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

export default async function Service(url) {
  const response = await customAxios.get(url);
  return response.data;
}
