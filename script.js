const rootApp = document.getElementById("app");

const DataStore = {
  autentikasi: {
    terdaftar: false,
    username: null,
  },
};

function navbar() {
  const { terdaftar } = DataStore.autentikasi;
  return `
        <nav class="navbar">
            <a href="#" class="navbar-logo">EduFund</a>
            
            <div class="navbar-container">
                <div class="navbar-nav">
                    <a href="#/home">Home</a>
                    <a href="#/kampanye">Kampanye</a>
                    <a href="#/relawan">Relawan</a>
                    <a href="#/kontak">Tentang & Kontak</a>
                    ${
                      terdaftar
                        ? "<a onclick=\"App.navigasi('admin')\">Admin</a>"
                        : "<a onclick=\"App.navigasi('login')\">Login</a>"
                    }
                </div>  

                <div class="navbar-actions">
                    ${
                      terdaftar
                        ? `<a onclick="App.logout()" class="nav-logout">Logout</a>`
                        : ""
                    }
                    <a href="#/donasi" class="nav-donasi">Donasi Sekarang</a>
                </div>
            </div>
        </nav>
    `;
}

function footer() {
  return `
        <footer class="footer">
            <div class="footer-content">
                <div>
                    <h3 class="footer-title">Tentang EduFund</h3>
                    <p class=footer-text>Bersama menyalurkan kepedulian melalui donasi pendidikan untuk menciptakan akses belajar
                    yang merata dan bekelanjutan bagi generasi masa depan</p>
                </div>
                
                <div class="footer-container">
                    <div>
                        <h3 class="footer-title">Quick Links</h3>
                        <ul class="footer-links">
                            <li><a class="footer-link" onclick="App.navigasi('home')">Home</a></li>
                            <li><a class="footer-link" onclick="App.navigasi('kampanye')">Kampanye</a></li>
                            <li><a class="footer-link" onclick="App.navigasi('relawan')">Relawan</a></li>
                            <li><a class="footer-link" onclick="App.navigasi('kontak')">Kontak</a></li>
                        </ul>
                    </div>
                                    
                    <div>
                        <h3 class="footer-title">Kontak Informasi</h3>
                        <p><i class="bi bi-geo-alt-fill"></i> Di Denpasar</p>
                        <p><i class="bi bi-telephone-fill"></i> +62 01-002-003</p>
                        <p><i class="bi bi-envelope-at-fill"></i> EduFund@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 EduFund | Dibuat untuk memajukan pendidikan di Indonesia</p>
            </div>
        </footer>
    `;
}

