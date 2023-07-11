function isPrime(number) {
    let startTime = new Date()
    let endTime = new Date()
    let isPrime = true

    for (let i = 3; i < number; i++) {
        if(number % i === 0) {
            isPrime = false
            break
        }
    }
    
    if(isPrime) {
        endTime = new Date()
    }

    return {
        number,
        isPrime,
        time: endTime.getTime() - startTime.getTime()
    }
}