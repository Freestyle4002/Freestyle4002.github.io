function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
}

window.onload = function() {
    showTab('about');
    // Initialize JS effects for Projects tab
    initEffects();
};

function initEffects() {
    // 1. Image Hover Zoom
    const zoomImage = document.getElementById('zoomImage');
    zoomImage.addEventListener('mouseover', () => {
        zoomImage.style.transform = 'scale(1.2)';
    });
    zoomImage.addEventListener('mouseout', () => {
        zoomImage.style.transform = 'scale(1)';
    });

    // 2. Change Background Color
    let colors = ['#ff9999', '#99ff99', '#9999ff'];
    let colorIndex = 0;
    function changeColor() {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // 3. Text Fade-in Animation
    const fadeText = document.getElementById('fadeText');
    let opacity = 0;
    const fadeInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            fadeText.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
        }
    }, 100);

    // 4. Button Click Counter
    const counterBtn = document.getElementById('counterBtn');
    let count = 0;
    counterBtn.addEventListener('click', () => {
        count++;
        counterBtn.textContent = `Click Counter: ${count}`;
    });

    // 5. Mouse Trail Effect
    const trailArea = document.getElementById('trailArea');
    trailArea.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.left = `${e.pageX - trailArea.offsetLeft - 5}px`;
        dot.style.top = `${e.pageY - trailArea.offsetTop - 5}px`;
        trailArea.appendChild(dot);
        setTimeout(() => dot.remove(), 1000);
    });
}