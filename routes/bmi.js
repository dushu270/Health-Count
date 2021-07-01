const express = require("express");
const router = express.Router();

router.get("/bmi", function (req, res) {
  res.render("bmi", { bmi: "", type: "" });
});

router.get("/bmi/calculate", function (req, res) {
  res.redirect("/bmi");
});

router.post("/bmi/calculate", function (req, res) {
  req.session.weight = parseFloat(req.body.weight);
  req.session.height = parseFloat(req.body.height);
  req.session.bmi =
    req.session.weight / (req.session.height * req.session.height).toFixed(2);

  if (req.session.bmi < 18.5) {
    res.render("bmi", {
      bmi: `Your BMI is ${req.session.bmi.toFixed(2)}`,
      type: "Under Weight!",
    });
  } else if (req.session.bmi >= 18.5 && req.session.bmi <= 24.99) {
    res.render("bmi", {
      bmi: `Your BMI is ${req.session.bmi.toFixed(2)}`,
      type: "Normal!",
    });
  } else if (req.session.bmi >= 25 && req.session.bmi <= 29.99) {
    res.render("bmi", {
      bmi: `Your BMI is ${req.session.bmi.toFixed(2)}`,
      type: "Over Weight!",
    });
  } else if (req.session.bmi >= 30) {
    res.render("bmi", {
      bmi: `Your BMI is ${req.session.bmi.toFixed(2)}`,
      type: "Obese!",
    });
  }
});

module.exports = router;
