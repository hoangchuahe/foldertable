import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { File } from '../modal/file';
import { FILES } from '../modal/mock-file';
@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor() { }
  getFiles(): Observable<File[]> {
    const files = of(FILES);
    return files;
  }
}
