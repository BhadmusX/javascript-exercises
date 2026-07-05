const contains = function(object, value) {
    for (const key in object) {
         if(object[key] === value || Number.isNaN(value)) return true;
      if(typeof object[key] === "object" && object[key] !== null){
        if (contains(object[key], value)) return true
    } 
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
