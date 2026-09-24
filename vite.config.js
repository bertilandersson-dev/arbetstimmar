import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({base:'/arbetstimmar/',plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'Arbetstimmar',short_name:'Arbetstimmar',description:'Enkel registrering av arbetade timmar per dag',theme_color:'#2563eb',background_color:'#f8fafc',display:'standalone',start_url:'/arbetstimmar/',scope:'/arbetstimmar/',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]}})]});