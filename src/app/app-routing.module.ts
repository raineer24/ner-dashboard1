import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

//import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/members' },
    { path: 'members', loadChildren: './members/members.module#MembersModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/members' } // catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }