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
    ApiResponse.error(
      res,
      httpStatusCodes.BAD_REQUEST,
      'Unwanted Error',
    );
  }
};

const show: Controller = async (req, res) => {
  const result = await singlePlayerGameService.show(
    Number(req.params.id),
  );
  if (result) {
    ApiResponse.result(res, { ...result }, httpStatusCodes.OK);
  } else {
    ApiResponse.error(res, httpStatusCodes.NOT_FOUND, 'Game Not Found');
  }
};

const action: Controller = async (req, res) => {
  const result = await singlePlayerGameService.action({ ...req.body });
  if (result) {
    ApiResponse.result(res, { ...result }, httpStatusCodes.OK);
  } else {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, 'Bad Request');
  }
};

export default {
  create,
  show,
  action,
};
