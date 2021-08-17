import { getDumbDogs } from "./dataAccess.js";


export const DogSelect = () => {
    const dumbDogs = getDumbDogs()

    let html = ""
    html += "<select id='dogs'><option value='0'>Select a dumb dog you dumb human..."
    const dogOptions = dumbDogs.map(dog => {
        return `<option value="${dog.id}">${dog.name}</option>`
    }).join("")
    html += dogOptions
    html += "</select>"

    return html


}