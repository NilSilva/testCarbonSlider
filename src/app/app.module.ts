import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule, SliderModule } from 'carbon-components-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SliderModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
