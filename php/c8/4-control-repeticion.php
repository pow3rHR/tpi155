<?php

$numerosNaturales = array(0,1,2,3,4,5,6,7,8,9);
for ($i=0; $i < 10; $i++) {
    while($numerosNaturales[$i] < 10) {
        if ($numerosNaturales[$i] > 1 && $numerosNaturales[$i] < 9) {
            echo $numerosNaturales[$i] . PHP_EOL;
        }
        break;
    }
}

