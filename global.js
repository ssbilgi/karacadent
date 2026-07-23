document.addEventListener("DOMContentLoaded", function() {
    // 🍔 Mobil Menü Motoru (Hamburger Buton Aktivasyonu)
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() { navList.classList.toggle('active'); });
    }

    // 🔄 TÜM SİTENİN CANLI VERİ SİSTEMİ VE VARSAYILAN DEĞERLERİ
    const defaults = {
        tel1: "0535 499 82 54", tel2: "0552 245 10 19", email: "info@karacadental.com",
        adres: "Necatibey Caddesi, Kızılay / Ankara",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        youtube: "https://youtube.com",
        harita: "https://ssbilgi.com",
        heroTitle: "Karaca Dental Diş Laboratuvarı",
        heroDesc: "2003 yılından beri diş hekimliğinde en son dijital teknolojileri ve üstün el işçiliğini bir araya getiriyoruz. Güvenilir süreç yönetimi, yüksek malzeme kalitesi ve zamanında teslimat ilkelerimizle klinikleriniz için kusursuz diş protezleri üretiyoruz.",
        heroImg: "images/laboratuvar.jpg",
        
        // Devasa Kurumsal Hakkımızda Makalesi
        hakkimizdaText: "Karaca Dental Diş Laboratuvarı olarak, 2003 yılında Ankara'nın kalbi Kızılay'da başladığımız üretim yolculuğunda, bugün dental sektörün dijital dönüşümüne yön veren öncü bir teknoloji üssü konumundayız. İnsan elinin hassasiyetini en yüksek mühendislik disipliniyle birleştiriyoruz.\n\nGülüş tasarımlarında sıfır hata payı ve mikron düzeyinde hassasiyet elde edebilmek adına, laboratuvar altyapımıza çok büyük sermayeler aktararak dünyanın en saygın dental teknoloji markalarının cihaz parkurlarını bünyemize kattık. En üst düzey 3D optik tarayıcılar, endüstriyel tip çok eksenli (5-Axis) CAD/CAM kazıma cihazları, hassas lazer sinterizasyon üniteleri ve dijital 3D yazıcı teknolojilerimizle kliniklerimizin tüm estetik ve fonksiyonel taleplerini karşılıyoruz.\n\nMilyonlarca liralık AR-GE ve cihaz yatırımlarıyla desteklediğimiz modern üretim tesisimizde; biyo-uyumluluğu en üst seviyede olan sertifikalı bloklar kullanarak Zirkonyum kaplamalar, ultra estetik Cam Seramik (Empress/E.max) restorasyonlar ve implant üstü protezlerde kemik ve diş eti sağlığını maksimum düzeyde koruyan kişiye özel titanyum barlar (Ti-Bar Custom Abutment) üretiyoruz.\n\n20 yılı aşkın köklü tecrübemiz, sürekli eğitimlerle vizyonunu tazeleyen uzman teknisyen kadromuz ve zamanında teslimat hassasiyetimizle dental sektörden gelen talepleri eksiksiz karşılıyoruz.",
        techText: "Laboratuvarımızda tüm üretim süreçleri 3D tarayıcılar ve yüksek hassasiyetli kazıma cihazları (CAD/CAM) ile dijital ortamda başlar. Hekimlerimizden gelen dijital veya geleneksel ölçüler, sıfır hata payıyla bilgisayar ortamında tasarlanır. Kullandığımız Avrupa standartlarındaki sertifikalı bloklar sayesinde, hastalarınız için en sağlıklı ve en uzun ömürlü diş protezlerini mikron düzeyinde hassasiyetle üretiyoruz.",
        
        // 6 Temel Hizmet Kısa Özetleri
        zirDesc: "Yüksek biyo-uyumluluk ve doğal ışık geçirgenliği sunan zirkonyum restorasyonlarımızla estetik beklentileri en üst düzeyde karşılıyoruz.",
        camDesc: "Özellikle ön bölge estetiğinde kusursuz renk geçişleri sağlayan, dayanıklı ve tam seramik (Empress/E.max) altyapı çözümleri.",
        tibarDesc: "İmplant üstü protezlerde kişiye özel üretilen titanyum barlar ve dayanaklar sayesinde mükemmel diş eti uyumu ve uzun ömür.",
        lamDesc: "Minimum diş preparasyonu ile maksimum estetik sağlayan, ön grup estetik gülüş tasarımlarının vazgeçilmezi porselen yapraklar.",
        hibDesc: "Çoklu implant eksikliklerinde kemik kaybını tolere eden, hem estetik hem de yüksek çiğneme kuvvetine dayanıklı hibrit sistemler.",
        porDesc: "Geleneksel metal destekli altyapıların modern laboratuvar işçiliğiyle birleştiği, yüksek dayanımlı kuron ve köprü restorasyonları.",

        // Devasa Uzunluktaki Hizmet Detay Makaleleri (İlk 3 Hizmet)
        zirLong: "Karaca Dental bünyesinde en gelişmiş sanayi tipi CAD/CAM cihazları kullanılarak üretilen zirkonyum kaplamalar, modern estetik diş hekimliğinin en güvenilir ve en prestijli çözümlerinden biridir. Metal altyapı barındırmayan bu özel biyo-uyumlu materyal, geleneksel porselenlerde yaşanan diş eti kenarındaki gri-mor koyu renkli çizgilerin oluşmasını tamamen engeller.\n\nLaboratuvarımızda mikron düzeyinde işlenen yüksek yarı geçirgen monolitik ve çok katmanlı (multilayer) zirkonyum bloklar, doğal insan dişinin ışık geçirme ve yansıtma özelliklerini birebir taklit eder. 1200 MPa'ı aşan ekstrem kırılma direnci sayesinde sadece ön bölge estetiğinde değil, en yüksek çiğneme basıncına maruz kalan arka bölge azı dişlerinde ve çok üyeli uzun köprü restorasyonlarında da güvenle tercih edilebilir. Isı yalıtım yeteneği mükemmel olduğu için hastalarda sıcak-soğuk hassasiyeti yaratmaz, doku dostudur ve alerjik reaksiyon riskini sıfıra indirir.",
        
        camLong: "Cam seramik (Empress / IPS e.max) restorasyonlar, özellikle ön bölge estetiğinde ve Gülüş Tasarımı (Smile Design) uygulamalarında diş hekimliğinin ulaştığı en üst düzey sanatsal noktadır. Bu materyal, laboratuvarımızda bilgisayar kontrollü hassas kazıma sistemleri veya yüksek basınçlı fırınlar kullanılarak işlenir.\n\nİçeriğindeki lityum disilikat kristalleri sayesinde cam seramikler, doğal diş minesinin floresan özelliğini, şeffaflık efektlerini ve derinlik algısını %100 oranında yakalayabilen tek malzemedir. Hekimlerimiz tarafından laminate veneer (yaprak porselen), tam kuronlar veya estetik dolgular (inley/onley) olarak planlanan bu restorasyonlar, Karaca Dental'in uzman seramistlerinin hassas fırınlama ve sanatsal renklendirme (glaze) süreçlerinden geçer. Diş etiyle kusursuz mekanik ve kimyasal bağlantı kurarak, sızdırmazlık sağlar ve ikincil çürük riskini tamamen ortadan kaldırır.",
        
        tibarLong: "İmplant üstü protez mühendisliğinde Karaca Dental, standart hazır parçaları tamamen reddederek hastanın kendi diş eti anatomisine ve kemik yapısına %100 uyum sağlayan kişiye özel (Custom) titanyum dayanaklar (Abutment) ve titanyum barlar (Ti-Bar) üretmektedir. Bu üretimler tamamen dijital tarama ve mikron düzeyinde hassas endüstriyel frezeleme teknolojisiyle gerçekleştirilir.\n\nKişiye özel tasarlanan custom abutmentlar, hazır parçaların aksine diş etinin doğal çıkış profilini taklit eder; bu sayede protez ile diş eti arasında yemek artıklarının birikmesini engeller ve peri-implantitis (implant çevresi doku iltihabı) riskini kalıcı olarak ortadan kaldırır. Çoklu implant eksikliklerinde kullanılan Ti-Bar sistemleri ise, çiğneme esnasında gelen dikey ve yatay yükleri implantlar arasında eşit olarak dağıtan mükemmel bir taşıyıcı iskelet görevi üstlenir. Bu sayede implant vidalarının kırılması veya gevşemesi engellenerek protezin kullanım ömrü maksimuma ulaştırılır."
    };

    // Temel hafıza kontrolü
    Object.keys(defaults).forEach(function(k) { if (!localStorage.getItem(k)) localStorage.setItem(k, defaults[k]); });
    // 🔄 GERİ KALAN 3 BÜYÜK HİZMETİN DEVA_SA MAKALE İÇERİKLERİ
    const extraDefaults = {
        lamLong: "Porselen Laminate Veneer restorasyonlar, minimum invaziv (diş dokusuna en az müdahale) felsefesinin dental teknolojideki en şık karşılığıdır. Genellikle dişlerin ön yüzeylerinden yalnızca 0.3 - 0.5 mm gibi ultra ince bir doku kaldırılmasıyla, hatta bazı vakalarda hiç aşındırma yapılmadan (No-Prep) doğrudan diş yüzeyine uygulanan yaprak porselenlerdir.\n\nKaraca Dental laboratuvar ortamında mikron hassasiyetindeki CAD/CAM frezeleme ve presleme teknolojileriyle üretilen bu yapraklar, kontakt lens inceliğinde olmalarına rağmen diş yüzeyine özel rezin yapıştırıcılarla bağlandıklarında dişin kendi emayesinden daha高い bir kopma direnci kazanırlar. Kahve, çay veya sigara gibi dış etkenlerle asla renk değiştirmezler. Ön bölgedeki aralıklı dişlerin (diastema) kapatılmasında, çapraşıklıkların düzeltilmesinde ve kalıcı renk bozukluklarının giderilmesinde hekimlerimize kusursuz bir estetik silah sunuyoruz.",
        
        hibLong: "İleri derecede kemik erimesi ve çoklu diş eksikliği yaşayan hastalar için All-on-4 ve All-on-6 cerrahi konseptleri doğrultusunda tasarlanan hibrit ve akrilik protezler, hem sabit protez konforunu hem de hareketli protezlerin doku destek yeteneğini tek yapıda sunar. Bu sistemlerin altyapısı laboratuvarımızda titanyum barlar (Ti-Bar) veya kobalt-krom alaşımlarla üretilir.\n\nÜst yapı ise dikey boyutunu ve kaybolan dudak-yanak dolgunluğunu en doğal şekilde restore edebilmek adına, yüksek darbe dayanımlı özel dental akrilikler ve estetik kompozit/porselen dişlerin kombinasyonuyla şekillendirilir. Çiğneme biyomekaniği bilgisayar yazılımlarıyla simüle edilerek tasarlanır. Hibrit protezlerimiz, hastanın konuşma, çiğneme ve estetik fonksiyonlarını anında geri kazandırır. Temizlenebilir hijyenik gövde tasarımları sayesinde uzun yıllar boyunca implant sağlığını tehdit etmeden güvenle ağızda kalır.",
        
        porLong: "Metal destekli porselen restorasyonlar, yüksek çiğneme basıncına maruz kalan uzun üyeli köprü çalışmalarında dayanıklılığı ve ekonomik yapısıyla diş hekimliğinin vazgeçilmez temel taşı olmaya devam etmektedir. Karaca Dental olarak bu geleneksel yöntemi modern dijital teknolojiyle yeniden yorumlayarak standartları yükseltiyoruz.\n\nPorselenin altındaki metal altyapıyı döküm yöntemiyle değil, en son teknoloji endüstriyel lazer sinterizasyon (3D Lazer Metal Yazıcı) ünitelerimizle mikron düzeyinde sıfır hata payıyla üretiyoruz. Bu sayede metalin diş güdüğüne olan maruziyeti ve mekanik uyumu kusursuz hale gelir, hekimin koltuk başı uyumlama süresi kısalır. Metal yüzey üzerine fırınlanan yüksek kaliteli Avrupa menşeili dental porselen katmanları, uzman teknisyenlerimizin morfolojik el işçiliğiyle birleşerek yüksek fonksiyonel mukavemet ve optimum estetik uyumu bir arada sunar.",

        // Resim ve Video Sabit Değerleri
        zirImg1: "images/zirkonyum1.jpg", zirImg2: "images/zirkonyum2.jpg",
        camImg1: "images/cam1.jpg", camImg2: "images/cam2.jpg",
        tibarImg1: "images/tibar1.jpg", tibarImg2: "images/tibar2.jpg",
        lamImg1: "images/lamine1.jpg", lamImg2: "images/lamine2.jpg",
        hibImg1: "images/hibrit1.jpg", hibImg2: "images/hibrit2.jpg",
        porImg1: "images/porselen1.jpg", porImg2: "images/porselen2.jpg"
    };

    Object.keys(extraDefaults).forEach(function(k) { if (!localStorage.getItem(k)) localStorage.setItem(k, extraDefaults[k]); });

    // Elementleri Dolduran Dinamik Dağıtım Fonksiyonları
    function setTxt(id, k) { const el = document.getElementById(id); if (el) el.innerText = localStorage.getItem(k); }
    function setHtml(id, k, br = false) { const el = document.getElementById(id); if (el) { let v = localStorage.getItem(k); if (br) v = v.replace(/\n/g, '<br>'); el.innerHTML = v; } }
    function setSrc(id, k) { const el = document.getElementById(id); if (el) el.src = localStorage.getItem(k); }

    // Tüm Sitedeki Ortak Alanları Güncelleme (Yönetim Panelinden Veri Değiştiğinde Tetiklenir)
    if (localStorage.getItem('karaca_panel_degisti') === 'evet') {
        setTxt('dyn-tel1-text', 'tel1'); setTxt('dyn-tel2-text', 'tel2'); setTxt('dyn-email-text', 'email'); setTxt('dyn-adres-text', 'adres');
        setTxt('dyn-hero-title', 'heroTitle'); setTxt('dyn-hero-desc', 'heroDesc');
        setTxt('dyn-zir-desc', 'zirDesc'); setTxt('dyn-cam-desc', 'camDesc'); setTxt('dyn-tibar-desc', 'tibarDesc');
        setTxt('dyn-lam-desc', 'lamDesc'); setTxt('dyn-hib-desc', 'hibDesc'); setTxt('dyn-por-desc', 'porDesc');
        
        setHtml('dyn-hakkimizda-text', 'hakkimizdaText', true); 
        setHtml('dyn-zir-long', 'zirLong', true); setHtml('dyn-cam-long', 'camLong', true); setHtml('dyn-tibar-long', 'tibarLong', true);
        setHtml('dyn-lam-long', 'lamLong', true); setHtml('dyn-hib-long', 'hibLong', true); setHtml('dyn-por-long', 'porLong', true);

        const l1 = document.getElementById('dyn-tel1-link'); if(l1) l1.href = "tel:" + localStorage.getItem('tel1').replace(/\s/g, '');
        const l2 = document.getElementById('dyn-tel2-link'); if(l2) l2.href = "tel:" + localStorage.getItem('tel2').replace(/\s/g, '');
        const le = document.getElementById('dyn-email-link'); if(le) le.href = "mailto:" + localStorage.getItem('email');
    }
    
    // Resim Dosya Yollarını Sabit Olarak Dağıt (Yarım Kalmayı ve Tarayıcı Kilitlenmesini Önler)
    setSrc('dyn-hero-img', 'heroImg'); setSrc('dyn-hak-img', 'heroImg');
    setSrc('dyn-card-zir-img', 'zirImg1'); setSrc('dyn-card-cam-img', 'camImg1'); setSrc('dyn-card-tibar-img', 'tibarImg1');
    setSrc('dyn-card-lam-img', 'lamImg1'); setSrc('dyn-card-hib-img', 'hibImg1'); setSrc('dyn-card-por-img', 'porImg1');
    
    setSrc('dyn-zir-img1', 'zirImg1'); setSrc('dyn-zir-img2', 'zirImg2');
    setSrc('dyn-cam-img1', 'camImg1'); setSrc('dyn-cam-img2', 'camImg2');
    setSrc('dyn-tibar-img1', 'tibarImg1'); setSrc('dyn-tibar-img2', 'tibarImg2');
    setSrc('dyn-lam-img1', 'lamImg1'); setSrc('dyn-lam-img2', 'lamImg2');
    setSrc('dyn-hib-img1', 'hibImg1'); setSrc('dyn-hib-img2', 'hibImg2');
    setSrc('dyn-por-img1', 'porImg1'); setSrc('dyn-por-img2', 'porImg2');

    // 🗺️ Harita Filtreleme ve Güvenli Yükleme Motoru (İndeksli Kesin Çözüm)
    const mapEl = document.getElementById('dyn-harita');
    if (mapEl) {
        let url = localStorage.getItem('harita');
        if (url && url.includes('src="')) {
            let parts = url.split('src="');
            if (parts[1]) {
                url = parts[1].split('"')[0];
            }
        }
        if (url) mapEl.src = url;
    }

    // 🚀 Ana Sayfa Akıllı Kelime Linkleyici
    const techEl = document.getElementById('dyn-tech-text');
    if (techEl) {
        let t = localStorage.getItem('techText');
        const targetWords = ["3D tarayıcılar", "CAD/CAM", "dijital", "bilgisayar", "tasarlanır"];
        targetWords.forEach(function(w) {
            t = t.split(w).join('<a href="https://ssbilgi.com" target="_blank">' + w + '</a>');
        });
        techEl.innerHTML = t;
    }
});
/* <!-- GLOBAL JS SONU --> */
