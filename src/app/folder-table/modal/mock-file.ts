import { File } from "./file";
export const FILES:File[]=[
  {
    id: 1,
    name: 'item1',
    createDate:new Date(),
    size: 100,
    isFolder:true,
    path:'.',
    parent:'root',
    children:[
      {
        id: 2,
        name:'child 1',
        size:10,
        isFolder:true,
        path:'item1',
        parent:'item1',
        children:[
          {
            name:'grandchild1',
            size:20,
            isFolder:false,
            path:'./item1/grandchild1',
            parent:'child1',
          }
        ]
      },
      {
        id: 3,
        name:'child2',
        size:30,
        isFolder:false,
        path:'./item1',
        parent:'item1',
      }
    ]
  },
  {
    id: 6,
    name:'item2',
    createDate:new Date(),
    size:200,
    isFolder:false,
    path:'.',
    parent:'root',
  },
  {
    id: 7,
    name:'item3',
    createDate:new Date(),
    size:100,
    isFolder:false,
    path:'.',
    parent:'root',
  },
  {
    id: 8,
    name:'aaaa',
    createDate:new Date(),
    size:400,
    isFolder:false,
    path:'.',
    parent:'root',
  },



]
items: [{
  name: 'ab',
  description: 'this is car1 description'
},{
  name: 'cd',
  description: 'this is car2 description'
},{
  name: 'car3',
  description: 'this is car3 description'
},{
  name: 'aaa',
  description: 'this is car4 description'
},{
 name: 'car5',
  description: 'this is car5 description'
}]
