import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../Models/CategoryModel';
import { OfferModel } from '../Models/OfferModel';
import { AllOffersModel } from '../Models/AllOffersModel';
import { environment } from 'src/environments/environment';

@Injectable()
export class OfferService {
    public myUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {}

    // getTypeOffer(): Observable<OfferTypModel>{
    //     return this.httpClient.get<OfferTypModel>(this.myUrl +'management/typy');
    // }
    getCategoryOffer(): Observable<CategoryModel>{
        return this.httpClient.get<CategoryModel>(this.myUrl +'management/kategorie');
    }
    getOffer(): Observable<OfferModel>{
        return this.httpClient.get<OfferModel>(this.myUrl +'management/oferty');
    }
    getAllOffers(): Observable<AllOffersModel[]>{
        return this.httpClient.get<AllOffersModel[]>(this.myUrl +'offers/all');
    }
}
