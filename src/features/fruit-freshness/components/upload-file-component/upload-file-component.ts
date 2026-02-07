import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-upload-file-component',
  imports: [FileUploadModule],
  templateUrl: './upload-file-component.html',
})
export class UploadFileComponent {}
