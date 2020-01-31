const express = require('express');
const superagent = require('superagent');
const { from } = require('rxjs');
const { filter } = require('rxjs/operators');
const url = require('url');

const app = express();

//config
app.set('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);

const getData = async (request, response) => {
    try {
        let urlData = url.format({
            protocol: 'https',
            hostname: 'randomuser.me',
            pathname: '/api',
            query: {
                page: request.query.page || 1,
                results: 10
            }
        });
        let urlDataNext = url.format({
            protocol: 'https',
            hostname: 'randomuser.me',
            pathname: '/api',
            query: {
                page: parseInt(request.query.page) + 1 || 2,
                results: 10
            }
        });

        let urlDataLast = url.format({
            protocol: 'https',
            hostname: 'randomuser.me',
            pathname: '/api',
            query: {
                page: 5,
                results: 10
            }
        });

        const res = await superagent.get(urlData.toString());
        if (res.body.results) {
            const people = res.body.results.map(person => { return { firstName: person.name.first, lastsName: person.name.last } });
            response.links({
                next: urlDataNext.toString(),
                last: urlDataLast.toString()
            });
            response.set('Cache-Control', 'private, max-age=86400');
            response.send(people);
            response.end();
        }

    } catch (err) {
        console.error(err);
    }
}

app.get('/users', getData);

app.listen(3000, () => console.log('server started'));