// 存放数据类型

// 轮播图
export interface Banner {
    targetId: number;
    url: string;
    imageUrl: string;   // 图片地址
}

// 热门标签
export interface HotTag {
    id: number;
    name: string;
    position: number; // 标签的排列顺序
}

// 热门歌单
export interface SongSheet {
    id: number;
    name: string;
    picUrl: string; // 图片地址
    playCount: number; // 播放量
}
