import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-apis/in-memory-data.service';
import { AppContainerComponent } from './app-container.component';
import { MaterialControlsComponent } from './features/test/material-controls.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppContainerComponent,
    MaterialControlsComponent
  ],
  providers: [
  ],
  bootstrap: [ AppContainerComponent ]
})

export class AppModule { }
