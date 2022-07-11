const apiCall = async (zipCode) => {
     return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=7f5bbd6dd05e3fdd62172d000f0b41ef`);
}

export {apiCall}