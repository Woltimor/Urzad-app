import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ConnectionService } from './Connection.service';
import { DownloadComponent } from './download/download.component';
import { AlertComponent } from './Alert/alert.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TypeComponent } from './Management/type/type.component';
import { RequiredComponent } from './Management/required/required.component';
import { ResultComponent } from './Management/result/result.component';
import { OfferComponent } from './Management/offer/offer.component';
import { CategoryComponent } from './Management/category/category.component';
import { EditCategoryComponent } from './Management/Category/edit-category/edit-category.component';
import { AddCategoryComponent } from './Management/Category/add-category/add-category.component';
import { AddOfferComponent } from './Management/offer/add-offer/add-offer.component';
import { EditOfferComponent } from './Management/offer/edit-offer/edit-offer.component';
import { EditTypeComponent } from './Management/type/edit-type/edit-type.component';
import { AddTypeComponent } from './Management/type/add-type/add-type.component';
import { QualificationComponent } from './Management/qualification/qualification.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    UsersComponent,
    UserDetailsComponent,

    ContactComponent,
    DownloadComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TypeComponent,
    RequiredComponent,
    ResultComponent,
    OfferComponent,
    CategoryComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    AddOfferComponent,
    EditOfferComponent,
    EditTypeComponent,
    AddTypeComponent,
    QualificationComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConnectionService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
