// Select all inputs and their associated asides
const inputGroups = document.querySelectorAll('.mortgage-amount, .mortgage-term, .interest-rate');

inputGroups.forEach(group => {
    const input = group.querySelector('input');
    const aside = group.querySelector('.input-aside');

    // When input gains focus
    input.addEventListener('focus', () => {
        input.style.outline = 'none';
        input.style.borderColor = 'var(--color-lime)';
        input.style.color = 'var(--color-blue-900)';
        input.style.fontWeight = '700';
        aside.style.borderColor = 'var(--color-lime)';
        aside.style.backgroundColor = 'var(--color-lime)';
        aside.style.color = 'var(--color-blue-900)';
        
        // Maintain the connected borders
        if (group.classList.contains('mortgage-amount')) {
            input.style.borderLeft = 'none';
        } else {
            input.style.borderRight = 'none';
        }
    });

    // When input loses focus
    input.addEventListener('blur', () => {
        input.style.borderColor = 'var(--color-blue-300)';
        aside.style.borderColor = 'var(--color-blue-300)';
        aside.style.backgroundColor = 'var(--color-blue-100)';
        
        // Maintain the connected borders
        if (group.classList.contains('mortgage-amount')) {
            input.style.borderLeft = 'none';
        } else {
            input.style.borderRight = 'none';
        }
    })

    // When input on hover
    input.addEventListener('mouseenter', () => {
        input.style.borderColor = 'var(--color-blue-700)';
        aside.style.borderColor = 'var(--color-blue-700)';
        aside.style.backgroundColor = '';
        
        // Maintain the connected borders
        if (group.classList.contains('mortgage-amount')) {
            input.style.borderLeft = 'none';
        } else {
            input.style.borderRight = 'none';
        }
    })

    // When input off hover
    input.addEventListener('mouseleave', () => {
        input.style.borderColor = '';
        aside.style.borderColor = '';
        aside.style.backgroundColor = '';
        
        // Maintain the connected borders
        if (group.classList.contains('mortgage-amount')) {
            input.style.borderLeft = 'none';
        } else {
            input.style.borderRight = 'none';
        }
    })
})