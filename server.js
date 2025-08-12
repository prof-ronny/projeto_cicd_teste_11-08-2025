import express from 'express';

var  app = express();
app.get('/', (req, res) => {
  res.send('<H1>Hello World!</H1>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
export default app;