import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs/Rx";

import { User } from "./user.interface";

declare var firebase: any;

@Injectable()
export class AuthService {
    constructor(private router: Router) {
    }

    signupUser(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userInfo) => {
                // You are now logged in
                // Maybe redirect to the first logged in page
                  this.router.navigate([ 'dashboard' ]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    signinUser(user: User) {
        //console.log('signinUser');
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }

    logout() {
        firebase.auth().signOut();
        this.router.navigate(['/home']);
    }

    isAuthenticated(): Observable<boolean> {
        const state = new Subject<boolean>();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                state.next(true);

            } else {

                state.next(false);

            }
        });
        return state.asObservable();
    }
}
