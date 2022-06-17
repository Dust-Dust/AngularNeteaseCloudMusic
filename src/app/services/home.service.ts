import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from './date-types/common.type';
import { API_CONFIG, ServicesModule } from './services.module';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private url: string
  ) { }

  // 获取轮播图
  getBanners(): Observable<Banner[]> {
    return this.http.get(this.url + 'banner')
      .pipe(map(
        // 返回Banner[]类型的数组
        (res: { banners: Banner[] }) => res.banners)
      );
  }
}
