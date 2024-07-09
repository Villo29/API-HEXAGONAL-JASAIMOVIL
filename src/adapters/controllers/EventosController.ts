import { Request, Response } from "express";
import Evento, { IEvento } from "../../domain/models/eventos";


// Crear un nuevo evento
export const crearEvento = async (req: Request, res: Response) => {
    try {
        const evento = new Evento(req.body);
        await evento.save();
        return res.send(201).json(evento);
    } catch (error) {
        return res.send(400).json({ message: 'Error al crear el evento', error });
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
