import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 修改变更检测策略：OnPush策略只有在Input改变的时候才会进行检测，而非只要发生改变，父子组件都会进行变更检测，节省性能
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  // 必须设置成input类型才可以让home组件读取到
  @Input() activeIndex = 0;
  // static:设置检测机制为动态还是静态
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;
  // 翻页的时候输出值，是前还是后
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  constructor() { }

  ngOnInit() {
  }

  // 前后箭头翻页，参数只能为pre或next
  onChangeSlide(type: 'pre' | 'next') {
    // 将type发出去
    this.changeSlide.emit(type);
  }

}
