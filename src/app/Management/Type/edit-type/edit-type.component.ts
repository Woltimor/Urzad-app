import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ManagementService } from 'src/app/Services/management.service';
import { TypModel } from 'src/app/Models/TypModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.scss'],
  providers: [ManagementService]
})
export class EditTypeComponent implements OnInit {
  types:TypModel = new TypModel;
  type: {IdTypu:number, Opis:string};
  constructor(private route: ActivatedRoute, private managementService: ManagementService, private router: Router) { }

  ngOnInit() {
    this.type =
    {
      IdTypu: this.route.snapshot.params['id'],
      Opis: this.route.snapshot.params['typ']
    }
  }
  onSubmit(){
    this.types.Opis = this.type.Opis;
    this.managementService.putOfferType(this.types, this.type.IdTypu).subscribe(l => this.types = l);
    this.router.navigate(['/management/type']);
  }

}
