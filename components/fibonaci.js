export class fibonacci{
    constructor(prev=0,curr=1){
    this.cur = curr;
    this.pre = prev;
    }
    next(){
    [this.pre,this.cur] = [this.cur,this.pre+this.cur];
    console.log(this.cur);
    return this.cur;
    
    }
    }
    
    let itr=fibonacci[Symbol.iterator]();
    console.log('Fibonacci series');
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
    console.log(itr.next());
