import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { EmailListDialog } from "./emailListDialog.component";
import { CommonModule } from '@angular/common';
import { emailValidatorDirective } from './emailValidator.directive';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, FormsModule, MatFormFieldModule, 
    MatInputModule
  ],
  declarations: [
    EmailListDialog, emailValidatorDirective
  ],
  entryComponents: [
    EmailListDialog
  ],
  exports: [
      EmailListDialog
  ],
  bootstrap: []
})

export class EmailListDialogModule { }