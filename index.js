const http = require('http');

const port = process.env.PORT || 3000;

const budgets = [
    {
        "Id": "1",
        "Title": "Our Budget",
        "MonthlyGross": 1000
    }
]

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  res.end(JSON.stringify(budgets));
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}/`);
});