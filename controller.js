import { Person } from "./models/person.js";

// Dynamic response for individual user
// export const userNameController = (req, res) => {
//   let username = req.params.username;
//   res.send(`Welcome ${username}`);
// };

// // Dynamic routing response for search
// export const userSearch = (req, res) => {
//   let keyword = req.query.keyword;
//   res.send(`Searching for ${keyword}`);
// };

export const userLogin = (req, res) => {
  res.send("This is a Login route");
};

export const userSignup = (req, res) => {
  res.send("This is a Signup route");
};

export const userGreet = (req, res) => {
  res.send("Hello Express");
};

// Removing user from the database
export const removeUser = async (req, res) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id);
  res.send("Person deleted successfully");
};
