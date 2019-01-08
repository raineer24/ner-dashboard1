import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { DataService } from './core/services/data.services';


//import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
    { path: '', pathMatch: 'full', loadChildren: './members/members.module#MembersModule',  canActivate: 
    [AuthGuard] },
    { path: 'members', loadChildren: './members/members.module#MembersModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/members' } // catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: [AuthGuard, DataService]
})
export class AppRoutingModule { }