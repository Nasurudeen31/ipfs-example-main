const { create } = require("ipfs-http-client");
const fs = require("fs")
async function ipfsClient() {
    const ipfs = await create({
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https"
    });
    return ipfs;
}


async function saveText() {
    let ipfs = await ipfsClient();

    let result = await ipfs.add(`welcome ${new Date()}`);
    console.log(result);
}
// saveText();

async function saveFile() {

    let ipfs = await ipfsClient();

    //let data = fs.readFileSync("./package.json")
    //let options = {
    //  warpWithDirectory: false,
    //progress: (prog) => console.log(`Saved :${prog}`)
    //}
    let data = {
        Manufacturer: "Nasurudeen",
        Place: "Bangalore",
        Id: "23",

        Supplier: "Vignesh",
        Place:"Coimbatore",
        Id:"67",
        Sex:"M",
        
        Retailer: "Ahamed",
        Place:"Erode",
        Id:"45",
        Sex:"Male"


        

    }


    let result = await ipfs.add({ path: "Nasu.json", content: JSON.stringify(data) });
    console.log(result)
}
saveFile()

async function getData(hash) {
    let ipfs = await ipfsClient();

    let asyncitr = ipfs.cat(hash)

    for await (const itr of asyncitr) {

        let data = Buffer.from(itr).toString()
        console.log(data)
    }
}

// getData("QmQbA7BrBNkh1bbSgtUYdUJYsHRfvRN6k5vocxHgjadUjr")