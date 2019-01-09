import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/Services/offer.service';
import {AllOffersModel} from 'src/app/Models/AllOffersModel'
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  providers:[OfferService]
})
export class OfferComponent implements OnInit {
  offers:AllOffersModel[]=[];

  headElements = ['Numer oferty','Nazwa kategorii', 'Nazwa oferty'];

  constructor(private offerService:OfferService) { }

  ngOnInit() {
    this.offerService.getAllOffers().subscribe(l => this.offers = l);
  }

}
