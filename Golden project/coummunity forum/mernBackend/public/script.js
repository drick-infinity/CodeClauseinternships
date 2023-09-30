// script.js
document.addEventListener("DOMContentLoaded", () => {
    const homeTab = document.getElementById("homeTab");
    const indexTab = document.getElementById("indexTab");
    const postTab = document.getElementById("postTab");

    const homeContent = document.getElementById("home");
    const indexContent = document.getElementById("index");
    const postContent = document.getElementById("post");

    function showContent(contentToShow) {
        const allContent = [homeContent, indexContent, postContent];

        allContent.forEach(content => {
            content.style.display = "none";
        });

        contentToShow.style.display = "block";
    }

    homeTab.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default behavior (page navigation)
        showContent(homeContent);
    });

    indexTab.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default behavior (page navigation)
        showContent(indexContent);
    });

    postTab.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default behavior (page navigation)
        showContent(postContent);
    });
});
