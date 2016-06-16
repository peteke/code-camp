export default {
    triggerStateChanged: function(){
        for(let cb of listeners){
            cb();
        }
    }, 
    addListener: function(cb){
        listeners[listeners.length] = cb;
    }
};
let listeners = [];