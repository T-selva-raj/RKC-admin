import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./auth/signin/signin.component').then(m => m.SigninComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/signin/signin.component').then(m => m.SigninComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent)
    },
    {
        path: 'app',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard-details/dashboard-details.component').then(m => m.DashboardDetailsComponent)
            },
            {
                path: 'teams',
                loadComponent: () => import('./teams/teams-list/teams-list.component').then(m => m.TeamsListComponent)
            },
            {
                path: 'team-managers',
                loadComponent: () => import('./team-managers/managers-list/managers-list.component').then(m => m.ManagersListComponent)
            },
            {
                path: 'admins',
                loadComponent: () => import('./admins/admins-list/admins-list.component').then(m => m.AdminsListComponent)
            },
            {
                path: 'gallery',
                loadComponent: () => import('./gallery/gallery-list/gallery-list.component').then(m => m.GalleryListComponent)
            },
            {
                path: 'gellery/add',
                loadComponent: () => import('./gallery/gallery-add/gallery-add.component').then(m => m.GalleryAddComponent)
            },
            {
                path: 'match-control/fixtures',
                loadComponent: () => import('./match-control/fixtures/fixtures.component').then(m => m.FixturesComponent)
            },
            {
                path: 'match-control/status',
                loadComponent: () => import('./match-control/status/status.component').then(m => m.StatusComponent)
            },
            {
                path: 'reports',
                loadComponent: () => import('./reports/reports.component').then(m => m.ReportsComponent)
            },
            {
                path: 'settings/all',
                loadComponent: () => import('./settings/settings/settings.component').then(m => m.SettingsComponent)
            }
        ]
    },
];
