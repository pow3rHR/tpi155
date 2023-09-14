<?php

function cuadrado($n) {
    return ($n * $n);
}

$numeros = array(1,2,3,4,5,6,7);

$resultado = array_map('cuadrado', $numeros);

print_r($resultado);

foreach ($resultado as $key => $value) {
    echo $value . PHP_EOL;
}

