import { Component, OnInit } from '@angular/core';
import { JsonsService } from 'src/app/services/api/jsons.service';
import { AuthService } from 'src/app/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  public uriData: any;

  constructor(private _authService: AuthService, private jsonsService: JsonsService){}

  ngOnInit(): void {
      this.consultaServicio();
  }

  consultaServicio(){
    this.jsonsService.getPosts().subscribe(
      res=>{
        this.uriData = res;
      }
    ), (error:any)=>{
      console.log('error : ', error);
    };
  }

  public logout(): void {
    this._authService.logout('/login').pipe(take(1));
  }
}
