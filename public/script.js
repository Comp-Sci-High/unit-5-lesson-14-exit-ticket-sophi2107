// Create and call a function that tests your update route handler [2 pts]
// Make sure that the function takes the name of the potion as a parameter
// There are already potion's with the label polyjuice or amortentia

async function patchCreature(color) {
    try {
        // fill in the path
        const response = await fetch(base + "/update/" + color, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               color:"pearlywhite",
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
patchPotion("polyjuice")
