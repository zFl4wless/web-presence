const texts = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "GitHub",
    "Figma",
    "Tailwind",
    "ReactJs",
];
let tagCloud;
let isLarge;

window.onload = function () {
    if (window.innerWidth < 768) {
        createCloud(150);
        isLarge = false;
    } else {
        createCloud(240);
        isLarge = true;
    }
};

window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        if (isLarge) {
            tagCloud.destroy();
            createCloud(150);
            isLarge = false;
        }
    } else {
        if (!isLarge) {
            tagCloud.destroy();
            createCloud(240);
            isLarge = true;
        }
    }
});


function createCloud(radius) {
    tagCloud = TagCloud('.sphere', texts, {
        radius: radius,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 135,
        keep: false
    });
}