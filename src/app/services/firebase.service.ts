import { getAuth, signInWithEmailAndPassword, Auth, UserCredential } from "@firebase/auth";
import { initializeApp, FirebaseApp, FirebaseOptions } from "@firebase/app";
import { from, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root",
})
export class FirebaseService {
    firebaseConfig: FirebaseOptions = environment.firebaseOptions;
    private _app: FirebaseApp;
    private _auth: Auth;
    constructor() {
        this._app = initializeApp(this.firebaseConfig);
        this._auth = getAuth(this._app);
    }

    authenticate(email: string, password: string): Observable<UserCredential> {
        return from(signInWithEmailAndPassword(this._auth, email, password));
    }
}
