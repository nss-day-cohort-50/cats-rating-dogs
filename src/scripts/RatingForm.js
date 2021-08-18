import { sendReview } from "./dataAccess.js"

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const reviewText = document.querySelector("input[name='reviewText']").value
        const rating = document.querySelector("input[name='rating']:checked").value
        const timestamp = Date.now()
        const isStupid = true
        const dogId = document.querySelector("#dogs").value
        const catId = document.querySelector("#cats").value
       
        const dataToSendToAPI = {
            reviewText: reviewText,
            rating: parseInt(rating),
            timestamp: timestamp,
            isStupid: isStupid,
            dogId: parseInt(dogId),
            catId: parseInt(catId)
        }
        sendReview(dataToSendToAPI)
    }
})

export const RatingForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="dogForReview"></label>
    </div>  
    <div class="field">
        <label class="label" for="reviewText">Description</label>
        <input type="text" name="reviewText" class="input" />
    </div>
    <div class="field">
        <label class="label" for="rating">Rating</label>
        <ul>
            <li><input type="radio" name="rating" value="1" class="input" />1 paw</li>
            <li><input type="radio" name="rating" value="2" class="input" />2 paw</li>
            <li><input type="radio" name="rating" value="3" class="input" />3 paw</li>
            <li><input type="radio" name="rating" value="4" class="input" />4 paw</li>
            <li><input type="radio" name="rating" value="5" class="input" />5 paw</li>
        </ul>
       
    </div>
   
    <button class="button" id="submitRequest">Submit Request</button>
`
    return html
}