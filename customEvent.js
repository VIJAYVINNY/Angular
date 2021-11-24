const events=require('events');
const myevents=new events.EventEmitter();

myevents.on("simpleEvent",(msg)=>{
    console.log(msg)
})
myevents.emit( "simpleEvent","We are working on Event property");