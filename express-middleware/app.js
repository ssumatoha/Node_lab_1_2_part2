const express = require("express");
const app = express();
const port = 3000;

function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
  next();
  } else {
  res.status(401);
  res.send('Не разрешено');
  }
  }

app.get("/", (req, res) => res.send("Прикладная информатика"));

app.get("/users", isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: "Eldar",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Молоко",
    },
    {
      id: 2,
      name: "Хлеб",
    },
  ]);
});

app.listen(port, () => console.log(`Приложение прослушивается на порту ${port}!`));
