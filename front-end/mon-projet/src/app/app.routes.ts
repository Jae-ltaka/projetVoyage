import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
    { path: 'connexion', component: ConnexionComponent },
    {path:'aston',component:FirstPageComponent},
    {path:'inscription',component:InscriptionComponent},
];
