export const TOKEN_EXPIRE = "@egresso-expire";
export const TOKEN_KEY = "@egresso-token";

const tokenExpire = () => {
  return localStorage.getItem(TOKEN_EXPIRE) <  Date.now();
}

export const isAuthenticated = () => {
  if( tokenExpire() ){
    return localStorage.getItem(TOKEN_KEY) !== null
  }
  logout();
  return false;
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_EXPIRE, Date.now().setHours( Date.now().getHours() + 1));
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRE);
  window.location.reload();
};