import axios from "axios";

import sharedData from './aa_sharedData';
const {baseURL} = sharedData;

class salatTables{
  createSalat(userData){
    const url = `${baseURL}/api/salatSaver`; // Using template literals
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      return axios.post(url, userData, config);
    } 
    catch (error) {
      console.error('Error In Initiating Salat Table: ', error);
      throw error;
    }
  }

  getSalat(userData){
    const url = `${baseURL}/api/salatSaver`; // Using template literals
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      return axios.put(url, userData, config);
    } 
    catch (error) {
      console.error('Error In Getting Salat Data: ', error);
      throw error;
    }
  }

  updateSalat(userData){
    const url = `${baseURL}/api/salatSaver`;
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      return axios.patch(url, userData, config);
    } 
    catch (error) {
      console.error('Error In Getting Salat Data: ', error);
      throw error;
    }
  }
}

export default new salatTables();
