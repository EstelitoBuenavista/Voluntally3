  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams(new FormData(loginForm));
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
     location.href = './home.html';
    } else {
      errorMessage.textContent = data.message;
      errorMessage.style.display = 'block';
    }
  });