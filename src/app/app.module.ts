import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { AddComponent } from './add/add.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListRestoComponent,
    LoginComponent,
    RegisterComponent,
    UpdateRestoComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path:'', component: HomeComponent},
        {path: 'add' , component: AddComponent},
        {path: 'list', component:  ListRestoComponent},
        {path: 'login', component:  LoginComponent},
        {path: 'login/list', component: ListRestoComponent},
        {path: 'register', component:  RegisterComponent},
        {path: 'update-resto/:id', component:  UpdateRestoComponent},
        {path: '**', component: PagenotfoundComponent}
        
      ]
    )
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
