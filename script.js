let asideChildren = Array.from(document.querySelectorAll(".aside-child"));
let mainSections =Array.from(document.querySelectorAll("main section"));

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

studentsTop6CardsChildren.forEach((studentsTop6CardsChild) => {
    studentsTop6CardsChild.addEventListener("click", () => {
        studentsTop6CardsChildren.forEach((studentsTop6CardsChild) => {
            studentsTop6CardsChild.classList.remove("students-top-6-cards-child-active");
        });
        studentsTop6CardsChild.classList.add("students-top-6-cards-child-active");
    });
});