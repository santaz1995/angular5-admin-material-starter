import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'app/app.component';
import { SpinnerComponent } from 'app/common/components/spinner/spinner.component';
import { MaterialModule } from 'app/material.module';
import { FullComponent } from 'app/common/components/layouts/full/full.component';
import { AppHeaderComponent } from 'app/common/components/layouts/full/header/header.component';
import { AppSidebarComponent } from 'app/common/components/layouts/full/sidebar/sidebar.component';
import { CommonModule } from 'app/common/common.module';
import { AppRouting } from 'app/app.routing';
import { environment } from 'environments/environment';
import { TokenInterceptor } from 'app/common/token.interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications/dist';
import { DeleteEntityModalComponent } from 'app/common/modals/delete-entity/delete-entity-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
    AppRouting,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,

    /**
     * Modals
     */
    DeleteEntityModalComponent,
  ],
  providers: [
    {
      provide: 'backendUrl',
      useValue: environment.backendUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  entryComponents: [
    DeleteEntityModalComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
