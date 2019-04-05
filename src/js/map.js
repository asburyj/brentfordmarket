const accessToken = 'pk.eyJ1IjoiYXNidXJ5aiIsImEiOiJjamhibmdoaXYwNW84MzBvMTgxeWxzZzFmIn0.PL6E8FkoLeparMbpNCy0DQ';

const map = L.map('map-wrapper').setView([51.483130, -0.308466], 14);
const marker = L.marker([51.483130, -0.308466]).addTo(map);
    // .bindPopup('<div class="popup-buttons"><a class="popup-button email" href="mailto:marshproduceltd@yahoo.co.uk">Email Us</a>'
    //     + '<a class="popup-button phone" href="tel:07427626754">Phone Us</a></div><br/><div class="popup-buttons">'
    //     + '<a class="popup-button phone message" href="sms:07427626754">Message Us</a></div><br/>Address: Parish Farm,<br/>\tRectory Lane,<br/>\tBrookland,<br/>\tRomney Marsh,<br/>\tKent,<br/>\tTN29 9RH')
    // .openPopup();
L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(map);