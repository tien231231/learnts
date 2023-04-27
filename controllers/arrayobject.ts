import { Request, Response } from "express";
const arrayobject = {
  chuck: (req:Request, res:Response) => {
    try {
      const { arr , index } = req.body;
      let kq:any[] = [];

      let temp:any[] = [];
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if (temp.length == index) {
          kq.push(temp);
          temp = [];
        }
      }
      kq.push(temp);

      res.status(200).json(kq);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  gb: (req:Request, res:Response) => {
    try {
      let { arr, index } = req.body;
      let opjectkq: { [key: string]: any[] } = {};
      let arrayvalue:any[] = [];
      let target:number;
      for (let i = 0; i < arr.length; i++) {
        target = arr[i][index];
        if (target in opjectkq) {
          opjectkq[target].push(arr[i]);
        } else if (!(target in opjectkq)) {
          arrayvalue.push(arr[i]);
          opjectkq[target] = arrayvalue;
          arrayvalue = [];
        }
      }
      res.status(200).json(opjectkq);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  mapkey: (req:Request, res:Response) => {
    try {
      let { arr, key } = req.body;
      let aray:any[] = [];
      let opject:any = {};
      for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < key.length; i++) {
          opject[key[i]] = arr[j][key[i]];
        }
        aray.push(opject);
        opject = {};
      }

      res.status(200).json(aray);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  reverse: (req:Request, res:Response) => {
    try {
      let { arr } = req.body;
      let reversed:any[] = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
      }

      res.status(200).json(reversed);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  swithorder : (req:Request, res:Response) => {
    try {
        let { arr, id,order } = req.body;
        let temp: any;
        let pid: number | undefined;
        let porder: number | undefined;
      
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id == id) {
            pid = i;
      
            temp = {...arr[i]};
          }
          if (arr[i].order == order) {
            porder = i;
          }
        }
        if (pid !== undefined && porder !== undefined) {
          arr[pid].id = arr[porder].id;
          arr[porder].id = temp.id;
          res.status(200).json(arr);
        }
        
        
      
    } catch (error) {
      res.status(500).json(error);
    }
  },
  trim: (req:Request, res:Response) => {
    try {
        let {str} = req.body
        let aray:string[] =  str.split(" ")
        let kq:string[] = []
        for(let i = 0;i<aray.length;i++){
          if(aray[i].length>1){
            kq.push(aray[i])
          }
        }
        let kqnew= kq.join(" ")
      res.status(200).json(kqnew);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  uniq: (req:Request, res:Response) => {
    try {
        let {arr} =req.body
        let kq:number[] = []
  for(let i = 0;i<arr.length;i++){
    if(!kq.includes(arr[i])){
      kq.push(arr[i])
    }
  }
    console.log(kq);
      res.status(200).json(kq);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default arrayobject
