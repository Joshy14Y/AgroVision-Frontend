import { DecimalPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUploadHandlerEvent, FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-upload-file-component',
  standalone: true,
  imports: [CardModule, FileUploadModule, Button, DecimalPipe],
  templateUrl: './upload-file-component.html',
})
export class UploadFileComponent {
  fileSelected = output<File>();
  isLoading = input<boolean>(false);

  uploadHandler(event: FileUploadHandlerEvent) {
    const file = event.files[0];
    if (file) {
      this.fileSelected.emit(file);
    }
  }
}
