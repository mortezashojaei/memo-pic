import * as express from 'express';

import singlePlayerGame from './singlePlayerGame';

const router = express.Router();

router.use('/single-player-game', singlePlayerGame);

export default router;
