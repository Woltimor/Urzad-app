import { Component, OnInit , NgModule } from '@angular/core';
import { AllOffersModel} from 'src/app/Models/AllOffersModel';
import { OfferService } from '../Services/offer.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers:[OfferService]
})
export class CategoriesComponent implements OnInit {
  constructor(private offerService: OfferService) { }

  types:AllOffersModel[]=[];
  temporary:AllOffersModel[]=[];
  type:string[]=[];
  category:string[]=[];
  offer:string[]=[];
  headElements = ['Numer Oferty', 'Typ Oferty', 'Kategoria Oferty', 'Oferta'];
  selectedX:boolean= false;
  selectedY:boolean= false;
  selectedZ:boolean= false;

onChange1(x) {
  
  if(x.value==""){ 
    this.temporary = this.types.filter(t=>t.opisTypu);
  }else if(this.selectedX==false){
  this.temporary = this.temporary.filter(t=>t.opisTypu === x.value);
  this.selectedX=true;
}else this.temporary = this.types.filter(t=>t.opisTypu === x.value);
}
onChange2(y) {
  
  if(y.value==""){ 
    this.temporary = this.types.filter(t=>t.nazwa);
  }else if(this.selectedY==false){
  this.temporary = this.temporary.filter(t=>t.nazwa === y.value);
  this.selectedY=true;
}else this.temporary = this.types.filter(t=>t.nazwa === y.value);

}
onChange3(z) {
  if(z.value==""){ 
    this.temporary = this.types.filter(t=>t.opisOferty);
  } else if(this.selectedZ==false){
  this.temporary = this.temporary.filter(t=>t.opisOferty === z.value);
  this.selectedZ=true;
}else this.temporary = this.types.filter(t=>t.opisOferty === z.value);
}

  ngOnInit() {
    this.offerService.getAllOffers().subscribe((type: AllOffersModel[]) =>{
      this.types=type.filter((nazwa, i , s)=> i === s.indexOf(nazwa));
      this.temporary =type;
      this.type = this.types.map(t=>t.opisTypu);
      this.type = this.type.filter((opisTypu, i , s)=> i === s.indexOf(opisTypu))
      this.category = this.types.map(t=>t.nazwa);
      this.category=  this.category.filter((nazwa, i , s)=> i === s.indexOf(nazwa));
      this.offer = this.types.map(t=>t.opisOferty);
      });
  }
}
