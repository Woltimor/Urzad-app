import { Component, OnInit } from '@angular/core';
import { AllOffersModel} from 'src/app/Models/AllOffersModel';
import { OfferService } from 'src/app/Services/offer.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],  
  providers:[OfferService]
})
export class ResultComponent implements OnInit {
  offers:AllOffersModel[]=[];
  headElements = ['Numer Oferty', 'Typ Oferty', 'Kategoria Oferty', 'Oferta'];

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offerService.getAllOffers().subscribe(l=>this.offers=l);
  }

}
