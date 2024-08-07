import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  currentUser!: any;

  // async là hàm cần đánh giấu thời gian đợi
  async login() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    this.currentUser = credential.user;
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }
}
