import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Models/User';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    public myUrl = environment.apiUrl;
    getAll() {
        return this.http.get<User[]>(`${this.myUrl}users`);
    }

    getById(id: number) {
    
        return this.http.get(`${this.myUrl}users/${id}`);
    }

    register(user: User) {
        console.log(user);
        return this.http.post(`${this.myUrl}users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.myUrl}users/${user.idOsoby}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.myUrl+'users/'+{id});
    }
    getUsers(): Observable<User> {
        return this.http.get<User>(this.myUrl + 'Personalat');
    }
}