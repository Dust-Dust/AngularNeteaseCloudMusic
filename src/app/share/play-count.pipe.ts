import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playCount'
})
export class PlayCountPipe implements PipeTransform {

  // 格式化歌单播放量，大于10000时显示为XX万，小于一万时不进行处理
  transform(value: number): number | string {
    if (value > 10000) {
      return Math.floor(value / 10000) + '万';
    } else {
      return value;
    }
  }

}
