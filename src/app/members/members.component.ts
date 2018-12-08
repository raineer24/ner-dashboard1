import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.services';
import { ICustomer } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})


export class MembersComponent implements OnInit {
  customers: any; // customers: ICustomer[];
  newCustomers: any;
  id: number;
  firstName: any;
  lastName: any;
  age: any;
  city: any;
  country: any;
  address:any;
  gender:any;
  customer: any;
  private customersBaseUrl = 'http://localhost:4200/assets/data/customers.json';
  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit() {
    
    this.dataService.getCustomers().subscribe((icustomers) => {
      this.customers = icustomers;
      
       });
       //this.createCustomer();
       
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