import { CatSelect } from "./Cats.js"

export const CatsRateDogs = () => {
    return `
    <h1>Cats Rate Dogs</h1>
    <div id="cats-rate-dogs-image"><img alt="Cats Rate Dogs" src="images/CatsRateDogs1.png" /></div>
    <section id='cat-reviewers'>
    ${CatSelect()}
    </section>
    `
}