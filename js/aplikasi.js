/**
         * PRINT CRAFT SINGLE-PAGE E-COMMERCE APPLICATION ENGINE
         * Fully functional implementation with simulated reactivity, cart, checkout,
         * live previewer, client dashboard, admin controls, and live chat.
         */

        const keadaanAplikasi = {
            halamanAktif: 'home',
            penggunaAktif: {
                sedangMasuk: true,
                peran: 'customer', // 'customer' or 'admin'
                nama: 'Ahmad Dhani',
                surel: 'ahmad.customer@gmail.com'
            },
            daftarKeranjang: [],
            metodePembayaranTerpilih: 'bca',
            produkYangDikustomisasi: null,
            berkasBuktiSementara: null,

            // 7 Product Database strictly following prompt specs
            daftarProduk: [
                {
                    id: 1,
                    jenis: 'tumbler',
                    nama: 'Tumbler Vacuum Insulated UV',
                    kategori: 'Tumbler Custom',
                    hargaDasar: 75000,
                    gambar: 'assets/gambar/placeholder-produk.svg',
                    deskripsi: 'Tumbler stainless tahan panas & dingin 12 jam. Cetak logo atau tulisan menggunakan Print UV beresolusi tinggi.',
                    lencana: 'Terlaris'
                },
                {
                    id: 2,
                    jenis: 'idcard',
                    nama: 'Kartu ID Card PVC Ultra-HD',
                    kategori: 'Kartu ID Card',
                    hargaDasar: 8500,
                    gambar: 'assets/gambar/placeholder-produk.svg',
                    deskripsi: 'Bahan PVC standar ATM anti pudar dan anti air. Pilihan finishing Glossy, Doff, atau Transparan.',
                    lencana: 'Populer'
                },
                {
                    id: 3,
                    jenis: 'emoney',
                    nama: 'Kartu E-Money / Tol Custom Dual-Sisi',
                    kategori: 'E-Money / Tol Card',
                    hargaDasar: 35000,
                    gambar: 'assets/gambar/placeholder-produk.svg',
                    deskripsi: 'Saldo 0. Kompatibel untuk gerbang Tol, MRT, TransJakarta & parkir. Cetak foto atau desain favorit langsung di card.',
                    lencana: 'Favorit'
                },
                {
                    id: 4,
                    jenis: 'kaos',
                    nama: 'Kaos Cotton Combed 30s Premium',
                    kategori: 'Kaos',
                    hargaDasar: 65000,
                    gambar: 'assets/gambar/placeholder-produk.svg',
                    deskripsi: 'Bahan 100% Cotton Combed reaktif adem. Pilihan variasi sablon DTF tahan cuci tanpa upload custom (pilih varian yang tersedia).',
                    lencana: 'High Quality'
                },
                {
                    id: 5,
                    jenis: 'lanyard',
                    nama: 'Tali Lanyard Tissue 2cm + Stopper',
                    kategori: 'Lanyard',
                    hargaDasar: 12500,
                    gambar: 'assets/gambar/placeholder-produk.svg',
                    deskripsi: 'Lanyard printing sublimasi warna cerah dua sisi, lembut di leher dengan pengait kait nikel dan stopper lepas pasang.',
                    lencana: 'Event Ready'
                },
                {
                    id: 6,
                    jenis: 'seragam',
                    nama: 'Kemeja PDH & Seragam Lapangan Custom',
                    kategori: 'Seragam dan PDH',
                    hargaDasar: 145000,
                    gambar: 'assets/gambar/placeholder-produk.svg',
                    deskripsi: 'Kemeja kerja American Drill / Japan Drill adem dan kuat. Desain jahitan rapih dan custom bordir komputer sesuai logo Anda.',
                    lencana: 'Korporat'
                },
                {
                    id: 7,
                    jenis: 'jaket',
                    nama: 'Jaket Hoodie Fleece / Windbreaker Custom',
                    kategori: 'Jaket Custom',
                    hargaDasar: 165000,
                    gambar: 'assets/gambar/placeholder-produk.svg',
                    deskripsi: 'Bahan Fleece tebal atau Parasut Taslan anti gerimis. Pilihan warna komplit dan custom sablon/bordir sesuai order.',
                    lencana: 'Trending'
                }
            ],

            // Real-waktu dynamic daftarPesanan list for simulation
            daftarPesanan: [
                {
                    idPesanan: 'PC-20250301-081',
                    namaPelanggan: 'Ahmad Dhani',
                    teleponPelanggan: '081298765432',
                    alamat: 'Jl. Kebon Jeruk Raya No. 42, Jakarta Barat 11530',
                    ringkasanBarang: 'Tumbler Vacuum UV (Hitam Doff, Qty: 20 pcs)',
                    jenisBarang: 'Tumbler',
                    totalHarga: 1500000,
                    metode: 'Bank BCA',
                    statusPembayaran: 'Menunggu Verifikasi', // 'Menunggu Pembayaran', 'Menunggu Verifikasi', 'Pembayaran Berhasil', 'Pembayaran Ditolak'
                    statusProduksi: 'Diantrekan Produksi',
                    gambarBukti: 'assets/gambar/placeholder-produk.svg',
                    tanggal: '02 Mar 2025, 14:20'
                },
                {
                    idPesanan: 'PC-20250228-045',
                    namaPelanggan: 'Ahmad Dhani',
                    teleponPelanggan: '081298765432',
                    alamat: 'Jl. Kebon Jeruk Raya No. 42, Jakarta Barat 11530',
                    ringkasanBarang: 'Kaos Cotton Combed 30s (Hitam - Sablon DTF, L, Qty: 12 pcs)',
                    jenisBarang: 'Kaos',
                    totalHarga: 780000,
                    metode: 'GoPay',
                    statusPembayaran: 'Pembayaran Berhasil',
                    statusProduksi: 'Pesanan Selesai / Terkirim',
                    gambarBukti: 'assets/gambar/placeholder-produk.svg',
                    tanggal: '28 Feb 2025, 09:15'
                },
                {
                    idPesanan: 'PC-20250220-019',
                    namaPelanggan: 'Budi Santoso',
                    teleponPelanggan: '085712348888',
                    alamat: 'Jl. HR Muhammad No 8, Surabaya',
                    ringkasanBarang: 'Lanyard 2cm Tissue (Biru Navy, Qty: 100 pcs)',
                    jenisBarang: 'Lanyard',
                    totalHarga: 1250000,
                    metode: 'Bank Mandiri',
                    statusPembayaran: 'Pembayaran Berhasil',
                    statusProduksi: 'Pesanan Selesai / Terkirim',
                    gambarBukti: null,
                    tanggal: '20 Feb 2025, 11:00'
                }
            ],

            // Chat Messages Store
            daftarPesanChat: [
                { pengirim: 'bot', teksPesan: 'Halo! Selamat datang di Print Craft. Ada yang bisa kami bantu mengenai cetak merchandise atau seragam?', waktu: '10:00' },
                { pengirim: 'bot', teksPesan: 'Slogan kami: "Cetak Kesanmu dalam Warna". Silakan tanyakan estimasi harga grosir atau konsultasi desain di sini.', waktu: '10:01' }
            ]
        };

        // Application Controller
        const aplikasi = {
            siapkanAplikasi: function() {
                this.tampilkanProduk();
                this.tampilkanKeranjang();
                this.tampilkanPesanan();
                this.tampilkanTabelAdmin();
                this.tampilkanPesanChat();
                this.perbaruiNavigasiAkun();
            },

            // --- PAGE ROUTING ---
            tampilkanHalaman: function(idHalaman) {
                document.querySelectorAll('.tampilan-halaman').forEach(produk => produk.classList.add('hidden'));
                const sasaran = document.getElementById('view-' + idHalaman);
                if (sasaran) {
                    sasaran.classList.remove('hidden');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    keadaanAplikasi.halamanAktif = idHalaman;
                }

                // Update active states on nav
                document.querySelectorAll('.tautan-navigasi').forEach(tombol => tombol.classList.remove('text-merek-magenta', 'font-semibold'));
                const navigasiAktif = document.getElementById('nav-' + idHalaman);
                if (navigasiAktif) navigasiAktif.classList.add('text-merek-magenta', 'font-semibold');
            },

            gulirKeBagian: function(idBagian) {
                if (keadaanAplikasi.halamanAktif !== 'home') {
                    this.tampilkanHalaman('home');
                    setTimeout(() => {
                        const elemen = document.getElementById(idBagian);
                        if (elemen) elemen.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                } else {
                    const elemen = document.getElementById(idBagian);
                    if (elemen) elemen.scrollIntoView({ behavior: 'smooth' });
                }
            },

            ubahTampilanAdmin: function() {
                if (keadaanAplikasi.halamanAktif === 'admin-dashboard') {
                    this.tampilkanHalaman('home');
                } else {
                    this.tampilkanHalaman('admin-dashboard');
                    this.tampilkanTabelAdmin();
                }
            },

            ubahMenuPonsel: function() {
                const menuPonsel = document.getElementById('mobile-menu');
                menuPonsel.classList.toggle('hidden');
            },

            // --- PRODUCT RENDERING ---
            tampilkanProduk: function() {
                const wadahUnggulan = document.getElementById('featured-product-list');
                const wadahKatalog = document.getElementById('catalog-product-list');

                const htmlUnggulan = keadaanAplikasi.daftarProduk.slice(0, 4).map(produk => this.buatKartuProdukHTML(produk)).join('');
                if (wadahUnggulan) wadahUnggulan.innerHTML = htmlUnggulan;

                const htmlKatalog = keadaanAplikasi.daftarProduk.map(produk => this.buatKartuProdukHTML(produk)).join('');
                if (wadahKatalog) wadahKatalog.innerHTML = htmlKatalog;
            },

            buatKartuProdukHTML: function(produk) {
                return `
                    <div class="kartu-produk bg-white rounded-2xl border border-zinc-200/80 hover:border-merek-merah-muda/50 hover:shadow-bayangan-kartu-lembut transition-all duration-300 flex flex-col overflow-hidden group">
                        <div class="relative aspect-square overflow-hidden bg-zinc-100 cursor-pointer" onclick="aplikasi.bukaPengaturanProduk(${produk.id})">
                            <img src="${produk.gambar}" alt="${produk.nama}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                            <span class="absolute top-3 left-3 bg-merek-gelap/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">${produk.lencana}</span>
                            <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-merek-gelap text-[11px] font-extrabold px-2 py-1 rounded-lg shadow-sm">
                                ${produk.kategori}
                            </span>
                        </div>
                        <div class="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
                            <div>
                                <h3 class="font-extrabold text-merek-gelap text-sm sm:text-base group-hover:text-merek-magenta transition-colors line-clamp-1 cursor-pointer" onclick="aplikasi.bukaPengaturanProduk(${produk.id})">
                                    ${produk.nama}
                                </h3>
                                <p class="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                                    ${produk.deskripsi}
                                </p>
                            </div>
                            <div class="pt-3 border-t border-zinc-100 flex items-center justify-between">
                                <div>
                                    <span class="text-[10px] text-zinc-400 block font-semibold">Mulai dari</span>
                                    <span class="text-merek-magenta font-black text-sm sm:text-base">Rp ${produk.hargaDasar.toLocaleString('id-ID')}</span>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button onclick="aplikasi.bukaPengaturanProduk(${produk.id})" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-pink-50 text-merek-magenta hover:bg-pink-100 transition" title="Lihat Detail">
                                        Detail
                                    </button>
                                    <button onclick="aplikasi.bukaPengaturanProduk(${produk.id})" class="tombol-gradien w-8 h-8 rounded-lg flex items-center justify-center text-xs" title="Kustomisasi & Beli">
                                        <i class="fa-solid fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            },

            saringKatalog: function(jenisKategori) {
                this.tampilkanHalaman('catalog');
                
                // update filter buttons UI
                document.querySelectorAll('.tombol-filter-katalog').forEach(tombol => {
                    tombol.classList.remove('bg-merek-magenta', 'text-white');
                    tombol.classList.add('bg-white', 'text-zinc-600');
                });
                const tombolAktif = document.getElementById('filter-' + jenisKategori);
                if (tombolAktif) {
                    tombolAktif.classList.add('bg-merek-magenta', 'text-white');
                    tombolAktif.classList.remove('bg-white', 'text-zinc-600');
                }

                const wadahKatalog = document.getElementById('catalog-product-list');
                let daftarTersaring = keadaanAplikasi.daftarProduk;
                if (jenisKategori !== 'all') {
                    daftarTersaring = keadaanAplikasi.daftarProduk.filter(produk => produk.jenis === jenisKategori);
                }
                wadahKatalog.innerHTML = daftarTersaring.map(produk => this.buatKartuProdukHTML(produk)).join('');
            },

            // --- DETAIL & CUSTOMIZER MODAL ---
            bukaPengaturanProduk: function(idProduk) {
                const produk = keadaanAplikasi.daftarProduk.find(produk => produk.id === idProduk);
                if (!produk) return;

                keadaanAplikasi.produkYangDikustomisasi = produk;

                // Set basic info
                document.getElementById('customizer-title').textContent = produk.nama;
                document.getElementById('customizer-category-badge').textContent = produk.kategori;
                document.getElementById('customizer-preview-img').src = produk.gambar;
                document.getElementById('customizer-base-price').textContent = `Rp ${produk.hargaDasar.toLocaleString('id-ID')}`;
                document.getElementById('customizer-desc').textContent = produk.deskripsi;
                
                // Reset preview modifiers
                document.getElementById('preview-color-overlay').style.backgroundColor = 'transparent';
                document.getElementById('preview-artwork-container').classList.add('hidden');
                document.getElementById('preview-color-label').textContent = 'Warna: Standar';

                // Render specific input fields as strictly requested in prompt A - G
                this.tampilkanKolomFormulirDinamis(produk);

                // Show modal
                document.getElementById('customizer-modal').classList.remove('hidden');
            },

            tutupPengaturanProduk: function() {
                document.getElementById('customizer-modal').classList.add('hidden');
                keadaanAplikasi.produkYangDikustomisasi = null;
            },

            tampilkanKolomFormulirDinamis: function(produk) {
                const wadah = document.getElementById('dynamic-form-fields');
                let markup = '';

                switch (produk.jenis) {
                    case 'tumbler':
                        // A. Tumbler: Upload gambar, Pilih desain, Pilih warna tumbler, Jumlah order, Preview prod
                        markup = `
                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">1. Pilih Warna Tumbler</label>
                                <div class="flex items-center gap-2">
                                    <button type="button" onclick="aplikasi.aturWarnaTumbler('#18181B', 'Hitam Doff')" class="w-7 h-7 rounded-full bg-zinc-900 border-2 border-white shadow hover:scale-110 transition" title="Hitam"></button>
                                    <button type="button" onclick="aplikasi.aturWarnaTumbler('#E11D74', 'Magenta Craft')" class="w-7 h-7 rounded-full bg-[#E11D74] border-2 border-white shadow hover:scale-110 transition" title="Magenta"></button>
                                    <button type="button" onclick="aplikasi.aturWarnaTumbler('#FAFAFA', 'Putih Mutiara')" class="w-7 h-7 rounded-full bg-zinc-100 border border-zinc-300 shadow hover:scale-110 transition" title="Putih"></button>
                                    <button type="button" onclick="aplikasi.aturWarnaTumbler('#1E3A8A', 'Biru Navy')" class="w-7 h-7 rounded-full bg-blue-900 border-2 border-white shadow hover:scale-110 transition" title="Navy"></button>
                                    <span id="selected-color-text" class="text-xs font-semibold text-zinc-600 ml-2">Hitam Doff</span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">2. Pilih Template Desain Tumbler</label>
                                <select id="field-design-template" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200 focus:border-merek-magenta focus:outline-none">
                                    <option value="Typography Minimalis">Typography / Nama Minimalis Vertikal</option>
                                    <option value="Logo Perusahaan UV 360">Logo Perusahaan Grafir Full Keliling</option>
                                    <option value="Ilustrasi Art Abstrak">Ilustrasi Seni Garis Warna</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">3. Upload Logo / Artwork Custom</label>
                                <div class="flex items-center gap-2">
                                    <input type="file" id="field-upload-image" class="text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-merek-magenta hover:file:bg-pink-100" accept="image/*" onchange="aplikasi.tanganiUnggahDesain(event)">
                                </div>
                                <span class="text-[10px] text-zinc-400">Mockup akan otomatis ditempelkan pada gambar di samping.</span>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">4. Jumlah Pesanan (Pcs)</label>
                                <input type="number" id="field-qty" value="1" min="1" oninput="aplikasi.hitungUlangHargaKustomisasi()" class="w-28 text-xs p-2 rounded-xl border border-zinc-200 font-bold">
                            </div>
                        `;
                        break;

                    case 'idcard':
                        // B. ID Card: Pilihan jenis ID card, Upload desain atau gambar, Pilihan ukuran, Jumlah order, Catatan tambahan
                        markup = `
                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">1. Pilihan Jenis ID Card</label>
                                <select id="field-idcard-type" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200 focus:border-merek-magenta focus:outline-none">
                                    <option value="PVC Glossy Standar (0.76mm)">PVC Glossy Standar (Ketebalan ATM 0.76mm)</option>
                                    <option value="PVC Doff / Matte Elegan">PVC Doff / Matte Elegan Anti Gores</option>
                                    <option value="PVC Transparan Frosted">PVC Transparan / Frosted Card</option>
                                    <option value="Smartcard RFID Proximity">Smartcard RFID Proximity 125Khz</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">2. Pilihan Ukuran</label>
                                <select id="field-size" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                    <option value="Standar CR80 (85.6 x 54 mm)">Standar CR80 (85.6 x 54 mm)</option>
                                    <option value="Ukuran Custom Event (B1/B2)">Ukuran Kartu Panitia Event (105 x 74 mm)</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">3. Upload Desain / Foto ID Card</label>
                                <input type="file" id="field-upload-image" class="text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-merek-magenta" accept="image/*" onchange="aplikasi.tanganiUnggahDesain(event)">
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">4. Catatan Tambahan (Data Nama/No. Induk)</label>
                                <textarea id="field-notes" rows="2" placeholder="Tuliskan daftar name atau kirimkan via email setelah order" class="w-full text-xs p-2 rounded-xl border border-zinc-200"></textarea>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">5. Jumlah Pesanan (Pcs)</label>
                                <input type="number" id="field-qty" value="10" min="1" oninput="aplikasi.hitungUlangHargaKustomisasi()" class="w-28 text-xs p-2 rounded-xl border border-zinc-200 font-bold">
                            </div>
                        `;
                        break;

                    case 'emoney':
                        // C. E-Money / Tol Card: Pilihan desain, Upload gambar, Pilihan warna, Jumlah order
                        markup = `
                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">1. Pilihan Desain / Provider</label>
                                <select id="field-emoney-provider" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                    <option value="Mandiri E-Money Original Chip">Mandiri E-Money (Resmi Chip)</option>
                                    <option value="BCA Flazz Generasi 2">BCA Flazz (Gen 2 Support NFC)</option>
                                    <option value="BNI TapCash Custom">BNI TapCash Cetak 2 Sisi</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">2. Upload Gambar / Foto Kartu</label>
                                <input type="file" id="field-upload-image" class="text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-merek-magenta" accept="image/*" onchange="aplikasi.tanganiUnggahDesain(event)">
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">3. Pilihan Aksen Warna Latar</label>
                                <div class="flex items-center gap-2">
                                    <button type="button" onclick="aplikasi.aturWarnaTumbler('#E11D74', 'Pink Gradient')" class="w-7 h-7 rounded-full bg-merek-magenta border-2 border-white shadow hover:scale-110 transition"></button>
                                    <button type="button" onclick="aplikasi.aturWarnaTumbler('#0284C7', 'Cyan Blue')" class="w-7 h-7 rounded-full bg-sky-600 border-2 border-white shadow hover:scale-110 transition"></button>
                                    <button type="button" onclick="aplikasi.aturWarnaTumbler('#18181B', 'Dark Carbon')" class="w-7 h-7 rounded-full bg-zinc-900 border-2 border-white shadow hover:scale-110 transition"></button>
                                    <span id="selected-color-text" class="text-xs font-semibold text-zinc-600 ml-2">Standar Desain</span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">4. Jumlah Pesanan (Pcs)</label>
                                <input type="number" id="field-qty" value="1" min="1" oninput="aplikasi.hitungUlangHargaKustomisasi()" class="w-28 text-xs p-2 rounded-xl border border-zinc-200 font-bold">
                            </div>
                        `;
                        break;

                    case 'kaos':
                        // D. Kaos: Bahan Cotton Combed, Pilihan ukuran, Pilihan warna, Pilihan jenis sablon, TIDAK custom upload (hanya variasi)
                        markup = `
                            <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-800 font-medium">
                                <i class="fa-solid fa-circle-info text-amber-600 mr-1"></i>
                                <strong>Catatan Kaos:</strong> Produk ini khusus variasi ready template dan tidak menyediakan upload desain kustom bebas. Silakan pilih opsi di bawah:
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">1. Bahan Kain</label>
                                <input type="text" readonly value="100% Premium Cotton Combed 30s" class="w-full text-xs p-2.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold">
                            </div>

                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">2. Pilihan Ukuran</label>
                                    <select id="field-kaos-size" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                        <option value="S">S (Lebar 47cm)</option>
                                        <option value="M">M (Lebar 50cm)</option>
                                        <option value="L" selected>L (Lebar 52cm)</option>
                                        <option value="XL">XL (Lebar 54cm)</option>
                                        <option value="XXL">XXL (Lebar 57cm)</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">3. Pilihan Warna Kaos</label>
                                    <select id="field-kaos-color" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200" onchange="aplikasi.aturWarnaKaos(this.value)">
                                        <option value="Hitam Jet Black">Hitam Jet Black</option>
                                        <option value="Putih Solid">Putih Solid</option>
                                        <option value="Biru Navy">Biru Navy</option>
                                        <option value="Maroon Red">Maroon Red</option>
                                        <option value="Hijau Army">Hijau Army</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">4. Pilihan Jenis Sablon</label>
                                <select id="field-sablon-type" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                    <option value="Digital Direct-Transfer-Film (DTF)">Digital Transfer Film (DTF) - Presisi & Full Color</option>
                                    <option value="Rubber Plastisol Handfeel">Rubber Plastisol Lembut & Kuat</option>
                                    <option value="Reflective Glow Starlight">Reflective Efek Memantulkan Cahaya</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">5. Jumlah Pesanan (Pcs)</label>
                                <input type="number" id="field-qty" value="1" min="1" oninput="aplikasi.hitungUlangHargaKustomisasi()" class="w-28 text-xs p-2 rounded-xl border border-zinc-200 font-bold">
                            </div>
                        `;
                        break;

                    case 'seragam':
                        // E. Seragam dan PDH: Pilihan bahan, Pilihan desain, Pilihan ukuran, Custom sesuai kebutuhan, Jumlah order
                        markup = `
                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">1. Pilihan Bahan Kain Seragam</label>
                                <select id="field-seragam-bahan" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                    <option value="American Drill 1919 (Standar Kantor)">American Drill 1919 (Standar PDH Kantor)</option>
                                    <option value="Japan Drill Nagata (Lebih Tebal & Dingin)">Japan Drill Nagata (Lebih Tebal, Halus & Dingin)</option>
                                    <option value="Tropical Oxford Premium">Tropical Oxford Premium (Anti Kusut)</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">2. Desain Seragam</label>
                                    <select id="field-seragam-desain" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                        <option value="Kemeja Lengan Pendek + Pangkat">Lengan Pendek + Pangkat Pundak</option>
                                        <option value="Kemeja Lengan Panjang + Manset">Lengan Panjang + Manset Kancing</option>
                                        <option value="Model Tactical Lapangan">Model Tactical 4 Saku Depan</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">3. Pilihan Ukuran</label>
                                    <select id="field-seragam-size" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                        <option value="S - Standar">S</option>
                                        <option value="M - Standar">M</option>
                                        <option value="L - Standar" selected>L</option>
                                        <option value="XL - Standar">XL</option>
                                        <option value="XXL - Custom">XXL (+ Rp 10.000)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">4. Custom Sesuai Kebutuhan (Logo Bordir / Posisi Saku / Warna Lis)</label>
                                <textarea id="field-custom-seragam" rows="2" placeholder="Contoh: Bordir logo di dada kiri, bendera di lengan kanan, lis merah di kerah." class="w-full text-xs p-2.5 rounded-xl border border-zinc-200"></textarea>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">5. Jumlah Pesanan (Minimal 6 pcs)</label>
                                <input type="number" id="field-qty" value="6" min="6" oninput="aplikasi.hitungUlangHargaKustomisasi()" class="w-28 text-xs p-2 rounded-xl border border-zinc-200 font-bold">
                            </div>
                        `;
                        break;

                    case 'jaket':
                        // F. Jaket: Custom desain, Pilihan bahan, Pilihan ukuran, Pilihan warna, Jumlah order
                        markup = `
                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">1. Pilihan Bahan Jaket</label>
                                <select id="field-jaket-bahan" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                    <option value="Cotton Fleece Gramasi 280 (Hangat & Lembut)">Cotton Fleece Gramasi 280 (Hoodie Hangat)</option>
                                    <option value="Taslan Waterproof (Outdoor / Windproof)">Taslan Milky Waterproof (Windbreaker)</option>
                                    <option value="Baby Terry Sporty">Baby Terry Ringan Sporty</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">2. Pilihan Warna</label>
                                    <select id="field-jaket-color" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200" onchange="aplikasi.aturWarnaKaos(this.value)">
                                        <option value="Hitam">Hitam Pekat</option>
                                        <option value="Abu Misty">Abu-Abu Misty</option>
                                        <option value="Navy">Navy Blue</option>
                                        <option value="Hijau Botol">Hijau Botol</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">3. Pilihan Ukuran</label>
                                    <select id="field-jaket-size" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                        <option value="M">M</option>
                                        <option value="L" selected>L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">4. Upload File Desain / Konsep Jaket</label>
                                <input type="file" id="field-upload-image" class="text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-merek-magenta" accept="image/*" onchange="aplikasi.tanganiUnggahDesain(event)">
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">5. Jumlah Pesanan (Pcs)</label>
                                <input type="number" id="field-qty" value="1" min="1" oninput="aplikasi.hitungUlangHargaKustomisasi()" class="w-28 text-xs p-2 rounded-xl border border-zinc-200 font-bold">
                            </div>
                        `;
                        break;

                    case 'lanyard':
                        // G. Lanyard: Pilihan desain, Pilihan warna, Pilihan ukuran, Upload desain, Jumlah order
                        markup = `
                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">1. Pilihan Ukuran Lebar & Tali</label>
                                <select id="field-lanyard-size" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                    <option value="Lebar 2.0 cm (Standar Populer)">Lebar 2.0 cm x Panjang 90 cm (Standar)</option>
                                    <option value="Lebar 2.5 cm (Ekstra Lebar)">Lebar 2.5 cm x Panjang 90 cm (Lebar Maksimal)</option>
                                    <option value="Lebar 1.5 cm (Slim Minimalis)">Lebar 1.5 cm (Slim)</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">2. Pilihan Warna Dasar</label>
                                    <select id="field-lanyard-color" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200" onchange="aplikasi.aturWarnaKaos(this.value)">
                                        <option value="Brand Gradient (Pink-Orange)">Print Craft Gradient (Pink-Orange)</option>
                                        <option value="Hitam Elegan">Hitam Solid</option>
                                        <option value="Biru Navy">Biru Navy</option>
                                        <option value="Merah Marun">Merah Marun</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-zinc-700 mb-1">3. Aksesoris Tambahan</label>
                                    <select id="field-lanyard-hook" class="w-full text-xs p-2.5 rounded-xl border border-zinc-200">
                                        <option value="Kait Nikel + Stopper Hitam">Kait Nikel + Stopper</option>
                                        <option value="Kait Oval + Safety Breakaway">Kait Oval + Pengaman Leher</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">4. Upload Motif / Logo Lanyard</label>
                                <input type="file" id="field-upload-image" class="text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-merek-magenta" accept="image/*" onchange="aplikasi.tanganiUnggahDesain(event)">
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-zinc-700 mb-1">5. Jumlah Pesanan (Minimal 10 pcs)</label>
                                <input type="number" id="field-qty" value="10" min="1" oninput="aplikasi.hitungUlangHargaKustomisasi()" class="w-28 text-xs p-2 rounded-xl border border-zinc-200 font-bold">
                            </div>
                        `;
                        break;
                }

                wadah.innerHTML = markup;
                this.hitungUlangHargaKustomisasi();
            },

            // Simulator color modifier
            aturWarnaTumbler: function(kodeWarna, nama) {
                const overlay = document.getElementById('preview-color-overlay');
                if (overlay) overlay.style.backgroundColor = kodeWarna;
                const label = document.getElementById('preview-color-label');
                if (label) label.textContent = 'Warna: ' + nama;
                const elemenTeks = document.getElementById('selected-color-text');
                if (elemenTeks) elemenTeks.textContent = nama;
            },

            aturWarnaKaos: function(nilai) {
                const label = document.getElementById('preview-color-label');
                if (label) label.textContent = 'Warna: ' + nilai;
            },

            // Live artwork preview overlay
            tanganiUnggahDesain: function(peristiwa) {
                const berkas = peristiwa.target.files[0];
                if (!berkas) return;

                const pembaca = new FileReader();
                pembaca.onload = function(peristiwa) {
                    const wadahPratinjau = document.getElementById('preview-artwork-container');
                    const gambarPratinjau = document.getElementById('preview-artwork-img');
                    if (wadahPratinjau && gambarPratinjau) {
                        gambarPratinjau.src = peristiwa.target.result;
                        wadahPratinjau.classList.remove('hidden');
                    }
                    aplikasi.tampilkanNotifikasi('Artwork berhasil di-upload ke live preview!');
                };
                pembaca.readAsDataURL(berkas);
            },

            hitungUlangHargaKustomisasi: function() {
                if (!keadaanAplikasi.produkYangDikustomisasi) return;
                const masukanJumlah = document.getElementById('field-qty');
                let jumlah = masukanJumlah ? parseInt(masukanJumlah.value) || 1 : 1;
                if (jumlah < 1) jumlah = 1;

                const hargaDasar = keadaanAplikasi.produkYangDikustomisasi.hargaDasar;
                const totalHarga = hargaDasar * jumlah;

                document.getElementById('customizer-total-calculated').textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;
            },

            tambahProdukKeKeranjang: function() {
                if (!keadaanAplikasi.produkYangDikustomisasi) return;
                const produk = keadaanAplikasi.produkYangDikustomisasi;
                const masukanJumlah = document.getElementById('field-qty');
                const jumlah = masukanJumlah ? parseInt(masukanJumlah.value) || 1 : 1;

                // Gather specifications string based on fields
                let spesifikasi = [];
                const labelWarna = document.getElementById('preview-color-label')?.textContent || '';
                if (labelWarna) spesifikasi.push(labelWarna);

                const templat = document.getElementById('field-design-template')?.value;
                if (templat) spesifikasi.push(`Template: ${templat}`);

                const jenisKartuIdentitas = document.getElementById('field-idcard-type')?.value;
                if (jenisKartuIdentitas) spesifikasi.push(`Tipe: ${jenisKartuIdentitas}`);

                const ukuranKaos = document.getElementById('field-kaos-size')?.value;
                if (ukuranKaos) spesifikasi.push(`Size: ${ukuranKaos}`);

                const jenisSablon = document.getElementById('field-sablon-type')?.value;
                if (jenisSablon) spesifikasi.push(`Sablon: ${jenisSablon}`);

                const bahanSeragam = document.getElementById('field-seragam-bahan')?.value;
                if (bahanSeragam) spesifikasi.push(`Bahan: ${bahanSeragam}`);

                const bahanJaket = document.getElementById('field-jaket-bahan')?.value;
                if (bahanJaket) spesifikasi.push(`Bahan: ${bahanJaket}`);

                const barangKeranjang = {
                    idKeranjang: Date.now(),
                    idProduk: produk.id,
                    nama: produk.nama,
                    kategori: produk.kategori,
                    gambar: produk.gambar,
                    hargaSatuan: produk.hargaDasar,
                    jumlah: jumlah,
                    ringkasanSpesifikasi: spesifikasi.length ? spesifikasi.join(' • ') : 'Standar Cetak'
                };

                keadaanAplikasi.daftarKeranjang.push(barangKeranjang);
                this.tampilkanKeranjang();
                this.tutupPengaturanProduk();
                this.tampilkanNotifikasi(`"${produk.nama}" berhasil masuk ke keranjang!`);
                this.bukaKeranjang();
            },

            // --- CART & DRAWER ---
            hitungTotal: function() {
                return keadaanAplikasi.daftarKeranjang.reduce((jumlah, barang) => jumlah + (barang.hargaSatuan * barang.jumlah), 0);
            },

            bukaKeranjang: function() {
                this.tampilkanKeranjang();
                document.getElementById('cart-drawer').classList.remove('hidden');
            },

            tutupKeranjang: function() {
                document.getElementById('cart-drawer').classList.add('hidden');
            },

            tampilkanKeranjang: function() {
                const wadahDaftar = document.getElementById('cart-items-list');
                const penghitung = document.getElementById('cart-counter');
                const teksJumlah = document.getElementById('cart-items-count');
                const teksSubtotal = document.getElementById('cart-subtotal');
                const teksTotalAkhir = document.getElementById('cart-grandtotal');
                const tombolBayar = document.getElementById('btn-to-checkout');

                const jumlahBarang = keadaanAplikasi.daftarKeranjang.reduce((jumlah, barang) => jumlah + barang.jumlah, 0);
                if (penghitung) penghitung.textContent = jumlahBarang;
                if (teksJumlah) teksJumlah.textContent = jumlahBarang;

                if (keadaanAplikasi.daftarKeranjang.length === 0) {
                    wadahDaftar.innerHTML = `
                        <div class="py-16 text-center text-zinc-400 space-y-3">
                            <i class="fa-solid fa-basket-shopping text-4xl text-zinc-300"></i>
                            <p class="text-sm font-semibold text-zinc-500">Keranjang belanja Anda masih kosong</p>
                            <button onclick="aplikasi.tutupKeranjang(); aplikasi.tampilkanHalaman('catalog')" class="tombol-gradien px-4 py-2 rounded-xl text-xs font-bold text-white">Mulai Pilih Merchandise</button>
                        </div>
                    `;
                    if (teksSubtotal) teksSubtotal.textContent = 'Rp 0';
                    if (teksTotalAkhir) teksTotalAkhir.textContent = 'Rp 0';
                    if (tombolBayar) tombolBayar.disabled = true;
                    return;
                }

                if (tombolBayar) tombolBayar.disabled = false;

                let subtotalHarga = 0;
                wadahDaftar.innerHTML = keadaanAplikasi.daftarKeranjang.map(barang => {
                    const totalBarang = barang.hargaSatuan * barang.jumlah;
                    subtotalHarga += totalBarang;
                    return `
                        <div class="bg-zinc-50 p-3 rounded-2xl border border-zinc-100 flex gap-3 items-center">
                            <img src="${barang.gambar}" alt="${barang.nama}" class="w-16 h-16 rounded-xl object-cover border border-zinc-200">
                            <div class="flex-grow min-w-0">
                                <h4 class="text-xs font-bold text-merek-gelap truncate">${barang.nama}</h4>
                                <p class="text-[10px] text-zinc-500 truncate">${barang.ringkasanSpesifikasi}</p>
                                <div class="flex items-center justify-between mt-2">
                                    <span class="text-xs font-extrabold text-merek-magenta">Rp ${totalBarang.toLocaleString('id-ID')}</span>
                                    <div class="flex items-center gap-2">
                                        <button onclick="aplikasi.ubahJumlahKeranjang(${barang.idKeranjang}, -1)" class="w-5 h-5 rounded bg-zinc-200 text-zinc-700 flex items-center justify-center text-[10px] font-bold hover:bg-zinc-300">-</button>
                                        <span class="text-xs font-bold">${barang.jumlah}</span>
                                        <button onclick="aplikasi.ubahJumlahKeranjang(${barang.idKeranjang}, 1)" class="w-5 h-5 rounded bg-zinc-200 text-zinc-700 flex items-center justify-center text-[10px] font-bold hover:bg-zinc-300">+</button>
                                        <button onclick="aplikasi.hapusDariKeranjang(${barang.idKeranjang})" class="text-zinc-400 hover:text-rose-500 ml-1 text-xs">
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                if (teksSubtotal) teksSubtotal.textContent = `Rp ${subtotalHarga.toLocaleString('id-ID')}`;
                if (teksTotalAkhir) teksTotalAkhir.textContent = `Rp ${subtotalHarga.toLocaleString('id-ID')}`;
            },

            ubahJumlahKeranjang: function(idKeranjang, perubahan) {
                const barang = keadaanAplikasi.daftarKeranjang.find(indeks => indeks.idKeranjang === idKeranjang);
                if (!barang) return;
                barang.jumlah += perubahan;
                if (barang.jumlah <= 0) {
                    this.hapusDariKeranjang(idKeranjang);
                } else {
                    this.tampilkanKeranjang();
                }
            },

            hapusDariKeranjang: function(idKeranjang) {
                keadaanAplikasi.daftarKeranjang = keadaanAplikasi.daftarKeranjang.filter(indeks => indeks.idKeranjang !== idKeranjang);
                this.tampilkanKeranjang();
            },

            // --- CHECKOUT & PAYMENT ---
            lanjutKePembayaran: function() {
                if (keadaanAplikasi.daftarKeranjang.length === 0) return;
                this.tutupKeranjang();

                const subtotalHarga = this.hitungTotal();
                document.getElementById('checkout-final-total').textContent = `Rp ${subtotalHarga.toLocaleString('id-ID')}`;
                this.pilihMetodePembayaran(keadaanAplikasi.metodePembayaranTerpilih);
                document.getElementById('checkout-modal').classList.remove('hidden');
            },

            tutupJendelaPembayaran: function() {
                document.getElementById('checkout-modal').classList.add('hidden');
            },

            pilihMetodePembayaran: function(metode) {
                keadaanAplikasi.metodePembayaranTerpilih = metode;
                document.querySelectorAll('.kartu-pembayaran').forEach(elemen => {
                    elemen.classList.remove('border-merek-magenta', 'bg-pink-50/30');
                    elemen.classList.add('border-zinc-200');
                });
                const pilihan = document.getElementById('pay-' + metode);
                if (pilihan) {
                    pilihan.classList.add('border-merek-magenta', 'bg-pink-50/30');
                    pilihan.classList.remove('border-zinc-200');
                }

                const nomorRekening = document.getElementById('payment-account-number');
                const namaRekening = document.getElementById('payment-account-name');

                if (metode === 'bca') {
                    nomorRekening.textContent = 'BCA: 8420-1928-33';
                    namaRekening.textContent = 'a.n PT PRINT CRAFT INDONESIA';
                } else if (metode === 'mandiri') {
                    nomorRekening.textContent = 'MANDIRI: 1410-0982-7162';
                    namaRekening.textContent = 'a.n PT PRINT CRAFT INDONESIA';
                } else if (metode === 'dana') {
                    nomorRekening.textContent = 'DANA: 0812-3456-7890';
                    namaRekening.textContent = 'a.n PRINT CRAFT OFFICIAL';
                } else if (metode === 'gopay') {
                    nomorRekening.textContent = 'GOPAY: 0812-3456-7890';
                    namaRekening.textContent = 'a.n PRINT CRAFT MERCHANDISE';
                }
            },

            tanganiBuktiTerpilih: function(peristiwa) {
                const berkas = peristiwa.target.files[0];
                if (berkas) {
                    keadaanAplikasi.berkasBuktiSementara = berkas;
                    document.getElementById('proof-filename').textContent = `✓ File siap: ${berkas.name}`;
                    this.tampilkanNotifikasi('Bukti transfer berhasil dipilih!');
                }
            },

            buatPesanan: function() {
                const nama = document.getElementById('checkout-name').value.trim() || 'Pelanggan';
                const nomorTelepon = document.getElementById('checkout-phone').value.trim() || '-';
                const alamat = document.getElementById('checkout-address').value.trim() || 'Alamat Belum Diisi';
                const catatan = document.getElementById('checkout-notes').value.trim();

                const jumlahTotal = this.hitungTotal();
                const ringkasanBarang = keadaanAplikasi.daftarKeranjang.map(indeks => `${indeks.nama} (Qty: ${indeks.jumlah})`).join(', ');

                const pesananBaru = {
                    idPesanan: 'PC-' + Math.floor(100000 + Math.random() * 900000),
                    namaPelanggan: nama,
                    teleponPelanggan: nomorTelepon,
                    alamat: alamat,
                    catatan: catatan,
                    ringkasanBarang: ringkasanBarang,
                    jenisBarang: keadaanAplikasi.daftarKeranjang[0]?.kategori || 'Merchandise',
                    totalHarga: jumlahTotal,
                    metode: keadaanAplikasi.metodePembayaranTerpilih.toUpperCase(),
                    statusPembayaran: keadaanAplikasi.berkasBuktiSementara ? 'Menunggu Verifikasi' : 'Menunggu Pembayaran',
                    statusProduksi: 'Antrean Desain & Verifikasi',
                    gambarBukti: keadaanAplikasi.berkasBuktiSementara ? 'assets/gambar/placeholder-produk.svg' : null,
                    tanggal: 'Baru saja'
                };

                // Add to daftarPesanan list at beginning
                keadaanAplikasi.daftarPesanan.unshift(pesananBaru);

                // Clear cart
                keadaanAplikasi.daftarKeranjang = [];
                keadaanAplikasi.berkasBuktiSementara = null;
                this.tampilkanKeranjang();
                this.tutupJendelaPembayaran();

                // Open Customer Dashboard so they can view status immediately
                this.tampilkanHalaman('customer-dashboard');
                this.tampilkanPesanan();
                this.tampilkanTabelAdmin();
                this.tampilkanNotifikasi(`Pesanan ${pesananBaru.idPesanan} berhasil dibuat!`);
            },

            // --- CUSTOMER DASHBOARD ---
            ubahTabPelanggan: function(kunciTab) {
                ['orders', 'profile', 'chats'].forEach(namaTab => {
                    const tombolTab = document.getElementById('cust-tab-' + namaTab);
                    const isi = document.getElementById('customer-tab-' + namaTab + '-content');
                    if (namaTab === kunciTab) {
                        tombolTab?.classList.add('border-merek-magenta', 'text-merek-magenta');
                        tombolTab?.classList.remove('border-transparent', 'text-zinc-500');
                        isi?.classList.remove('hidden');
                    } else {
                        tombolTab?.classList.remove('border-merek-magenta', 'text-merek-magenta');
                        tombolTab?.classList.add('border-transparent', 'text-zinc-500');
                        isi?.classList.add('hidden');
                    }
                });

                if (kunciTab === 'chats') {
                    this.tampilkanRiwayatChat();
                }
            },

            tampilkanPesanan: function() {
                const wadah = document.getElementById('customer-orders-container');
                if (!wadah) return;

                if (keadaanAplikasi.daftarPesanan.length === 0) {
                    wadah.innerHTML = '<p class="text-xs text-zinc-400">Belum ada riwayat transaksi.</p>';
                    return;
                }

                wadah.innerHTML = keadaanAplikasi.daftarPesanan.map(pesanan => {
                    // Status Badge Styling strictly for the 4 requirements:
                    // Menunggu pembayaran, Menunggu verifikasi, Pembayaran berhasil, Pembayaran ditolak
                    let kelasLencana = 'bg-amber-100 text-amber-800 border-amber-200';
                    if (pesanan.statusPembayaran === 'Menunggu Verifikasi') kelasLencana = 'bg-blue-100 text-blue-800 border-blue-200';
                    if (pesanan.statusPembayaran === 'Pembayaran Berhasil') kelasLencana = 'bg-emerald-100 text-emerald-800 border-emerald-200';
                    if (pesanan.statusPembayaran === 'Pembayaran Ditolak') kelasLencana = 'bg-rose-100 text-rose-800 border-rose-200';

                    return `
                        <div class="bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm space-y-4">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-100 text-xs">
                                <div>
                                    <span class="font-bold text-zinc-400">ID Pesanan:</span>
                                    <span class="font-mono font-extrabold text-merek-gelap ml-1">${pesanan.idPesanan}</span>
                                    <span class="text-zinc-400 ml-2">• ${pesanan.tanggal}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="px-2.5 py-1 rounded-full text-[11px] font-bold border ${kelasLencana}">
                                        ${pesanan.statusPembayaran}
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                <div class="md:col-span-8 space-y-1">
                                    <h4 class="font-extrabold text-sm text-merek-gelap">${pesanan.ringkasanBarang}</h4>
                                    <p class="text-xs text-zinc-500">Metode: <strong class="text-zinc-700">${pesanan.metode}</strong> | Status Produksi: <span class="text-merek-magenta font-semibold">${pesanan.statusProduksi}</span></p>
                                    <p class="text-[11px] text-zinc-400"><i class="fa-solid fa-location-dot text-zinc-400 mr-1"></i> ${pesanan.alamat}</p>
                                </div>
                                <div class="md:col-span-4 flex flex-col md:items-end justify-center space-y-2">
                                    <span class="text-[10px] text-zinc-400 font-semibold uppercase">Total Tagihan</span>
                                    <span class="text-lg font-black text-merek-gelap">Rp ${pesanan.totalHarga.toLocaleString('id-ID')}</span>
                                    
                                    ${pesanan.statusPembayaran === 'Menunggu Pembayaran' ? `
                                        <button onclick="aplikasi.mintaUnggahBuktiPelanggan('${pesanan.idPesanan}')" class="tombol-gradien px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
                                            <i class="fa-solid fa-arrow-up-from-bracket"></i> Upload Bukti Transfer
                                        </button>
                                    ` : `
                                        <span class="text-[11px] font-semibold text-zinc-500 flex items-center gap-1">
                                            <i class="fa-solid fa-file-invoice text-emerald-500"></i> Bukti Terlampir
                                        </span>
                                    `}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            },

            mintaUnggahBuktiPelanggan: function(idPesanan) {
                const pesanan = keadaanAplikasi.daftarPesanan.find(pesanan => pesanan.idPesanan === idPesanan);
                if (!pesanan) return;
                
                // Simulate uploading proof
                pesanan.statusPembayaran = 'Menunggu Verifikasi';
                pesanan.gambarBukti = 'assets/gambar/placeholder-produk.svg';
                this.tampilkanPesanan();
                this.tampilkanTabelAdmin();
                this.tampilkanNotifikasi(`Bukti pembayaran untuk pesanan ${idPesanan} berhasil di-upload!`);
            },

            tampilkanRiwayatChat: function() {
                const umpan = document.getElementById('customer-chat-history');
                if (!umpan) return;
                umpan.innerHTML = keadaanAplikasi.daftarPesanChat.map(pesan => `
                    <div class="flex flex-col ${pesan.pengirim === 'user' ? 'items-end' : 'items-start'}">
                        <div class="max-w-[80%] rounded-xl px-3 py-2 text-xs ${pesan.pengirim === 'user' ? 'bg-merek-magenta text-white' : 'bg-white border border-zinc-200 text-zinc-800'}">
                            ${pesan.teksPesan}
                        </div>
                        <span class="text-[9px] text-zinc-400 mt-0.5">${pesan.waktu}</span>
                    </div>
                `).join('');
            },

            // --- ADMIN DASHBOARD ---
            ubahTabAdmin: function(kunciTab) {
                document.querySelectorAll('.tab-panel-admin').forEach(elemen => elemen.classList.add('hidden'));
                const bagianAktif = document.getElementById('admin-tab-' + (kunciTab === 'overview' ? 'overview' : kunciTab + '-page'));
                if (bagianAktif) bagianAktif.classList.remove('hidden');

                // Toggle active sidebar styles
                const daftarTombolTab = ['overview', 'orders', 'verification', 'products', 'bank', 'chatmgt'];
                daftarTombolTab.forEach(kunci => {
                    const tombol = document.getElementById('adm-tab-' + kunci);
                    if (tombol) {
                        if (kunci === kunciTab) {
                            tombol.className = "admin-menu-button w-full text-left px-4 py-3 rounded-xl font-bold text-sm bg-gradien-merek text-white flex items-center gap-3";
                        } else {
                            tombol.className = "admin-menu-button w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-zinc-600 hover:bg-zinc-50 flex items-center justify-between";
                        }
                    }
                });

                if (kunciTab === 'chatmgt') {
                    this.tampilkanPesanAdmin();
                }
            },

            tampilkanTabelAdmin: function() {
                // Update stats
                const jumlahPesanan = keadaanAplikasi.daftarPesanan.length + 245;
                const jumlahPendapatan = keadaanAplikasi.daftarPesanan.reduce((jumlah, pesanan) => jumlah + pesanan.totalHarga, 0) + 38450000;
                const jumlahPesananBaru = keadaanAplikasi.daftarPesanan.filter(pesanan => pesanan.statusPembayaran.includes('Menunggu')).length;

                document.getElementById('stat-total-orders').textContent = jumlahPesanan;
                document.getElementById('stat-total-revenue').textContent = `Rp ${jumlahPendapatan.toLocaleString('id-ID')}`;
                document.getElementById('stat-new-orders').textContent = jumlahPesananBaru;
                document.getElementById('admin-badge-pending').textContent = jumlahPesananBaru;

                // Recent Orders Table in Overview
                const badanTabelTerbaru = document.getElementById('admin-recent-orders-table');
                if (badanTabelTerbaru) {
                    badanTabelTerbaru.innerHTML = keadaanAplikasi.daftarPesanan.slice(0, 4).map(pesanan => `
                        <tr>
                            <td class="p-3 font-mono font-bold text-merek-gelap">${pesanan.idPesanan}</td>
                            <td class="p-3">${pesanan.namaPelanggan}</td>
                            <td class="p-3 max-w-[200px] truncate">${pesanan.ringkasanBarang}</td>
                            <td class="p-3 font-bold text-merek-magenta">Rp ${pesanan.totalHarga.toLocaleString('id-ID')}</td>
                            <td class="p-3">
                                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${pesanan.statusPembayaran === 'Pembayaran Berhasil' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                                    ${pesanan.statusPembayaran}
                                </span>
                            </td>
                            <td class="p-3 text-right">
                                <button onclick="aplikasi.ubahTabAdmin('orders')" class="text-merek-magenta font-bold hover:underline">Kelola</button>
                            </td>
                        </tr>
                    `).join('');
                }

                // Full Orders Table
                const badanTabelLengkap = document.getElementById('admin-full-orders-table');
                if (badanTabelLengkap) {
                    badanTabelLengkap.innerHTML = keadaanAplikasi.daftarPesanan.map(pesanan => `
                        <tr>
                            <td class="p-3 font-mono font-bold">${pesanan.idPesanan}</td>
                            <td class="p-3 text-zinc-500">${pesanan.tanggal}</td>
                            <td class="p-3">
                                <strong>${pesanan.namaPelanggan}</strong>
                                <p class="text-[10px] text-zinc-400">${pesanan.teleponPelanggan}</p>
                            </td>
                            <td class="p-3 max-w-xs truncate">${pesanan.ringkasanBarang}</td>
                            <td class="p-3 font-bold">Rp ${pesanan.totalHarga.toLocaleString('id-ID')}</td>
                            <td class="p-3">
                                <select onchange="aplikasi.perbaruiStatusPesanan('${pesanan.idPesanan}', this.value)" class="text-xs p-1.5 rounded-lg border border-zinc-200 font-semibold">
                                    <option value="Antrean Desain" ${pesanan.statusProduksi.includes('Antrean') ? 'selected' : ''}>Antrean Desain</option>
                                    <option value="Proses Cetak & Sablon" ${pesanan.statusProduksi.includes('Cetak') ? 'selected' : ''}>Proses Cetak</option>
                                    <option value="Quality Control (QC)">Quality Control</option>
                                    <option value="Pesanan Selesai / Terkirim" ${pesanan.statusProduksi.includes('Selesai') ? 'selected' : ''}>Selesai / Dikirim</option>
                                </select>
                            </td>
                            <td class="p-3 text-right space-x-1">
                                <button onclick="aplikasi.verifikasiPembayaran('${pesanan.idPesanan}', 'Pembayaran Berhasil')" class="px-2 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded text-[10px] font-bold">Terima Bayar</button>
                                <button onclick="aplikasi.verifikasiPembayaran('${pesanan.idPesanan}', 'Pembayaran Ditolak')" class="px-2 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded text-[10px] font-bold">Tolak</button>
                            </td>
                        </tr>
                    `).join('');
                }

                // Verification Queue
                const antreanVerifikasi = document.getElementById('admin-verification-queue');
                if (antreanVerifikasi) {
                    const daftarMenunggu = keadaanAplikasi.daftarPesanan.filter(pesanan => pesanan.statusPembayaran === 'Menunggu Verifikasi' || pesanan.statusPembayaran === 'Menunggu Pembayaran');
                    if (daftarMenunggu.length === 0) {
                        antreanVerifikasi.innerHTML = '<p class="text-xs text-zinc-400 p-4 bg-zinc-50 rounded-xl">Semua pembayaran telah diverifikasi.</p>';
                    } else {
                        antreanVerifikasi.innerHTML = daftarMenunggu.map(pesanan => `
                            <div class="p-4 rounded-xl border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div class="flex items-center gap-3">
                                    <img src="${pesanan.gambarBukti || 'assets/gambar/placeholder-produk.svg'}" alt="Bukti Transfer" class="w-14 h-14 rounded-lg object-cover border">
                                    <div>
                                        <div class="flex items-center gap-2">
                                            <span class="font-mono font-bold text-xs text-merek-gelap">${pesanan.idPesanan}</span>
                                            <span class="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">${pesanan.statusPembayaran}</span>
                                        </div>
                                        <p class="text-xs text-zinc-600 mt-0.5 font-bold">${pesanan.namaPelanggan} - Rp ${pesanan.totalHarga.toLocaleString('id-ID')}</p>
                                        <p class="text-[10px] text-zinc-400">Metode: ${pesanan.metode}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button onclick="aplikasi.verifikasiPembayaran('${pesanan.idPesanan}', 'Pembayaran Berhasil')" class="tombol-gradien px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                                        <i class="fa-solid fa-check"></i> Setujui & Verifikasi
                                    </button>
                                    <button onclick="aplikasi.verifikasiPembayaran('${pesanan.idPesanan}', 'Pembayaran Ditolak')" class="px-4 py-1.5 bg-rose-100 text-rose-800 hover:bg-rose-200 rounded-xl text-xs font-bold">
                                        Tolak
                                    </button>
                                </div>
                            </div>
                        `).join('');
                    }
                }

                // Admin Products Table
                const badanTabelProduk = document.getElementById('admin-products-table');
                if (badanTabelProduk) {
                    badanTabelProduk.innerHTML = keadaanAplikasi.daftarProduk.map(produk => `
                        <tr>
                            <td class="p-3"><img src="${produk.gambar}" alt="${produk.nama}" class="w-10 h-10 rounded-lg object-cover"></td>
                            <td class="p-3 font-bold text-merek-gelap">${produk.nama}</td>
                            <td class="p-3 text-zinc-500">${produk.kategori}</td>
                            <td class="p-3 font-extrabold text-merek-magenta">Rp ${produk.hargaDasar.toLocaleString('id-ID')}</td>
                            <td class="p-3"><span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Tersedia</span></td>
                            <td class="p-3 text-right">
                                <button onclick="aplikasi.bukaPengaturanProduk(${produk.id})" class="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold rounded-lg">Ubah</button>
                            </td>
                        </tr>
                    `).join('');
                }
            },

            verifikasiPembayaran: function(idPesanan, statusBaru) {
                const pesanan = keadaanAplikasi.daftarPesanan.find(pesanan => pesanan.idPesanan === idPesanan);
                if (pesanan) {
                    pesanan.statusPembayaran = statusBaru;
                    if (statusBaru === 'Pembayaran Berhasil') {
                        pesanan.statusProduksi = 'Diproses di Antrean Mesin';
                    }
                    this.tampilkanTabelAdmin();
                    this.tampilkanPesanan();
                    this.tampilkanNotifikasi(`Status pesanan ${idPesanan} diubah menjadi "${statusBaru}"`);
                }
            },

            perbaruiStatusPesanan: function(idPesanan, statusProduksiBaru) {
                const pesanan = keadaanAplikasi.daftarPesanan.find(pesanan => pesanan.idPesanan === idPesanan);
                if (pesanan) {
                    pesanan.statusProduksi = statusProduksiBaru;
                    this.tampilkanNotifikasi(`Status produksi pesanan ${idPesanan} diperbarui.`);
                    this.tampilkanPesanan();
                }
            },

            // --- LIVE CHAT SYSTEM ---
            ubahJendelaObrolan: function() {
                const kartu = document.getElementById('live-chat-card');
                kartu.classList.toggle('hidden');
                if (!kartu.classList.contains('hidden')) {
                    this.tampilkanPesanChat();
                }
            },

            bukaRuangObrolan: function() {
                const kartu = document.getElementById('live-chat-card');
                kartu.classList.remove('hidden');
                this.tampilkanPesanChat();
            },

            tampilkanPesanChat: function() {
                const kotak = document.getElementById('chat-messages-container');
                if (!kotak) return;

                kotak.innerHTML = keadaanAplikasi.daftarPesanChat.map(pesan => `
                    <div class="flex flex-col ${pesan.pengirim === 'user' ? 'items-end' : 'items-start'}">
                        <div class="max-w-[85%] rounded-2xl px-3.5 py-2.5 ${pesan.pengirim === 'user' ? 'bg-merek-magenta text-white shadow-cahaya-merek' : 'bg-white border border-zinc-200 text-zinc-800 shadow-sm'}">
                            <p class="leading-relaxed">${pesan.teksPesan}</p>
                        </div>
                        <span class="text-[9px] text-zinc-400 mt-1 px-1">${pesan.waktu}</span>
                    </div>
                `).join('');

                kotak.scrollTop = kotak.scrollHeight;
            },

            kirimPesan: function() {
                const masukan = document.getElementById('chat-input-field');
                const teksPesan = masukan.value.trim();
                if (!teksPesan) return;

                const waktuSekarang = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                keadaanAplikasi.daftarPesanChat.push({ pengirim: 'user', teksPesan: teksPesan, waktu: waktuSekarang });
                masukan.value = '';
                this.tampilkanPesanChat();
                this.tampilkanPesanAdmin();

                // Simulated automated assistant answer
                setTimeout(() => {
                    let balasan = 'Terima kasih telah menghubungi Print Craft. Tim kami siap membantu cetak pesanan custom Anda!';
                    if (teksPesan.toLowerCase().includes('harga') || teksPesan.toLowerCase().includes('biaya')) {
                        balasan = 'Harga cetak kami sangat terjangkau. Tumbler mulai Rp 75rb, Kaos Rp 65rb, ID Card Rp 8.500. Dapatkan potongan harga grosir untuk qty banyak!';
                    } else if (teksPesan.toLowerCase().includes('desain') || teksPesan.toLowerCase().includes('upload')) {
                        balasan = 'Anda bisa langsung mengunggah file desain (PNG, PDF, AI, Corel) saat memilih produk di katalog, atau tim desain kami bisa bantu buatkan.';
                    }
                    keadaanAplikasi.daftarPesanChat.push({
                        pengirim: 'bot',
                        teksPesan: balasan,
                        waktu: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    });
                    this.tampilkanPesanChat();
                    this.tampilkanPesanAdmin();
                }, 1000);
            },

            kirimPesanCepat: function(teksPemicu) {
                const masukan = document.getElementById('chat-input-field');
                masukan.value = teksPemicu;
                this.kirimPesan();
            },

            tampilkanPesanAdmin: function() {
                const umpanAdmin = document.getElementById('admin-chat-feed');
                if (!umpanAdmin) return;
                umpanAdmin.innerHTML = keadaanAplikasi.daftarPesanChat.map(pesan => `
                    <div class="flex flex-col ${pesan.pengirim === 'admin' ? 'items-end' : (pesan.pengirim === 'user' ? 'items-start' : 'items-center')}">
                        <div class="max-w-[85%] rounded-xl px-3 py-2 ${pesan.pengirim === 'admin' ? 'bg-merek-koral text-white' : (pesan.pengirim === 'user' ? 'bg-zinc-200 text-zinc-900' : 'bg-pink-100 text-merek-magenta')}">
                            <strong>${pesan.pengirim === 'user' ? 'Pelanggan:' : (pesan.pengirim === 'admin' ? 'Admin Anda:' : 'Bot:')}</strong> ${pesan.teksPesan}
                        </div>
                    </div>
                `).join('');
                umpanAdmin.scrollTop = umpanAdmin.scrollHeight;
            },

            kirimBalasanAdmin: function() {
                const masukan = document.getElementById('admin-reply-input');
                const teksPesan = masukan.value.trim();
                if (!teksPesan) return;
                const waktuSekarang = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                keadaanAplikasi.daftarPesanChat.push({ pengirim: 'admin', teksPesan: teksPesan, waktu: waktuSekarang });
                masukan.value = '';
                this.tampilkanPesanAdmin();
                this.tampilkanPesanChat();
            },

            // --- AUTH & ROLES ---
            bukaFormMasuk: function() {
                document.getElementById('auth-modal').classList.remove('hidden');
            },

            tutupFormMasuk: function() {
                document.getElementById('auth-modal').classList.add('hidden');
            },

            masukSebagaiPelanggan: function() {
                keadaanAplikasi.penggunaAktif.sedangMasuk = true;
                keadaanAplikasi.penggunaAktif.peran = 'customer';
                this.perbaruiNavigasiAkun();
                this.tutupFormMasuk();
                this.tampilkanHalaman('customer-dashboard');
                this.tampilkanNotifikasi('Berhasil masuk sebagai Pelanggan.');
            },

            masukSebagaiAdmin: function() {
                keadaanAplikasi.penggunaAktif.sedangMasuk = true;
                keadaanAplikasi.penggunaAktif.peran = 'admin';
                this.perbaruiNavigasiAkun();
                this.tutupFormMasuk();
                this.tampilkanHalaman('admin-dashboard');
                this.tampilkanNotifikasi('Berhasil masuk sebagai Admin Print Craft.');
            },

            keluarAkun: function() {
                keadaanAplikasi.penggunaAktif.sedangMasuk = false;
                this.perbaruiNavigasiAkun();
                this.tampilkanHalaman('home');
                this.tampilkanNotifikasi('Anda telah keluar dari akun.');
            },

            perbaruiNavigasiAkun: function() {
                const wadah = document.getElementById('user-nav-action');
                if (!wadah) return;

                if (keadaanAplikasi.penggunaAktif.sedangMasuk) {
                    wadah.innerHTML = `
                        <button onclick="aplikasi.tampilkanHalaman('customer-dashboard')" class="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition">
                            <span class="w-7 h-7 rounded-full bg-gradien-merek text-white font-bold text-xs flex items-center justify-center">AD</span>
                            <span class="text-xs font-bold hidden sm:inline">Akun Saya</span>
                        </button>
                    `;
                } else {
                    wadah.innerHTML = `
                        <button onclick="aplikasi.bukaFormMasuk()" class="tombol-gradien px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2">
                            <i class="fa-regular fa-user"></i>
                            <span class="hidden sm:inline">Masuk / Daftar</span>
                        </button>
                    `;
                }
            },

            // --- TOAST NOTIFICATIONS ---
            tampilkanNotifikasi: function(pesan) {
                const wadah = document.getElementById('toast-container');
                const notifikasi = document.createElement('div');
                notifikasi.className = 'bg-merek-gelap/95 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-zinc-700 pointer-events-auto transform transition duration-300 translate-y-2';
                notifikasi.innerHTML = `
                    <div class="w-6 h-6 rounded-full bg-gradien-merek flex items-center justify-center text-white text-[10px]"><i class="fa-solid fa-check"></i></div>
                    <span>${pesan}</span>
                `;
                wadah.appendChild(notifikasi);
                setTimeout(() => notifikasi.classList.remove('translate-y-2'), 10);
                setTimeout(() => {
                    notifikasi.classList.add('opacity-0', 'translate-y-2');
                    setTimeout(() => notifikasi.remove(), 300);
                }, 3500);
            }
        };

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            aplikasi.siapkanAplikasi();
        });

















