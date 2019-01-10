import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../Services/user.service';
import { ManagementService } from '../Services/management.service';
import { PermissionModel } from '../Models/PermissionModel';
import { AccessModel } from '../Models/AccessModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService, ManagementService]
})
export class UsersComponent implements OnInit {
  accessmodel:AccessModel = new AccessModel;
  id:number=1;
  idOsoby: number = 0;
  permissionModel: PermissionModel = new PermissionModel;
  headElements = ['Identyfikator', 'Imie', 'Nazwisko', 'E-mail', 'Wybrane oferty','Uprawnienia','Posiadane kwalifikacje','Zmień dostęp']
  permission = ['Administrator', 'Użytkownik'];
  users: User;
  constructor(private userService: UserService, private managementService: ManagementService) { }

  downloadId(id: number) {
    this.idOsoby = id;
  }
  function(perm) {

    this.permissionModel.Uprawnienia = perm.target.value;
    this.managementService.putPermission(this.permissionModel, this.idOsoby).subscribe(l => this.permissionModel = l);
    window.location.reload();

  }
  deleteUser(id:number){
    this.accessmodel.Dostep = 0;
    this.managementService.putAccess(this.accessmodel, id).subscribe(l=>this.accessmodel=l);
    window.location.reload();

  }
  addUser(id:number){
    this.accessmodel.Dostep = 1;
    this.managementService.putAccess(this.accessmodel, id).subscribe(l=>this.accessmodel=l);
    window.location.reload();

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(l => this.users = l);
  }
}
