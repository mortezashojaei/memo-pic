import { Joi, Segments } from 'celebrate';
export default {
  create: {
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  },
  action: {
    [Segments.BODY]: {
      first: Joi.number().required(),
      second: Joi.number().required(),
      gameId: Joi.number().required(),
    },
  },
};
