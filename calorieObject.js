function solve(arr) {
    let obj = {};

    while (arr.length !== 0) {
        let product = arr.shift();
        let calories = arr.shift()
        obj[product] = Number(calories)
    }
    
    console.log(obj)
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])