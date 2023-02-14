import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PublishedComponent } from './client/published/published.component';
import { ConfigureComponent } from './client/configure/configure.component';
import { ApprovalComponent } from './client/approval/approval.component';
import { AuditComponent } from './client/audit/audit.component';
import { AdminConfigComponent } from './admin/admin-config/admin-config.component';
import { LabConfigComponent } from './admin/lab-config/lab-config.component';
import { PublishedPreviewComponent } from './client/published-preview/published-preview.component';
import { ConfigurePreviewComponent } from './client/configure-preview/configure-preview.component';
import { ApprovalPreviewComponent } from './client/approval-preview/approval-preview.component';
import { MasterColorComponent } from './admin/master-color/master-color.component';
import { MasterFontComponent } from './admin/master-font/master-font.component';
import { CustomTemplatesComponent } from './admin/custom-templates/custom-templates.component';
import { CustomColorComponent } from './admin/custom-color/custom-color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ChipsModule } from 'primeng/chips';
// import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublishedComponent,
    ConfigureComponent,
    ApprovalComponent,
    AuditComponent,
    AdminConfigComponent,
    LabConfigComponent,
    PublishedPreviewComponent,
    ConfigurePreviewComponent,
    ApprovalPreviewComponent,
    MasterColorComponent,
    MasterFontComponent,
    CustomTemplatesComponent,
    CustomColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    // ChipsModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
