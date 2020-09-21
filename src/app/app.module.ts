import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreetsComponent } from './freets/freets.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ChangeNameComponent } from './change-name/change-name.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewFreetComponent } from './new-freet/new-freet.component';
import { EditFreetComponent } from './edit-freet/edit-freet.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FreetSearchComponent } from './freet-search/freet-search.component';
import { ErrorComponent } from './error/error.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FreetsComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    ChangeNameComponent,
    ChangePasswordComponent,
    NewFreetComponent,
    EditFreetComponent,
    DeleteUserComponent,
    FreetSearchComponent,
    ErrorComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
