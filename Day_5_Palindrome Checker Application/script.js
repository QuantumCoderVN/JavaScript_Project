function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

  return true;
}

function checkPalindrome () {
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");

    if (isPalindrome(input)) {
        result.textContent = "Yes, it's a palindrome!";
    } else {
        result.textContent = "No, it's not a palindrome!";
    }
    result.classList.add("fadeIn");
    input.value = "";
}
document.getElementById("check-btn").addEventListener("click", checkPalindrome);
