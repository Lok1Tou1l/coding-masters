// services/authService.js

import axios from 'axios';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post('https://your-api-url.com/login', {
      username,
      password,
    });
    if(response.status === 200){
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user_uuid", response.data.uuid)
    }
    else{
      throw new Error('Login failed');
    }
      
  } catch (error) {
    throw new Error('Login failed');
  }
};
