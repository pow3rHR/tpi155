<?php
class Financiera {

    /* La abstracción se refiere a la capcidad de un objeto de "esconder" su complejidad
    y solamente presentar su funcionamiento de una manera simple. Nos referimos a que no
    interesa cómo lo hace, sino solo saber qué hace.*/

    public $salario;
    public $isss = 0.065;
    public $afp = 0.03;

    
    private function realizarDeducciones() {
        return $this->salario - (($this->salario * $this->$isss) + ($this->salario * $this->$afp));
    }
    /* Dejamos la complejidad oculta. Observa que un usuario dado solo necesita el salario neto, sin importar
    cómo se obtuvo, solo necesita obtener un resultado confiable. */
    public function calcularSalarioNeto($salrioBruto) {
        $this->salario = $salrioBruto;
        if ($salrioBruto < 500) {
            return $this->realizarDeducciones()
        }
        else {
            // acá se podría implementar el cálculo de la renta, por ejemplo.
        }
    }
}

$f = new Financiera;
echo $f->calcularSalarioNeto(450);
