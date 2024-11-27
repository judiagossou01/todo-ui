import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './pages/todo/todo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PanelComponent } from './pages/panel/panel.component';
import { UserComponent } from './pages/user/user.component';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    { 
        path:  'panel',
        component: PanelComponent,
        canActivate: [authGuard],
        children: [
            { path: 'todos', component: TodoComponent },
            { path: 'users', component: UserComponent, canActivate: [adminGuard] }
        ],
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];
