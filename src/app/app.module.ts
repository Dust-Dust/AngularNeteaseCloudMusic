import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  // 依赖的指令或者管道
  declarations: [
    AppComponent
  ],
  // 依赖的模块
  imports: [
    // 管理功能模块
    CoreModule,
    // 全局共享模块
    ShareModule,
    // 页面管理模块
    PagesModule
  ],
  // 入口
  bootstrap: [AppComponent]
})
export class AppModule { }
