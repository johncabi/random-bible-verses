const bibleVerseSpan = document.getElementById("bible-verse-span");
const fetchNewVerseButton = document.getElementById("fetch-new-verse-button");
const sidebarBtnOpen = document.getElementById("sidebar-btn-open");
const sidebarBtnClose = document.getElementById("sidebar-btn-close");
const aboutBtn = document.getElementById("about-btn");
const aboutBtnIcon = document.getElementById("about-btn-icon");
const modalBtnClose = document.getElementById("modal-btn-close");
const aboutModal = document.querySelector("dialog");
const sidebar = document.querySelector("aside");

aboutBtn.addEventListener("click", openAboutModal);
aboutBtnIcon.addEventListener("click", openAboutModal);

function openAboutModal() {
  aboutModal.showModal();
}

modalBtnClose.addEventListener("click", closeAboutModal);

function closeAboutModal() {
  aboutModal.close();
}

sidebarBtnOpen.addEventListener("click", openSidebar);

function openSidebar() {
  sidebar.classList.replace("translate-x-full", "translate-x-0");
}

sidebarBtnClose.addEventListener("click", closeSidebar);

function closeSidebar() {
  sidebar.classList.replace("translate-x-0", "translate-x-full");
}

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
