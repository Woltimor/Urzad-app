import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User} from 'src/app/Models/User';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [UserService]
})
export class UserDetailsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  Imie: string = '';
  Nazwisko: string = '';
  Login: string = '';
  Haslo: string = '';



  postUsers: User = new User;


  constructor(private router: Router,
    private usersService: UserService) {
      
    }
    initializeAtributes(){
      this.postUsers.Imie = this.Imie;
      this.postUsers.Nazwisko = this.Nazwisko;
    }

  ngOnInit() {}
  
  onSubmit() {
    
     this.initializeAtributes();
    //  this.usersService.postUser(this.postUsers).subscribe();
     console.log(this.postUsers)
      this.router.navigate(['/users'])
}
}