function home() {
  return `
        <div class="home">
            <div class="home-side-image left">
                <img src="asset/anak_sekolah.jpg" alt="Education">
            </div>

            <div class="home-content">
                <h1 class="title">Membangun Pendidikan, Membangun Masa Depan</h1>
                <p class="subtitle">Bersama, kita wujudkan pendidikan berkualitas untuk setiap anak</p>
                <button class="klik-donasi" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
            </div>

            <div class="home-side-image right">
                <img src="asset/Volunteers_Support.jpg" alt="Students">
            </div>
        </div>

        <section class="main-split-container">
            <div class="split-wrapper">
                
                <div class="stats-side-area">
                    <div class="stat-box">
                        <div class="stat-info">
                            <p>Total Donasi</p>
                            <h3>Rp 75.000.000+</h3>
                        </div>
                    </div>

                    <div class="stat-box">
                        <div class="stat-info">
                            <p>Jumlah Relawan</p>
                            <h3>200+</h3>
                        </div>
                    </div>
                    
                    <div class="stat-box">
                        <div class="stat-info">
                            <p>Kampanye Aktif</p>
                            <h3>3</h3>
                        </div>
                    </div>
                </div>

                <div class="campaign-side-area">
                    <h3 class="kampanye-section-title">Kampanye Aktif</h3>
                    
                    <div class="kampanye-list-vertical">
                        <div class="kampanye-card-custom">
                            <div class="kampanye-img-box">
                                <img src="asset/baju_sekolah.jpg" alt="Bantuan Seragam">
                            </div>
                            <div class="kampanye-details">
                                <h3>Bantuan Seragam Sekolah</h3>
                                <p>Membantu siswa kurang mampu mendapatkan seragam sekolah layak</p>
                                <div class="donasi-info">
                                    <p class="label">Donasi Terkumpul</p>
                                    <p class="nominal">Rp 25.000.000</p>
                                </div>
                                <button class="klik-donasi-kecil" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
                            </div>
                        </div>

                        <div class="kampanye-card-custom">
                            <div class="kampanye-img-box">
                                <img src="asset/bantuan_beasiswa.jpg" alt="Beasiswa">
                            </div>
                            <div class="kampanye-details">
                                <h3>Beasiswa Pelajar</h3>
                                <p>Program bantuan pendidikan siswa berprestasi</p>
                            <div class="donasi-info">
                                <p class="label">Donasi Terkumpul</p>
                                <p class="nominal">Rp 50.000.000</p>
                            </div>
                                <button class="klik-donasi-kecil" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
                            </div>
                        </div>
                    </div>

                    <div class="center-link">
                        <button class="klik-kampanye" onclick="App.navigasi('kampanye')">Lihat Semua</button>
                    </div>
                </div>

            </div>
        </section>
  `;
}
function kampanye() {
  return `
    <div class="kampanye-atas">
      <img src="https://www.harianpilar.com/files/2015/03/sekolah-624x312.jpg" class="gambar-atas" alt="Kampanye Pendidikan">
      <div class="teks-atas">
        <h1>Berbagi Kebaikan</h1>
        <p>Dukung pendidikan melalui kampanye yang telah tersedia</p>
      </div>
    </div>

    <div class="kampanye-bawah">

      <div class="kotak-kampanye">
        <img src="asset/baju_sekolah.jpg" class="gambar-kampanye" alt="Bantuan Seragam">
        <div class="isi-kampanye">
          <h3>Bantuan Seragam Sekolah</h3>
          <p>Membantu siswa kurang mampu mendapatkan seragam sekolah yang layak.</p>
          <div class="donasi-info">
                <p class="label">Donasi Terkumpul</p>
                <p class="nominal">Rp 25.000.000</p>
            </div>
          <button class="tombol-donasi" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
      </div>

      <div class="kotak-kampanye">
        <img src="asset/bantuan_beasiswa.jpg" class="gambar-kampanye" alt="Beasiswa Pelajar">
        <div class="isi-kampanye">
          <h3>Beasiswa Pelajar</h3>
          <p>Program bantuan pendidikan untuk siswa berprestasi.</p>

           <div class="donasi-info">
                <p class="label">Donasi Terkumpul</p>
                <p class="nominal">Rp 50.000.000</p>
            </div>
          <button class="tombol-donasi" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
      </div>

       <div class="kotak-kampanye">
        <img src="https://cdn.antaranews.com/cache/1200x800/2023/05/20/IMG-20230520-WA0024_1.jpg" class="gambar-kampanye" alt="renovasi sekolah">
        <div class="isi-kampanye">
          <h3>Renovasi Ruang Kelas Rusak</h3>
          <p>Memperbaiki struktur bangunan kelas yang rapuh guna menjamin keamanan dan kenyamanan siswa selama kegiatan belajar mengajar.</p>

           <div class="donasi-info">
                <p class="label">Donasi Terkumpul</p>
                <p class="nominal">Rp 70.000.000</p>
            </div>
          <button class="tombol-donasi" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
      </div>

      <div class="kotak-kampanye">
        <img src="https://cdn.antaranews.com/cache/800x533/2019/05/17/IMG20190517130111.jpg" class="gambar-kampanye" alt="Perpustakaan Sekolah">
        <div class="isi-kampanye">
          <h3>Pembangunan Perpustakaan</h3>
          <p>Membangun ruang baca yang memadai serta penyediaan rak buku untuk meningkatkan minat baca dan literasi siswa di sekolah.</p>

           <div class="donasi-info">
                <p class="label">Donasi Terkumpul</p>
                <p class="nominal">Rp 65.000.000</p>
            </div>
          <button class="tombol-donasi" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
      </div>

      <div class="kotak-kampanye">
        <img src="https://www.tzuchi.or.id/inliners/1687492931-1-whatsapp-image-2023-06-20-at-08-38-15-edt.jpg" class="gambar-kampanye" alt="bantuan buku dan alat tulis">
        <div class="isi-kampanye">
          <h3>Bantuan Buku dan Alat Tulis</h3>
          <p>Penyaluran buku kebutuhan dasar belajar sebagai upaya memenuhi standar fasilitas pendidikan bagi siswa kurang mampu.</p>

           <div class="donasi-info">
                <p class="label">Donasi Terkumpul</p>
                <p class="nominal">Rp 80.000.000</p>
            </div>
          <button class="tombol-donasi" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
      </div>

      <div class="kotak-kampanye">
        <img src="https://asset.tribunnews.com/P6pi4ad-O2Q8eW5wgdR33TAEomk=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/tribunnews/foto/bank/originals/nasib-guru-indonesia_20151124_182931.jpg" class="gambar-kampanye" alt="bantuan mengajar">
        <div class="isi-kampanye">
          <h3>Bantuan Mengajar di daerah terpencil</h3>
          <p>Upaya pemerataan kualitas pendidikan melalui penempatan relawan pengajar dan penyediaan materi belajar di sekolah-sekolah daerah tertinggal.</p>

           <div class="donasi-info">
                <p class="label">Donasi Terkumpul</p>
                <p class="nominal">Rp 40.000.000</p>
            </div>
          <button class="tombol-donasi" onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
      </div>

    </div>
  `;
}

