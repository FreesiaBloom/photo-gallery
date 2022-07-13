import { Injectable } from '@angular/core';

// dependencies
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

// interfaces
import { IUserPhoto } from '../interfaces/IUserPhoto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: IUserPhoto[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath
    });
  }
}
