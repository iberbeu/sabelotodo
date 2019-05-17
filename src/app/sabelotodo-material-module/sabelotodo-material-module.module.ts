import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SabelotodoMaterialModuleModule { }
