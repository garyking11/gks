import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {HttpModule} from '@angular/http';
// Pipes
import {KeysPipe} from "./pipes/keys.pipe";
import {AddSpaceBeforeCapitalPipe} from "./pipes/add-space-before-capital";
import {ReplaceSpaceDash} from "./pipes/replace-space-dash.pipe";
import {UniqueItemPipe} from "./pipes/unique-item-pipe.pipe";
import {CapitalizeWordPipe}  from "./pipes/capitalize-word.pipe";
import {CapitalizePipe}  from "./pipes/capitalize.pipe";
// Components
import {AppComponent} from './app.component';
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {DemosComponent} from "./demos/demos.component";
import {ExperienceComponent} from "./experience/experience.component";
import {routing} from "./routes";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HouseOfLeisureComponent} from "./house-of-leisure/house-of-leisure.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListenComponent} from "./listen/listen.component";
import {AuthService} from "./shared/auth.service";
import {ProtectedComponent} from "./protected/protected.component";
import {SignupComponent} from "./unprotected/signup.component";
import {SigninComponent} from "./unprotected/signin.component";
import {AuthGuard} from "./shared/auth.guard";
import {HeaderComponent} from "./shared/header.component";
import {AccordionModule} from "ng2-accordion";
//Services
import {CopyDataToClipboardService} from "../services/copy-to-clipboard.service";
import {SiteContextProviderService} from "./site-context-provider/services/site-context-provider.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    DemosComponent,
    ListenComponent,
    DashboardComponent,
    ExperienceComponent,
    HouseOfLeisureComponent,
    PageNotFoundComponent,
    CapitalizePipe,
    CapitalizeWordPipe,
    UniqueItemPipe,
    ReplaceSpaceDash,
    AddSpaceBeforeCapitalPipe,
    KeysPipe,
    ProtectedComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,

    HttpModule,
    routing,
    AccordionModule
  ],
  providers: [
    FormBuilder,
    Validators,
    AuthService,
    AuthGuard,
    CopyDataToClipboardService,
    SiteContextProviderService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule {
}
