import { Component, OnInit, ViewChild } from '@angular/core';
import { TypModel } from 'src/app/Models/TypModel';
import { ManagementService } from 'src/app/Services/management.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  providers:[ManagementService]
})
export class TypeComponent implements OnInit {
  types:TypModel;
  headElements = ['Numer typu','Typ'];
  constructor(private managementService:ManagementService) { }



  ngOnInit() {
    this.managementService.getOfferType().subscribe(l => this.types = l);
  }


}
