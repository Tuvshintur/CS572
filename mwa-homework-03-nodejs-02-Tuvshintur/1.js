const dns = require('dns')
const { promisify } = require('util')

const promise = promisify(dns.resolve4)

async function main() {
    try {
        const result = await promise('miu.edu');
        console.log(result);


        console.log('addresses: ' + JSON.stringify(result));

        result.forEach(function (a) {
            dns.reverse(a, function (err, hostnames) {
                if (err) {
                    throw err;
                }

                console.log('reverse for ' + a + ': ' + JSON.stringify(hostnames));
            });
        });
    } catch (err) {
        console.log(err);
    }
}

main();