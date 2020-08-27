/*Buatlah rekursive function untuk menghitung angka faktorial
 
Contoh perhitungan angka faktorial:
4! = 4 * 3!
4! = 4 * 3 * 2!
4! = 4 * 3 * 2 * 1

4! = 24 */

function factorial (x){
    if (x === 0){
        console.log(1);
    }
    return x * factorial(x-1);
}
console.log(factorial(4));