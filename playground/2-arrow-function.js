// const square = (x) => x*x

// console.log(square(2))
const event = {
    name: 'Birthday Party',
    guessList: ['a', 'b', 'c'],
    printGuessList(){
        console.log('Guess list for ' + this.name )
        this.guessList.forEach((guess) => {
            console.log(guess + ' is attending ' + this.name)
        })
    }
}

event.printGuessList()