<?php
class Animal {

    // Animal es un concepto genérico, ya que existen muchos tipos de animales.
    // debido a la naturaleza genérica, tambien su metodo lo es, ya que, aunque de maneras distintas
    // pero todos los animales comen.

    protected function comer() {
        echo "comiendo...";
    }
}

class Tortuga extends Animal {

    public function comer() {
        echo __CLASS__;
    }
    
}

class Gallina extends Animal {

    public function comer() {
        echo __CLASS__;
    }
}

$torguga = new Tortuga; // Es un animal, pero concretamente es una tortuga.
$gallina = new Gallina; // Es un animal, pero concretamente es una gallina.

$torguga->comer();

// En lenguajes fuertemente tipados es más fácil ver el polimorfismo al momento de la creación.
// La instancia anterior podría verse como "Animal $tortuga = new Tortuga;"

