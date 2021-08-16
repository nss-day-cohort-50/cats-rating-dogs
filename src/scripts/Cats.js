import { getCats } from "./dataAccess.js"




export const CatSelect = () => {
    const cats = getCats()

    let html = ""
    html += "<select id='cats'><option value='0'>Select a cat you dumb human..."
    const catOptions = cats.map(cat => {
        return `<option value="${cat.id}">${cat.name}</option>`
    }).join("")
    html += catOptions
    html += "</select>"

    return html
}