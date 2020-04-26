export let Array={

    names :['random', 'radom1', 'random2'],
    
    printResults() {

this.names.map(name=>
    document.write("{name:" , name , " , length: " , 
    name.length,"}","<br>"));

    }
}

//Array.printResults();