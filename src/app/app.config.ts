import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-web-shopping-cart',
        appId: '1:554310294660:web:89d36bde7c2d712f91b6d1',
        storageBucket: 'fir-web-shopping-cart.appspot.com',
        apiKey: 'AIzaSyDt1nvuwVO1vHOMuCroZAOKtxQcNPOtL18',
        authDomain: 'fir-web-shopping-cart.firebaseapp.com',
        messagingSenderId: '554310294660',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
