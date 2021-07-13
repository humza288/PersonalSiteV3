const skills_cards = document.querySelectorAll('.skills-card');
const education_cards = document.querySelectorAll('.education-card');
const items = document.querySelectorAll('.project-item');
const form = document.querySelector(".main-form");
const details = document.querySelector(".details");
const greeting = document.querySelector(".greeting");
const image = document.querySelector(".profile-image");
const links = document.querySelectorAll(".links");

console.log(form)

let observer = new IntersectionObserver((enteries) => {
    enteries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.transform = "translateY(0px)"
            entry.target.style.opacity = '1';  
        }
    })
})

skills_cards.forEach(skills_card => {
    observer.observe(skills_card)
})


education_cards.forEach(education_card => {
    observer.observe(education_card);
})

links.forEach(links => {
    observer.observe(links);
})

items.forEach(item => {
    observer.observe(item);
})

observer.observe(form); 
observer.observe(details);
observer.observe(greeting);
observer.observe(image);
observer.observe(links);



