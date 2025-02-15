document.addEventListener('mousemove', function(event) {
    const light = document.querySelector('.light');
    const mouseX = event.clientX; // 鼠标的X坐标
    const mouseY = event.clientY; // 鼠标的Y坐标

    // 更新光球的位置
    light.style.left = `${mouseX}px`;
    light.style.top = `${mouseY}px`;
});