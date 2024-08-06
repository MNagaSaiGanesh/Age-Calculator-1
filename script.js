document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
});

function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('result').textContent = 'Please enter a valid date of birth.';
        return;
    }
    
    const birthDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('result').textContent = `You are ${age} years old.`;
}
