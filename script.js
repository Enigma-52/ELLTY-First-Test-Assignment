document.getElementById('all-pages').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.items input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = this.checked);
});

const itemCheckboxes = document.querySelectorAll('.items input[type="checkbox"]');
itemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const allChecked = Array.from(itemCheckboxes).every(checkbox => checkbox.checked);
        document.getElementById('all-pages').checked = allChecked;
    });
});