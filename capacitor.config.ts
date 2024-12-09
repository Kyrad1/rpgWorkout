import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.rpgworkout',
  appName: 'rpgworkout',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
