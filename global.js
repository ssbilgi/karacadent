document.addEventListener("DOMContentLoaded", function() {
    // 🍔 Mobil Hamburger Menü
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    // 🔄 TÜM SİTENİN VARSAYILAN İÇERİKLERİ
    const defaults = {
        tel1: "0535 499 82 54",
        tel2: "0552 245 10 19",
        email: "info@karacadental.com",
        adres: "Necatibey Caddesi, Kızılay / Ankara",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        youtube: "https://youtube.com",
        harita: "https://google.com",
        heroTitle: "Karaca Dental Diş Laboratuvarı",
        heroDesc: "2003 yılından beri diş hekimliğinde en son dijital teknolojileri ve üstün el işçiliğini bir araya getiriyoruz. Güvenilir süreç yönetimi, yüksek malzeme kalitesi ve zamanında teslimat ilkelerimizle klinikleriniz için kusursuz diş protezleri üretiyoruz.",
        heroImg: "images/laboratuvar.jpg",
        hakkimizdaText: "Karaca Dental Diş Laboratuvarı olarak, 2003 yılından beri diş protezi và dental üretim sektöründe güvenle hizmet vermekteyiz. Ankara'nın kalbi Kızılay'da kurulan laboratuvarımız, kurulduğu ilk günden bu yana sektördeki teknolojik gelişmeleri yakından takip ederek hekimlerimize ve hastalarımıza en kusursuz çözümleri sunmayı amaçlamıştır.",
        techText: "Laboratuvarımızda tüm üretim süreçleri 3D tarayıcılar ve yüksek hassasiyetli kazıma cihazları (CAD/CAM) ile dijital ortamda başlar. Hekimlerimizden gelen dijital veya geleneksel ölçüler, sıfır hata payıyla bilgisayar ortamında tasarlanır.",
        zirDesc: "Yüksek biyo-uyumluluk ve doğal ışık geçirgenliği sunan zirkonyum restorasyonlarımızla estetik beklentileri en üst düzeyde karşılıyoruz.",
        zirLong: "Karaca Dental bünyesinde en gelişmiş CAD/CAM cihazları kullanılarak üretilen zirkonyum kaplamalar, modern diş hekimliğinin en estetik çözümlerinden biridir.",
        zirImg: "images/zirkonyum.jpg",
        camDesc: "Özellikle ön bölge estetiğinde kusursuz renk geçişleri sağlayan, dayanıklı ve tam seramik altyapı çözümleri.",
        camLong: "Cam seramik restorasyonlar, özellikle ön diş estetiğinde çıtayı en üst seviyeye taşıyan uygulamalardır.",
        camImg: "images/cam-seramik.jpg",
        tibarDesc: "İmplant üstü protezlerde kişiye özel üretilen titanyum barlar ve dayanaklar sayesinde mükemmel diş eti uyumu.",
        tibarLong: "İmplant tedavilerinde hazır parçalar yerine, hastanın kendi diş eti anatomisine tam uyum sağlayan çözümler sunuyoruz.",
        tibarImg: "images/tibar-abutment.jpg"
    };

    Object.keys(defaults).forEach(function(key) {
        if (!localStorage.getItem(key)) localStorage.setItem(key, defaults[key]);
    });

    function setTxt(id, key) {
        const el = document.getElementById(id);
        if (el) el.innerText = localStorage.getItem(key);
    }

    function setHtml(id, key, brFix = false) {
        const el = document.getElementById(id);
        if (el) {
            let val = localStorage.getItem(key);
            if (brFix) val = val.replace(/\n/g, '<br>');
            el.innerHTML = val;
        }
    }

    function setSrc(id, key) {
        const el = document.getElementById(id);
        if (el) el.src = localStorage.getItem(key);
    }

    setTxt('dyn-tel1-text', 'tel1'); setTxt('dyn-tel2-text', 'tel2');
    setTxt('dyn-email-text', 'email'); setTxt('dyn-adres-text', 'adres');
    setTxt('dyn-hero-title', 'heroTitle'); setTxt('dyn-hero-desc', 'heroDesc');
    setTxt('dyn-zir-desc', 'zirDesc'); setTxt('dyn-cam-desc', 'camDesc'); setTxt('dyn-tibar-desc', 'tibarDesc');

    setHtml('dyn-hakkimizda-text', 'hakkimizdaText', true);
    setHtml('dyn-zir-long', 'zirLong', true); setHtml('dyn-cam-long', 'camLong', true); setHtml('dyn-tibar-long', 'tibarLong', true);

    setSrc('dyn-hero-img', 'heroImg'); setSrc('dyn-card-zir-img', 'zirImg'); setSrc('dyn-card-cam-img', 'camImg'); setSrc('dyn-card-tibar-img', 'tibarImg');
    setSrc('dyn-zir-img', 'zirImg'); setSrc('dyn-cam-img', 'camImg'); setSrc('dyn-tibar-img', 'tibarImg'); setSrc('dyn-hak-img', 'heroImg');

    const linkT1 = document.getElementById('dyn-tel1-link'); if(linkT1) linkT1.href = "tel:" + localStorage.getItem('tel1').replace(/\s/g, '');
    const linkT2 = document.getElementById('dyn-tel2-link'); if(linkT2) linkT2.href = "tel:" + localStorage.getItem('tel2').replace(/\s/g, '');
    const linkEm = document.getElementById('dyn-email-link'); if(linkEm) linkEm.href = "mailto:" + localStorage.getItem('email');
    const linkIn = document.getElementById('dyn-insta-link'); if(linkIn) linkIn.href = localStorage.getItem('instagram');
    const linkFb = document.getElementById('dyn-face-link'); if(linkFb) linkFb.href = localStorage.getItem('facebook');
    const linkYt = document.getElementById('dyn-yt-link'); if(linkYt) linkYt.href = localStorage.getItem('youtube');

    const mapEl = document.getElementById('dyn-harita');
    if (mapEl) {
        let cleanUrl = localStorage.getItem('harita');
        if (cleanUrl.includes('src="')) { cleanUrl = cleanUrl.split('src="')[1].split('"')[0]; }
        mapEl.src = cleanUrl;
    }

    const techEl = document.getElementById('dyn-tech-text');
    if (techEl) {
        let txt = localStorage.getItem('techText');
        const targetWords = ["3D tarayıcılar", "CAD/CAM", "dijital", "bilgisayar", "tasarlanır"];
        targetWords.forEach(function(word) {
            txt = txt.split(word).join('<a href="https://ssbilgi.com" target="_blank">' + word + '</a>');
        });
        techEl.innerHTML = txt;
    }
});
