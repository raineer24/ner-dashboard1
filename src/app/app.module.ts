import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from  './core/core.module'
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
