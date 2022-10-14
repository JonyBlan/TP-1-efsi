function promedioMayor(){
    document.getElementById("error").innerHTML = "";
    var notaMate = parseFloat(notaValida(document.getElementById('notaMate').value, "Mate"));
    var notaLengua = parseFloat(notaValida(document.getElementById('notaLengua').value, "Lengua"));
    var notaEfsi = parseFloat(notaValida(document.getElementById('notaEfsi').value, "Efsi"));
    if((notaMate + notaLengua + notaEfsi) < 0){
        errorUsuario("Llene los valores de las notas con valores entre 1 y 10");
    }
    var promedio = ((notaMate + notaLengua + notaEfsi) / 3);
    colorPromedio(promedio);
    document.getElementById("respuesta").innerHTML = "Promedio entre las 3 materias: ";
    document.getElementById("notaPromedio").innerHTML = promedio.toFixed(2);
    calcularMayor(notaMate, notaLengua, notaEfsi);
}

function calcularMayor(mate, lengua, efsi){
    var mayor = Math.max(mate, lengua, efsi);
    sonIguales(mate, lengua, efsi);
    var vecMaterias = ["mate", "lengua", "efsi"];
    var vecMateriasNum = [mate, lengua, efsi];
    var materia = vecMateriasNum.indexOf(mayor);
    cambiarColor("blue", vecMaterias[materia], false);
}

function sonIguales(materia1, materia2, materia3){
    if(materia1 == materia2){
        if(materia1 == materia3){
            cambiarColor("blue", "mate", false);
            cambiarColor("blue", "lengua", false);
            cambiarColor("blue", "efsi", false);
        }
        else if(materia1 > materia3){
            cambiarColor("blue", "mate", false);
            cambiarColor("blue", "lengua", false);
        }
        promedioMayor();
    }
    else if(materia1 == materia3){
        if(materia1 > materia2){
            cambiarColor("blue", "mate", false);
            cambiarColor("blue", "efsi", false);
        }
        promedioMayor();
    }
    else if(materia3 == materia2){
        if(materia3 > materia1){
            cambiarColor("blue", "lengua", false);
            cambiarColor("blue", "efsi", false);
        }
        promedioMayor();
    }
}

function colorPromedio(promedio){
    if(promedio >= 6){
        cambiarColor("green", "Promedio", true);
        document.getElementById("foto").src = "img/tilde.jpg";
    }
    else{
        cambiarColor("red", "Promedio", true);
        document.getElementById("foto").src = "img/cruz.jpg";
    }
}

function notaValida(nota, materia){
    if(nota == ""){
        document.getElementById("foto" + materia).src = "img/cruz2.jpg";
        errorUsuario("Llene la nota de " + materia);
    }
    else if(nota<=0 || nota>10){
        document.getElementById("foto" + materia).src = "img/cruz2.jpg";
        cambiarColor("red", materia, true);
        errorUsuario("Las notas deben tener valores entre 1 y 10");
    }
    else{
        document.getElementById("foto" + materia).src = "img/tilde2.jpg";
        cambiarColor("green", materia, true);
        return nota;
    }
}

function cambiarColor(color, materia, conNota){
    if(conNota == true){
        var numero = document.getElementById("nota" + materia);
        numero.style.color = color;
    }
    else{
        var numero = document.getElementById(materia);
        numero.style.color = color;
    }
}

function errorUsuario(mensaje){
    cambiarColor("black", "mate", false);
    cambiarColor("black", "lengua", false);
    cambiarColor("black", "efsi", false);
    document.getElementById("error").innerHTML = mensaje;
    document.getElementById("notaPromedio").innerHTML = "";
    document.getElementById("foto").src = "";
    exit();
}