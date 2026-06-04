// Mengambil elemen form dan pesan error berdasarkan ID dari HTML 
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMassage')

//Menangkap aksi ketika user menekan tombol login (Submit)
loginForm.addEventListener('submit', function(event) {

    //Mencegah form melakukan reload halaman otomatis (bawaan browser)
    event.preventDefault();

    //mengambil nilai (value) yang diketik user di kolom input 
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // SET AKUN UNTUK BELAJAR
    const usernameBenar = "admin"
    const passwordBenar = "admin123"

    // cek apakah inputan user cocok atau tidak
    if (usernameInput === usernameBenar && passwordInput === passwordBenar) {
        
        alert("Login Berhasil! Selamat datang," + usernameInput);
        //akan di arahkan ke halaman dashboard
        //Window.location.href = dashboard.html
    } else {
        //Jika salah, tampilkan pesan error 
        errorMessage.innerText = "Username atau Password salah, Bro!";
        errorMessage.style.display = "block";
    }

});