// const lis = document.querySelectorAll('.content-ul li');
// const popup = document.getElementById("popup");
// let hideTimer = null;

// lis.forEach((li) => {
//   li.addEventListener('mouseenter', (e) => {
//     if (hideTimer) clearTimeout(hideTimer);

//     popup.innerText = li.innerText + " 的详细内容";
//     popup.style.display = 'block';

//     // 获取li的位置，设置弹窗Y坐标
//     const rect = li.getBoundingClientRect();
//     popup.style.top = rect.top + 'px';
//   });

//   li.addEventListener('mouseleave', () => {
//     hideTimer = setTimeout(() => {
//       if (!popup.matches(':hover')) {
//         popup.style.display = 'none';
//       }
//     }, 2000);
//   });
// });

// popup.addEventListener('mouseenter', () => {
//   if (hideTimer) clearTimeout(hideTimer);
// });
// popup.addEventListener('mouseleave', () => {
//   popup.style.display = 'none';
// });

// const lis = document.querySelectorAll(".content-ul li");
// const popup = document.getElementById("popup");
// let hideTimer = null;

// lis.forEach((li) => {
//   li.addEventListener('mouseenter', (e) => {
//     if(hideTimer) clearTimeout(hideTimer);

//     popup.innerHTML = li.innerText;
//     popup.style.display = "block";

//     const rect = li.getBoundingClientRect();
//     popup.style.top = rect.top + 'px';
//   });

//   li.addEventListener("mouseleave", () =>{
//     hideTimer = setTimeout(() => {
//       if(!popup.matches(":hover")){
//         popup.style.display = "none";
//       }
//     },200);
//   });
// });

const lis = document.querySelectorAll('.content-ul li');
const popup = document.getElementById("popup");
let hideTimer = null;

lis.forEach((li) => {
  li.addEventListener('mouseenter', () => {
    if (hideTimer) clearTimeout(hideTimer);
    popup.innerText = li.innerText + " 的详细内容";
    popup.style.display = 'block';
    const rect = li.getBoundingClientRect();
    popup.style.top = rect.top + 'px';
    popup.style.left = (rect.right + 10) + 'px';
    popup.style.position = 'fixed';
  });

  li.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(() => {
      if (!popup.matches(':hover') && !document.querySelector('.content-ul li:hover')) {
        popup.style.display = 'none';
      }
    }, 200);
  });
});

popup.addEventListener('mouseenter', () => {
  if (hideTimer) clearTimeout(hideTimer);
});

popup.addEventListener('mouseleave', () => {
  popup.style.display = 'none';
});