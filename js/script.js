const bibleVerseSpan = document.getElementById("bible-verse-span");
const fetchNewVerseButton = document.getElementById("fetch-new-verse-button");

fetchNewVerseButton.addEventListener("click", fetchNewVerse);

async function fetchNewVerse() {
  bibleVerseSpan.textContent = "Loading...";
  fetchNewVerseButton.disabled = true;

  try {
    const response = await fetch("https://labs.bible.org/api/?passage=random");

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.text();
    bibleVerseSpan.innerHTML = result;
    fetchNewVerseButton.disabled = false;
  } catch (error) {
    throw error;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchNewVerse();
});
