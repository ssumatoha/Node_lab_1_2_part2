const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "Изучаем OpenCV 3",
    author: "Келер Адриан",
  },
  {
    id: 2,
    name: "Полный справочник по C++",
    author: "Герберт Шилдт",
  },
  {
    id: 3,
    name: "Глубокое обучение",
    author: "Бенджио Иошуа",
  },
];

app.get("/", (req, res) => res.send("Работает API!"));

app.get("/products/:id", (req, res) => {
  res.json(products.find(p => p.id === +req.params.id));
  });

app.get("/products", (req, res) => {
  const item = +req.query.item;
  const itemSize = +req.query.itemSize;
  
  if (item && itemSize) {
    const start = (item - 1) * itemSize;
    const end = start + itemSize;
    res.json(products.slice(start, end));
  } else {
    res.json(products);
  }
});

app.listen(port, () => console.log(`Прослушивается на порту ${port}!`));
