export function Order () {

  
    var orderobj = {id: 101 , title : 'my order' , price :60 };
    
    var neworder=Object.assign({},orderobj);

    return neworder;
   
    
}

export function printorder () {

    document.write("Order Details " + JSON.stringify(Order()));   
    document.write("<br>");

}


export function getprice () {
    document.write(" Price= " + JSON.stringify(Order().price)); 
}