const rootApp = document.getElementById("app");

/* =========================
   DATA GLOBAL
========================= */
const DataStore = {
    autentikasi: {
        terdaftar: false,
        username: null
    },
};

const TARGET_DONASI = 1000000;

/* =========================
   NAVBAR
========================= */
function navbar() {
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

/* =========================
   FOOTER
========================= */
function footer() {
    return `
        <footer class="footer">
            <div class="footer_content">
                <div>
                    <h3>Tentang EduFund</h3>
                    <p>
                        Bersama menyalurkan kepedulian melalui donasi pendidikan
                        untuk masa depan yang lebih baik.
                    </p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a onclick="App.navigasi('home')">Home</a></li>
                        <li><a onclick="App.navigasi('kampanye')">Kampanye</a></li>
                        <li><a onclick="App.navigasi('relawan')">Relawan</a></li>
                        <li><a onclick="App.navigasi('kontak')">Kontak</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Kontak</h3>
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

/* =========================
   HALAMAN
========================= */
function home() {
    return `
        <div class="home">
            <h1>Membangun Pendidikan, Membangun Masa Depan</h1>
            <p>Bersama kita wujudkan pendidikan berkualitas</p>
            <button onclick="App.navigasi('donasi')">Donasi Sekarang</button>
        </div>
    `;
}

function kampanye() {
    return `<p>Halaman Kampanye</p>`;
}

function relawan() {
    return `<p>Halaman Relawan</p>`;
}

function kontak() {
    return `<p>Tentang & Kontak</p>`;
}

/* =========================
   HALAMAN DONASI
========================= */
function donasi() {
    return `
    <section class="donasi_page">
        <div class="donasi_container">
            <h2>Form Donasi Pendidikan</h2>
            <p>Setiap donasi Anda sangat berarti</p>

            <div class="progress_wrapper">
                <p>Progress Donasi</p>
                <div class="progress_bar">
                    <div id="progress_fill"></div>
                </div>
                <small id="progress_text"></small>
            </div>

            <form onsubmit="handleDonasi(event)">
                <input id="nama" type="text" placeholder="Nama Lengkap">
                <input id="email" type="email" placeholder="Email">
                <input id="nominal" type="number" placeholder="Nominal Donasi">
                <select id="metode">
                    <option value="">-- Pilih Metode --</option>
                    <option>Transfer Bank</option>
                    <option>E-Wallet</option>
                    <option>Kartu Kredit</option>
                </select>
                <button type="submit">Donasi Sekarang</button>
            </form>

            <div id="list_donatur"></div>
        </div>
    </section>
    `;
}

/* =========================
   HANDLE DONASI
========================= */
function handleDonasi(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const nominal = Number(document.getElementById("nominal").value);
    const metode = document.getElementById("metode").value;

    if (!nama || !email || !nominal || !metode) {
        alert("Semua data wajib diisi!");
        return;
    }

    let riwayat = JSON.parse(localStorage.getItem("donasi")) || [];

    riwayat.push({
        nama,
        email,
        nominal,
        metode,
        tanggal: new Date().toLocaleString()
    });

    localStorage.setItem("donasi", JSON.stringify(riwayat));

    alert("Terima kasih! Donasi Anda berhasil ❤️");

    event.target.reset();
    tampilkanDonatur();
    updateProgress();
}

/* =========================
   TAMPILKAN DONATUR
========================= */
function tampilkanDonatur() {
    const data = JSON.parse(localStorage.getItem("donasi")) || [];

    let output = "<h3>Daftar Donatur</h3><ul>";
    data.forEach(d => {
        output += `<li>${d.nama} - Rp ${d.nominal.toLocaleString()} (${d.metode})</li>`;
    });
    output += "</ul>";

    document.getElementById("list_donatur").innerHTML = output;
}

/* =========================
   UPDATE PROGRESS
========================= */
function updateProgress() {
    const data = JSON.parse(localStorage.getItem("donasi")) || [];
    const total = data.reduce((sum, d) => sum + d.nominal, 0);
    const persen = Math.min((total / TARGET_DONASI) * 100, 100);

    const fill = document.getElementById("progress_fill");
    const text = document.getElementById("progress_text");

    if (fill && text) {
        fill.style.width = persen + "%";
        text.innerText = `Rp ${total.toLocaleString()} / Rp ${TARGET_DONASI.toLocaleString()}`;
    }
}

/* =========================
   ROUTER
========================= */
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

function router() {
    const route = location.hash || "#/home";

    rootApp.innerHTML = navbar();

    if (route === "#/home") rootApp.innerHTML += home();
    else if (route === "#/kampanye") rootApp.innerHTML += kampanye();
    else if (route === "#/donasi") rootApp.innerHTML += donasi();
    else if (route === "#/relawan") rootApp.innerHTML += relawan();
    else if (route === "#/kontak") rootApp.innerHTML += kontak();
    else rootApp.innerHTML += "<h2>404 - Halaman Tidak Ditemukan</h2>";

    rootApp.innerHTML += footer();

    if (route === "#/donasi") {
        setTimeout(() => {
            tampilkanDonatur();
            updateProgress();
        }, 50);
    }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
