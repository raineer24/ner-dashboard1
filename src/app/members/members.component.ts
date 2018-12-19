import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.services';
import { ICustomer } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';


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
  customer: any;
  allCustomers$: Observable<ICustomer[]>;
  private customersBaseUrl = 'http://localhost:4200/assets/data/customers.json';
  constructor(private dataService: DataService, private http: HttpClient, private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required]) ]
    });
    
   
       //this.createCustomer();
       this.saveCustomer();
       
  }

  onFormSubmit() {
    this.dataSaved = false;
    let customer = this.customerForm.value;
    this.dataService.getCustomers().subscribe((icustomers) => {
     this.createCustomer(customer);
    });
  }

  createCustomer(customer: ICustomer) {
    this.dataService.createCustomer(customer).subscribe(customer => {
      console.log(customer);
      //this.loadCustomers();
    },
    catchError(this.handleError)
    )
  }
  
  get f() {
    return this.customerForm.controls;
  }

  saveCustomer() {
    let customer: ICustomer;
        this.dataService.postCustomer(this.customer).subscribe(res => {
          let cstmr: ICustomer = res.body;
          console.log(cstmr.id);
          console.log(res.headers.get('Content-Type'));
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occured.
            console.log('An error occured:', err.error.message)
            
          }
        }
        );
  
}

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