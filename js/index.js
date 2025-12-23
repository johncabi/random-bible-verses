const bibleVerseSpan = document.getElementById("bible-verse-span");

async function fetchNewVerse() {
  try {
    const response = await fetch("https://labs.bible.org/api/?passage=random");

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.text();
    bibleVerseSpan.innerHTML = result;
  } catch (error) {
    console.error(error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchNewVerse();
});
