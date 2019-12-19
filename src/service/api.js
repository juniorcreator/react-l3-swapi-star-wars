import axios from "axios";
axios.defaults.baseURL = "https://swapi.co/api/";

export async function getUsers() {
  let res = await axios.get("people/");
  return res.data.results;
}
