import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WyUiModule } from './wy-ui/wy-ui.module';
import { PlayCountPipe } from './play-count.pipe';



@NgModule({
  declarations: [],
  imports: [
    // Zorro公共UI组件
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    WyUiModule
  ],
  exports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    WyUiModule,
  ]
})
export class ShareModule { }
