import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './Management/category/category.component';
import { OfferComponent } from './Management/offer/offer.component';
import { ResultComponent } from './Management/result/result.component';
import { TypeComponent } from './Management/type/type.component';
import { RequiredComponent } from './Management/required/required.component';
import { AddTypeComponent } from './Management/type/add-type/add-type.component';
import { EditTypeComponent } from './Management/type/edit-type/edit-type.component';
import { AddOfferComponent } from './Management/offer/add-offer/add-offer.component';
import { EditOfferComponent } from './Management/offer/edit-offer/edit-offer.component';
import { AddCategoryComponent } from './Management/Category/add-category/add-category.component';
import { EditCategoryComponent } from './Management/Category/edit-category/edit-category.component';
import { QualificationComponent } from './Management/qualification/qualification.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // {path: '', redirectTo: '/app', pathMatch: 'full'},
    { path: 'users', component: UsersComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'users/user-details', component: UserDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'download', component: DownloadComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'management/category', component: CategoryComponent },
    { path: 'management/offer', component: OfferComponent },
    { path: 'management/result', component: ResultComponent },
    { path: 'management/type', component: TypeComponent },
    { path: 'management/required', component: RequiredComponent },
    { path: 'management/qualification', component: QualificationComponent },

    { path: 'management/type/add-type', component: AddTypeComponent },
    { path: 'management/type/edit-type/:id/:typ', component: EditTypeComponent },
    { path: 'management/offer/add-offer', component: AddOfferComponent },
    { path: 'management/offer/edit-offer/:idOferty/:nazwa/:opisOferty/:idKategorii/:opis', component: EditOfferComponent },
    { path: 'management/category/add-category', component: AddCategoryComponent },
    { path: 'management/category/edit-category/:idKategorii/:opis/:nazwa', component: EditCategoryComponent },






    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
