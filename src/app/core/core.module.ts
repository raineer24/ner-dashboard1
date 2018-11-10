import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule, ],
    exports: [RouterModule, HttpClientModule, ],
    
})

export class CoreModule { }