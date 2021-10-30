import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import {UserData} from './userdata.model';

@Injectable({providedIn: 'root'})
export class ConsumeService {
    constructor(private httpClient: HttpClient) { }

    URL = 'https://jsonplaceholder.typicode.com/todos/';

    URL2 = 'https://jsonplaceholder.typicode.com/users'

    getDateEndpoint(): Observable<User []> {
    return this.httpClient.get<User[]>(this.URL);
    }

    getDataFromUsers() : Observable<UserData[]> {
        return this.httpClient.get<UserData []> (this.URL2);

    }
}
    
