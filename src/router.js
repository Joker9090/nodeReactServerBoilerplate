import express from 'express';
let router = express.Router();
//controllers
import controllersIndex from './controllers/index.js';

router.get('/', controllersIndex.indexView)

export default router;
