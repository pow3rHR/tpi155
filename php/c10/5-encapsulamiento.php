<?php
class Red {
    // encapsulamos propiedades y métodos mediante modificadores de acceso.
    // así nostros controlados quién o qué tiene acceso a los datos.

    public $nombre = "Router"; // visible desde cualquier parte.
    private $protocolo = "https"; // accesible solamente desde la clase Red
    protected $puerto = 443; // Accesible desde la clase Red y desde la Clase Subred
}

class Subred extends Red {
    // tenemos dispobibles $nombre y $puerto.
}

$red = new Red;
// en el entorno global, solamente tenemos disponible nombre
