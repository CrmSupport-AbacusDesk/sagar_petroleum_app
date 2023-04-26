import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import * as jwt_decode from "jwt-decode";
import { ConstantProvider } from '../../providers/constant/constant';
import { AssitanceDetailPage } from '../assitance-detail/assitance-detail';

@IonicPage()
@Component({
  selector: 'page-assitance-list',
  templateUrl: 'assitance-list.html',
})
export class AssitanceListPage {
  data:any={};
  filter: any={};
  karigar_id:any=''


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController,private app: App,public storage:Storage,public translate:TranslateService,public db:DbserviceProvider,public constant:ConstantProvider) {

this.getAssis_list();

// this.karigar_id = this.navParams.get('karigar_id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssitanceListPage');
  }
  doRefresh(refresher) 
  {
      console.log('Begin async operation', refresher);
      this.data.coupon_points = {}
      refresher.complete();
  }


assistant_mc: any = [];
getAssis_list(){


    this.filter.head_machanic_id = this.service.karigar_id;
    this.filter.limit = 0;
    console.log(this.filter.head_machanic_id);
    this.service.post_rqst({'filter':this.filter},'app_karigar/head_machanic_assistant_list')
    .subscribe( (r) =>
    {
        console.log("assiantace mechanic =====>",r);
        this.assistant_mc =r['head_machanic'];
        console.log(this.assistant_mc);

        console.log(this.karigar_id);
    });
}


goOnAssisDetail(id){
  this.navCtrl.push(AssitanceDetailPage,{'id':id})
}





flag:any='';
 loadData(infiniteScroll)
 {
  this.filter.head_machanic_id = this.service.karigar_id;
  this.filter.limit = 0;
  console.log(this.filter.head_machanic_id);
     this.service.post_rqst({'filter':this.filter},'app_karigar/head_machanic_assistant_list')
     .subscribe( (r) =>
     {
         console.log(r);
         if(r=='')
         {
             this.flag=1;
         }
         else
         {
             setTimeout(()=>{
              console.log("assiantace mechanic =====>",r);
              this.assistant_mc =r['head_machanic'];
              console.log(this.assistant_mc);
                 console.log('Asyn operation has stop')
                 infiniteScroll.complete();
             },1000);
         }
     });
 }




}