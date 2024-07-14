document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('home', 'homeLink');
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('about', 'aboutLink');
});

document.getElementById('resumeLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('resume', 'resumeLink');
});

document.getElementById('projectsLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('projects', 'projectsLink');
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleSection('contact', 'contactLink');
});

function toggleSection(sectionId, linkId) {
    let section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
    let link = document.getElementById(linkId);
    if (!section.classList.contains('hidden')) {
        link.textContent = 'Hide ' + link.textContent;
    } else {
        link.textContent = link.textContent.replace('Hide ', '');
    }
}
