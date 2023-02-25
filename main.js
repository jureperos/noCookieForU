
findCookieButton(document.body)

function findCookieButton(element) {

    if (element.tagName === "BUTTON") {
        if (element.lastChild.innerText === "Button 1" || element.innerText === "Button 1") {
            element.style.color = "red"
            element.style.backgroundColor = "green"
        }
    } else if (element.tagName !== "BUTTON") {
        element.childNodes.forEach(findCookieButton)
    } else {console.log("something went wrong")}
}