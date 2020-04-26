export function promise(){
    const p1 = Promise.resolve(21);
    const p2 = Promise.resolve(23);
   
    
    Promise.all([p1, p2]).then(values => { 
        document.write("sum of 2 promises is :  ",values[0]+values[1]);
    })};