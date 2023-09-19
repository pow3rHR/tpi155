<?php

abstract class Database {
    abstract public function conectar(); // no es posible crear cuerpo de la función.
    abstract public function desconectar(); // no es posible crear cuerpo de la función.
}

class Mysql extends Database { // al crear la clase lanza error porque estoy obligado a implementar.

}

class Postgres extends Database { // no genera error ya que he implementado los métodos.

    public function conectar() {
        echo "Conectando con el servidor...";
    }
    public function desconectar() {
        echo "Eliminando la conexión...";
    }
}

