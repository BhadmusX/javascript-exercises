const totalIntegers = function (objarr) {
  let sum = 0;
  if (Array.isArray(objarr)) {
    if (objarr.length === 0) {
      return (sum += 0);
    }
    const first = objarr[0];
    const rest = objarr.slice(1);
    if (Array.isArray(first) || typeof first === "object") {
      return totalIntegers(first) + totalIntegers(rest);
    }
    const isint = Number.isInteger(first) ? 1 : 0;
    return isint + totalIntegers(rest);
  }
 if (typeof objarr === "object") {
    for (const key in objarr) {
      if (Number.isInteger(objarr[key])) {
        sum += 1;
      } else if (typeof objarr[key] === "object" && objarr[key] !== null) {
        sum += totalIntegers(objarr[key]);
      }
    }
    return sum;
  }

  return undefined;
};

// Do not edit below this line
module.exports = totalIntegers;
