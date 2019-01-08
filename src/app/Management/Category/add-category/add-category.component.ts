import { Component, OnInit, ViewChild } from '@angular/core';
import { PostCategoryTypeModel } from 'src/app/Models/PostCategoryTypeModel';
import { TypModel } from 'src/app/Models/TypModel';
import { ManagementService } from 'src/app/Services/management.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [ManagementService]
})
export class AddCategoryComponent implements OnInit {
  constructor(private managementService: ManagementService, private router: Router) { }
  @ViewChild('f') signupForm: NgForm;

  categories: PostCategoryTypeModel = new PostCategoryTypeModel;
  types: TypModel;
  Nazwa: string = '';
  IdTypu: number = 0;
  initializeAtributes() {
    this.categories.Nazwa = this.Nazwa;
    this.categories.IdTypu = this.IdTypu;
  }
  ngOnInit() {
    this.managementService.getOfferType().subscribe(l => this.types = l);
  }
  onSubmit() {
    this.initializeAtributes();
    this.managementService.postOfferCategory(this.categories).subscribe();
    console.log(this.categories);
    this.router.navigate(['/management/category']);
  }

}
