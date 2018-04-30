export class Image {
  path: string;
  name: string;
  format: string;
  vertical: boolean = false;
  sold: boolean = false;
  constructor( path: string ) {
    this.path = path;
  }
}
