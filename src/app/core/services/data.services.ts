import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from '../../shared/interfaces';

@Injectable()
export class DataService {
    customersBaseUrl = 'http://localhost:4200/assets/data/customers.json';

    constructor(private http: HttpClient) { }

    

    getCustomers(): Observable<ICustomer[]> {

        
        return this.http.get<ICustomer[]>(this.customersBaseUrl)
        .pipe(
            map(customers => {
               return customers;
            }),
            catchError(this.handleError)
        )
            
    }

    /** POST: add a new hero to the database */
addCustomer (customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.customersBaseUrl, customer)
  }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

    



   

    
}