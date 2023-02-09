import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductAdminComponent } from '../product-admin/product-admin.component';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductAdminComponent>) { }

  ngOnInit(): void {
  }

}
