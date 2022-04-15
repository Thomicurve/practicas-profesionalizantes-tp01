const stations = {
    Nasa: [
        {
            initialPos: 60,
            finalPos: 90,
            height: 9000
        },
        {
            initialPos: 13,
            finalPos: 150,
            height: 30000
        },
        {
            initialPos: 34,
            finalPos: 62,
            height: 75000
        },
        {
            initialPos: 54,
            finalPos: 231,
            height: 57000
        },
    ],
    Interpol: [
        {
            initialPos: 20, //km
            finalPos: 40, //km
            height: 40000 //km
        },
        {
            initialPos: 52,
            finalPos: 200,
            height: 30000
        },
    ]
}
const seconds = 10;
const dangerHeight = 34000; //km
const dangerVelocity = 10; // km/seg

const stationsKeys = Object.keys(stations);

const dangerObjects = {};

for(let station of stationsKeys) {
    let heightAcum = 0;

    stations[station].forEach(obj => {
        const velocity = (obj.finalPos - obj.initialPos) / seconds;

        heightAcum += obj.height;
        
        if(obj.height <= dangerHeight || velocity >= dangerVelocity) 
            !dangerObjects[station] ? dangerObjects[station] = [obj] : dangerObjects[station].push(obj);
    });

    const heightAverage = heightAcum / stations[station].length ;

    console.log(`Estacion ${station}:`);
    console.log(`Cantidad de objetos peligrosos: ${dangerObjects[station].length}`); 
    console.log(`Objetos peligrosos de la estacion:`, dangerObjects[station]);
    console.log(`Promedio de altura de objetos: ${heightAverage}`);
    console.log('---------------------------------------------------------------------------------------------');
};

