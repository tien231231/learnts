import express from 'express';
import { Router } from "express";
import arrayobject from '../controllers/arrayobject';
import middlewareC from '../controllers/middlewareC';

const router: Router = express.Router();

router.post('/chuck',middlewareC.verifyToken, arrayobject.chuck)
router.post('/trim',middlewareC.verifyToken, arrayobject.trim)
router.post('/uniq',middlewareC.verifyToken, arrayobject.uniq)
router.post('/reverse',middlewareC.verifyToken, arrayobject.reverse)
router.post('/mapkey',middlewareC.verifyToken, arrayobject.mapkey)
router.post('/swithorder',middlewareC.verifyToken, arrayobject.swithorder)
router.post('/groupby',middlewareC.verifyToken, arrayobject.gb)

export default router;
