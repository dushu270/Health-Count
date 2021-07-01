const express = require("express");
const router = express.Router();

const foodcalories = {
  Butter: 7.57,
  "Butter milk": 0.53,
  Cheese: 3.61,
  "Coffee cream": 1.91,
  "Cream substitute": 1.74,
  "Cream topping": 2.57,
  "Cultured sour cream": 2.03,
  "Dessert topping": 2.91,
  "Dried whey": 3.46,
  "Dulce De Leche": 3.15,
  Egg: 1.64,
  "Egg mix": 5.55,
  "Egg nog": 0.88,
  "Fluid Whey": 0.26,
  "Half And Half Cream": 1.23,
  "Heavy Whipping Cream": 3.4,
  "Ice Cream": 2.76,
  "Instant Breakfast Chocolate Powder": 3.56,
  Kefir: 0.52,
  Milk: 0.5,
  Milkshake: 1.16,
  "Nutritional Supplement For People With Diabetes": 0.88,
  "Protein Supplement": 4.04,
  "Scrambled Eggs": 1.31,
  "Sour Cream": 2.1,
  "Sour Dressing": 1.78,
  "Whipped Cream": 2.92,
  "Whipped Topping": 2.1,
  Yogurt: 0.91,
  Chicken: 2.2,
  "Crispy Duck": 2.69,
  Dove: 2.13,
  "Duck Breast": 1.32,
  "Duck Confit": 3.37,
  "Duck Liver": 1.36,
  "Duck Meat": 1.73,
  Emu: 1.59,
  Goose: 2.72,
  "Guinea Hen": 1.34,
  Ostrich: 1.53,
  "Peking Duck": 2.77,
  Pheasant: 2.39,
  "Roast Duck": 2.39,
  Turkey: 2.0,
  Antelope: 1.14,
  Bacon: 4.1,
  Beef: 2.0,
  Pork: 2.2,
  Rabbit: 1.36,
  Anchovy: 1.31,
  "Atlantic Salmon": 2.08,
  Crab: 0.87,
  Octopus: 0.82,
  Goat: 1.43,
  sausage: 3.4,
  Walnuts: 6.04,
  Almonds: 5.92,
  Cashew: 5.72,
  Coconut: 3.54,
  "Coconut Water": 0.19,
  Chestnuts: 2.04,
  "Ginkgo Nuts": 1.82,
  Hazelnuts: 6.34,
  "Mixed Nuts": 6.07,
  "Macadamia Nuts": 7.18,
  Pecans: 6.91,
  "Pine Nuts": 6.29,
  "Pistachio Nuts": 5.6,
  Bread: 2.7,
  Waffles: 2.83,
  Barley: 3.5,
  "Brown Rice (cooked)": 1.11,
  "White Rice (cooked)": 1.3,
  "Wheat Flour": 3.63,
  Pasta: 1.5,
  Oats: 3.89,
  Millet: 3.78,
  "Egg Noodles": 3.83,
  "Flat Noodles": 5.21,
  Macaroni: 3.67,
  "Corn Flour": 3.64,
  Sauce: 0.68,
  Soup: 0.59,
  Dip: 1.29,
  "Dry Vegetable Soup": 4.46,
  Abiyuch: 0.69,
  Acerola: 0.32,
  Apples: 0.58,
  Apricots: 0.49,
  Avocados: 1.49,
  Bananas: 0.89,
  Blackberries: 0.43,
  Blueberries: 0.62,
  Cherries: 0.56,
  "Custard-apple": 1.01,
  Dates: 2.8,
  "Fruit Salad": 0.4,
  Grapes: 0.64,
  Guavas: 0.68,
  Jackfruit: 0.94,
  Kiwifruit: 0.62,
  Lemon: 0.29,
  Litchis: 0.66,
  Mango: 0.6,
  Olives: 1.14,
  Oranges: 0.63,
  Papayas: 0.43,
  "Passion-fruit": 0.97,
  Peaches: 0.39,
  Pineapples: 0.5,
  Plums: 0.48,
  Pomegranates: 0.83,
  Raspberries: 0.52,
  Sapote: 1.24,
  Strawberries: 0.34,
  Tangerines: 0.53,
  Watermelon: 0.3,
  Beer: 0.43,
  Drinks: 0.41,
  Coffee: 0.01,
  Lemonade: 0.48,
  Liqueur: 3.24,
  Tequila: 1.1,
  Whiskey: 2.61,
  Vodka: 2.63,
  Wine: 0.83,
  Okara: 0.76,
  Soybeans: 1.47,
  Peas: 0.82,
  "Dark Chocolate": 5.43,
  Candy: 3.7,
  Halavah: 4.69,
  Jams: 2.5,
  Sugars: 3.82,
  Cardamom: 3.11,
  Chili: 3.08,
  Cinnamon: 2.47,
  Coriander: 2.88,
  "Garlic Powder": 3.31,
  Paprika: 2.82,
  Pepper: 2.88,
  "Vanilla Extract": 2.88,
  "Alfalfa Seeds": 0.23,
  Artichokes: 0.43,
  Asparagus: 0.19,
  "Balsam-pear": 0.32,
  "Beet Root": 0.43,
  "Bitter Gourd": 0.32,
  Broccoli: 0.28,
  Cabbage: 0.22,
  "Sprouts (soaked)": 0.29,
  Carrots: 0.37,
  Cauliflower: 0.25,
  Corn: 0.9,
  Cucumber: 0.14,
  "Drumstick Pods": 0.36,
  Brinjal: 0.25,
  "Ginger Root": 0.8,
  Lettuce: 0.15,
  Mushrooms: 0.29,
  Okra: 0.32,
  Onions: 0.35,
  Potatoes: 0.74,
  Pumpkin: 0.21,
  Radishes: 0.17,
  Spinach: 0.23,
  Tomatoes: 0.18,
  Squash: 0.3,
  Shallots: 0.72,
};

