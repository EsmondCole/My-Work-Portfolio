// JavaScript to add interactivity
document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            alert("Project details coming soon!");
        });
    });
});
