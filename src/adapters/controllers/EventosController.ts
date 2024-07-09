import { Request, Response } from "express";
import Evento, { IEvento } from "../../domain/models/eventos";
import { RequestStatus } from "aws-sdk/clients/servicequotas";


// Crear un nuevo evento
export const crearEvento = async (req: Request, res: Response) => {
    try {
      const evento = new Evento(req.body);
      await evento.save();
      return res.status(201).json(evento); // Usa res.status(201).json para enviar el evento creado con el código de estado 201
    } catch (error) {
      return res.status(400).json({ message: 'Error al crear el evento', error }); // Usa res.status(400).json para enviar un error con el código de estado 400
    }
  };


// Obtener todos los eventos

export const obtenerEventos = async (req: Request, res: Response) => {
    try {
        const eventos = await Evento.find({});
        return res.status(200).json(eventos);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los eventos', error });
    }
};


export const obtenerEventosporID = async (req: Request, res:Response) =>{
   const _id = req.params._id;
   try{
    const evento: IEvento | null =  await Evento.findById(_id)
    if(!evento) {
        return res.status(404).json({ message: 'Evento no encontrado' }); // Use res.status(404).json to send a not found error with status code 404
    }
   }
   catch (error) {
       return res.status(500).json({ message: 'Error al obtener el evento por ID', error }); // Use res.status(500).json to send an internal server error with status code 500
   }
}