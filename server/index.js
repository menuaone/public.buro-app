const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.listen(5000, () => console.log("Server running on port 5000"));
