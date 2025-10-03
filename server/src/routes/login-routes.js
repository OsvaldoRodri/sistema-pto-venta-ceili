import express from 'express';
import { handleLogin } from '../controllers/login-tasks.js';
import dotenv from 'dotenv';
import { Router } from 'express';

dotenv.config();
const router = Router();

router.post('/login', handleLogin);

export default router;