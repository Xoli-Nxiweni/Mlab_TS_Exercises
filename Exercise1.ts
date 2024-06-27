//1
enum TrafficLight{
    Green = 'Green',
    Yellow = 'Yellow',
    Red = 'Red',
}

let TrafficLights : TrafficLight [] = [TrafficLight.Green, TrafficLight.Yellow, TrafficLight.Red];

let RobotLight = () : void =>{
    let index = 0;

    setInterval(()=>{
        switch(index){
            case 0: console.log(`Robot is ${TrafficLights[index]}, GO!!`);
            break;
            case 1: console.log(`Robot is ${TrafficLights[index]}, HURRY or SLOW DOWN!!`);
            break;
            default: console.log(`Robot is ${TrafficLights[index]}, STOP!!`);
            break;
        }
        index = (index + 1) % TrafficLights.length;
    }, 10000)
}
RobotLight()



