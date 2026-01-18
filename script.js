const rootApp = document.getElementById("app");

const DataStore = {
    autentikasi: {
        terdaftar: false,
        username: null
    },
};

const TARGET_DONASI = 1000000; 

function navbar(){
    const { terdaftar } = DataStore.autentikasi;
    return `
        <nav class="navbar">
            <a href="#" class="navbar-logo">EduFund</a>
            <div class="navbar-nav">
                <a href="#/home">Home</a>
                <a href="#/kampanye">Kampanye</a>
                <a href="#/donasi">Donasi</a>
                <a href="#/relawan">Relawan</a>
                <a href="#/kontak">Tentang & Kontak</a>
                ${terdaftar
                    ? '<a onclick="App.navigasi(\'admin\')">Admin</a>'
                    : '<a onclick="App.navigasi(\'login\')">Login</a>'
                }
                ${terdaftar
                    ? '<button onclick="App.logout()">Logout</button>'
                    : ''
                }
            </div>
        </nav>
    `;
}


function footer(){
    return `
        <footer class="footer">
            <div class="footer_content">
                <div>
                    <h3 class="footer_title">Tentang EduFund</h3>
                    <p>
                        Bersama menyalurkan kepedulian melalui donasi pendidikan untuk
                        menciptakan akses belajar yang merata dan berkelanjutan
                    </p>
                </div>

                <div>
                    <h3 class="footer_title">Quick Links</h3>
                    <ul class="footer_links">
                        <li><a onclick="App.navigasi('home')">Home</a></li>
                        <li><a onclick="App.navigasi('kampanye')">Kampanye</a></li>
                        <li><a onclick="App.navigasi('relawan')">Relawan</a></li>
                        <li><a onclick="App.navigasi('kontak')">Kontak</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="footer_title">Kontak Informasi</h3>
                    <p>📍 Denpasar</p>
                    <p>📞 +62 01-002-003</p>
                    <p>✉️ EduFund@gmail.com</p>
                </div>
            </div>
            <div class="footer_bottom">
                <p>&copy; 2026 EduFund</p>
            </div>
        </footer>
    `;
}


function home() {
    return `
        <div class="home">
            <h1>Membangun Pendidikan, Membangun Masa Depan</h1>
            <p>Bersama kita wujudkan pendidikan berkualitas</p>
            <button onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
    `;
}

function kampanye(){
    return `<p>Halaman Kampanye</p>`;
}

function donasi() {
    return `
    <section class="donasi_page">
        <div class="donasi_container">
            <h2 class="donasi_title">Form Donasi Pendidikan</h2>
            <p class="donasi_subtitle">
                Setiap donasi Anda membantu menciptakan masa depan pendidikan yang lebih baik
            </p>

            <div class="progress_wrapper">
                <p>Progress Donasi</p>
                <div class="progress_bar">
                    <div id="progress_fill"></div>
                </div>
                <small id="progress_text"></small>
            </div>

            <form class="donasi_form" onsubmit="handleDonasi(event)">
                <div class="form_group">
                    <label>Nama Lengkap</label>
                    <input id="nama" type="text" placeholder="Masukkan nama anda">
                </div>

                <div class="form_group">
                    <label>Email</label>
                    <input id="email" type="email" placeholder="Masukkan email">
                </div>

                <div class="form_group">
                    <label>Nominal Donasi</label>
                    <input id="nominal" type="number" placeholder="Contoh: 50000">
                </div>

                <div class="form_group">
                    <label>Metode Pembayaran</label>
                    <select id="metode">
                        <option value="">-- Pilih Metode --</option>
                        <option>Transfer Bank</option>
                        <option>E-Wallet</option>
                        <option>Kartu Kredit</option>
                    </select>
                </div>

                <button type="submit" class="btn_donasi">
                    Donasi Sekarang
                </button>
            </form>
        </div>
    </section>
    `;
}


function relawan(){
    return `<p>Halaman Relawan</p>`;
}

function kontak(){
    return `
    <section class="tentang_kontak">
        <div class="tentang_box">
            <h2>Tentang EduFund</h2>
            <p>
                EduFund merupakan platform donasi pendidikan yang bertujuan
                membantu pemerataan akses belajar bagi anak-anak Indonesia
                melalui kampanye dan partisipasi masyarakat.
            </p>
        </div>

        <div class="kontak_box">
            <h2>Kontak Kami</h2>

            <form onsubmit="kirimPesan(event)">
                <input type="text" placeholder="Nama" required>
                <input type="email" placeholder="Email" required>
                <textarea rows="4" placeholder="Pesan" required></textarea>
                <button type="submit">Kirim</button>
            </form>
        </div>
    </section>
    `;
}

function kirimPesan(e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
}



function handleDonasi(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const nominal = document.getElementById("nominal").value;
    const metode = document.getElementById("metode").value;

    if (nama.length < 3) {
        alert("Nama minimal 3 karakter");
        return;
    }

    if (!email.includes("@")) {
        alert("Email tidak valid");
        return;
    }

    if (nominal <= 0) {
        alert("Nominal donasi harus lebih dari 0");
        return;
    }

    if (metode === "") {
        alert("Pilih metode pembayaran");
        return;
    }

    let riwayat = JSON.parse(localStorage.getItem("donasi")) || [];

    riwayat.push({
        nama,
        email,
        nominal: Number(nominal),
        metode,
        tanggal: new Date().toLocaleDateString()
    });

    localStorage.setItem("donasi", JSON.stringify(riwayat));

    alert("Terima kasih! Donasi Anda berhasil ❤️");

    updateProgress();
    event.target.reset();
}

function updateProgress() {
    const riwayat = JSON.parse(localStorage.getItem("donasi")) || [];
    const total = riwayat.reduce((sum, d) => sum + d.nominal, 0);
    const persen = Math.min((total / TARGET_DONASI) * 100, 100);

    const fill = document.getElementById("progress_fill");
    const text = document.getElementById("progress_text");

    if (fill && text) {
        fill.style.width = persen + "%";
        text.innerText = `Rp ${total.toLocaleString()} / Rp ${TARGET_DONASI.toLocaleString()}`;
    }
}


const App = {
    navigasi(page) {
        window.location.hash = `#/${page}`;
        window.scrollTo({ top: 0, behavior: "smooth" });
    },

    logout() {
        if (confirm("Logout?")) {
            DataStore.autentikasi.terdaftar = false;
            alert("Berhasil Logout");
            this.navigasi("home");
        }
    }
};

function router(){
    const route = location.hash || "#/home";

    rootApp.innerHTML = navbar();

    if(route === "#/home") rootApp.innerHTML += home();
    else if(route === "#/kampanye") rootApp.innerHTML += kampanye();
    else if(route === "#/donasi") rootApp.innerHTML += donasi();
    else if(route === "#/relawan") rootApp.innerHTML += relawan();
    else if(route === "#/kontak") rootApp.innerHTML += kontak();
    else rootApp.innerHTML += "<h2>404 - Halaman Tidak Ditemukan</h2>";

    rootApp.innerHTML += footer();

    if (route === "#/donasi") {
        setTimeout(updateProgress, 50);
    }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);