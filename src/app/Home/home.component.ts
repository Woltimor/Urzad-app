import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ManagementService } from '../Services/management.service';
import { User } from '../Models/User';
import {  AuthenticationService } from '../Services/authentication.service';
import { UserService } from '../Services/user.service';
import { QualificationModel } from '../Models/QualificationModel';
import { AchievementModel } from '../Models/AchievementModel';


@Component({ templateUrl: 'home.component.html',
styleUrls: ['./home.scss'],
providers:[ManagementService] })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    userAtributes: User;
    currentUserSubscription: Subscription;
    achievementModel:AchievementModel = new AchievementModel;
    users: User[] = [];
    toggleCategories=false;
    toggleAchievements=false;
    toggleQualifications=false;
    qualifications:QualificationModel;
    constructor(
        private authenticationService: AuthenticationService,
        private managementService:ManagementService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }


    ngOnInit() {
        console.log(this.currentUser)
        // this.loadAllUsers();
        this.managementService.getQualification().subscribe(l => this.qualifications = l);
        this.managementService.getUserAtributes(this.currentUser.idOsoby).subscribe(l=>this.userAtributes=l);
        localStorage.removeItem('cvModel');
    }

    ngOnDestroy() {
        this.currentUserSubscription.unsubscribe();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllUsers()
    //     });
    // }
    showCategories(){
        this.toggleCategories=!this.toggleCategories;
    }

    showAchievements(){
        this.toggleAchievements=!this.toggleAchievements;
    }
    showQualifications(){
        this.toggleQualifications=true;
    }

    function(id){
        this.achievementModel.IdOsoby = this.currentUser.idOsoby
        this.achievementModel.Idkwalifikacji= parseInt(id.target.value);
        this.toggleQualifications=false;
        this.managementService.postAchievement(this.achievementModel).subscribe(l => this.achievementModel = l);
        window.location.reload();
    }

    // private loadAllUsers() {
    //     this.userService.getAll().pipe(first()).subscribe(users => {
    //         this.users = users;
    //     });
    // }
}