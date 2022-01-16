import httpStatusCodes from 'http-status-codes';
import ApiResponse from '../utilities/apiResponse';
import { Controller } from '../types';
import singlePlayerGameService from '../services/singlePlayerGame';

const create: Controller = async (req, res) => {
  let game;
  try {
    game = await singlePlayerGameService.create(req.body.name);

    ApiResponse.result(res, { game }, httpStatusCodes.CREATED);
  } catch (e) {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e);
    return;
  }
};

export default {
  create,
};
