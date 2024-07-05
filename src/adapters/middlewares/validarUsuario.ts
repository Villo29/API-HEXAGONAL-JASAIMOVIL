import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  nombre: Joi.string().min(3).required(),
  correo: Joi.string().email().required(),
  contraseña: Joi.string().min(6).required(),
});

export const validarUsuario = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  next();
};
