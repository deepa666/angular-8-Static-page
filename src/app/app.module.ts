import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TopnavComponent } from './container/topnav/topnav.component';
import { HeaderComponent } from './container/header/header.component';
import { TextComponent } from './container/text/text.component';
import { Text2Component } from './container/text2/text2.component';

@NgModule({
  declarations: [
    AppComponent,
   ContainerComponent,
   TopnavComponent,
   HeaderComponent,
   TextComponent,
   Text2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
