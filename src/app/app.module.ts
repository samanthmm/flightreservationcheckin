import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartcheckinComponent } from './startcheckin/startcheckin.component';
import { ChekinComponent } from './chekin/chekin.component';
import { ConfirmcheckinComponent } from './confirmcheckin/confirmcheckin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartcheckinComponent,
    ChekinComponent,
    ConfirmcheckinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
