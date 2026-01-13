document.querySelectorAll('#faq .space-y-4 button').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.material-icons-outlined');

        answer.classList.toggle('hidden');

        if (answer.classList.contains('hidden')) {
            icon.textContent = 'add';
            icon.classList.remove('text-primary');
            icon.classList.add('text-gray-400');
        } else {
            icon.textContent = 'remove';
            icon.classList.remove('text-gray-400');
            icon.classList.add('text-primary');
        }
    });
});