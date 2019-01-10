import { Component, OnInit , NgModule } from '@angular/core';
import { AllOffersModel} from 'src/app/Models/AllOffersModel';
import { OfferService } from '../Services/offer.service';
import { User } from '../Models/User';
import { ManagementService } from '../Services/management.service';
import { ProposalModel } from '../Models/ProposalModel';
import { ShowAchievementsModel } from '../Models/ShowAchievementModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers:[OfferService,ManagementService]
})
export class CategoriesComponent implements OnInit {
  constructor(private offerService: OfferService, private managementService: ManagementService) { }
  getAchievements:ShowAchievementsModel;
  idOferty:number=0;
  toggleAchievements=false;
  userToken: User;
  idOsoby:number =0;
  idKategorii:number=0;
  proposalModel:ProposalModel = new ProposalModel;
  types:AllOffersModel[]=[];
  temporary:AllOffersModel[]=[];
  type:string[]=[];
  category:string[]=[];
  offer:string[]=[];
  headElements = ['Numer Oferty', 'Typ Oferty', 'Kategoria Oferty', 'Oferta', 'Wybierz ofertę!'];
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
addOffer(id:number){
this.proposalModel.IdKategorii = id;
this.proposalModel.IdOsoby= this.userToken.idOsoby;
this.managementService.postProposal(this.proposalModel).subscribe(l=>this.proposalModel=l);
}
showAchievements(id){
  this.toggleAchievements=!this.toggleAchievements;
  this.managementService.getAchievements(id).subscribe(l=>this.getAchievements=l)
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
      this.userToken = JSON.parse(localStorage.getItem('currentUser'));
  }
}
