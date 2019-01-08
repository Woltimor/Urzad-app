import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../Models/CategoryModel';
import { OfferModel } from '../Models/OfferModel';
import { TypModel } from '../Models/TypModel';
import { environment } from 'src/environments/environment';
import { TypeCategoryModel } from '../Models/TypeCategoryModel';
import { CategoryOfferModel } from '../Models/CategoryOfferModel';
import {PostCategoryTypeModel} from '../Models/PostCategoryTypeModel';
import {PostOfferCategoryModel} from '../Models/PostOfferCategoryModel';
@Injectable()
export class ManagementService {
    public myUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {}
    postOffer(offerModel: PostOfferCategoryModel) {
        return this.httpClient.post<PostOfferCategoryModel[]>(this.myUrl + 'management/oferty', offerModel);
    }
    postOfferCategory(postCategoryTypeModel: PostCategoryTypeModel) {
        return this.httpClient.post<PostCategoryTypeModel[]>(this.myUrl + 'management/kategorie', postCategoryTypeModel);
    }
    postOfferType(offerTypModel: TypModel) {
        return this.httpClient.post<TypModel[]>(this.myUrl + 'management/typy', offerTypModel);
    }
    /////////////////////////////////////////////////////////////
    putOffer(offerModel: OfferModel, id:number) {
        return this.httpClient.put<OfferModel>(this.myUrl + 'management/oferty/'+ id, offerModel);
    }
    putOfferCategory(postCategoryTypeModel: PostCategoryTypeModel,id:number) {
        return this.httpClient.put<PostCategoryTypeModel>(this.myUrl + 'management/kategorie/'+ id, postCategoryTypeModel);
    }
    putOfferType(offerTypModel: TypModel, id:number) {
        return this.httpClient.put<TypModel>(this.myUrl + 'management/typy/'+ id, offerTypModel);
    }
    /////////////////////////////////////////////////////////////
    getOffer(): Observable<OfferModel>{
        return this.httpClient.get<OfferModel>(this.myUrl +'management/oferty');
    }
    getOfferCategory(): Observable<CategoryModel>{
        return this.httpClient.get<CategoryModel>(this.myUrl +'management/kategorie');
    }
    
    getOfferType(): Observable<TypModel>{
        return this.httpClient.get<TypModel>(this.myUrl +'management/typy');
    }


    getTypeCategory(): Observable<TypeCategoryModel>{
        return this.httpClient.get<TypeCategoryModel>(this.myUrl +'management/typy/kategorie');
    }
    getCategoryOffer(): Observable<CategoryOfferModel>{
        return this.httpClient.get<CategoryOfferModel>(this.myUrl +'management/kategorie/oferty');
    }

    
    

}
