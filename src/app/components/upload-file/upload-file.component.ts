
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  uploadSpinner = false;
  uploadImg: any = [];
  @Output() uploadFile: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    console.log(file, "upload Img!!");
    // var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    // console.log(file, "imageeeeeee");
    if (file) {
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        return;
      }
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    let imageSrc = reader.result.substr(reader.result.indexOf(',') + 1);
    this.uploadImg.push(e.target.result);
    this.uploadFile.emit(this.uploadImg);
  }
  deleteImg(idx:number) {
    this.uploadImg.splice(idx, 1);
    this.uploadFile.emit(this.uploadImg);
  }
}
