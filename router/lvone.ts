import { Router } from "express";

import express from 'express';
import lvone from '../controllers/lvone';
const router:Router = express.Router();

router.post('/sum', lvone.sum)

module.exports =  router
  