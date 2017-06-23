//Ejercicio 1
var assert = require('assert');

function multiplica(arr, num)
{
  var total= arr.reduce(function(producto, siguiente){
  return producto * siguiente;
  });
    if(!isNaN(num)){               
      return total * num;  
    }
  return total;
}
//document.write(multiplica());

//Ejercicio 2
//var numCel = [784123123, 355676784, 3423543554];
//var cifraTres = 784;

function ejercicio2(numCel, cifraTres){
var cifras = numCel.filter(function igual (num){
    var num  = num.toString();
    var contar = cifraTres;
    if((num.substr(0,3)==contar) || (num.substr(-3)==contar))
    {
      return true;
    }
  });
}
 
//document.write(cifras);

//Ejercicio 3
var arr = [7, 21, 44, 80, 77, 35];
var multiplo = 7;
var res="";
arr.forEach(function resolver (num){
  if(num%multiplo==0){
    res +=num + " ";
  }
});
//document.write(res);

//Ejercicio 4
var superArreglo = [2, 5, 7, 2, 3, 8, 10]
var solu = "";
var dobles = superArreglo.map(function(num){
  solu += num*2+1 + " ";
});

//document.write(solu);

//Ejercicio 5
var celcius = [0, 10, 20, 30, 40, 50, 60];
var conversion = "";
var solucion = celcius.map(function(grados){
  conversion += (grados*9 + (32*5))/5 + ' ';
});

//document.write(conversion);

//Ejercicio 6
var multi = [1, 2, 3, 4];

var total= multi.reduce(function(producto, siguiente){
  return producto * siguiente;
  }, 1);

//document.write(total);

//Ejercicio 7
var edades = [20, 16, 89, 6];
var resulk="";
edades.filter(function add (number){
  if(number%2==0 && number>18){
     resulk += 2017 - number;
  }
});

//document.write(resulk);

//Pruebas Unitarias
/*describe('Ejercicio 1', function(){
    it('Prueba de [2, 3] y 10', function(){
        assert.equal(60, multiplica([2,3], 10));
    });
    it('Prueba de [2, 3] y "hola"', function(){
        assert.equal(6, multiplica([2,3], "hola"));
    });
    it('Prueba de [2, 3] y "hola"', function(){
        assert.equal(6, multiplica([2,3]));
    });
});*/

describe('Ejercicio 2', function(){
    it('Cuando es [784123123, 355676784, 3423543554] y 784', function(){
        assert.deepEqual([784123123], ejercicio2([784123123, 355676794, 3423543554], 784));
    });

});

