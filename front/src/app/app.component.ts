import { Component, OnInit } from '@angular/core';
import { NavBarService } from './core/services/toolServices/nav-bar.service';
import { UserDataService } from './core/services/toolServices/userData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public views: NavBarService,
    private userData: UserDataService,
    private router: Router
    ){  }

  ngOnInit(): void {
    if(this.userData.isAuthenticated()){
      this.views.hideLanding();
      this.views.accountButton = false;
      this.views.quickButton = true;
      this.views.title = ("Bienvenido! " + this.userData.userName + " " + this.userData.lastName);
      this.router.navigate([`/home/${this.userData.userId}/cv`])
      console.log("token valido")
    }else{
      this.router.navigate(['/login']);
      console.log("token no valido")
    }
    this.views.restart();
  }
}
