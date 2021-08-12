function getRectArea(width, height) {
    if (width > 0 && height > 0) {
        var area = width * height;
        return area;
    }
    return 0;
}

console.log(getRectArea(3, 4));
// expected output: 12

console.log(getRectArea(-3, 4));
//   // expected output: 0
