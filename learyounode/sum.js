const args = process.argv.splice(2);
let sum = 0;

args.forEach(num => {
    sum += Number(num);
});

console.log(sum);