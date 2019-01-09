import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/Services/management.service';
import { TypeCategoryModel } from 'src/app/Models/TypeCategoryModel';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[ManagementService]
})
export class CategoryComponent implements OnInit {
  categories:TypeCategoryModel;
  headElements = ['Numer kategorii','Nazwa typu', 'Nazwa kategorii'];
  constructor(private managementService:ManagementService) { }

  ngOnInit() {
    this.managementService.getTypeCategory().subscribe(l => this.categories = l);
  }

}
