const Max = require("max-api");
const path = require("path");

// This will be printed directly to the Max console
Max.post(`Loaded the ${path.basename(__filename)} script`);

// Use the 'addHandler' function to register a function for a particular message
Max.addHandler("bang", () => {
  Max.post("Who you think you bangin'?");
});

// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("echo", msg => {
  const newVal = msg + 10;
  Max.outlet(newVal);
});

Max.addHandler("test", msg => {
  Max.post(msg);
});
