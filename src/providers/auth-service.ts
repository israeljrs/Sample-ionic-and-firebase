import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    login(email, pwd): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, pwd);
    }

    logout() {
        this.afAuth.auth.signOut();
    }

}