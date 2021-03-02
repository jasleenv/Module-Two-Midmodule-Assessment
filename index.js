//I want to pass the first test by making the onclick function work. I was having trouble with the append element and making it work


function rollDice() {
        const dice = ['⚀', '⚁',' ⚂','⚃','⚄',' ⚅']

        let amountOfDice = document.getElementById("numberOfDice").value
        let dicePics = Math.floor(Math.random()* dice.length)
        return dicePics
       let job = 10
        let sumoOfDice = dicePics.value
        let history = document.getElementById("history")
        let li = document.createElement("li")
        li.textContent = job
        document.body.appendChild(li)
        


}