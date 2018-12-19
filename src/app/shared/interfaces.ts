import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    username: string;
    password: string;
   
}

export interface ICustomers{
    customers: Array<ICustomer>
 }
 

export interface IUserLogin {
    email: string;
    password: string;
}