const fetch = require("node-fetch");

console.log('Waiting for ZAP');

const max_wait = 2000;

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

['http://localhost:8080/JSON/pscan/view/recordsToScan'].map(async (url) => {
    let retry = 0, recordsToScan;

    do {
        if (retry !== 0) {
            await wait(2000);
        }
        try {
            const result = await fetch(url);

            recordsToScan = (await result.json()).recordsToScan;
        } catch (err) {
        }
        console.log(`ZAP Still processing: ${recordsToScan} records`);
        retry++;
    } while (Number(recordsToScan) !== 0 || retry > max_wait);
});
