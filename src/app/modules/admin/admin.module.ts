import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUsersComponent } from './create-users/create-users.component';
import { CreateTestComponent } from './create-test/create-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateUsersComponent, CreateTestComponent]
})
export class AdminModule { }
