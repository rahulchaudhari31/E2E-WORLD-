import { Globe, Monitor, Shield, Users } from 'lucide-react';

export const ventureIconMap = { Users, Monitor, Globe, Shield };

export const getVentureIcon = (icon) => ventureIconMap[icon] || Globe;
