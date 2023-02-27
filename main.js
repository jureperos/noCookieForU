sayNoArr = [/zavrni.*/ig, /reject.*/ig]

setTimeout(() => {
    findCookieButton(document.body)
}, 4000)

function findCookieButton(element) {

    if (element.tagName === "BUTTON") {
        console.log(element)
        const innerText = element.lastChild.innerText || element.innerText
        
        const textMatch = sayNoArr.map(regex => innerText.match(regex))
        console.log(textMatch)
        if (textMatch.some(element => element !== null)) {
            element.click();
            alert('cookies denied')
        }
    } else if (element.tagName !== "BUTTON") {
        element.childNodes.forEach(findCookieButton)
    } else {console.log("something went wrong")}
}
