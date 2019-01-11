import { Component, OnInit } from '@angular/core';
import {CvModel} from 'src/app/Models/CvModel';
import { stringify } from '@angular/core/src/util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {

cvModel:CvModel = new CvModel;

  Imie:string='';
  Nazwisko:string='';
  DataUr:string='';
  Email:string='';
  NrTel:string='';
  Adres:string='';
  KodP:string='';
  Zainteresowania:string='';
  DataKwal:string='';
  KwalD:string='';
  DodKwal:string='';
  DataEdu:string='';
  Edu:string='';
  DodEdu:string='';
  Opis:string='';

  generateCv(){
    this.cvModel.Imie = this.Imie;
    this.cvModel.Nazwisko = this.Nazwisko;
    this.cvModel.DataUr = this.DataUr;
    this.cvModel.Email = this.Email;
    this.cvModel.NrTel = this.NrTel;
    this.cvModel.Adres = this.Adres;
    this.cvModel.KodP = this.KodP;
    this.cvModel.Zainteresowania = this.Zainteresowania;
    this.cvModel.DataKwal = this.DataKwal;
    this.cvModel.KwalD = this.KwalD;
    this.cvModel.DodKwal = this.DodKwal;
    this.cvModel.DataEdu = this.DataEdu;
    this.cvModel.Edu = this.Edu;
    this.cvModel.DodEdu = this.DodEdu;
    this.cvModel.Opis = this.Opis;
    localStorage.setItem('cvModel', JSON.stringify(this.cvModel));
    this.router.navigate(['cv/cvdownload']);
  }

  

  constructor(private router:Router) { }


  ngOnInit() {
  }

}
