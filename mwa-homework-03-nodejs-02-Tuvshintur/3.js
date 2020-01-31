const os = require('os');

async function checkSystem() {
    let check = true;
    console.log('Checking your system....');

    let freemem = await os.freemem();
    
    if(freemem) {
        freemem /=1024; //KB
        freemem /=1024; //MB
        freemem /=1024; //GB
    }

    if(freemem < 4) {
        check = false;
        console.log("This app needs at least 4 GB of RAM");
    }

    // console.log("freemem:", freemem);

    let cpus = await os.cpus();

    if(cpus) {
        let cntCores = cpus.length;
        if(cntCores < 2) {
            check = false;
            console.log('Processor is not supported');
        }
        // console.log("count of cores:", cntCores);
    }


    if(check) {
        console.log("System is checked successfully");
    }
}

checkSystem();