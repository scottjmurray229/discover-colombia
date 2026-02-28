/**
 * Shared video map for destination cards.
 * Maps destination slugs to video file paths (preview preferred, hero as fallback).
 * Used by: src/pages/index.astro, src/pages/destinations/index.astro
 */
export const destinationVideoMap: Record<string, string> = {
  bogota: '',
  medellin: '',
  cartagena: '',
  'santa-marta': '',
  'san-andres': '',
  cali: '',
  'villa-de-leyva': '',
  salento: '',
  barichara: '',
  leticia: '',
  'tatacoa-desert': '',
  providencia: '',
} as const;
