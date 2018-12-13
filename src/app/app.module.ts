import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from  './core/core.module'
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//For InMemory testing 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(TestData),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
