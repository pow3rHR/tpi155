<?php
class OtroCarro {
    public $color;

    // para crear un constructor utilizamos el método reservado, __construct().
    // el constructor nos permitirá inicializar propiedades y valores al momento de la creación del objeto
    public function __construct($color) {
        $this->color = $color;
    }
}

$miOtroCarro = new OtroCarro('Rojo');
echo $miOtroCarro->color;