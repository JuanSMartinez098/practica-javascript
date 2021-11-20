let salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

let SalariosColSorted = salariosCol.sort(
    function(salaryA, SalaryB){
        return salaryA - SalaryB;
    }
);

function esPar(numerito){
    return (numerito % 2 === 0);
};

function calcularMediaAritmetica(lista){
    let sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
};


function MedianaSalarios(lista){

    let mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        let personitaMitad1 = lista[mitad - 1];
        let personitaMitad2 = lista[mitad];

        let mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    }else{
        let personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

let spliceStart = (SalariosColSorted.length * 90)/100;
let spliceCount = SalariosColSorted.length - spliceStart;

let salariosColTop10 = SalariosColSorted.splice(
    spliceStart,
    spliceCount,
);

let medianaTop10Col = MedianaSalarios(salariosColTop10);

let medianaGeneralCol = MedianaSalarios(SalariosColSorted);
console.log({
    medianaGeneralCol,
    medianaTop10Col,
});