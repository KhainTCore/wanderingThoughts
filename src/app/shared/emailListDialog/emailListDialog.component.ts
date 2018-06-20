import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "email-list-dialog",
    styleUrls: ["./emailListDialog.component.css"],
    templateUrl: "./emailListDialog.component.html"
})

export class EmailListDialog {

    private email: string;

    constructor(public dialogRef: MatDialogRef<EmailListDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    onNoClick(): void {
        this.dialogRef.close(null);
    }
}