function donasi() {
  return `
        <div>
            <p>donasi</p>
        </div>
    `;
}


function relawan() {  
  return `
        <div>
            <p>relawan</p>
        </div>
    `;
}

function kontak() {
  return `
        <div>
            <p>tentang & kontak</p>
        </div>
    `;
}

function login() {
  return `
        <div class="login-page">
            <div class="login-card">
                <h2 class="form-title">Login</h2>

                <div class="form-group">
                    <label>Username</label>
                    <input type="text" id="user" placeholder="Username" class="form-control">
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="pass" placeholder="Password" class="form-control">
                </div>

                <button class="form-submit" onclick="App.prosesLogin()">Login</button>
            </div>
        </div>
    `;
}

function admin() {
    return `
        <div>Admin</div>
    `;
}

const App = {
  currentPage: "home",

  navigasi(page) {
    window.location.hash = `#/${page}`;
  },

  prosesLogin() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "12345") {
      DataStore.autentikasi.terdaftar = true;
      DataStore.autentikasi.username = user;
      alert(`Selamat Datang, ${user}!`);
      location.hash = "#/admin";
    } else {
      alert("Username atau Password salah | (Gunakan admin atau 12345)");
    }
  },

  logout() {
    if (confirm("Apakah anda yakin ingin logout?")) {
      DataStore.autentikasi.terdaftar = false;
      DataStore.autentikasi.username = null;
      location.hash = "#/home";
    }
  },
};

function router() {
  const route = location.hash || "#/home";
  rootApp.innerHTML = navbar();

  if (route === "#/home") {
    rootApp.innerHTML += home();
  } else if (route === "#/kampanye") {
    rootApp.innerHTML += kampanye();
  } else if (route === "#/donasi") {
    rootApp.innerHTML += donasi();
  } else if (route === "#/login") {
    rootApp.innerHTML += login();
  } else if (route === "#/admin") {
    rootApp.innerHTML += admin();
  } else if (route === "#/relawan") {
    rootApp.innerHTML += relawan();
  } else if (route === "#/kontak") {
    rootApp.innerHTML += kontak();
  }

  rootApp.innerHTML += footer();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);