function getRandomColor():any {
    // Generate a random hexadecimal color code
    var color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  
    // Calculate the brightness of the color
    var brightness = parseInt(color.substring(1), 16);
    var red = brightness >> 16;
    var green = brightness >> 8 & 0xff;
    var blue = brightness & 0xff;
    var brightnessValue = (red * 299 + green * 587 + blue * 114) / 1000;
  
    // If the brightness value is less than 128 (i.e., dark), generate a new color
    if (brightnessValue < 128) {
      return getRandomColor();
    }
  
    // Return the color
    return color;
  }
  


  export {getRandomColor}