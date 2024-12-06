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

// select the calculate button
const calculateButton = document.querySelector('.calculate');
// add click event listener
calculateButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    calculateBtn();
});

// calculate function
function calculateBtn() {
    //get input values
    const mortgageAmount = document.querySelector('.mortgage-amount input');  
    const mortgageAmountAside = document.querySelector('.mortgage-amount .input-aside');
    const mortgageTerm = document.querySelector('.mortgage-term input');  
    const mortgageTermAside = document.querySelector('.mortgage-term .input-aside');
    const interestRate = document.querySelector('.interest-rate input'); 
    const interestRateAside = document.querySelector('.interest-rate .input-aside'); 
    
     console.log('Values:', {
         amount: mortgageAmount.value,
         term: mortgageTerm.value,
         rate: interestRate.value,
     });

    // validate input values and alert error
    if (!mortgageAmount.value) {
        const error = document.querySelector('.mortgage-amount .error-message');
        error.style.display = 'block';
        
        mortgageAmountAside.style.backgroundColor = 'var(--color-red)';
        mortgageAmountAside.style.borderColor = 'var(--color-red)';
        mortgageAmountAside.style.color = 'var(--color-white)';
        mortgageAmount.style.borderColor = 'var(--color-red)';

        setTimeout(() => {
            error.style.display = 'none';
            mortgageAmountAside.style.backgroundColor = 'var(--color-blue-100)';
            mortgageAmountAside.style.borderColor = 'var(--color-blue-300)';
            mortgageAmountAside.style.color = 'var(--color-blue-900)';
            mortgageAmount.style.borderColor = 'var(--color-blue-300)';
            mortgageAmount.style.borderLeft = 'none';
        }, 3000);
    };

    if (!mortgageTerm.value) {
        const error = document.querySelector('.mortgage-term .error-message');
        error.style.display = 'block';
        
        mortgageTermAside.style.backgroundColor = 'var(--color-red)';
        mortgageTermAside.style.borderColor = 'var(--color-red)';
        mortgageTermAside.style.color = 'var(--color-white)';
        mortgageTerm.style.borderColor = 'var(--color-red)';

        setTimeout(() => {
            error.style.display = 'none';
            mortgageTermAside.style.backgroundColor = 'var(--color-blue-100)';
            mortgageTermAside.style.borderColor = 'var(--color-blue-300)';
            mortgageTermAside.style.color = 'var(--color-blue-900)';
            mortgageTerm.style.borderColor = 'var(--color-blue-300)';
            mortgageTerm.style.borderRight = 'none';
        }, 3000);
    };

    if (!interestRate.value) {
        const error = document.querySelector('.interest-rate .error-message');
        error.style.display = 'block';
        
        interestRateAside.style.backgroundColor = 'var(--color-red)';
        interestRateAside.style.borderColor = 'var(--color-red)';
        interestRateAside.style.color = 'var(--color-white)';
        interestRate.style.borderColor = 'var(--color-red)';

        setTimeout(() => {
            error.style.display = 'none';
            interestRateAside.style.backgroundColor = 'var(--color-blue-100)';
            interestRateAside.style.borderColor = 'var(--color-blue-300)';
            interestRateAside.style.color = 'var(--color-blue-900)';
            interestRate.style.borderColor = 'var(--color-blue-300)';
            interestRate.style.borderRight = 'none';
        }, 3000);
    };

       // Check which radio button is selected
    const selectedMortgageType = document.querySelector('input[name="mortgage-type"]:checked');
    console.log(selectedMortgageType.value);

    // validate mortgage type selection
    if (!selectedMortgageType) {
        const error = document.querySelector('.mortgage-type + .error-message');
        error.style.display = 'block';
        
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    };

    //if all values are true, then calculate
    if (mortgageAmount && mortgageTerm && interestRate) {
        //convert values to numbers
        const mortgageAmountValue = parseFloat(mortgageAmount.value);
        const mortgageTermValue = parseFloat(mortgageTerm.value);
        const interestRateValue = parseFloat(interestRate.value);

        const selectedMortgageType = document.querySelector('input[name="mortgage-type"]:checked');

        console.log(mortgageAmountValue, mortgageTermValue, interestRateValue);
        //calculate number of months (term)
        const term = mortgageTermValue * 12;
        //calculate interest amount ((rate/100) * mortgageAmount value)
        const totalInterestOnly = (interestRateValue / 100) * mortgageAmountValue;
        const totalPayment = mortgageAmountValue + totalInterestOnly;
        const monthlyPayment = totalPayment / term;

        console.log(term, totalInterestOnly, totalPayment, monthlyPayment)
    
       //depending on the type of mortgage type selected
        if (selectedMortgageType && selectedMortgageType.value === 'repayment') {
            const repayment = monthlyPayment;
            document.querySelector('.results-container').innerHTML =
            `
            <h2>Your results</h2>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            <section class="result-amounts">
                <p>Your monthly repayments</p>
                <div class="monthly">
                    <p class="monthly-amount">R<span>${repayment}</span></p>
                </div>
                <p>Total you'll repay over the term</p>
                <div class="total">
                    <p class="total-amount">R<span>${totalPayment}</span></p>
                </div>
            </section>
            `;
        } else if (selectedMortgageType && selectedMortgageType.value === 'interest-only') {
            document.querySelector('.results-container').innerHTML =
            `
            <h2>Your results</h2>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            <section class="result-amounts">
                <p>Total interest you'll pay over the term</p>
                <div class="total-interest">
                    <p class="total-interest-amount">R<span>${totalInterestOnly}</span></p>
                </div>
                <p>Total you'll pay over the term</p>
                <div class="total">
                    <p class="total-amount">R<span>${totalPayment}</span></p>
                </div>
            </section>
            `;
        }

    } 
}
    

