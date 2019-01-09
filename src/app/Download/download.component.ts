import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../Services/download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  providers: [DownloadService]
})
export class DownloadComponent implements OnInit {
  constructor(private downloadService: DownloadService) { }

downloadFile(id){
  this.downloadService.getFile(id).subscribe(fileData => 
    {
    let b:any = new Blob([fileData], { type: 'application/text' });
    var url= window.URL.createObjectURL(b);
    var a = document.createElement('a');
    var filename = 'wniosek'+ id +'.doc';
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
    }, 
  );
}
  ngOnInit() {}
}