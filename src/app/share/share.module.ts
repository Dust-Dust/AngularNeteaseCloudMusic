import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [],
  imports: [
    // Zorro公共UI组件
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ]
})
export class ShareModule { }
