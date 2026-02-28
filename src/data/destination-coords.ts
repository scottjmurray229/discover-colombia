// Shared destination coordinates — single source of truth
// Extracted from plan.astro geoMarkers. Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  bogota: { lat: 4.7110, lng: -74.0721, label: 'Bogot\u00e1' },
  medellin: { lat: 6.2476, lng: -75.5658, label: 'Medell\u00edn' },
  cartagena: { lat: 10.3910, lng: -75.5364, label: 'Cartagena' },
  'santa-marta': { lat: 11.2408, lng: -74.1990, label: 'Santa Marta' },
  'san-andres': { lat: 12.5847, lng: -81.7006, label: 'San Andr\u00e9s' },
  cali: { lat: 3.4516, lng: -76.5320, label: 'Cali' },
  'villa-de-leyva': { lat: 5.6343, lng: -73.5246, label: 'Villa de Leyva' },
  salento: { lat: 4.6374, lng: -75.5711, label: 'Salento' },
  barichara: { lat: 6.6355, lng: -73.2261, label: 'Barichara' },
  leticia: { lat: -4.2153, lng: -69.9406, label: 'Leticia' },
  'tatacoa-desert': { lat: 3.2289, lng: -75.1714, label: 'Tatacoa Desert' },
  providencia: { lat: 13.3500, lng: -81.3753, label: 'Providencia' },
};
