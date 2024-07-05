const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware for Basic Authentication
const basicAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader)
  
  if (authHeader) {
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    // console.log(base64Credentials)
    // console.log(credentials)
    // console.log(username + " " + password)
    const validUsername = 'praga';
    const validPassword = 'pass';
    
    if (username === validUsername && password === validPassword) {
      return next(); // Valid credentials, proceed to the next middleware or route handler
    }
  }
  
  res.status(401).send('Unauthorized'); // Invalid credentials
};

// Example protected route
app.get('/protected', basicAuth, (req, res) => {
  res.send('This is a protected route');
});

// Example public route
app.get('/public', (req, res) => {
  res.send('This is a public route');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
