document.getElementById('budget-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const needs = (income * 0.50).toFixed(2);
    const wants = (income * 0.30).toFixed(2);
    const savings = (income * 0.20).toFixed(2);
    document.getElementById('results').innerHTML = `
        <p>Needs: $${needs}</p>
        <p>Wants: $${wants}</p>
        <p>Savings: $${savings}</p>
    `;
});

document.getElementById('goal-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const goal = document.getElementById('goal').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const timeline = parseInt(document.getElementById('timeline').value);
    const monthlySavings = (amount / timeline).toFixed(2);
    document.getElementById('goal-results').innerHTML = `
        <p>To achieve your goal of ${goal}, you need to save $${monthlySavings} per month.</p>
    `;
});
