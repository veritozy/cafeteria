import { Routes } from '@angular/router';
import { Nosotros } from './features/nosotros/nosotros';
import { Home } from './features/home/home';

export const routes: Routes = [
    {path:"home", component:Home},
    {path:"nosotros", component:Nosotros}

];
