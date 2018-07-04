import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login"; 
import { TabMenuPage } from '../tab-menu/tab-menu';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController) {
  }

  // register and go to home page
  register() {
    this.nav.setRoot(TabMenuPage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
