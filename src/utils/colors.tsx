export const APP_BG_LIGHT = "#88d8bc"
export const APP_BG_DARK = "#135D66"
export const APP_BG_GREY = "#aaaaaa80"
export const APP_LIGHT_BLUE = "#b1e1e7"

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}  