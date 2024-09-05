import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  open(component: ComponentType<any>, data: {[k: string]: string}): Observable<any> {
    const dialogRef = this.dialog.open(component, { data});

    return dialogRef.afterClosed();
  }
}