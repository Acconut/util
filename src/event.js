(function(window) {
    
    window.EventTarget.prototype.on = function(events, cb) {
        
        // Convert events to an array
        if(Object.prototype.toString.call(events) !== "[object Array]") {
            events = [events];
        }
        
        for(var i = 0, l = events.length, e; i < l; i++) {
            e = events[i];
            
            this.addEventListener(e, cb);
        }
        
    };
    
    window.EventTarget.prototype.off = function(events, cb) {
        
        // Convert events to an array
        if(Object.prototype.toString.call(events) !== "[object Array]") {
            events = [events];
        }
        
        for(var i = 0, l = events.length, e; i < l; i++) {
            e = events[i];
            
            this.removeEventListener(e, cb);
        }
    };
    
})(window);