"use strict";

var arr = [];
const ut = "单元测试";

for (let char of ut) {
    arr.push(char.codePointAt(0));
}

return arr.join(""); //21333208032797935797