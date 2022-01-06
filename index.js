// Code your solution here
function findMatching(drivers, driverName) {
    return drivers.filter(function(name) {
        return name.toLowerCase() === driverName.toLowerCase();
    })

}

function fuzzyMatch(driverName, letterMatch){
return driverName.filter(function(match){
    return match.toLowerCase().indexOf(letterMatch.toLowerCase()) === 0
})
}

function matchName(driver, driverName){
    return driver.filter(records => records.name === driverName)

}