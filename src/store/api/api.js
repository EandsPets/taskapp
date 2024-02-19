const BASE_URL = 'http://192.168.8.191:8000/api';

export const login = async credentials => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const register = async userData => {
  try {
    const response = await fetch(`${BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getTasksApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}/task`);
    return response;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const createNewTaskApi = async data => {
  try {
    const response = await fetch(`${BASE_URL}/task`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    throw error.response.data.message;
  }
};
