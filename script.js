const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

// Инициализация аккордеона
document.addEventListener('DOMContentLoaded', () => {
  const firstAccordionItem = document.querySelector('.accordion-item');
  const firstAccordionContent = firstAccordionItem.querySelector('.accordion-content');
  
  // Открываем первый элемент по умолчанию
  firstAccordionItem.classList.add('active');
  firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + "px";
});

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.parentElement;
      const accordionContent = accordionItem.querySelector('.accordion-content');

      // Если кликнули на уже открытый элемент - ничего не делаем
      if (accordionItem.classList.contains('active')) {
        return;
      }

      // Закрываем все открытые секции
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = "0";
      });

      // Открываем выбранную секцию
      accordionItem.classList.add('active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    });
  });