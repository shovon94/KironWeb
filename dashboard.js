// Logout function
function logout() {
  // Clear any stored user data in sessionStorage or localStorage
  sessionStorage.clear() // Use localStorage.clear() if using localStorage

  // Redirect to login page
  window.location.href = 'login.html'
}
