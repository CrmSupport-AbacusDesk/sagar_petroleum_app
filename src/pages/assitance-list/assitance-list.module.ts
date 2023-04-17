import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssitanceListPage } from './assitance-list';

@NgModule({
  declarations: [
    AssitanceListPage,
  ],
  imports: [
    IonicPageModule.forChild(AssitanceListPage),
  ],
})
export class AssitanceListPageModule {}
