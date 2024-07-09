import { Document, Schema, model } from "mongoose";

export interface IEvento extends Document {
    nombre: string;
    descripcion: string;
    fecha: Date;
    precio: number;
    genero: string;
    imagen: string;
    lugar: string;
    tipo: string;
}

//deficnicion del esquema

const eventoSchema = new Schema<IEvento>({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    }
});

const Evento = model<IEvento>('Evento', eventoSchema);

export default Evento;
