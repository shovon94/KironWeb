function login() {
  // Get the username and password values from the input fields
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  const messageElement = document.getElementById('message')

  // Static credentials
  const validUsername = 'admin'
  const validPassword = '1234'

  // Check credentials
  if (username === validUsername && password === validPassword) {
    // Successful login
    messageElement.textContent = 'Login successful!'
    messageElement.style.color = 'green'
    // Here you can redirect to another page or perform further actions
    // Redirect to dashboard page
    setTimeout(() => {
      window.location.href = 'dashboard.html'
    }, 1000) // Small delay to show success message
  } else {
    // Failed login
    messageElement.textContent =
      'Invalid username or password. Please try again.'
    messageElement.style.color = 'red'
  }
}

// Add event listeners for the Enter key
document
  .getElementById('username')
  .addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      login() // Call the login function when Enter is pressed
    }
  })

document
  .getElementById('password')
  .addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      login() // Call the login function when Enter is pressed
    }
  })
