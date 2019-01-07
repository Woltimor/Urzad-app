import { Component, OnInit,ViewChild } from '@angular/core';
import { TypModel } from 'src/app/Models/TypModel';
import { ManagementService } from 'src/app/Services/management.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss'],
  providers:[ManagementService]
})
export class AddTypeComponent implements OnInit {

  constructor(private managementService:ManagementService, private router: Router) { }
  @ViewChild('f') signupForm: NgForm;

  types:TypModel = new TypModel;
  Opis:string='';
  initializeAtributes(){
    this.types.Opis = this.Opis;
  }
  ngOnInit() {
  }
  onSubmit(){
    this.initializeAtributes();
    this.managementService.postOfferType(this.types).subscribe();
    this.router.navigate(['/management/type'])
  }

}
