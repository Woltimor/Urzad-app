import { Component, OnInit,ViewChild } from '@angular/core';
import { PostOfferCategoryModel } from 'src/app/Models/PostOfferCategoryModel';
import { TypeCategoryModel } from 'src/app/Models/TypeCategoryModel';
import { ManagementService } from 'src/app/Services/management.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss'],
  providers:[ManagementService]
})
export class AddOfferComponent implements OnInit {

  constructor(private managementService:ManagementService, private router: Router) { }
  @ViewChild('f') signupForm: NgForm;

  offers:PostOfferCategoryModel = new PostOfferCategoryModel;
  categories:TypeCategoryModel;
  OpisOferty:string='';
  IdKategorii:number=0;
  initializeAtributes(){
    this.offers.OpisOferty = this.OpisOferty;
    this.offers.IdKategorii = this.IdKategorii;
  }
  ngOnInit() {
    this.managementService.getTypeCategory().subscribe(l => this.categories = l);
  }
  onSubmit(){
    this.initializeAtributes();
    this.managementService.postOffer(this.offers).subscribe();
    this.router.navigate(['/management/offer']);
  }

}
