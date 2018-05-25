import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class MessageService {

    constructor(private snackBar: MatSnackBar) { }

    log(msg: string, actions?: string, duration?: number): void {
        this.snackBar.open(msg, actions, {duration});
    }
}
