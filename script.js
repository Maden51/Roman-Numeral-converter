const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const result = document.getElementById('output');
const romanNumerals = [
  { roman: 'M', arabic: 1000 },
  { roman: 'CM', arabic: 900 },
  { roman: 'D', arabic: 500 },
  { roman: 'CD', arabic: 400 },
  { roman: 'C', arabic: 100 },
  { roman: 'XC', arabic: 90 },
  { roman: 'L', arabic: 50 },
  { roman: 'XL', arabic: 40 },
  { roman: 'X', arabic: 10 },
  { roman: 'IX', arabic: 9 },
  { roman: 'V', arabic: 5 },
  { roman: 'IM', arabic: 4 },
  { roman: 'I', arabic: 1 }
]

const checkUserInput = () => {
  const inputInt = parseInt(input.value);
  if (!input.value || isNaN(inputInt)) {
    result.innerHTML = 'Please enter a valid number';
  } else if (inputInt > 3999) {
    result.innerHTML = 'Please enter a number less than or equal to 3999';
  } else if (inputInt < 1) {
    result.innerHTML = 'Please enter a number greater than or equal to 1';
  } else {
    result.innerHTML = numberToRoman(inputInt);
  }
  input.value = '';
}

const numberToRoman = (input) => {
  let romanStr = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (input >= romanNumerals[i].arabic) {
      romanStr += romanNumerals[i].roman;
      input -= romanNumerals[i].arabic;
    }
  }
  return romanStr;
}

button.addEventListener('click', checkUserInput);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkUserInput();
  }
});