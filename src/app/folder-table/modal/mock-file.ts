import { File } from "./file";
export const FILES:File[]=[
  {
    id: 1,
    name: 'item1',
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
    size:200,
    isFolder:false,
    path:'.',
    parent:'root',
  },
  {
    id: 7,
    name:'item3',
    size:100,
    isFolder:false,
    path:'.',
    parent:'root',
  },
  {
    id: 8,
    name:'item3',
    size:400,
    isFolder:false,
    path:'.',
    parent:'root',
  },

]
