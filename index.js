import express, { urlencoded } from "express";
import { removeUser, userGreet } from "./controller.js";
import { name } from "ejs";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { connectDB } from "./config/db.js";
// import { Person } from "./models/person.js";
// import multer from "multer";
// import { storage } from "./config/multer.js";
// import router from "./route.js";

// Declare App using the Express
let app = express();

// Port
let PORT = 3000;

// Declare the multer package
// let upload = multer({ storage });

// Use middleware for the req and res objects in your server to return a json format
app.use(express.json());

// middleware for formData
// app.use(express.urlencoded({ extended: true }));

// using multer package for Form Data
// app.use(upload.single("image"));

// Connecting MongoDB through moongoose
// await connectDB();

// Define simple route
app.get("/", userGreet);

// Using the Get request(users fetching data from the server)

// // About Route
// app.get("/about", (req, res) => {
//   res.send("about route");
// });

// // Contact Route
// app.get("/contact", (req, res) => {
//   res.send("contact route");
// });

// // Dynamic Routing
// app.get("/user/:username", userNameController);

// // Query string Dynamically
// app.get("/search", userSearch);

// User Loging Route using a controllers file
// app.get("/user/login", userLogin);
// app.get("/user/signup", userSignup);

// Using the Router express method from a differnt file
// app.use("/user", router);

// // Using the Post request(users adding data to the server)
// app.post("/users", (req, res) => {
//   const { name, email } = req.body;
//   res.json({
//     message: `User ${name} with email ${email} was created successfully`,
//   });
// });

// // Using Put request(users updating existing data to the Server)
// app.put("/users/:id", (req, res) => {
//   let userId = req.params.id;
//   const { name, email } = req.body;
//   res.json({
//     message: `User ${userId} updated to ${name}, ${email}`,
//   });
// });

// // Delete request (used to delete a resource from a server)
// app.delete("/users/:id", (req, res) => {
//   let userId = req.params.id;
//   res.json({
//     message: `User with ID ${userId} successfully deleted`,
//   });
// });

// app.get("/things/:name/:id", (req, res) => {
//   const { name, id } = req.params;
//   res.json({
//     id,
//     name,
//   });
// });

// // Using formData
// app.post("/form", (req, res) => {
//   console.log(req.body);
//   console.log(req.file);

//   res.send("Form submitted successfully");
// });

// Perfoming CRUD operations
// Adding user
// app.post("/person", async (req, res) => {
//   try {
//     const { name, age, email } = req.body;
//     let newPerson = new Person({
//       name,
//       age,
//       email,
//     });
//     await newPerson.save();
//     console.log(newPerson);

//     res.send("Person added successfully");
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// Updating Data
// app.put("/person", async (req, res) => {
//   const { id } = req.body;
//   const personData = await Person.findById(id);
//   personData.age = 75;
//   await personData.save();
//   console.log(personData);
//   res.send("Person updated successfully");
// });

// Deleting user from database
// app.delete("/person/:id", removeUser);

// Using JWT tokens for user Authorization
// const users = [];

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   users.push({
//     username,
//     password: hashedPassword,
//   });
//   res.send("User registered");
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username);
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.send("Not Authorized");
//   }
//   const token = jwt.sign({ username }, "test#secret");
//   res.json({ token });
// });

// Verifying the user token using JWT
// app.get("/dashboard", (req, res) => {
//   try {
//     const token = req.header("Authorization");
//     const decodedToken = jwt.verify(token, "test#secret");
//     if (decodedToken.username) {
//       res.send(`Welcome ${decodedToken.username}`);
//     }
//   } catch (error) {
//     res.status(401).json({ error });
//   }
// });

// Creating API with respones principles (status codes)
// Getting all products
app.get("/api/products", (req, res) => {
  let products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 800,
    },
  ];
  res.status(200).json({ products });
});

// Geting a single product
app.get("/api/products/:id", (req, res) => {
  let products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 800,
    },
    {
      name: "LG Fridge",
      price: 1500,
      id: 1751613649610,
    },
  ];

  const product = products.find((p) => p.id === Number(req.params.id));

  // Check if the product is not availabe
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

// Creating a Product
app.post("/api/products", (req, res) => {
  let newProduct = req.body;
  newProduct.id = Date.now();
  res.status(201).json(newProduct);
});

// Where the app will listen
app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});
