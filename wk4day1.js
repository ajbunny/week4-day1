////////////////////////////////
// Easy Going
////////////////////////////////
// const logNumbers = () => {
//     for (let i = 1; i <= 20; i++) {
//         console.log(i)
//     }
// }
// logNumbers();

////////////////////////////////
// Get Even
////////////////////////////////
// const getEven = () => {
//     for (let i = 2; i <= 200; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// getEven();
////////////////////////////////
// Fizz Buzz
////////////////////////////////
const getMyNums = () => {
    for (let i = 1; i <= 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        }
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
    } else if (i % 5 === 0) {
        console.log('Buzz')
    }
}
getMyNums(5);
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1;
console.log(plantee)

wolfy[3] = 'Gotham City'

dart[1] += "Hawkings"
console.log('dart')

wolfy.shift();
wolfy.unshift('gameboy')
console.log(wolfy)
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////