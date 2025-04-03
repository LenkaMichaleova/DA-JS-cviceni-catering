const justFood = (ppl) => {
    return `Cateringem od Just Food pro ${ppl} lidí za ${ppl * 300} Kč`
}

const yourMama = (ppl) => {
    return `Cateringem od Your Mama pro ${ppl} lidí za ${ppl * 500} Kč`
}

const flavourHaven = (ppl) => {
    return `Cateringem od Flavour Haven pro ${ppl} lidí za ${ppl * 1000} Kč`
}

const createEvent = (name, nmb, fce) => {
    return `<p>Událost ${name} s ${fce(nmb)}</p>`
}

document.body.innerHTML += createEvent("Inaugurace prezidenta", 100, flavourHaven)
document.body.innerHTML += createEvent("Narozeninová oslava", 30, yourMama)
document.body.innerHTML += createEvent("Party na střeše", 150, justFood)