import express from 'express';
import { celebrate } from 'celebrate';
import SinglePlayerGame from '../controllers/SinglePlayerGame';
import singlePlayerGameSchema from '../constants/schema/singlePlayerGame.schema';

const router = express.Router();

router.post(
  '/create',
  celebrate(singlePlayerGameSchema.create),
  SinglePlayerGame.create,
);

export default router;