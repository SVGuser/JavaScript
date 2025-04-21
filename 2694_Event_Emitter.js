class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
     callback = []
    subscribe(event, cb) {
        this.callback[event] = this.callback[event]||[]
        this.callback[event].push(cb)
        
        return {
            unsubscribe: () => 
    //      {        if(this.callback[event].length>1)
   //                 this.callback[event].shift();
  //              else
   //                 delete this.callback[event]
            
 //           }
            
            {     
                this.callback[event]=this.callback[event].filter(fn => fn !== cb);
            }
        }
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(event, args = []) {
        if(this.callback[event])
            return this.callback[event].map((cb)=>cb(...args))
        return []
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
