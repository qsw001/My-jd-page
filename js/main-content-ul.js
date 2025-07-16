
  const lis = document.querySelectorAll('.left-item li');
  const popup = document.querySelector('.hover-popup');

  lis.forEach((li) => {
    li.addEventListener('mouseenter', (e) => {
      popup.innerText = li.innerText + " 的弹窗内容";
      popup.style.display = 'block';
    });

    li.addEventListener('mouseleave', () => {
      popup.style.display = 'none';
    });
  });