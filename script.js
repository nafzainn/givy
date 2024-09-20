function submitLoginForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Data dikirim!',
        text: 'Terima kasih, data Anda telah dikirim ke server.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: data.message,
      });
    }
  })
  .catch(error => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Terjadi kesalahan!',
    });
  });

  return false; // Mencegah form untuk reload page
}
