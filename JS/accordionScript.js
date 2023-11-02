const toggleButton1 = document.getElementById('topAccardion');
const expandableBlock1 = document.getElementById('topBlockInAccardeon');

toggleButton1.addEventListener('click', () => {
    if (expandableBlock1.classList.contains('collapsed')) {
        expandableBlock1.classList.remove('collapsed');
        expandableBlock1.classList.add('expanded');
    } else {
        expandableBlock1.classList.remove('expanded');
        expandableBlock1.classList.add('collapsed');
    }
});

const toggleButton2 = document.getElementById('midAccardion'); // Создайте отдельную переменную для второго кнопки
const expandableBlock2 = document.getElementById('midBlockInAccardeon'); // Создайте отдельную переменную для второго блока

toggleButton2.addEventListener('click', () => {
    if (expandableBlock2.classList.contains('collapsed')) {
        expandableBlock2.classList.remove('collapsed');
        expandableBlock2.classList.add('expanded');
    } else {
        expandableBlock2.classList.remove('expanded');
        expandableBlock2.classList.add('collapsed');
    }
});

const toggleButton3 = document.getElementById('bottomAccardion');
const expandableBlock3 = document.getElementById('bottomBlockInAccardeon');

toggleButton3.addEventListener('click', () => {
    if (expandableBlock3.classList.contains('collapsed')) {
        toggleButton3.style.borderRadius = "0"
        expandableBlock3.classList.remove('collapsed');
        expandableBlock3.classList.add('expanded');
    } else {
        expandableBlock3.classList.remove('expanded');
        expandableBlock3.classList.add('collapsed');
        toggleButton3.style.borderBottomRightRadius = "35px";
        toggleButton3.style.borderBottomLeftRadius = "35px";
    }
});
