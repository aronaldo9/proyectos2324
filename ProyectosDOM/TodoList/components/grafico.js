import * as echarts from 'echarts';

export default function crearGrafico(selector,tasks) {
   const contenedor = document.querySelector(selector);
   // dimensiones del gráfico
   const width = contenedor.clientWidth;
   const height = contenedor.clientHeight;

   // datos del gráfico
   const datos = {
        categorias : ["completadas","no completadas"],
        valores : [
            tasks.filter(task => task.isCompleted).length,
            tasks.filter(task => !task.isCompleted).length
        ],
   }

   const opciones = {
        title: {
            text: "Tareas",        
        },
        xAxis: {
            data: datos.categorias,
        },
        yAxis: {},
        series: [
            {
                data: datos.valores,
                type: "bar",
            },
        ],
   };

    let miGrafico = echarts.init(contenedor);
    miGrafico.resize({width,height});
    miGrafico.setOption(opciones);
    return miGrafico;
}


