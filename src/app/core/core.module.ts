import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from 'src/app/core/services/data.services';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule, ],
    exports: [RouterModule, HttpClientModule, ],
    providers: [DataService, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }]
    
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

}
