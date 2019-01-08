import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from '../../shared/interfaces';

@Injectable()
export class DataService {
    loginObject: ICustomer;
    //customersBaseUrl = 'http://localhost:4200/assets/data/customers.json';
    url = "/api/customers";
    
    constructor(private http: HttpClient) { }

    

    getCustomers(): Observable<ICustomer[]> {

        
        return this.http.get<ICustomer[]>(this.url)
        .pipe(
            map(customers => {
               localStorage.setItem('customers', JSON.stringify(customers));
               const users = JSON.parse(localStorage.getItem('customers'));
               //console.log(customers[0].token);
               return customers;
            }),
            catchError(this.handleError)
        )
            
    }

   

    createCustomer(data): Observable<ICustomer> {
       // this.loginObject = { username: username, password: password};
        let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');
        let options = {
            headers: httpHeaders
        };
        
        return this.http.post<ICustomer>(this.url, data,  options).pipe(
            map(data => {
                localStorage.setItem('data', JSON.stringify(data));
                //const datas = JSON.parse(localStorage.getItem('data'));
                console.log(data.token);
                console.log(data);
                return data;
            }),
            catchError(this.handleError)
        );
    }

    isAuthenticated(): boolean {
        const userData = JSON.parse(localStorage.getItem('data'));
        if(!userData) {
            return false;
        } else {
            
        }
    }

    



  postCustomer(customer: ICustomer): Observable<HttpResponse<ICustomer>> {
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
    });
    return this.http.post<ICustomer>(this.url, customer, {
        
            headers: httpHeaders,
            observe: 'response'
        }
    )
    ;
    
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