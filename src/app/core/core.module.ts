import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // 服务管理模块
    ServicesModule,
    PagesModule,
    ShareModule,
    // 最后加载路由模块
    AppRoutingModule
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
  // 存放服务
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  /**
   * 使只有AppModule才可以导入该模块：因为目前AppModule已经存在了CoreModule，那么如果存在CoreModule，则抛出错误
   * @SkipSelf()：跳过父Module执行，避免无限循环
   * @Optional(): CoreModule不存在时抛出null
   * 所以逻辑为：父模块已经导入了CoreModule，且我只允许父模块导入CoreModule，跳过父模块后导入CoreModule的组件应该为空，如果不为空则说明有导入的，那么就直接抛出异常
   */

  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }
}
