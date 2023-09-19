<?php
class Perro {

    /* Las propiedades en php no son más que aquellas características propias de un objeto
    por ejemplo, perro tiene características únicas y diferentes de otros objetos*/
    
    public $color = 'negro mate';
    public $raza;
    public $tamanio;
    public const patas = 4;

    /* Los métodos son los comportamientos propios que puede tener ese objeto */
    public function ladrar() {
        echo "Guau guau";
    }
    public function grunir() {
        echo "Grrrrr";
    }
}

$labrador = new Perro;
echo $labrador->ladrar();

