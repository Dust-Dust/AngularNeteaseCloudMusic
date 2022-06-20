import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 令牌
export const API_CONFIG = new InjectionToken('ApiConfigToken')

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // 声明一个baseUrl的前缀方便调用
    { provide: API_CONFIG, useValue: 'http://localhost:3000/' }
  ]
})
export class ServicesModule { }
