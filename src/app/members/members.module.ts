import { NgModule } from '@angular/core';
import { MembersRoutingModule } from './members-routing.module';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [MembersRoutingModule, CommonModule, ReactiveFormsModule],
    declarations: [MembersRoutingModule.components]
})
export class MembersModule { }
