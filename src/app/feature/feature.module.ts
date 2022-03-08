import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { WebComponent } from './container/container.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [WebComponent],
  declarations: [WebComponent, HomeComponent],
  providers: [],
})
export class FeatureModule {}
