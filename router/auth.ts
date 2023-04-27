import { Router } from "express";

import auth from "../controllers/auth";
import express from 'express';
const router:Router = express.Router();

router.post("/login",auth.loginUser)
router.post("/register",auth.registerUser)

module.exports =router