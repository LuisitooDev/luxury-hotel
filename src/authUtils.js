import * as jwtDecode from 'jwt-decode';

export const isTokenValid = (token) => {
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; 

    if (decodedToken.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    return false;
  }
};
