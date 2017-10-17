import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PyramidRowComponent } from './pyramid-row/pyramid-row.component';
import { PyramidRowService } from './pyramid-row/pyramid-row.service';
import { PyramidComponent } from './pyramid/pyramid.component';


@NgModule({
  declarations: [
    AppComponent,
    PyramidRowComponent,
    PyramidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PyramidRowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
