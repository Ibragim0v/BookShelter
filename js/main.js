//html elements for darkMode
const elBody = document.querySelector("body")
const elDarkMode = document.querySelector("#dark-mode")

//html template elements
const elBookTemplate = document.querySelector("#book-template").content
const elBookmarkTemplate = document.querySelector("#bookmark-template").content

//html wrappers
const elBookWrapper = document.querySelector("#book-wrapper")
const elBookmarkWrapper = document.querySelector("#bookmark-wrapper")

//html extra elements
const elSearchResult = document.querySelector("#main-result")
const elOrderBook = document.querySelector("#main-order")

//darkMode added
elDarkMode.addEventListener("click", function (evt) {
    elBody.classList.toggle("dark-mode")
})

