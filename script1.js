document.addEventListener('DOMContentLoaded', () => {
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function showItem(n) {
        index += n;
        if (index >= items.length) {
            index = 0;
        } else if (index < 0) {
            index = items.length - 1;
        }
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => showItem(-1));
    next.addEventListener('click', () => showItem(1));

    // 自动播放（可选）
    setInterval(() => {
        showItem(1);
    }, 3000); // 每3秒切换图片
});
        function toggleNewsContent(id) {
            var content = document.getElementById('news-content-' + id);
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }