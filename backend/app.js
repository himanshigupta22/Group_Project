const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

// create
app.post("/create", async (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
      });

      let token = jwt.sign({ email }, "secretKey");
      res.cookie("token", token);

      res.redirect("/");
    });
  });
});

// logout

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

// login

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) res.send("something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email }, "secretKey");
      res.cookie("token", token);
      res.send("You are logged in");
    } else res.send("something went wrong");
  });
});

app.listen(3000);
