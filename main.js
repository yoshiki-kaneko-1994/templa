'use strict';

{
  const headerMenus = document.querySelectorAll('.header-list .header-lists');
  const headerUls = document.querySelectorAll('.header-list ul');

  headerMenus.forEach((menu, index) => {
    const ulList = headerUls[index];

    menu.addEventListener('mouseenter', () => {
      ulList.style.opacity = '1';
      ulList.style.pointerEvents = 'auto';
    });

    menu.addEventListener('mouseleave', () => {
      ulList.style.opacity = '0';
      ulList.style.pointerEvents = 'none';
    });
  });
}