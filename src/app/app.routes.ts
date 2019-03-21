import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {FormActuacionComponent} from './component/forms/form-actuacion/form-actuacion.component';
import {HomeComponent} from './component/pages/home/home.component';
import {TableActuacionComponent} from './component/forms/table-actuacion/table-actuacion.component'
import { SettingsComponent } from './component/forms/settings/settings.component';
import { EstadoActuacionComponent } from './component/forms/actuacion/estado-actuacion/estado-actuacion-crear/estado-actuacion.component';
import { EstaActuLiComponent} from './component/forms/actuacion/estado-actuacion/estado-actuacion-listar/estado-actuacion-listar.component';
import { EncargadoComponent } from './component/forms/actuacion/encargado/encargado-crear/encargado.component';
import { EncargadoListarComponent } from './component/forms/actuacion/encargado/encargado-listar/encargado-listar.component';
import { TipoCrearComponent } from './component/forms/actuacion/tipo/tipo-crear/tipo-crear.component';
import { TipoListarComponent } from './component/forms/actuacion/tipo/tipo-listar/tipo-listar.component';


const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'Home', component:HomeComponent},
    {path: 'table-actuacion', component: TableActuacionComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'estados-crear', component: EstadoActuacionComponent},
    {path: 'estados-listar', component: EstaActuLiComponent},
    {path: 'encargado-crear', component: EncargadoComponent},
    {path: 'encargado-listar', component: EncargadoListarComponent},
    {path: 'tipo-crear', component: TipoCrearComponent },
    {path: 'tipo-listar', component: TipoListarComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);