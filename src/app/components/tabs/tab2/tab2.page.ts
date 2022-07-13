import { Component } from '@angular/core';

// dependencies
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  
  public addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
