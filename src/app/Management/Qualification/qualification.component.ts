import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/Services/management.service';
import { QualificationModel } from 'src/app/Models/QualificationModel';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  providers: [ManagementService]
})

export class QualificationComponent implements OnInit {
  toggled=false;
  Opis:String='';
  qualifications:QualificationModel;
  postQualifications:QualificationModel = new QualificationModel;
  headElements = ['Numer kwalifikacji','kwalifikacja'];
  constructor(private managementService: ManagementService) { }
  toggleBool(){
    this.toggled=!this.toggled;
  }
  initializeAtribute(){
    this.postQualifications.Opis = this.Opis;
  }
  postQualification(){
    this.initializeAtribute();
    console.log(this.postQualifications);
    this.managementService.postQualification(this.postQualifications).subscribe(l => this.postQualifications = l);
    this.Opis='';
    window.location.reload();
  }

  ngOnInit() {
    this.managementService.getQualification().subscribe(l => this.qualifications = l);
  }

}
