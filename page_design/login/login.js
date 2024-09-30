document.getElementById("id-input").addEventListener("focus", function() {
    this.placeholder = '';
});

document.getElementById("id-input").addEventListener("blur", function() {
    if(this.value === '') {
        this.placeholder = 'ID:';
    }
});

document.getElementById("pw-input").addEventListener("focus", function() {
    this.placeholder = '';
});

document.getElementById("pw-input").addEventListener("blur", function() {
    if(this.value === '') {
        this.placeholder = 'PW:';
    }
});