router.get("/calories", function (req, res) {
  if (!req.session.total) {
    req.session.total = 0;
  }
  if (!req.session.count) {
    req.session.count = 0;
  }
  if (!req.session.addeditems) {
    req.session.addeditems = {};
  }
  res.render("calories", {
    msg: `Added items count is ${req.session.count} `,
    caloriesum: `${parseFloat(req.session.total).toFixed(2)} calories!`,
    itemsdata: req.session.addeditems,
    food: foodcalories,
  });
});

router.post("/calories", function (req, res) {
  let present = 0;
  for (let item in foodcalories) {
    if (item === req.body.item) {
      req.session.total += foodcalories[req.body.item] * req.body.qty;

      break;
    }
  }
  for (let x in req.session.addeditems) {
    if (x === req.body.item) {
      req.session.addeditems[x] += Number(req.body.qty);
      present = 1;
      break;
    }
  }
  if (present === 0) {
    req.session.addeditems[req.body.item] = Number(req.body.qty);
  }
  req.session.count = Object.keys(req.session.addeditems).length;

  res.render("calories", {
    msg: `Added items count is ${req.session.count} `,
    caloriesum: `${parseFloat(req.session.total).toFixed(2)} calories!`,
    itemsdata: req.session.addeditems,
    food: foodcalories,
  });
});

router.get("/calories/clearitems", function (req, res) {
  if (Object.keys(req.session.addeditems).length === 0) {
    res.render("calories", {
      msg: "No items are added to clear.",
      caloriesum: "",
      itemsdata: req.session.addeditems,
      food: foodcalories,
    });
  } else {
    req.session.addeditems = {};
    req.session.total = 0;
    req.session.count = 0;
    res.render("calories", {
      msg: `Added items count is ${req.session.count} `,
      caloriesum: "",
      itemsdata: req.session.addeditems,
      food: foodcalories,
    });
  }
});

router.get("/calories/modifyitem", function (req, res) {
  if (req.session.count > 0) {
    res.render("modify", {
      msg: "",
      caloriesum: "",
      itemsdata: "",
      tomodifyitemsdata: req.session.addeditems,
    });
  } else if (req.session.count === 0) {
    res.render("modify", {
      msg: "No item to update or Delete",
      caloriesum: "",
      itemsdata: "",
      tomodifyitemsdata: req.session.addeditems,
    });
  }
});

router.post("/calories/modifyitem/update", function (req, res) {
  for (let item in foodcalories) {
    if (item === req.body.moditem) {
      req.session.total -=
        foodcalories[req.body.moditem] *
        req.session.addeditems[req.body.moditem];

      break;
    }
  }
  for (let x in req.session.addeditems) {
    if (x === req.body.moditem) {
      req.session.addeditems[x] = Number(req.body.modqty);
      break;
    }
  }

  for (let item in foodcalories) {
    if (item === req.body.moditem) {
      req.session.total += foodcalories[req.body.moditem] * req.body.modqty;

      break;
    }
  }

  res.render("modify", {
    msg: "Item updated",
    tomodifyitemsdata: req.session.addeditems,
  });
});

router.post("/calories/modifyitem/delete", function (req, res) {
  let item = req.body.moditem;
  req.session.total -=
    foodcalories[req.body.moditem] * req.session.addeditems[req.body.moditem];
  delete req.session.addeditems[item];
  req.session.count -= 1;

  res.render("modify", {
    msg: "Item deleted",
    tomodifyitemsdata: req.session.addeditems,
  });
});

router.get("/calories/modifyitem/update", function (req, res) {
  if (req.session.count > 0) {
    res.render("modify", {
      msg: "",
      tomodifyitemsdata: req.session.addeditems,
    });
  } else if (req.session.count === 0) {
    res.render("modify", {
      msg: "No items to update or Delete",
      tomodifyitemsdata: req.session.addeditems,
    });
  }
});

router.get("/calories/modifyitem/delete", function (req, res) {
  if (req.session.count > 0) {
    res.render("modify", {
      msg: "",
      tomodifyitemsdata: req.session.addeditems,
    });
  } else if (req.session.count === 0) {
    res.render("modify", {
      msg: "No items to delete",
      tomodifyitemsdata: req.session.addeditems,
    });
  }
});

module.exports = router;
