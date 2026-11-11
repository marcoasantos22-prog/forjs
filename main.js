// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 1; i < 6; i++) {
//     console.log(i);   
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i)
//     if (i === 0) {
//     console.log("Feliz Ano Novo!");        
//     } else {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`1 x ${i} = ${1 * i}`)
    
// }

// let num = Number(prompt("Digite um número: "))
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// let count = 0
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     count = count + i
// }

// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

let accPair = 0
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        accPair = accPair += i
        console.log(accPair);
    }
}
    console.log(`Soma dos números pares de 0 a 100: ${accPair}`);
    