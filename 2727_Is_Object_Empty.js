var isEmpty = function(obj) {
    if(Array.isArray(obj)) {
        return obj.length===0
    }
    else {
        let arr = Object.keys(obj);
        return arr.length===0
    }
};
