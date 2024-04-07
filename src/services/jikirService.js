import axios from "axios";
import sharedData from './aa_sharedData';
const { baseURL } = sharedData;

class JikirTables {
  getJikirs(userData) {
    const url = `${baseURL}/api/jikirTracker`; // Updated URL using baseURL
    const config = {
      userName: userData
    }
    try {
      return axios.put(url, config);
    } catch (error) {
      console.error('Error While Getting Jikir: ', error);
      throw error;
    }
  }

  update(jikirData){
    const url = `${baseURL}/api/jikirTracker`; // Updated URL using baseURL
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      return axios.patch(url, jikirData, config);
    } catch (error) {
      console.error('Error While Updating Jikir: ', error);
      throw error;
    }
  }
}

export default new JikirTables();
