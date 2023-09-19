<?php
// clase
class Automovil {

    public $color = 'negro mate';
    public $potencia;
    public $marca;

    public function getColor() {
        return $this->color;
    }
    public function getPotencia() {
        return $this->potencia;
    }
    public function getMarca() {
        return $this->marca;
    }
}

$ferrari = new Automovil;
echo $ferrari->getColor();
