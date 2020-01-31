const EventEmitter = require('events');

class Gym extends EventEmitter {
    
    constructor() {
        super();
        this.interval = setInterval(() => {
            this.emit('boom');
        }, 1000);
    }

    rest() {
        this.emit('rest');
        clearInterval(this.interval);
    }
}

const gym = new Gym();

gym.on('boom', ()=>console.log('Athlete is working out'));
gym.on('rest', ()=>console.log('Resting...'));

setTimeout(() => {
    gym.rest();
}, 5000);


