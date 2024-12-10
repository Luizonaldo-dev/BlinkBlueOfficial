document.getElementById('login-eye').addEventListener('click', function() {
    const passwordField = document.getElementById('login-pass');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  });
  