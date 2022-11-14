function saludar(){
    let nombreUsuario = 'Andrés';

    return function displayUserName(){
        return "Hola, "+ nombreUsuario;
    }
}

//console.log(saludar()());

const s = saludar();
console.log(s());