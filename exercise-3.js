/*Buatlah rekursive function yang dapat menghasilkan angka seperti ini

f(1) = 3
f(2) = 6
f(3) = 12
f(4) = 24
f(5) = 48
f(n) =  ...
*/

function f(n) {
    if (n == 1) {
        console.log(3);
    } else {
        return 3 * (Math.pow(2, n-1));
    }
}

console.log (f(3));