import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { updatePassword, UserCredential, UserInfo } from 'firebase/auth';
import { Router } from '@angular/router';
import { User } from '../model/authUser';
import { Usuario } from '../model/Usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser: Usuario;
  public userData: firebase.default.auth.UserCredential; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private usuarioService: UsuariosService
  ) {}

  public async checkUser() {
    if (JSON.parse(localStorage.getItem('UserCredential'))) {
      await this.setCurrentUser(
        JSON.parse(
          localStorage.getItem('UserCredential')
        ) as firebase.default.auth.UserCredential
      );
      return true;
    }
    return false;
  }

  public async setCurrentUser(
    usuario: firebase.default.auth.UserCredential
  ): Promise<boolean> {
    let setCurrentUser: boolean = false;
    let usuarios: Usuario[] = await this.usuarioService.getUsuarios();
    usuarios.forEach((element) => {
      if (usuario.user.uid == element.uid) {
        setCurrentUser = true;
        this.currentUser = element;
        this.userData = usuario;
      }
    });
    return setCurrentUser;
  }

  // Sign in with email/password
  async SignIn(email, password) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      //comprobar en base de datos y guardar el current user;
      //this.SetUserData(result.user);
      //console.log(this.currentUser);
      localStorage.setItem('UserCredential', JSON.stringify(result));
      if (await this.setCurrentUser(result)) {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
      } else {
        window.alert('El Usuario no se encuentra en la base de datos.');
      }
    } catch (error) {
      window.alert(error.message);
    }
  }
  // Sign up with email/password
  async SignUp(email, password) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      //this.SendVerificationMail();
      //this.SetUserData(result.user)
      return result.user.uid;
    } catch (error) {
      window.alert(error.message);
    }
  }
  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification().then(() => {
      //this.router.navigate(['verify-email-address']);
    });
  }
  // Reset Forggot password
  async ForgotPassword(passwordResetEmail) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email
    }
    return userRef.set(userData, {
      merge: true
    })
  }*/
  // Sign out
  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    //this.router.navigate(['sign-in']);
  }

  public async getCurrentUser() {
    //devolver el usuario actual.
    await this.checkUser();
    if (this.currentUser != null) return this.currentUser;
  }

  public async updatePass(newPassword: string): Promise<boolean> {
    console.log(this.userData);
    return await this.userData.user
      .updatePassword(newPassword)
      .then(() => {
        return true;
      })
      .catch((error) => {
        // An error ocurred
        console.log(error);
        return false;
      });
  }
}
