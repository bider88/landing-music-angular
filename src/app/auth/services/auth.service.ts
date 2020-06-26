import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription;
  // tslint:disable-next-line: variable-name
  private _user: UserModel;

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  get user() {
    return this._user;
  }

  initAuthListener() {
    this.auth.authState.subscribe(
      user => {
        this.removeUser(user);
      }
    );
  }

  loginUser(user: UserModel): Observable<any> {
    const { email, password } = user;
    return new Observable(observer => {
      this.auth.signInWithEmailAndPassword(email, password)
      .then(credential => {
        observer.next(credential);
        observer.complete();
      })
      .catch(error => observer.error(error));
    });
  }

  createUser(user: UserModel): Observable<any> {
    const { email, password } = user;
    return new Observable(observer => {
      this.auth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        const { user: { uid } } = credential;
        user.uid = uid;
        return this.saveUser(user);
      })
      .then(() => {
        observer.next();
        observer.complete();
      })
      .catch(error => observer.error(error));
    });
  }

  logoutUser(): Observable<any> {
    return new Observable(observer => {
      this.auth.signOut()
      .then(() => {
        observer.next();
        observer.complete();
      })
      .catch(error => observer.error(error));
    });
  }

  isAuth(): Observable<any> {
    return this.auth.authState.pipe(
      map(user => user !== null)
    );
  }

  saveUser(user: UserModel): Promise<any> {
    return new Promise((resolve, reject) => {
      delete user.password;
      this.firestore.doc(`${user.uid}/user`)
      .set(user)
      .then(() => resolve())
      .catch(error => reject(error));
    });
  }

  private removeUser(user: any) {
    if (user) {
      this.getUser(user);
    } else {
      this._user = null;
      if (localStorage.getItem('user')) {
        localStorage.remove('user');
      }
      if (this.userSubscription) {
        this.userSubscription.unsubscribe();
      }
    }
  }

  private getUser(user: any) {
    this.userSubscription = this.firestore.doc(`${user.uid}/user`).valueChanges().subscribe(
      (fUser: any) => {
        const { uid, name, email } = fUser;
        const newUser: UserModel =  { uid, name, email } as UserModel;
        this._user = { ...newUser } as UserModel;
        localStorage.setItem('user', JSON.stringify(newUser));
      }
    );
  }
}
