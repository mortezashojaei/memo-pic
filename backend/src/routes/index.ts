import * as express from 'express';

import game from './game';

const router = express.Router();

router.use('/game', game);

export default router;
