import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../Services/alert.service';
import {AuthenticationService } from '../Services/authentication.service';
import {UserService} from '../Services/user.service';


@Component({
    selector:'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.scss'], })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Imie: ['', Validators.required],
            Nazwisko: ['', Validators.required],
            Login: ['', Validators.required],
            Haslo: ['', [Validators.required, Validators.minLength(6)]],
            Pesel: ['', [Validators.required, Validators.maxLength(11),Validators.minLength(11),Validators.pattern('[0-9]+')]],
            Wyksztalcenie: ['', Validators.required],
            EMail: ['', [Validators.required,Validators.email]],
            DataUrodzenia: ['', Validators.required],
            Plec: ['', Validators.required]
      });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; 
    console.log(this.registerForm.value)}

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}