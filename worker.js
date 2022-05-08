const ueVersion = location.pathname.split("/")[1];

const header = document.querySelector(
  "#references > div > table > tbody > tr:nth-child(2) > td.desc-cell > p"
).innerHTML;
const headerPath = `https://github.com/EpicGames/UnrealEngine/blob/${ueVersion}${header}`;

const headerName = header.split("/").pop().split(".").slice(0, -1).join(".");
const sourceQuery = `https://github.com/search?q=repo%3AEpicGames%2FUnrealEngine+extension%3Acpp+filename%3A${headerName}&type=Code`;

const headerButton = document.createElement("button");
headerButton.innerText = "Header";
headerButton.classList.add("sis-btn");
headerButton.addEventListener("click", () => {
  window.open(headerPath);
});

const sourceButton = document.createElement("button");
sourceButton.innerText = "Impl.";
sourceButton.classList.add("sis-btn");
sourceButton.addEventListener("click", () => {
  window.open(sourceQuery);
});

document.querySelector("#pageTitle").prepend(sourceButton);
document.querySelector("#pageTitle").prepend(headerButton);
