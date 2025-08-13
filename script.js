// Highlight active nav link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});

// Search button functionality
document.getElementById("searchBtn").addEventListener("click", () => {
    const category = document.querySelector(".search-box select").value;
    const query = document.querySelector(".search-box input").value;
    alert(`Searching for "${query}" in category "${category}"`);
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show");
});