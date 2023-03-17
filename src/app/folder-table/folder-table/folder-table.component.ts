import { Component, EventEmitter, OnInit } from '@angular/core';
import { FILES } from '../modal/mock-file';
import { File } from '../modal/file';
import { FolderService } from '../service/folder.service';

import {MatIconModule} from '@angular/material/icon';
import { Subject } from 'rxjs';
// import { FilterPipe } from '../service/search';

@Component({
  selector: 'app-folder-table',
  templateUrl: './folder-table.component.html',
  styleUrls: ['./folder-table.component.scss']
})
export class FolderTableComponent{
  searchText:string;
  changeCount: number = 0;
  inSearchMode =false;
  isRoot = true;
  public lstPath: any[] = ['.'];
  showList: File[];
  tempList:any[]=[]
  searchList:any[]=[]
  ogiList:any[]=[]
  currList:any[]=[]
  constructor(private folderService: FolderService,){}
  public searchValue: string = null;
  public handleKeyupSearch$ = new Subject<any>();

  ngOnInit(): void {
    this.getFiles();
    this.ogiList=this.showList
    this.currList=this.showList
  }


  getFiles(): void {
    this.folderService.getFiles()
      .subscribe(files => this.showList =files)
  }

  updateRecentlyPath(index: number) {
    this.lstPath.splice(index + 1, this.lstPath.length - index - 1);
    this.callBack(this.ogiList,this.lstPath[this.lstPath.length-1])
  }


resetSearchInput() {
  this.searchValue = '';
  this.inSearchMode =false;
}

 callBack(arr:any, val:string) {
  if(this.lstPath.length==1){
    this.showList= this.ogiList
    this.currList = this.ogiList
    this.isRoot=true
  }else{
  for(let obj of arr){
    if(obj.isFolder){
      if(obj.name === val){
        this.showList=obj.children
        this.currList=obj.children
      }else{
        this.callBack(obj.children,val)
      }
    }
  }
}
}

  navigate(folder:any) {
    if (folder.isFolder) {
      this.showList=folder.children;
      this.currList = this.showList
      this.lstPath.push(folder.name);
      this.resetSearchInput()
    }
    this.isRoot=false
  }

  getAllFilesInFolders(listTemp:any) {
    for (let i = 0; i < listTemp.length; i++) {
      this.searchList.push(listTemp[i]);
      const temp = listTemp[i].children;
      if (temp) {
        this.getAllFilesInFolders(temp);
      }
    }
  }

  search(value:string){
    this.tempList=[]
    this.searchList=[]
    this.getAllFilesInFolders(this.currList)
    if(value===''||value===null){
      this.inSearchMode =false
      this.showList=this.currList
    }else{
      this.inSearchMode=true
      for(let obj of this.searchList){
        if(obj.name.includes(value)){
          this.tempList.push(obj)
        }
      }
      this.showList=this.tempList
    }
  }

  sort(){
    let a: any[]=[]
    for(let obj of this.currList){
      a.push(obj)
    }
    this.showList=a.sort((a:any,b:any) => a.name > b.name ? 1 : -1)
  }

  sortnum(){
    let a: any[]=[]
    for(let obj of this.currList){
      a.push(obj)
    }
    this.showList=a.sort((a:any,b:any) => a.size > b.size ? 1 : -1)
  }

  removeitem(index:number){
    this.tempList=[]
    for(let i=0;i< this.ogiList.length;i++){
      if(i!=index){
        this.tempList.push(this.ogiList[i])
      }
    }
    this.showList=this.tempList
    this.ogiList=this.tempList

  }

}
