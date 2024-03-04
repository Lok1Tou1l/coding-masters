import axios, { AxiosResponse } from 'axios';
import getUserToken, getUserUuid from './common'; 
async function get_back_info(url: string, authToken: string): Promise<any> {
    try {
        const user_uuid: string|null = getUserToken();
        const token: string|null = getUserUuid();
        const url: string = `https://progres.mesrs.dz/api/infos/bac/${user_uuid}`;
      const response: AxiosResponse<any> = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
        if (error.response) {
          // If there is an error response from the server, return the response data and status code
          return { data: error.response.data, status: error.response.status };
        } else {
          // If there is no response from the server, handle the error as needed
          console.error('Error:', error);
          // You can throw an error here or return a default response
          throw new Error('Failed to fetch data');
        }
    }
  }