import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationPage } from './registration';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    // RegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPage),
    IonicSelectableModule,
  ],
})
export class RegistrationPageModule {}
