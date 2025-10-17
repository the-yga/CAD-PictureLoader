window.addEventListener('message', function (event) {
    const data = event.data;
    const viewer = document.getElementById("viewer");

    if (data.type === "show") {
        viewer.style.display = "none"; 
        viewer.classList.remove("show");
        viewer.src = data.url;
        document.body.style.display = "flex";

        viewer.onload = () => {
            viewer.style.display = "block";
            setTimeout(() => {
                viewer.classList.add("show");
            }, 10); 
        };

        viewer.onerror = () => {
            viewer.style.display = "none";
        };
    }

    if (data.type === "hide") {
        viewer.classList.remove("show");
        setTimeout(() => {
            document.body.style.display = "none";
            viewer.src = "";
            viewer.style.display = "none";
        }, 200);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        fetch(`https://${GetParentResourceName()}/closeImage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: "{}",
        });
    }
});
