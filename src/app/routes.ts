import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from "./experience/experience.component";
import { DemosComponent } from "./demos/demos.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HouseOfLeisureComponent } from "./house-of-leisure/house-of-leisure.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListenComponent } from "./listen/listen.component";
import {AuthGuard} from "./shared/auth.guard";
import {SignupComponent} from "./unprotected/signup.component";
import {SigninComponent} from "./unprotected/signin.component";
import {ProtectedComponent} from "./protected/protected.component";
//import {PageEditorComponent} from "./page-editor/page-editor.component";
//redirectTo: '/signup',
export const routes = [

    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Admin Dashboard'
        }
    },
    {
        path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    {
        path: 'signup', component: SignupComponent},//, canActivate: [AuthGuard]
    {
        path: 'signin', component: SigninComponent},
    {
        path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'demos',
        component: DemosComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'houseofleisure',
        component: HouseOfLeisureComponent
    },
    {
        path: 'listen',
        component: ListenComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }

];
export const routing = RouterModule.forRoot(routes, {useHash: true})
