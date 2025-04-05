import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GenerateQrCodeComponent } from './visitor/generate-qr-code/generate-qr-code.component';
import { GetQrCodeComponent } from './visitor/get-qr-code/get-qr-code.component';
import { RegisterVisitorComponent } from './visitor/register-visitor/register-visitor.component';
import { ValidateAccessComponent } from './access/validate-access/validate-access.component';

export const routes: Routes = [
    //user routes
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    
    //visitor routes
    {path: 'generateqr', component: GenerateQrCodeComponent},
    {path: 'getqr', component: GetQrCodeComponent},
    {path: 'registervisitor', component: RegisterVisitorComponent},

    //validate routes
    {path: 'validate', component: ValidateAccessComponent}
];
