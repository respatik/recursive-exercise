/*Buatlah rekursive function yang dapat menampilkan deret angka genap sampai N input. 

Contoh:
Jika diberi argumen angka 5, maka hasilnya adalah 0 2 4 */


function deretGenap(x, n) {
    if ( x < n ) {
      console.log(x)
      deretGenap(x+2, n)
    } else if (x == n) {
      console.log(x)
    }
}

deretGenap(0,10)