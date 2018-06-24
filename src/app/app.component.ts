import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { LoginPage } from '../pages/login/login'; 
import { TabMenuPage } from '../pages/tab-menu/tab-menu';
import { HomePage } from '../pages/home/home';


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = TabMenuPage;
  appMenuItems: Array<MenuItem>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'} 
    ];

    platform.ready().then(() => {
      console.log("MyApp");
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
  logout() {
    debugger;
    this.nav.setRoot(LoginPage);
  }

}

