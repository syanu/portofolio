/*  saya menggunakan dummy json dari 
 link :https://berita-indo-api.vercel.app/v1/cnn-news/
 github: https://github.com/satyawikananda/berita-indo-api
*/
const dummyBlogJson = [
  {
    "title": "Pengguna iPhone-MacBook di RI Bisa Servis dari Jarak Jauh",
    "link": "https://www.cnnindonesia.com/teknologi/20220701084507-185-815858/pengguna-iphone-macbook-di-ri-bisa-servis-dari-jarak-jauh",
    "contentSnippet": "Pengguna produk Apple bisa memperbaiki perangkat lewat jarak jauh, dengan cara berkomunikasi, diskusi, mendiagnosa",
  },
  {
    "title": "Heboh Netizen Daftar MyPertamina 1 Juli: Eror - Nomor Sudah Terdaftar",
    "link": "https://www.cnnindonesia.com/teknologi/20220701081114-192-815836/heboh-netizen-daftar-mypertamina-1-juli-eror-nomor-sudah-terdaftar",
    "contentSnippet": "Corporate Secretary Pertamina Patra Niaga Irto Ginting menegaskan meski belum mendaftar sebagai penerima BBM subsidi bisa melakukan pembelian seperti biasa.",
  },
  {
    "title": "Daftar Motor-Mobil Dilarang Pakai Pertalite, Ninja hingga Pajero Sport",
    "link": "https://www.cnnindonesia.com/teknologi/20220701072213-384-815828/daftar-motor-mobil-dilarang-pakai-pertalite-ninja-hingga-pajero-sport",
    "contentSnippet": "Aturan menggunakan Pertalite akan mengacu pada kapasitas mesin kendaraan.",
  },
  {
    "title": "Cara Menghubungkan Instagram ke Facebook dan Twitter",
    "link": "https://www.cnnindonesia.com/teknologi/20220701062023-185-815818/cara-menghubungkan-instagram-ke-facebook-dan-twitter",
    "contentSnippet": "Aplikasi juga dirancang dengan sangat mudah, untuk mengunggah postingan ke beberapa jejaring sosial saudaranya, yaitu Facebook.",
  },
  {
    "title": "FOTO: Mobil Listrik Sukses, China Kini Kembangkan Mobil Swakemudi",
    "link": "https://www.cnnindonesia.com/teknologi/20220630120733-386-815465/foto-mobil-listrik-sukses-china-kini-kembangkan-mobil-swakemudi",
    "contentSnippet": "Googlenya China, Baidu berlomba dengan Waymo, GM untuk mengembangkan mobil swakemudi atau self-driving.",
  },
  {
    "title": "Google Cloud Klaim Tak Terpengaruh Kewajiban PSE Kominfo",
    "link": "https://www.cnnindonesia.com/teknologi/20220630142550-185-815635/google-cloud-klaim-tak-terpengaruh-kewajiban-pse-kominfo",
    "contentSnippet": "Kominfo mewajibkan Google mendaftar PSE, namun Google Cloud mengklaim sendiri tidak terpengaruh.",
  },
  {
    "title": "VIDEO: Samsung Produksi Chip 3 Nanometer Saingi Produsen Taiwan",
    "link": "https://www.cnnindonesia.com/teknologi/20220630142613-203-815568/video-samsung-produksi-chip-3-nanometer-saingi-produsen-taiwan",
    "contentSnippet": "Samsung mulai memproduksi massal chip menggunakan teknologi 3-nanometer untuk pertama kalinya di dunia.",
  },
  {
    "title": "Ritual Agama Kuno di Peru Libatkan Dedaunan Pemicu Halusinasi",
    "link": "https://www.cnnindonesia.com/teknologi/20220630163339-199-815691/ritual-agama-kuno-di-peru-libatkan-dedaunan-pemicu-halusinasi",
    "contentSnippet": "Masyarakat Chavin di Peru diduga melibatkan zat halusinogenik dalam ritual keagamaannya.",
  },
  {
    "title": "Luncurkan Fitur Baru, Woilo Mudahkan Bikin NFT Kurang dari Semenit",
    "link": "https://www.cnnindonesia.com/teknologi/20220630201038-190-815767/luncurkan-fitur-baru-woilo-mudahkan-bikin-nft-kurang-dari-semenit",
    "contentSnippet": "Aplikasi Media Sosial asal Surabaya, Woilo meluncurkan fitur 'NFT Woilo' yang dapat memudahkan pengguna membuat NFT dengan proses kurang dari semenit.",
  },
  {
    "title": "Mengenal Embun Upas Dieng yang Muncul Berulang saat Kemarau",
    "link": "https://www.cnnindonesia.com/teknologi/20220630192159-199-815747/mengenal-embun-upas-dieng-yang-muncul-berulang-saat-kemarau",
    "contentSnippet": "BMKG mengungkapkan embun upas atau embun beku di Dieng, Jateng, Kamis (30/6) dini hari, dipicu oleh tekanan rendah di Laut China Selatan.",
  }
]

function componentCard(obj) {
  return `<article><div class="card">
            <div class="card-img" style="background-color: ${bindingRandomColor()}" "></div>
            <div class="card-body">
            <h2 onclick="window.open('${obj.link}', '_blank');" class="card-title">${obj.title}</h2>
            <div class="card-desc">${obj.contentSnippet}</div>
            </div></article>`;
}

/*  saya random color untuk menggantikan gambar cover di card gambar
 referensi :https://stackoverflow.com/questions/1484506/random-color-generator
*/
function bindingRandomColor() {
  var defineAlfabet = '0123456789ABCDEF';
  var fistAlfabet = '#';
  for (var i = 0; i < 6; i++) {
    fistAlfabet += defineAlfabet[Math.floor(Math.random() * 16)];
  }
  return fistAlfabet;
}

function loadBlog() {
  dummyBlogJson.forEach((obj,index) => {
    document.getElementById('findBlog').innerHTML += componentCard(obj)
  });
}

/*  ketika scroll akan ganti active menu
 referensi :https://stackoverflow.com/questions/44874265/confused-about-highlighting-active-menu-item-on-scroll-vanilla-js
*/

function scrollChangenavbar() {

  var myPage = document.querySelectorAll("section");
  var allPage = {};
  var index = 0;

  Array.prototype.forEach.call(myPage, function (e) {
    allPage[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (index in allPage) {
      if (allPage[index] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + index + ']').setAttribute('class', 'active');
      }
    }
  };

}

window.addEventListener('DOMContentLoaded', (event) => {
  scrollChangenavbar()
  loadBlog()
})
