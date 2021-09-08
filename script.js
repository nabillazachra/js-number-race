const ganjilDisplay = document.getElementById('ganjil-display');
const genapDisplay = document.getElementById('genap-display');

function ganjil(number) {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

function genap(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function asynchronous(range) {
  //   Ganjil
  let i = 1;
  setInterval(() => {
    if (i <= range) {
      if (ganjil(i)) {
        console.log('Ganjil : ' + i);
        ganjilDisplay.innerText += i + ',';
      }
    }
    i++;
  }, 1000);

  //   Genap
  let j = 1;
  setInterval(() => {
    if (j <= range) {
      if (genap(j)) {
        console.log('Genap : ' + j);
        genapDisplay.innerText += j + ',';
      }
    }
    j++;
  }, 1000);
}

function synchronous(range) {
  //   Ganjil
  for (let i = 1; i <= range; i++) {
    if (ganjil(i)) {
      console.log('Ganjil : ' + i);
      ganjilDisplay.innerText += i + ',';
    }
  }

  //   Genap
  for (let j = 1; j <= range; j++) {
    if (genap(j)) {
      console.log('Genap : ' + j);
      genapDisplay.innerText += j + ',';
    }
  }
}

function calculator(e, type) {
	e.preventDefault();

	var a = Number(document.getElementById("operand-1").value),
	result;

	switch(type) {
		case 'synchronous':
		result = synchronous(a);
		break;
		case 'asynchronous':
		result = asynchronous(a);
		break;
		default:
		alert("Terjadi kesalahan, silahkan coba lagi");
		break;
	}
}