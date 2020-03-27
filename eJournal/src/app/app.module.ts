import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './error/error.component';
import { DirectorComponent } from './director/director.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { StudNowComponent } from './stud-now/stud-now.component';
import { StudAllTimeComponent } from './stud-all-time/stud-all-time.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AuthComponent,
    ErrorComponent,
    DirectorComponent,
    TeacherComponent,
    StudentComponent,
    StudNowComponent,
    StudAllTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
