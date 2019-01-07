import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';


@Injectable()
export class DownloadService {
    public myUrl = environment.apiUrl;
    file:string='file/';
    Files:String[]=['umowa_ind120718.doc','wniosek_ind120718.docx','wniosek280717.doc','zal1_280717.doc','zasady_ind120718.docx'];
    constructor(private httpClient: HttpClient) {}

     getFile(id): Observable<Blob> {
         return this.httpClient.get(this.myUrl + this.file + this.Files[id] , { responseType: 'blob'})
     }
}
