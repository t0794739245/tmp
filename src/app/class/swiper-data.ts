import { Image } from 'app/class/image';

export class SwiperData {
  images: Image[];
  current: number;
  constructor( images: Image[], current: number ) {
    this.images = images;
    this.current = current;
  }

}
