function q1(num) {

    for (let i=1; i<=num; i++) {

        console.log(i % 3 === 0 ? (i % 5 === 0 ? 'fizzbuzz' : 'buzz') : 'fizz')
    }
}