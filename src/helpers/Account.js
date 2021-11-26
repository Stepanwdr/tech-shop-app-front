class Account {
  static getToken = () => localStorage.getItem('token')

  static setToken = (token) => localStorage.setItem('token', token)

  static getRole() {
    return localStorage.getItem("role");
  }
  static setRole(role) {
    localStorage.setItem("role", role);
  }
  static delete = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    localStorage.removeItem('role');
  }
  static get = () => {
    try {
      return JSON.parse(localStorage.getItem('account')) || {};
    } catch (e) {
      return {};
    }
  }

  static set = (account) => {
    localStorage.setItem('account', JSON.stringify(account));
  }
}
export default Account;
