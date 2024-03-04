import axios, { AxiosResponse } from 'axios';

async function fetchData(url: string, authToken: string): Promise<{ data: any, status: number }> {
  try {
    const response: AxiosResponse<any> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Return the response data and status code if the request is successful
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