const express = require("express");

const selectHandler = require("../services/selectService");

const router = express.Router(); // get an instance of the express Router

router.post("/select", selectHandler);

module.exports=router