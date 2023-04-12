import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShippingDetailPage } from './shipping-detail';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../redeem-type/redeem-type.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ShippingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShippingDetailPage),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
})
export class ShippingDetailPageModule {}
