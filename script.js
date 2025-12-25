document.addEventListener("keydown", e => {
    const key = document.querySelectorAll(".key");

    key.forEach(k => {
        if (k.textContent.toLowerCase() === e.key.toLowerCase()) {
            k.classList.add("active");
        }
    });
});

document.addEventListener("keyup", () => {
    document.querySelectorAll(".key").forEach(k => {
        k.classList.remove("active");
    });
});
