import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileuploadingService } from '../services/fileuploading.service';

@Component({
  selector: 'app-fileuploading',
  templateUrl: './fileuploading.component.html',
  styleUrls: ['./fileuploading.component.css']
})
export class FileuploadingComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  router: any;

  constructor(private fileuploadingService: FileuploadingService) { }
  // title="Login";
  ngOnInit(): void {

    this.fileInfos = this.fileuploadingService.getFiles();
  }

  selectFile(event: any) {
  this.selectedFiles = event.target.files;
  }

  upload(): void {
  this.progress = 0;
  
  // this.router.navigate(['fileupload'])
  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);
  
    if (file) {
    this.currentFile = file;
  
    this.fileuploadingService.upload(this.currentFile).subscribe(
      (event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.fileInfos = this.fileuploadingService.getFiles();
      }
      },
      (err: any) => {
      console.log(err);
      this.progress = 0;
  
      if (err.error && err.error.message) {
        this.message = err.error.message;
      } else {
        this.message = 'Could not upload the file!';
      }
  
      this.currentFile = undefined;
      });
    }
  
    this.selectedFiles = undefined;
    this.router.navigate(['patients'])
  }
  }
  }

