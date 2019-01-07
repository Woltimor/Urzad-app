import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/Services/management.service';
import {CategoryOfferModel} from 'src/app/Models/CategoryOfferModel'
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  providers:[ManagementService]
})
export class OfferComponent implements OnInit {
  offers:CategoryOfferModel;

  headElements = ['Numer oferty','Nazwa kategorii', 'Nazwa oferty'];

  constructor(private managementService:ManagementService) { }

  ngOnInit() {
    this.managementService.getCategoryOffer().subscribe(l => this.offers = l);
  }

}
