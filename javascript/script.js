// Selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const categoryName = previewBox.querySelector(".title p");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const shadow = document.querySelector(".shadow");
let previewSize = 700; // default preview size

// Filter images on click
filterItem.onclick = (selectedItem) => {
  if (selectedItem.target.classList.contains("item")) {
    // If user selected item has .item class
    filterItem.querySelector(".active").classList.remove("active");
    // Remove the active class which is in first item
    selectedItem.target.classList.add("active");
    // Add that active class on user selected item
    let filterName = selectedItem.target.getAttribute("data-name");
    // Getting data-name value of user selected item and store in a filtername variable
    filterImg.forEach((image) => {
      let filterImges = image.getAttribute("data-name");
      // Getting image data-name value
      if (filterImges == filterName || filterName == "all") {
        image.classList.remove("hide");
        image.classList.add("show");
        // Show the image
      } else {
        image.classList.add("hide");
        image.classList.remove("show");
        // Hide the image
      }
    });
  }
};

// Preview image on click
filterImg.forEach((image) => {
  image.addEventListener("click", () => {
    let selectedPrevImg = image.querySelector("img").src;
    // Getting user clicked image source link and stored in a variable
    let selectedImgCategory = image.getAttribute("data-name");
    // Getting user clicked image data-name value
    previewImg.src = selectedPrevImg;
    // Passing the user clicked image source in preview image source
    categoryName.textContent = selectedImgCategory;
    // Passing user clicked data-name value in category name
    previewBox.classList.add("show");
    // Show the preview image box
    shadow.classList.add("show");
    // Show the light grey background
    document.querySelector("body").style.overflow = "hidden";
    // Hide the scroll bar on body
    previewImg.style.width = previewSize + "px";
    previewImg.style.height = previewSize + "px";
    // Set preview size
  });
});

// Close preview on click
closeIcon.onclick = () => {
  previewBox.classList.remove("show");
  shadow.classList.remove("show");
  document.querySelector("body").style.overflow = "auto";
  // Show the scroll bar on body
};

// Close preview on Esc key press
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
    // Show the scroll bar on body
  }
});

const timelineItems = document.querySelectorAll('.timeline-item');

// Add click event listeners to timeline items to toggle active state
timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    timelineItems.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});
