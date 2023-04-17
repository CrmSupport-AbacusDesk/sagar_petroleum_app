import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as jwt_decode from "jwt-decode";
import { ConstantProvider } from '../../providers/constant/constant';


@IonicPage()
@Component({
  selector: 'page-assitance-detail',
  templateUrl: 'assitance-detail.html',
})
export class AssitanceDetailPage {
  data:any={};
  filter: any={};
  assistant_detail: any;
  karigar_id:any=''


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController,private app: App,public storage:Storage,public translate:TranslateService,public db:DbserviceProvider,public constant:ConstantProvider) {

this.getAssis_detail();
this.getAssis_detail_Mechanic();
// this.karigar_id = this.navParams.get('karigar_id');

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AssitanceDetailPage');
  }
  doRefresh(refresher) 
  {
      console.log('Begin async operation', refresher);
      this.data.coupon_points = {}
  
      refresher.complete();
  }


assistant_mc: any = [];
getAssis_detail(){


    this.filter.head_machanic_id = this.service.karigar_id;
    this.filter.limit = 0;
    console.log(this.filter.head_machanic_id);
    this.service.post_rqst({'filter':this.filter},'app_karigar/head_machanic_assistant_detail')
    .subscribe( (r) =>
    {
        console.log("assiantace mechanic detail=====>",r);
        this.assistant_detail =r['coupon'];
        console.log(this.assistant_detail);
    });
}




assistant_main_detail: any = {};
getAssis_detail_Mechanic(){


    this.filter.head_machanic_id = this.service.karigar_id;
    this.filter.limit = 0;
    console.log(this.filter.head_machanic_id);
    this.service.post_rqst({'filter':this.filter},'app_karigar/head_machanic_assistant_detail')
    .subscribe( (r) =>
    {
        console.log("assiantace mechanic detail=====>",r);
        this.assistant_main_detail =r.head_machanic_detail;
        console.log(this.assistant_main_detail);
    });
}



goOnAssisDetail(id){
  this.navCtrl.push(AssitanceDetailPage,{'id':id})
}

}
