import {Routes} from '@angular/router';
import {HomePage} from "./home/home.component";

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomePage
    },
    // {
    //     path: 'login',
    //     component: LoginPage
    // },
    {
        path: 'home',
        component: HomePage,
    },
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'register-product',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'product',
    //             component: RegisterProductPage
    //         },
    //         {
    //             path: 'manage-product',
    //             component: ManageProductsPage
    //         },
    //         {
    //             path: 'send-notification',
    //             component: SendNotificationPage
    //         },
    //         {
    //             path: 'manage-solicitation',
    //             component: ManageSolicitationPage
    //         },
    //         {
    //             path: 'grains-price',
    //             component: BeansPricePage
    //         },
    //         {
    //             path: 'check-new-user',
    //             component: CheckNewUserPage
    //         },
    //         {
    //             path: 'register-admin',
    //             component: RegisterAdminPage
    //         },
    //         {
    //             path: 'change-password',
    //             component: ChangePasswordPage
    //         }
    //     ],
    //     resolve: {
    //         user: AuthGuard
    //     }
    // },
    {path: '**', redirectTo: 'home'}
];
