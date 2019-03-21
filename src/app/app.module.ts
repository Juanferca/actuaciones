
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { formsRoutes } from './component/forms/forms.routes';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { NavigationComponent } from './component/pages/navigation/navigation.component';
import { FormActuacionComponent } from './component/forms/form-actuacion/form-actuacion.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './component/pages/home/home.component';
import { FooterComponent } from './component/pages/footer/footer.component';
import { PipesPipe } from './component/pipes.pipe';
import { TableActuacionComponent } from './component/forms/table-actuacion/table-actuacion.component';
import { PruebaBComponent } from './component/prueba-b/prueba-b.component';
import { SettingsComponent } from './component/forms/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { EncargadoComponent } from './component/forms/actuacion/encargado/encargado-crear/encargado.component';
import { EncargadoListarComponent } from './component/forms/actuacion/encargado/encargado-listar/encargado-listar.component';
import { EstadoActuacionComponent } from './component/forms/actuacion/estado-actuacion/estado-actuacion-crear/estado-actuacion.component';
import { EstaActuLiComponent} from './component/forms/actuacion/estado-actuacion/estado-actuacion-listar/estado-actuacion-listar.component';
import { TipoCrearComponent } from './component/forms/actuacion/tipo/tipo-crear/tipo-crear.component';
import { TipoListarComponent } from './component/forms/actuacion/tipo/tipo-listar/tipo-listar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormActuacionComponent,
    HomeComponent,
    FooterComponent,
    PipesPipe,
    TableActuacionComponent,
    PruebaBComponent,
    SettingsComponent,
    EncargadoComponent,
    EncargadoListarComponent,
    EstadoActuacionComponent,
    EstaActuLiComponent,
    TipoCrearComponent,
    TipoListarComponent,
    


    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutes,
    formsRoutes, 
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
