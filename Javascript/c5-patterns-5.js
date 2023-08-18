// Version más refinada del patrón módulo

const RelojGlobal = (() => {
    'use strict';

    let _date = new Date();

    const _mostrarHoraEsa = (pais) => {
        let _options = {timeZone: 'America/El_Salvador'};
        let _time = _date.toLocaleString('en-US', _options);
        return _time;
    }

    const _mostrarHoraUsa = (pais) => {
        let _options = {timeZone: 'America/New_York'};
        let _time = _date.toLocaleString('en-US', _options);
        return _time;
    }

    const imprimirHora = (pais) => {
        switch (pais) {
            case "El Salvador":
                return _mostrarHoraEsa(pais)
                break;
            case "USA":
                return _mostrarHoraUsa(pais)
                break;
            default:
                return _date.toLocaleString("en-US", {})
                break;
        }
    }

    return {
        imprimirHora
    }

})();

// verificamos nuestro reloj mundial
console.log(RelojGlobal.imprimirHora("USA"));