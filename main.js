function animateIcons() {

    const container = $('#share-nav');
    let inProgress = false;


    container.on('mouseenter', () => {
        if (!inProgress) {
            container.find('.share svg').addClass('active');
            gsap.set('#share-nav ul', {
                display: 'flex', onComplete: () => {
                    gsap.to('#share-nav ul li', {
                        duration: .5,
                        y: '0%',
                        stagger: 0.1,
                        opacity: 1,
                        ease: 'Expo.easeInOut'
                    });
                }, onUpdate: () => {
                    inProgress = true;
                }
            });
        }
    });

    container.on('mouseleave', () => {
        gsap.to('#share-nav ul li', {
            duration: .5,
            y: '50%',
            stagger: -0.1,
            opacity: 0,
            ease: 'Expo.easeInOut',
            onUpdate: () => {
                container.find('.share svg').removeClass('active');
            },
            onComplete: () => {
                gsap.set('#share-nav ul', { display: 'none' });
                inProgress = false;
            }
        });
    });

}
animateIcons()