import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCalendarComponent, NzCarouselComponent } from 'ng-zorro-antd';
import { Banner, HotTag, SongSheet } from 'src/app/services/date-types/common.type';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[] = [];
  hotTags: HotTag[] = [];
  songSheetList: SongSheet[] = [];

  // 获取nzCarousel组件轮播组件的实例
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  constructor(
    private homeServe: HomeService
  ) {
    this.GetBanners();
    this.GetHotTags();
    this.GetPersonalized();
  }

  // 获取轮播图
  private GetBanners() {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  // 获取热门标签
  private GetHotTags() {
    this.homeServe.getHotTags().subscribe(tags => {
      this.hotTags = tags;
    });
  }

  // 获取热门歌单
  private GetPersonalized() {
    this.homeServe.getPersonalSheetList().subscribe(sheets => {
      this.songSheetList = sheets;
    });
  }

  ngOnInit() {
  }

  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  // 左右箭头翻页
  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }

}
