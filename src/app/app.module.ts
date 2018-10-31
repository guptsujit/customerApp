import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { MultiplierPipe } from './home/multiplier.pipe';
import {StoreModule} from '@ngrx/store';
import {customerReducer} from './home/customer-reducer';
import { NgZoneDemoComponent } from './ng-zone-demo/ng-zone-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChildComponent,
    MultiplierPipe,
    NgZoneDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    StoreModule.forRoot({
      customer: customerReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
