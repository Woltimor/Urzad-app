import { Component, ViewChild, ElementRef } from '@angular/core';
import { CvModel } from 'src/app/Models/CvModel';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-download',
  templateUrl: './cv-download.component.html',
  styleUrls: ['./cv-download.component.scss']
})
export class CvDownloadComponent{
  @ViewChild('content') content: ElementRef;

  cvModel:CvModel = JSON.parse(localStorage.getItem('cvModel'));
  constructor(private router:Router) { }
  
  public downloadCV(){

    return xepOnline.Formatter.Format('content',{render:'download'});

  }



}
