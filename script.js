let asideChildren = Array.from(document.querySelectorAll(".aside-child"));
let mainSections = Array.from(document.querySelectorAll(".section"));

mainSections[1].style.display = "grid";
asideChildren[1].classList.add("aside-child-active");

asideChildren.forEach((asideChild, index) => {
    asideChild.addEventListener("click", () => {
        asideChildren.forEach((asideChild) => {
            asideChild.classList.remove("aside-child-active");
        });
        asideChild.classList.add("aside-child-active");
        mainSections.forEach((child) => {
            child.style.display = "none";
        });
        mainSections[index].style.display = "grid";
    });
});



let studentsTop6CardsChildren = Array.from(document.querySelectorAll(".students-top-6-cards-child"));
let subSection = Array.from(document.querySelectorAll(".sub-section"));
let subSectionCloseIcon = Array.from(document.querySelectorAll(".sub-section-close-icon"));

studentsTop6CardsChildren.forEach((studentsTop6CardsChild, index) => {
    studentsTop6CardsChild.addEventListener("click", () => {
        subSection.forEach((child) => {
            child.style.display = "none";
        });
        subSection[index].style.display = "grid";
        subSectionCloseIcon[index].addEventListener("click", () => {
            subSection[index].style.display = "none";
        });
    });
});



