function pwd(data) {
    process.stdout.write('prompt > ');
    if (data === 'pwd') {
    process.stdout.write(process.cwd())
    } else {
    process.stdout.write('You typed: ' + data);}
    process.stdout.write('\nprompt > ') 
}

// function pwd (dataa) {process.stdin.on('innerfunc' =(data) => {
//     process.stdout.write('prompt > ');
//     if (data === 'pwd') {
//     process.stdout.write(process.cwd())
//     } else {
//     process.stdout.write('You typed: ' + data);}
//     process.stdout.write('\nprompt > ') 
// })
// }

module.exports = pwd;