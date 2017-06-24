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
function ejercicio2(numCel, cifraTres){
  var cifras = numCel.filter(function igual (num){
      var num  = num.toString();
      var contar = cifraTres;
      if((num.substr(0,3)==contar) || (num.substr(-3)==contar))
      {
        return true;
      }
    });
  return cifras;
}
 
//document.write(ejercicio2());

//Ejercicio 3
function ejercicio3(arr, multiplo){
  var res= [];
  arr.forEach(function resolver (num){
  if(num%multiplo==0){
    res.push(num);
  }
});
  return res;
}

//document.write(res);

//Ejercicio 4
function ejercicio4 (superArreglo){
  var solu = [];
  var dobles = superArreglo.map(function(num){
    solu.push(num*2+1);
});
  return solu;
}

//document.write(solu);

//Ejercicio 5
function ejercicio5 (celcius){
  var conversion = [];
  var solucion = celcius.map(function(grados){
    conversion.push((grados*(9/5))+32);
  });
  return conversion;
}

//console.log(ejercicio5(celcius));

//Ejercicio 6
function ejercicio6 (multi){
  var total= multi.reduce(function(producto, siguiente){
  return producto * siguiente;
  }, 1);
  return total;
}

//console.log(ejercicio6(multi));

//Ejercicio 7
function ejercicio7(edades){
  var resulk = [];
  edades.filter(function add (number){
  if(number%2==0 && number>18){
     resulk.push(2017 - number);
    }
  });
    return resulk;
}
//console.log(ejercicio7(edades));

//Pruebas Unitarias
describe('Ejercicios Arrays', function(){
    describe('Ejercicio 1', function(){
        it('Prueba de [2, 3] y 10', function(){
            assert.equal(60, multiplica([2,3], 10));
        });
        it('Prueba de [2, 3] y "hola"', function(){
            assert.equal(6, multiplica([2,3], "hola"));
        });
        it('Prueba de [2, 3] y "hola"', function(){
            assert.equal(6, multiplica([2,3]));
        });
    });

    describe('Ejercicio 2', function(){
        it('Cuando es [784123123, 355676784, 3423543554] y 784', function(){
            assert.deepEqual([784123123], ejercicio2([784123123, 355676794, 3423543554], 784));
        });
        it('Cuando es [784123123, 355676784, 3423543554] y 123', function(){
            assert.deepEqual([784123123], ejercicio2([784123123, 355676794, 3423543554], 784));
        });

    });
    describe('Ejercicio 3', function(){
        it('Cuando es [7, 21, 44, 80, 77, 35] y 7', function(){
            assert.deepEqual([7, 21, 77, 35], ejercicio3([7, 21, 44, 80, 77, 35],  7));
        });

    });
    
    describe('Ejercicio 4', function(){
        it('Cuando es [2, 5, 7, 2, 3, 8, 10]', function(){
            assert.deepEqual([5, 11, 15, 5, 7, 17, 21], ejercicio4([2, 5, 7, 2, 3, 8, 10], 2, 1));
        });

    });
    describe('Ejercicio 5', function(){
        it('Cuando es [0, 10, 20, 30, 40, 50, 60]', function(){
            assert.deepEqual([32, 50, 68, 86, 104, 122, 140], ejercicio5([0, 10, 20, 30, 40, 50, 60],9 ,5 ,32));
        });

    });
    describe('Ejercicio 6', function(){
        it('Cuando es [1, 2, 3, 4]', function(){
            assert.deepEqual(24, ejercicio6([1, 2, 3, 4]));
        });

    });
    
    describe('Ejercicio 7', function(){
        it('Cuando es [20, 16, 89, 6]', function(){
            assert.deepEqual([1997], ejercicio7([20, 16, 89, 6]));
        });

    });
    
});

