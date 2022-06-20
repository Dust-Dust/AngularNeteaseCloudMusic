import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCalendarComponent, NzCarouselComponent } from 'ng-zorro-antd';
import { Banner } from 'src/app/services/date-types/common.type';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[] = [];

  // 获取nzCarousel组件轮播组件的实例
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  constructor(
    private homeServe: HomeService
  ) {
    this.homeServe.getBanners().subscribe(banners => {
      console.log(banners);
      this.banners = banners;
    });
  }

  ngOnInit() {
  }

  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  // 左右箭头翻页
  onChangeSlide(type: 'pre' | 'next') {
    console.log('type: ', type);
    this.nzCarousel[type]();
  }

}
