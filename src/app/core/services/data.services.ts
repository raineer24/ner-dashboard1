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
            map(data1 => {
                localStorage.setItem('data2', JSON.stringify(data));
                //const datas = JSON.parse(localStorage.getItem('data'));
                
                console.log(data1);
                return data1;
            }),
            catchError(this.handleError)
        );
    }
    login(data): Observable<ICustomer> {
        // this.loginObject = { username: username, password: password};
         let httpHeaders = new HttpHeaders()
             .set('Content-Type', 'application/json');
         let options = {
             headers: httpHeaders
         };
         
         return this.http.post<ICustomer>(this.url, data,  options).pipe(
             map(user => {
                 this.loginObject = user;
                 console.log(this.loginObject);
                 localStorage.setItem('data2', JSON.stringify(data));
                 //const datas = JSON.parse(localStorage.getItem('data'));
                 
                 //console.log(data1);
                 return user;
             }),
             catchError(this.handleError)
         );
     }

    isAuthenticated(): boolean {
        const userData = JSON.parse(localStorage.getItem('data2'));
        console.log(userData);
        if(!userData) {
            return false;
        } else {
            console.log('what now?');
            console.log(userData);
            return true;
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