function displayPoem(response) {
    console.log("poem generated");
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event){
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "d90d35t42b8f499421c0b6fca6d4fo03";
let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
let context = 
"You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and seperate each line with a <br />. Make sure to follow user instructions below and sign the poem with 'SheCodes AI' inside <strong> element";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating"> ⏳ Generating a poem about ${instructionsInput.value}..</div>`;

console.log("Generating poem...");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
