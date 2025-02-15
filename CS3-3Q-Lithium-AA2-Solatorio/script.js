function newFunc(){
    let initialPopulation = parseFloat(prompt("Enter the initial population: "));
    let rateOfGrowth = parseFloat(prompt("Enter the rate of growth: "));
    let time = parseFloat(prompt("Enter the time (In Hours): "));

    let exponentialPopulationGrowth = Math.round(initialPopulation * Math.pow(Math.E,rateOfGrowth*time));

    let regionOfMonster = prompt("Enter the region/location of the monster: ");
    let nameOfMonster = prompt("Enter the name of the monster: ");

    let monsterInfo = regionOfMonster.concat(" ",nameOfMonster).toUpperCase();

    document.getElementById('result').innerHTML = "After " + time + " hours," + " the population of " + monsterInfo + " has risen to " + exponentialPopulationGrowth;

}
