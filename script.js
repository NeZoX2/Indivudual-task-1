// Показ формы заказа
function showOrderForm() {
    const form = document.getElementById('orderForm');
    form.classList.remove('hidden');
    form.scrollIntoView({ behavior: 'smooth' });
}

// Обработка формы
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем данные формы
    const name = this.elements[0].value;
    const phone = this.elements[1].value;
    const service = this.elements[2].value;
    
    // Здесь должна быть отправка на сервер
    console.log('Заказ:', { name, phone, service });
    
    // Показываем сообщение
    alert('Спасибо за заявку! Мы скоро с вами свяжемся.');
    
    // Очищаем форму
    this.reset();
    this.classList.add('hidden');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Учитываем высоту шапки
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Фиксация шапки при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});