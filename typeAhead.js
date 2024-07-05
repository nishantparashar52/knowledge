const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

const endpoint =
  "https://gist.githubusercontent.com/cynthiaparvas/a7990c407f21a20d6e34727e855ee917/raw/21e76f7960cba258704eb8b84cdd6aa281ee770a/songs.json";
let songs = [];
fetch(endpoint)
  /* blob storage is particularly useful for storing media, such as audio and video, and frequently changing data, such as log files */
  .then((blob) => blob.json())
  /* using the spread operator (...x) to create a copy, .push() would only append to the existing array of songs. */
  .then((data) => songs.push(...data))


function findMatches(wordsToMatch, songs) {
  return songs.filter((word) => {
    /*
    Using a string as the first argument to the RegExp() constructor to build the regex (regular expression) from dynamic input.
    2nd argument of RegExp:
    ~ g = global: match all instances of the pattern in a string, not just one.
    ~ i = case-insensitive (match the string "a" or "A")
    */
    const regex = new RegExp(wordsToMatch, "gi");
      /* enabling user to search by song name, artist or year: */
    return (
    
      word.song.match(regex) ||
      word.artist.match(regex) ||
      word.year.match(regex)
)
  });
}

function displayMatches() {
    console.log(this.value);
  /*we already received the wordsToMatch part of the argument, now replace it w/ this.value in this function: */
  suggestions.innerHTML = findMatches(this.value, songs)
    .map((word) => {
      const regex = new RegExp(this.value, "gi");
      return `
      <li>
        <span class="name">${word.song.replace(
          regex,
          /*highlight the part that is about to get displayed and was on the search bar: */
          `<span class="highlighter">${this.value}</span>`
        )} - ${word.artist.replace(
        regex,
        `<span class="highlighter">${this.value}</span>`
      )}</span>
        <span class="year">${word.year.replace(
          regex,
          `<span class="highlighter">${this.value}</span>`
        )}</span>
      </li>
    `;
    })
    /* The join() method creates and returns a new string by concatenating all of the elements in an array: */
    .join("");
}
