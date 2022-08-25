let counter = document.getElementById("counter")
let norwayTrips = document.getElementById("norwayTrips")
let abroadTrips = document.getElementById("abroadTrips")

let totalCount = 0
let norwayCount = 0
let abroadCount = 0

function incrementNorway() {
    totalCount += 1
    norwayCount += 1
    counter.textContent = totalCount
}

function incrementAbroad() {
    totalCount += 1
    abroadCount += 1
    counter.textContent = totalCount
}

function save() {
    let countStr = totalCount + " - "
    norwayTrips.textContent += norwayCount + " - "
    abroadTrips.textContent += abroadCount + " - "
    
    
    counter.textContent = 0
    totalCount = 0
    norwayCount = 0
    abroadCount = 0
    
    
}
