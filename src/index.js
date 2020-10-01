exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }

}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }

}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        let op = 0;
        let string = array.toString();

        for (let i = 0; i < string.length; i++) {
            if (string[i] === ',') {
                sum += parseFloat(string.slice(op, i));
                op = i + 1;


            }
        }

        sum += parseFloat(string.slice(op, string.length));
        return sum / array.length;
    }
}
