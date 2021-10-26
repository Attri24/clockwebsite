setInterval(setclock, 1000)
const hourhand = document.querySelector('[data-hour-hand]')
const minhand = document.querySelector('[data-min-hand]')
const sechand = document.querySelector('[data-sec-hand]')
function setclock(){
    const  currentdate = new Date()
    const secondratio = currentdate.getSeconds() / 60
    const minuteratio = (secondratio + currentdate.getMinutes()) / 60
    const hoursratio = (minuteratio + currentdate.getHours()) / 12
    setrotation(sechand,secondratio)
    setrotation(minhand,minuteratio)
    setrotation(hourhand,hoursratio)
}
function setrotation(element, rotationration){
    element.style.setProperty('--rotation', rotationration * 360)
}
setclock()