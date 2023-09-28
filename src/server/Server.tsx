import axios from 'axios';
import { API_URL } from "../config";

class Server {
  static async getPokemonList() {
    try {
      const response = await axios.get(API_URL);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default Server;