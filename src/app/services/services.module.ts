import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';

export const API_CONFIG = new InjectionToken('ApiConfigToken')

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // 声明一个调用API的前缀方便调用
    { provide: API_CONFIG, useValue: 'http://locahost:3000/' }
  ]
})
export class ServicesModule { }
