import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../users.json'), 'utf8')).users;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Serve login page
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

// Handle login POST
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const data = fs.readFileSync(path.join(__dirname, '../authentication.json'), 'utf8');
  console.log("authentication.json file successfully accessed.");
  const users = JSON.parse(data);

  const matchedUser = users.find(
    (user: { email: string; password: string }) =>
      user.email === email && user.password === password
  );

  if (matchedUser) {
    res.json({ success: true});
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/info.html'));
});

app.get('/authentication', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../authentication.json'), 'utf8');
  const users = JSON.parse(data);
  res.json(users); 
});

app.post('/saveUser', (req, res) => {
  const newUser=req.body;
  const filePath = path.join(__dirname, '../users.json');
  let data = { users: [] as any[] };
  const raw = fs.readFileSync(filePath, 'utf-8');
  data = JSON.parse(raw);
  data.users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
