export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const yOffset = -80; // Navbar height offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};