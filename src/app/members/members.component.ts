import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.services';
import { ICustomer } from '../shared/interfaces';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  customers: ICustomer[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCustomers().subscribe((customers: ICustomer[]) => {
      this.customers = customers;
      console.log(customers);
    });
   
  }

}
