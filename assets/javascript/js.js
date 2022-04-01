// -------------------------------------------------------------------------
// ini untuk image slider
let i = 1;
setInterval(() => {
	// Mengambil element
	document.getElementById('radio' + i).checked = true;
	i++;
	if(i > 3) {
		i = 1;
	}
}, 6000); //dia akan ngejalanin function ini setiap 6 detik