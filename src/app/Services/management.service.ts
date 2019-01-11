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
import { QualificationModel } from '../Models/QualificationModel';
import { PermissionModel } from '../Models/PermissionModel';
import { ProposalModel } from '../Models/ProposalModel';
import { User } from '../Models/User';
import { AchievementModel } from '../Models/AchievementModel';
import { AccessModel } from '../Models/AccessModel';
import { ShowAchievementsModel } from '../Models/ShowAchievementModel';
import { ExpectedAchievementsModel } from '../Models/ExpectedAchievementsModel';
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
    postQualification(postQualifications: QualificationModel) {
        return this.httpClient.post<QualificationModel>(this.myUrl + 'management/kwalifikacje', postQualifications);
    }
    postProposal(proposalModel: ProposalModel) {
        return this.httpClient.post<ProposalModel>(this.myUrl + 'management/wniosek/', proposalModel);
    }
    postAchievement(achievementModel: AchievementModel) {
        return this.httpClient.post<AchievementModel>(this.myUrl + 'management/osiagniecia/', achievementModel);
    }
    postExpectedAchievement(expectedAchievementsModel: ExpectedAchievementsModel) {
        return this.httpClient.post<ExpectedAchievementsModel>(this.myUrl + 'management/wymagane/', expectedAchievementsModel);
    }
    /////////////////////////////////////////////////////////////
    putOffer(postOfferCategoryModel: PostOfferCategoryModel, id:number) {
        return this.httpClient.put<PostOfferCategoryModel>(this.myUrl + 'management/oferty/'+ id, postOfferCategoryModel);
    }
    putOfferCategory(postCategoryTypeModel: PostCategoryTypeModel,id:number) {
        return this.httpClient.put<PostCategoryTypeModel>(this.myUrl + 'management/kategorie/'+ id, postCategoryTypeModel);
    }
    putOfferType(offerTypModel: TypModel, id:number) {
        return this.httpClient.put<TypModel>(this.myUrl + 'management/typy/'+ id, offerTypModel);
    }
    putPermission(permissionModel: PermissionModel, id:number) {
        return this.httpClient.put<PermissionModel>(this.myUrl + 'management/uprawnienia/'+ id, permissionModel);
    }
    putAccess(accessModel: AccessModel, id:number) {
        return this.httpClient.put<AccessModel>(this.myUrl + 'management/dostep/'+ id, accessModel);
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
    getQualification(): Observable<QualificationModel>{
        return this.httpClient.get<QualificationModel>(this.myUrl +'management/kwalifikacje');
    }
    getUserAtributes(id:number): Observable<User>{
        return this.httpClient.get<User>(this.myUrl +'personalat/'+id);
    }
    getAchievements(id:number): Observable<ShowAchievementsModel>{
        return this.httpClient.get<ShowAchievementsModel>(this.myUrl +'personalat/osiagniecia/'+id);
    }

    
    

}
