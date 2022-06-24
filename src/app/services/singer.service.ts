import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner, HotTag, Singer, SongSheet } from './date-types/common.type';
import { API_CONFIG, ServicesModule } from './services.module';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

interface SingerParams {
  offset: number;  // 分页
  limit: number; // 每页多少条
  cat?: string;  // 歌手分类
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
}

@Injectable({
  providedIn: ServicesModule
})
export class SingerService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private url: string
  ) { }

  // 获取首页入住歌手列表
  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    // queryString.stringify(args):序列化，转成String类型
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.url + 'artist/list', { params }).pipe(map(
      // 返回Banner[]类型的数组
      (res: { artists: Singer[] }) => res.artists)
    );
  }
}
