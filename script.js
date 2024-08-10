document.addEventListener('DOMContentLoaded', () => {
    console.log("文档已加载");

    // 新闻展开和收回功能
    document.querySelectorAll('.expand-btn').forEach(button => {
        button.addEventListener('click', function() {
            const fullArticle = this.nextElementSibling;
            if (fullArticle.style.display === 'none') {
                fullArticle.style.display = 'block';
                this.textContent = '收回';
            } else {
                fullArticle.style.display = 'none';
                this.textContent = '展开阅读';
            }
        });
    });
});
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

