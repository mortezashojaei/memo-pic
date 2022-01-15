import express from 'express';

const router = express.Router();

router.post('/single-player/create');
router.get('/single-player/records');
router.post('/single-player/action');

export default router;
