document.addEventListener('DOMContentLoaded', () => {
            const container = document.querySelector('.explore-image-container');
            if (!container) return;

            const sliderLine = container.querySelector('.explore-slider-line');
            const topImage = container.querySelector('.explore-image-top');
            let isDragging = false;

            sliderLine.addEventListener('mousedown', () => {
                isDragging = true;
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                
                let rect = container.getBoundingClientRect();
                let x = e.clientX - rect.left;
                
                if (x < 0) x = 0;
                if (x > rect.width) x = rect.width;
                
                let percentage = (x / rect.width) * 100;
                sliderLine.style.left = percentage + '%';
                topImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
            });

            sliderLine.addEventListener('touchstart', () => {
                isDragging = true;
            });

            document.addEventListener('touchend', () => {
                isDragging = false;
            });

            document.addEventListener('touchmove', (e) => {
                if (!isDragging) return;

                let rect = container.getBoundingClientRect();
                let x = e.touches[0].clientX - rect.left;

                if (x < 0) x = 0;
                if (x > rect.width) x = rect.width;

                let percentage = (x / rect.width) * 100;
                sliderLine.style.left = percentage + '%';
                topImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
            });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const mainVideoPlayer = document.querySelector('.video-player');
            const playlistItems = document.querySelectorAll('.video-playlist img');

            if (!mainVideoPlayer || playlistItems.length === 0) return;

            playlistItems.forEach(item => {
                item.addEventListener('click', () => {
                    const videoSrc = item.getAttribute('data-video-src');
                    const posterSrc = item.getAttribute('data-poster-src');
                    
                    mainVideoPlayer.src = videoSrc;
                    mainVideoPlayer.poster = posterSrc;
                    mainVideoPlayer.load();
                    mainVideoPlayer.play();
                });
            });
        });