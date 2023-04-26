import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssitanceListPage } from './assitance-list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../redeem-type/redeem-type.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AssitanceListPage,
  ],
  imports: [
    IonicPageModule.forChild(AssitanceListPage),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
})
export class AssitanceListPageModule {}
