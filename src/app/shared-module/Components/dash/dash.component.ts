import { Component, Input } from '@angular/core';
import { User } from '../../../Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {
  @Input() userAuth !:User
  constructor(private route:Router){}
  logOut(){
    this.route.navigate(['/Login'])
  }
}
