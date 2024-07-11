/*

client request nodejs 
request went to node js it first enter in Event QUEIE 
Event queue TO EVent Loop check for request work on fifo 
when loop picup request from queue its check which type of request it is . a BLOCKING or NON Blocking 
loop Process NON BLOCKING REQUET 
FI blocking LOOP - went to thread pool (mean where all thread have ) Thread is worker - they are responsible for non blocking request .  - If Threaad availabe they do and return result and came back to thread pool 
thread is limited so write non blocking request because node process not request if threads ae busy...


*/

const os = require("os");
console.log(os.cpus().length);
