"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Log de inicialização do sistema no console do navegador
    console.log("%c[SYSTEM ONLINE] // HuberOS Kernel v1.0 - Luiz Hubner Loaded Successfully.", "color: #00f0ff; background: #02040a; font-family: monospace; font-size: 13px; padding: 6px; border: 1px solid #00f0ff;");
    // Navegação suave aprimorada para os links do menu
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    // Efeito de digitação automatizada no título principal (Hero Title)
    const heroTitle = document.querySelector('.terminal-box h1');
    if (heroTitle) {
        const textToType = heroTitle.textContent || "Luiz Hubner";
        heroTitle.textContent = "";
        let index = 0;
        function typeWriter() {
            if (index < textToType.length) {
                heroTitle.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 80);
            }
        }
        // Inicia o efeito após 400ms da página aberta
        setTimeout(typeWriter, 400);
    }
});
