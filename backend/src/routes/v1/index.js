import express from 'express';
import { pingChecker } from '../../controllers/pingController.js';

const router = express.Router();

router.get('/ping', pingChecker);

export default router;
