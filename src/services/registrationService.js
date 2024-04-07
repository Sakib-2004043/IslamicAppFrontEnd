import axios from "axios";

import sharedData from './aa_sharedData';
const { baseURL } = sharedData;

class registrationTables {
  createUser(formData) {
    const url = `${baseURL}/api/registration`;
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      return axios.post(url, formData, config);
    } catch (error) {
      console.error('Error In Creating User: ', error);
      throw error;
    }
  }

  createJikir(userData) {
    const url = `${baseURL}/api/jikirTracker`;
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      return axios.post(url, userData, config);
    } catch (error) {
      console.error('Error In Finding User: ', error);
      throw error;
    }
  }

  findUser(userData) {
    const url = `${baseURL}/api/logIn`;
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      return axios.post(url, userData, config);
    } catch (error) {
      console.error('Error In Finding User: ', error);
      throw error;
    }
  }

  checkUser(userData) {
    const url = `${baseURL}/api/logIn`;
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      return axios.put(url, userData, config);
    } catch (error) {
      console.error('Error In Finding User: ', error);
      throw error;
    }
  }
}

export default new registrationTables();
