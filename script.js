    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');
        
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
            
            // Adiciona overlay quando o menu está aberto
            if (navList.classList.contains('active')) {
                const overlay = document.createElement('div');
                overlay.id = 'menu-overlay';
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
                overlay.style.zIndex = '999';
                overlay.addEventListener('click', closeMenu);
                document.body.appendChild(overlay);
                document.body.style.overflow = 'hidden';
            } else {
                closeMenu();
            }
        });
        
        function closeMenu() {
            const overlay = document.getElementById('menu-overlay');
            if (overlay) {
                overlay.remove();
            }
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    });
