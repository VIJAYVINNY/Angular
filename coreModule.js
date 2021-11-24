const path=require('path');
console.log(__dirname);
console.log(__filename);

// PathModule methods
console.log(path.basename(__dirname));
console.log(path.dirname(__filename));
console.log(path.isAbsolute(__dirname));
console.log("========================");
// OS module method
const os=require('os');
console.log(os.arch());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.version());
console.log("========================");