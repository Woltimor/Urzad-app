import { Component, OnInit } from '@angular/core';
import {User} from '../Models/User';
import {UserService} from '../Services/user.service';
import { ManagementService } from '../Services/management.service';
import {PermissionModel} from '../Models/PermissionModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService,ManagementService]
})
export class UsersComponent implements OnInit {
  idOsoby:number=0;
  permissionModel:PermissionModel = new PermissionModel;
  headElements=['Identyfikator','Imie','Nazwisko','E-mail','Uprawnienia']
  permission=['Administrator','Użytkownik'];
  users: User;
  constructor(private userService: UserService, private managementService: ManagementService) {}
  
  downloadId(id:number){
    this.idOsoby = id;

  }
  function(perm) {
  
     this.permissionModel.Uprawnienia = perm.target.value;
     this.managementService.putPermission(this.permissionModel, this.idOsoby).subscribe(l=>this.permissionModel=l);

    }
 
  ngOnInit() {
    this.userService.getUsers().subscribe(l => this.users = l);
  }
}
