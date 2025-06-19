document.addEventListener("DOMContentLoaded", () => {
    const arrows = document.querySelectorAll(".arrow");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const targetId = arrow.getAttribute("data-target");
            const content = document.getElementById(targetId);

            
            if (content.style.display === "none") {
                content.style.display = "block";

                
                setTimeout(() => {
                    content.style.display = "none";
                }, 5000); 
            } else {
                content.style.display = "none";
            }
        });
    });
});
