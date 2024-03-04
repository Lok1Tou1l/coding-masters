function getUserToken(): any | null {
    try {
      const dataString = localStorage.getItem('auth_token');
      if (dataString) {
        const data = JSON.parse(dataString);
        return data;
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error fetching data from local storage:', error);
      return null;
    }
  };

  function getUserUuid(): any | null {
    try {
      const dataString = localStorage.getItem('user_uuid');
      if (dataString) {
        const data = JSON.parse(dataString);
        return data;
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error fetching data from local storage:', error);
      return null;
    }
  }
