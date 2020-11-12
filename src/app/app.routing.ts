import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
//DEFAULT
import { DefaultComponent } from './components/default/default.component';
import { PasounoinversionComponent } from './components/pasounoinversion/pasounoinversion.component';
import { PasodosinversionComponent } from './components/pasodosinversion/pasodosinversion.component';
import { PasotresinversionComponent } from './components/pasotresinversion/pasotresinversion.component';
import { ResumeninversionComponent } from './components/resumeninversion/resumeninversion.component';
import { EdicioninversionComponent } from './components/edicioninversion/edicioninversion.component';
import { MensajefinalComponent } from './components/mensajefinal/mensajefinal.component';

//creo una propiedad appRputes que instancia la clase Routes
const appRoutes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'pasounoinversion',
    component: PasounoinversionComponent,
  },
  {
    path: 'pasodosinversion',
    component: PasodosinversionComponent,
  },
  {
    path: 'pasotresinversion',
    component: PasotresinversionComponent,
  },
  {
    path: 'resumeninversion',
    component: ResumeninversionComponent,
  },
  {
    path: 'edicioninversion',
    component: EdicioninversionComponent,
  },
  {
    path: 'mensajefinal',
    component: MensajefinalComponent,
  },
  {
    path: '**',
    component: DefaultComponent,
  },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
