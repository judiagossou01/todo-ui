import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/user';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private BASE_URL = 'http://localhost:8080';

  user = signal<User | null | undefined>(undefined);

  login(loginData: LoginData): Observable<User | null | undefined> {
    return this.http
      .post<User | null | undefined>(
        `${this.BASE_URL}/sessions/login`,
        loginData
      )
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token);
          const user = Object.assign(new User(), res);
          this.user.set(user);
        }),
        map(() => this.user())
      );
  }

  getCurrentUser(): Observable<User | null | undefined> {
    return this.http
      .get<User | null | undefined>(`${this.BASE_URL}/sessions/me`)
      .pipe(
        tap((res: User | null | undefined) => {
          const user = Object.assign(new User(), res);
          this.user.set(user);
        }),
        map(() => this.user())
      );
  }

  logout() {
    return this.http.get(`${this.BASE_URL}/sessions/logout`).pipe(
      tap((res: any) => {
        localStorage.removeItem('token');
        this.user.set(null);
      })
    );
  }
}

export interface LoginData {
  email: string;
  password: string;
}
