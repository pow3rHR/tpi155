// patrón módulo

const CalculadoraSalario = (function() {

    let isss = 0.03;
    let afp = 0.0625

    const CalcularSalarioNeto = function(salario) {
        return (salario - (salario * isss + salario * afp));
    }
    const CalcularSalarioFinal = function(salario) {
        return CalcularSalarioNeto(salario) - CalcularSalarioNeto(salario) * 0.10;
    }

    return {
        CalcularSalarioFinal
    }

})();

// POdemos corroborar el encapsulamiento de nuestros métodos y propiedades.