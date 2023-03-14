import { Component, EventEmitter } from '@angular/core';
import { FILES } from '../modal/mock-file';
import { File } from '../modal/file';
import { FolderService } from '../service/folder.service';

import {MatIconModule} from '@angular/material/icon';
import { Subject } from 'rxjs';
import { FilterPipe } from '../service/search';

@Component({
  selector: 'app-folder-table',
  templateUrl: './folder-table.component.html',
  styleUrls: ['./folder-table.component.scss']
})
export class FolderTableComponent {
  searchText = '';

  inSearchMode =false;
  public lstPath: any[] = ['.'];
  files: File[]=[];
  result:string;
  constructor(private folderService: FolderService,){}
  public searchValue: string = null;
  public handleKeyupSearch$ = new Subject<any>();

  updateRecentlyPath(index: number) {
    // this.isLoading = true;
    this.lstPath.splice(index + 1, this.lstPath.length - index - 1);
    this.getFiles();
    this.findValue(this.files,this.lstPath[this.lstPath.length-1])
  }


resetSearchInput() {
  this.searchValue = '';

  this.handleKeyupSearch$.next('');
}

 findValue(arr:any, val:string):void  {
  for(let obj of arr){
    if(obj.isFolder){
      if(obj.name === val){
        this.files=obj.children;
      }else{
        this.findValue(obj.children,val)
      }
    }
  }
}






// Outputs: { id: 4, name: "Rahul" }


  navigate(folder:File) {
    if (folder.isFolder) {
      this.files=folder.children;
      this.lstPath.push(folder.name);
    }
  }
  ngOnInit(): void {
    this.getFiles();
  }


  getFiles(): void {
    this.folderService.getFiles()
      .subscribe(files => this.files =files)
  }


}
