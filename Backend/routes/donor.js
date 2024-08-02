const express = require("express");
const { createDonor, getAlldonors, updateDonor, getOneDonor, deleteDonor, getDonorsStats } = require("../controllers/donor");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

// ADD DONOR
router.post("/",verifyToken, createDonor);

// GET ALL DONORS
router.get("/", getAlldonors);

// UPDATE DONOR
router.put("/:id", updateDonor);

//GET ONE DONOR
router.get("/find/:id", getOneDonor);

//DELETE DONOR
router.delete("/:id", deleteDonor);

//DONOR STATS
router.get("/stats", getDonorsStats);


module.exports=router