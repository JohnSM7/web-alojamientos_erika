// src/content/config.js
import { defineCollection, z } from 'astro:content';

const alojamientosCollection = defineCollection({
  type: 'content', // Usamos 'content' para poder usar Markdown para la descripción larga
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    location: z.string(),
    mainImage: z.string(), // Ruta a la imagen principal en /public/images/
    gallery: z.array(z.string()), // Rutas a las fotos de la galería
    amenities: z.array(z.string()), // Lista de servicios (wifi, piscina...)
    bookingLinks: z.object({
      airbnb: z.string().optional(),
      bookingCom: z.string().optional(),
    }),
  }),
});

export const collections = {
  'alojamientos': alojamientosCollection,
};