import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ManagementService } from 'src/app/Services/management.service';
import { Router } from '@angular/router';
import { TypModel } from 'src/app/Models/TypModel';
import { PostCategoryTypeModel } from 'src/app/Models/PostCategoryTypeModel';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
  providers: [ManagementService]
})
export class EditCategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private managementService: ManagementService, private router: Router) {
  }
  category: { IdKategorii: number, Opis: string, Nazwa: String };
  categories: PostCategoryTypeModel = new PostCategoryTypeModel;
  types: TypModel;
  IdTypu: number = 0;
  ngOnInit() {

    this.category =
      {
        IdKategorii: this.route.snapshot.params['idKategorii'],
        Opis: this.route.snapshot.params['opis'],
        Nazwa: this.route.snapshot.params['nazwa']
      }
    this.managementService.getOfferType().subscribe(l => this.types = l);
  }

  initializeAtributes() {
    this.categories.Nazwa = this.category.Nazwa;
  }

  function(Id) {
    this.categories.IdTypu = parseInt(Id.target.value);
  }

  onSubmit() {
    this.initializeAtributes();
    this.managementService.putOfferCategory(this.categories, this.category.IdKategorii).subscribe(l => this.categories = l);
    console.log(this.categories);
    this.router.navigate(['/management/category']);
  }
}
