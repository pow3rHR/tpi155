<?php

class Ave {
    public function volar() {
        echo "Puedo volar...";
    }
}

interface PuedeNadar {
    public function nadar();
}

class Pinguino extends Ave implements PuedeNadar { // genera error porque no implemento los métodos.
    // de todos modos vale la pena analizar cuan robustos pueden llegar a ser nuestros diseños OOP.
}

class Pez implements PuedeNadar {
    public function nadar() {
        echo "Puedo nadar...";
    }
}

$p = new Pez;

$p->nadar();

