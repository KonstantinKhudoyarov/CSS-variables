'use strict'

var inputs = document.querySelectorAll('.controls__input');

function handleUpdate() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
}

inputs.forEach(function(input) {
    input.addEventListener('change', handleUpdate);
});

inputs.forEach(function(input) {
    input.addEventListener('mousemove', handleUpdate);
});