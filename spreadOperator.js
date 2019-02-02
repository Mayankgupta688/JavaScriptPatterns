function Sum(x, y, z) {
    alert(x);
    alert(y);
    alert(z);
    return x + y + z;
}

var arr = [1, 2, 3];

Sum(...arr);

Sum(arr[0], arr[1], arr[2]);

// Array Input => CSV Value...

// [1, 2, 3] => 1, 2, 3

// [[1, 2], [2, 3]] => [1, 2],  [2, 3]