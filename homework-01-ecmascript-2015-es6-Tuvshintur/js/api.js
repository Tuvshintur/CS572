document.getElementById("fetch").onclick = function () {
    fetch("https://randomuser.me/api/")
        .then(response => {
            return response.json();
        })
        .then(json => {
            let p = new Person(json.results[0].name, json.results[0].location);
            p.print();
        });
};

document.getElementById("async").onclick = function () {
    async function asyncCall() {
        const response = await getUser();
        let json = await response.json()
        let p = new Person(json.results[0].name, json.results[0].location);
        p.print();
    }
    asyncCall();
};

function getUser() {
    return fetch("https://randomuser.me/api/")
}

const { Observable } = rxjs;
const { map, filter } = rxjs.operators;

document.getElementById("observable").onclick = function () {
    const observable = Observable.create((ob) => {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => {
                ob.next(data);
                ob.complete();
            })
    });

    observable.subscribe(
        res => {    
        let p = new Person(res.results[0].name, res.results[0].location);
        p.print();
        },
        err => console.log(err)
    );

    
};

function Person(name, location) {
    this.name = name;
    this.location = location;

    this.print = function() {
        console.log(`${this.name.title}. ${this.name.first} ${this.name.last}`);
        console.log(`${this.location.street.number} ${this.location.street.name} ${this.location.city} ${this.location.state}  ${this.location.country},  ${this.location.postcode}`);
    }

    return this;
}