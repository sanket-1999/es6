export function deepmatch () {

    let cust= {
        name: "Startup organisation  ",
        address: {
        street: "XYZ street",
        state: "Maharashtra",
        zip: "38473847"
        } 
        };

        let {address: {zip}} = cust;
        document.write("zip: ", zip)
    }