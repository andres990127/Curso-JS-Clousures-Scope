function saludo(){
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana'){
        console.log('Saludos ' + userName);
    }

}

saludo();
console.log(userName); // Un scope local no se puede leer desde un contexto global

