export function printCapitalNames (...x) {

for (let i=0 ; i < x.length ; i++){
    document.write(x[i].toUpperCase(),"  ");

}


}

let name = ['val','value','random ', 'ran', 'user']
//printCapitalNames(...name);