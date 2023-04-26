import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssitanceDetailPage } from './assitance-detail';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from '../redeem-type/redeem-type.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AssitanceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AssitanceDetailPage),

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
})
export class AssitanceDetailPageModule {}
