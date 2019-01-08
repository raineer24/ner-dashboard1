import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [LoginRoutingModule, CommonModule, ReactiveFormsModule],
    declarations: [LoginRoutingModule.components]
})
export class LoginModule { }
