import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ManagementService } from '../Services/management.service';
import { User } from '../Models/User';
import {  AuthenticationService } from '../Services/authentication.service';
import { UserService } from '../Services/user.service';


@Component({ templateUrl: 'home.component.html',
styleUrls: ['./home.scss'],
providers:[ManagementService] })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    userAtributes: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    toggleCategories=false;
    toggleAchievements=false;


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
        // this.loadAllUsers();
        this.managementService.getUserAtributes(this.currentUser.idOsoby).subscribe(l=>this.userAtributes=l);
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
    // private loadAllUsers() {
    //     this.userService.getAll().pipe(first()).subscribe(users => {
    //         this.users = users;
    //     });
    // }
}