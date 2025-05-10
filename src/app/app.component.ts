import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute  } from '@angular/router';
// import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AccessControlQR';
  // isLoggedIn: any;
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.hideSideMenu();
  }  

    

  // hideSideMenu(){
  //   let currentUrl: string = window.location.href.substring(22, 37);
  //   console.log("String: ", currentUrl)
  
  // if (currentUrl = 'login'){
  //   this.isLoggedIn = false
  // } else{
  //   this.isLoggedIn = true
  // }
  // }
}

