import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublishedComponent } from './client/published/published.component';
import { ConfigureComponent } from './client/configure/configure.component';
import { ApprovalComponent } from './client/approval/approval.component';
import { AuditComponent } from './client/audit/audit.component';
import { PublishedPreviewComponent } from './client/published-preview/published-preview.component';
import { ConfigurePreviewComponent } from './client/configure-preview/configure-preview.component';
import { ApprovalPreviewComponent } from './client/approval-preview/approval-preview.component';
import { AdminConfigComponent } from './admin/admin-config/admin-config.component';
import { LabConfigComponent } from './admin/lab-config/lab-config.component';
import { MasterColorComponent } from './admin/master-color/master-color.component';
import { MasterFontComponent } from './admin/master-font/master-font.component';
import { CustomTemplatesComponent } from './admin/custom-templates/custom-templates.component';
import { CustomColorComponent } from './admin/custom-color/custom-color.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'client/published', component: PublishedComponent },
  { path: 'client/configure', component: ConfigureComponent },
  { path: 'client/approval', component: ApprovalComponent },
  { path: 'client/audit', component: AuditComponent },
  { path: 'client/published-preview', component: PublishedPreviewComponent },
  { path: 'client/configure-preview', component: ConfigurePreviewComponent },
  { path: 'client/approval-preview', component: ApprovalPreviewComponent },
  { path: 'admin/admin-config', component: AdminConfigComponent },
  { path: 'admin/lab-config', component: LabConfigComponent },
  { path: 'admin/master-color', component: MasterColorComponent },
  { path: 'admin/master-font', component: MasterFontComponent },
  { path: 'admin/custom-templates', component: CustomTemplatesComponent },
  { path: 'admin/custom-color', component: CustomColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
