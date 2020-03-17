import axios from 'axios';

export default class Contacts {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8000/api/';
  }

  getAll() {
    return axios.get('contacts');
  }

  add(contact) {
    return axios.post('contacts', contact);
  }
}

export const contacts = new Contacts();
