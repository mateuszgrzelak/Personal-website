import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'pinch': { enable: false },
    'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HammerModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
