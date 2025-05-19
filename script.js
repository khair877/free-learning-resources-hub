
document.addEventListener("DOMContentLoaded", function () {
    const showCoursesButton = document.getElementById("showCourses");
    const coursesSection = document.getElementById("coursesSection");

    showCoursesButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        if (coursesSection.style.display === "none") {
            coursesSection.style.display = "block";
            showCoursesButton.textContent = "Hide courses"; // Change button text
        } else {
            coursesSection.style.display = "none";
            showCoursesButton.textContent = "Take free courses"; // Reset button text
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const courseTitle = document.getElementById("course-title");
    const videoContainer = document.getElementById("video-container");

    courseTitle.addEventListener("click", function () {
        // Toggle the visibility
        if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
            videoContainer.style.display = "block";
        } else {
            videoContainer.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const courseTitles = document.querySelectorAll(".course-title");

    courseTitles.forEach(title => {
        title.addEventListener("click", function () {
            const videoContainer = this.nextElementSibling;
            if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
                videoContainer.style.display = "block";
            } else {
                videoContainer.style.display = "none";
            }
        });
    });
});

 