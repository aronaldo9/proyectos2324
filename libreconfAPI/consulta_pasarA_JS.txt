fetch('https://api.preciodelaluz.org/v1/prices/all?zone=PCB')
    .then(response => response.json())
    .then(data => {
        const jsonData = JSON.stringify(data);
        const fs = require('fs');
        fs.writeFile('precios.json', jsonData, (err) => {
            if (err) throw err;
            console.log("Los datos se han guardado en el archivo precios.json");
        });
    })
    .catch(error => {
        console.log("Hubo un error al obtener los datos de la API");
    });