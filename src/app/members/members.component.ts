import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.services';
import { ICustomer } from '../shared/interfaces';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
//import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})


export class MembersComponent implements OnInit {
  customers: any; // customers: ICustomer[];
  customerForm: FormGroup;
  newCustomers: any;
  id: number;
  //firstName: any;
  lastName: any;
  dataSaved = false;
  age: any;
  city: any;
  country: any;
  address:any;
  gender:any;
  user: any = {};
  customer: ICustomer[];
  allCustomers$: Observable<ICustomer[]>;
  loginSubs: Subscription;
  data: any;
  //private customersBaseUrl = 'http://localhost:4200/assets/data/customers.json';
  constructor(private dataService: DataService, private http: HttpClient, private formBuilder:FormBuilder) { }

  ngOnInit() {

 
    this.dataService.getCustomers().subscribe((customer) => {
      this.loadCustomers();
      this.customer = customer;
      console.log(customer);
    });
       //this.createCustomer();
       //this.saveCustomer();
       
  }

  onFormSubmit() {
    this.dataSaved = false;
    let customer = this.customerForm.value;
    console.log(customer);
    const data = {
     'username': customer.username,
     'password': customer.password,
     'firstName': customer.firstName
    }
    // this.dataService.getCustomers().subscribe((icustomers) => {
    //  this.createCustomer(data);
    // });
    if (this.customerForm.valid) {
     this.dataService.createCustomer(data).subscribe(customer => {
        this.loadCustomers();
        console.log(data);
      }, catchError(this.handleError))
    }
   
  }

  // createCustomer(data) {
  //   let customer = this.customerForm.value;
  //   const data = {
  //     'userName': customer.username,
  //     'password': customer.password
  //    }
  //   this.dataService.createCustomer(data).subscribe(customer => {
  //     console.log(customer);
  //     this.loadCustomers();
  //   },
  //   catchError(this.handleError)
  //   )
  // }
  
  get f() {
    return this.customerForm.controls;
  }

//   saveCustomer() {
//     let customer = {id: '2', title: 'Java Functional Interface',
//     category: 'Java 8', writer: 'Krishna'};
//         this.dataService.postCustomer(this.customer).subscribe(res => {
//           let cstmr: ICustomer = res.body;
//           console.log('saveCustomer');
//           console.log(cstmr.id);
//           console.log(res.headers.get('Content-Type'));
//         },
//         (err: HttpErrorResponse) => {
//           if (err.error instanceof Error) {
//             // A client-side or network error occured.
//             console.log('An error occured:', err.error.message)
            
//           }
//         }
//         );
  
// }

loadCustomers() {
  this.allCustomers$ = this.dataService.getCustomers();
}
private handleError(error: HttpErrorResponse) {
  console.error('server error:', error);
  if (error.error instanceof Error) {
    const errMessage = error.error.message;
    return Observable.throw(errMessage);
    // Use the following instead if using lite-server
    // return Observable.throw(err.text() || 'backend server error');
  }
  return Observable.throw(error || 'Server error');
}

//   createCustomer(customer: ICustomer){
//     let customer:ICustomer = {
//       id: this.id,
//       firstName: 'this.firstName',
//       lastName: 'this.lastName',
//      gender: 'this.gender'
//     };
//  // uses instance of data access service to call createTraveller function   
//  this.dataService.addCustomer(customer)
//       .subscribe(
//         (customer => {
//           console.log(customer);
//         }
//       ));
//   }
}