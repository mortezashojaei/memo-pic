import { ControllerType } from 'Controller';
import { createSinglePlayerGame } from '../services';

export const addSinglePlayerGame: ControllerType = async (req, res) => {
  let game;
  try {
    game = await createSinglePlayerGame(req.body.name);
    res.status(200).send(game);
  } catch (e) {}
};
