import axios from 'axios';
export async function get_bac_info() {
    try {
      const user_uuid = localStorage.getItem('user_uuid');
      if user_uuid === null{
        return null;
      }
      const response = await axios.get("");
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Error fetching data');
    }
  }