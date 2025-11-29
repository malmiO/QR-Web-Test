document.addEventListener('DOMContentLoaded', function() {
            const screens = document.querySelectorAll('.screen');
            const screen1 = document.querySelector('.screen1');
            const screen2 = document.querySelector('.screen2');
            const screen3 = document.querySelector('.screen3');
            const products = document.querySelectorAll('.product');
            const leftImages = document.querySelectorAll('.left-image-bar img');
            const rightImages = document.querySelectorAll('.right-image-bar img');
            const contactSection = document.querySelector('.contact');
            
            // Initial animation sequence
            setTimeout(() => {
                // Move from screen1 to screen2
                screen1.classList.remove('active');
                screen2.classList.add('active');
                
                // Animate products one by one
                products.forEach((product, index) => {
                    setTimeout(() => {
                        product.style.animation = 'fadeInUp 1s ease-out forwards';
                    }, 500 + (index * 300));
                });
            }, 3000); // Show screen1 for 3 seconds
            
            // Move to screen3 
            setTimeout(() => {
                screen2.classList.remove('active');
                screen3.classList.add('active');
                
                // Animate left images
                leftImages.forEach((img, index) => {
                    setTimeout(() => {
                        img.style.animation = 'fadeInLeft 1s ease-out forwards';
                    }, 500 + (index * 300));
                });
                
                // Animate right images
                rightImages.forEach((img, index) => {
                    setTimeout(() => {
                        img.style.animation = 'fadeInRight 1s ease-out forwards';
                    }, 500 + (index * 300));
                });
                
                // Animate contact section
                setTimeout(() => {
                    contactSection.style.animation = 'fadeInUp 1s ease-out forwards';
                }, 1500);
            }, 8000); // Reduced to 10 seconds for testing - change to 63000 for production
        });