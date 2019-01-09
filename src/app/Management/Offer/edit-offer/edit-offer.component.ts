import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ManagementService } from 'src/app/Services/management.service';
import { Router } from '@angular/router';
import {TypeCategoryModel} from 'src/app/Models/TypeCategoryModel'
import {PostOfferCategoryModel} from 'src/app/Models/PostOfferCategoryModel'
@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss'],
  providers: [ManagementService]
})
export class EditOfferComponent implements OnInit {

  postOfferCategoryModel: PostOfferCategoryModel = new PostOfferCategoryModel;
  typesAndCategories:TypeCategoryModel;
  offer: { IdOferty: number, Nazwa: string, OpisOferty: String, IdKategorii:number, Opis: string };
  constructor(private route: ActivatedRoute, private managementService: ManagementService, private router: Router) { }

  ngOnInit() {
    this.offer =

      {
        IdOferty: this.route.snapshot.params['idOferty'],
        Nazwa: this.route.snapshot.params['nazwa'],
        OpisOferty: this.route.snapshot.params['opisOferty'],
        IdKategorii: this.route.snapshot.params['idKategorii'],
        Opis: this.route.snapshot.params['opis'],
      }
      this.managementService.getTypeCategory().subscribe(l => this.typesAndCategories = l);
  }

  initializeAtributes() {
     this.postOfferCategoryModel.OpisOferty = this.offer.OpisOferty;
  }

  function(Id) {
     this.postOfferCategoryModel.IdKategorii = parseInt(Id.target.value);
  }

  onSubmit() {
    this.initializeAtributes();
    this.managementService.putOffer(this.postOfferCategoryModel, this.offer.IdOferty).subscribe(l => this.postOfferCategoryModel = l);
    console.log(this.postOfferCategoryModel);
    this.router.navigate(['/management/category']);
  }

}
