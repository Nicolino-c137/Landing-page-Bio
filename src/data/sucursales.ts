export interface Sucursal {
  nombre: string;
  direccion: string;
  horario: string;
  whatsapp: string;
  mapsUrl: string;
}

export const sucursales: Sucursal[] = [
  {
    nombre: 'Capital Centro',
    direccion: 'Santa Fe Este 158, San Juan Capital',
    horario: 'Lunes a sábado · 09:00 - 20:00',
    whatsapp: 'https://api.whatsapp.com/send/?phone=5492645010940&text&type=phone_number&app_absent=0',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Santa+Fe+Este+158%2C+San+Juan%2C+Argentina',
  },
  {
    nombre: 'Capital (25 de Mayo)',
    direccion: '25 de Mayo Oeste 1632, San Juan Capital',
    horario: 'Lunes a sábado · 10:00 - 20:00',
    whatsapp: 'https://api.whatsapp.com/message/IRG7Y6HNIDY3E1?autoload=1&app_absent=0',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=25+de+Mayo+Oeste+1632%2C+San+Juan%2C+Argentina',
  },
  {
    nombre: 'Rivadavia',
    direccion: 'Av. Libertador 4851 Oeste, Rivadavia',
    horario: 'Lunes a sábado · 09:00 - 20:00',
    whatsapp: 'https://api.whatsapp.com/message/XGOZS3VIG6VGC1?autoload=1&app_absent=0',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Libertador+4851+Oeste%2C+Rivadavia%2C+San+Juan%2C+Argentina',
  },
  {
    nombre: 'Del Bono',
    direccion: 'Av. José Ignacio de la Roza Oeste 1946, Local 15, San Juan',
    horario: 'Lunes a sábado · 09:00 - 20:00',
    whatsapp: 'https://api.whatsapp.com/send/?phone=5492645642706&text&type=phone_number&app_absent=0',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Jos%C3%A9+Ignacio+de+la+Roza+Oeste+1946%2C+San+Juan%2C+Argentina',
  },
];
