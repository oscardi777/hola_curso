//coercion es que un dato puede cambiar de un tipo de valor a un segundo valor de otro tipo
var a = 4+"7";
typeof a
//el resultado es 47 en string

var b = 4*"7";
typeof b
//el resultado es 28 en number

//ejems de coercion voluntaria
var c = 20;
var d = c + "";
typeof d //resultado string
var e = string(c);
typeof e 
//resultado string

var f = number(e)
typeof f //resultado number
