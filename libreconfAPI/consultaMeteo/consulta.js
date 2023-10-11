fetch('https://opendata.aemet.es/opendata/sh/bf383bf9')
    .then(response => response.json())
    .then(data => {
        const jsonData = JSON.stringify(data);
        const fs = require('fs');
        fs.writeFile('meteo.json', jsonData, (err) => {
            if (err) throw err;
            console.log("Los datos se han guardado en el archivo meteo.json");
        });
    })
    .catch(error => {
        console.log("Hubo un error al obtener los datos de la API");
    });