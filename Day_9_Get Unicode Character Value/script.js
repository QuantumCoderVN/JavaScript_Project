function detectChar(){
    const input = document.getElementById('input').value;
    if(input){
        const unicode = input.charCodeAt(0);
        const result = "The unicode value of " + input + " is " + unicode;
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter a character';
    }
}