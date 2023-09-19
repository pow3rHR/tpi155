<?php
namespace Matematicas {
    class Calculadora {
        public static function sumar($a, $b) {
            return $a + $b;
        }
    }
}

namespace Ciencias {

    use Matematicas\Calculadora; // no podemos utilizar calculadora si no llamamos a su namespace.

    echo Calculadora::sumar(20, 30);
}

