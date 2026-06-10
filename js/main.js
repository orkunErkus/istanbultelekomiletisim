// === SERVICE MODAL DATA ===
const serviceData = {
    sonlandirma: {
        title: 'Fiber Kablo Sonlandırma',
        img: 'https://istanbultelekomiletisim.com/wp-content/uploads/2025/04/WhatsApp-Gorsel-2025-04-18-saat-19.30.40_8bb2f0c4.jpg',
        subtitle: 'Fiber optik kabloların profesyonel ekipmanlarla sonlandırılması ve uçlandırma işlemleri.',
        sections: [
            {
                heading: 'Sonlandırma Yöntemleri',
                content: 'Fiber kablo sonlandırma genellikle iki yöntemle yapılır:',
                steps: [
                    { title: 'Füzyon Ek (Fusion Splicing)', text: 'İki fiber kablonun ısıtılarak birleştirilmesiyle yapılan en güvenilir ve düşük kayıplı yöntemdir.' },
                    { title: 'Mekanik Ek (Mechanical Splicing)', text: 'Fiber uçlarının hassas bir hizalama kiti ile birleştirilmesiyle yapılır. Hızlı ve pratiktir.' }
                ]
            },
            {
                heading: 'Sonlandırma Süreci',
                steps: [
                    { title: 'Kablonun Hazırlanması', text: 'Kablo dış kılıfı fiber soyma penseleri ile çıkarılır, tampon tüpler açılır ve fiber teller ortaya çıkarılır.' },
                    { title: 'Fiber Uçlarının Temizlenmesi', text: 'Fiber uçları alkol ve özel temizleme bezleri ile temizlenir, fiber kesici ile düzgün kesilir.' },
                    { title: 'Sonlandırma İşlemi', text: 'Füzyon ek cihazı ile ark kaynağı yapılır veya mekanik ek konektörleri ile birleştirilir.' },
                    { title: 'Bağlantı Testi', text: 'OTDR ve güç ölçer cihazlarla sinyal gücü ve kayıp oranları ölçülerek doğrulama yapılır.' }
                ]
            }
        ],
        highlights: ['Daha düşük kayıplı ve yüksek performanslı ağlar', 'Kesintisiz veri iletimi için güvenilir bağlantılar', 'Uzun ömürlü ve dayanıklı altyapı çözümleri'],
        cities: 'İstanbul, Tekirdağ ve Edirne'
    },

    doseme: {
        title: 'Fiber Kablo Döşeme',
        img: 'https://istanbultelekomiletisim.com/wp-content/uploads/2025/04/ChatGPT-Image-18-Nis-2025-22_23_14.png',
        subtitle: 'Bina içi ve dışı fiber optik kablo çekimi, altyapı hazırlama ve montaj hizmetleri.',
        sections: [
            {
                heading: 'Planlama ve Altyapı Analizi',
                steps: [
                    { title: 'Saha Keşfi', text: 'Kablonun döşeneceği bölgenin keşfi ve analiz edilmesi.' },
                    { title: 'Güzergah Belirleme', text: 'Mevcut altyapının incelenmesi ve uygun güzergahın belirlenmesi.' },
                    { title: 'İzin Süreçleri', text: 'Gerekli izinlerin alınması ve proje planlaması.' }
                ]
            },
            {
                heading: 'Kazı ve Kanallama',
                content: 'Açık kazı veya mikro tünel yöntemiyle kablo döşenecek hatlar hazırlanır. Kazı derinliği ve genişliği belirlenerek altyapı korunur.'
            },
            {
                heading: 'Borulama ve Kablo Çekme',
                steps: [
                    { title: 'HDPE Boru Döşeme', text: 'HDPE boruların döşenmesi ve bağlantılarının yapılması.' },
                    { title: 'Kablo Çekme', text: 'Fiber optik kabloların borular içinden geçirilmesi ve korunması.' }
                ]
            },
            {
                heading: 'Ek, Bağlantı ve Test',
                steps: [
                    { title: 'Fiber Eklemeleri', text: 'Kablo ekleme işlemlerinin özel ek odalarında yapılması.' },
                    { title: 'Test ve Devreye Alma', text: 'OTDR cihazı ile ölçüm ve testler yapılır, bağlantı aktif hale getirilir.' }
                ]
            }
        ],
        highlights: ['Yüksek hızlı internet altyapısı için temel çözüm', 'Profesyonel ekipman ve deneyimli ekip', 'İstanbul, Tekirdağ ve Edirne genelinde hizmet'],
        cities: 'İstanbul, Tekirdağ ve Edirne'
    },

    tamir: {
        title: 'Fiber Kablo Tamiri',
        img: 'https://istanbultelekomiletisim.com/wp-content/uploads/2025/04/WhatsApp-Gorsel-2025-04-18-saat-19.30.40_c6ee5b1f.jpg',
        subtitle: 'Kırılan, kopan veya hasar gören fiber hatların kaynak işlemiyle profesyonel onarımı.',
        sections: [
            {
                heading: 'Arıza Tespiti',
                steps: [
                    { title: 'OTDR Testi', text: 'Kablo içindeki sinyal kaybını ve kırılma noktalarını belirlemek için kullanılır.' },
                    { title: 'Güç Ölçer Testi', text: 'Sinyal gücünün düştüğü veya kesildiği noktalar tespit edilir.' },
                    { title: 'Fiziksel İnceleme', text: 'Kablo güzergahı boyunca dışsal hasar, kopma veya bükülme kontrol edilir.' }
                ]
            },
            {
                heading: 'Tamir Süreci',
                steps: [
                    { title: 'Hasarlı Bölgenin Kesilmesi', text: 'Kırılan veya sinyal kaybı yaşanan bölge fiber kesici ile düzgün kesilir.' },
                    { title: 'Fiber Uçlarının Hazırlanması', text: 'Kablo kılıfı soyulur, çekirdek temizlenir ve uçlar hassas şekilde düzeltilir.' },
                    { title: 'Füzyon Ek ile Tamir', text: 'Fiber uçları ark kaynağı ile birleştirilir, koruyucu kılıf ile sabitlenir.' }
                ]
            }
        ],
        highlights: ['7/24 acil müdahale desteği', 'Gelişmiş OTDR ve ölçüm cihazları', 'Garantili ve güvenilir onarım hizmeti'],
        cities: 'İstanbul, Tekirdağ ve Edirne'
    },

    kablolama: {
        title: 'Network Kablolama',
        img: 'https://istanbultelekomiletisim.com/wp-content/uploads/2025/04/ChatGPT-Image-18-Nis-2025-22_36_01.png',
        subtitle: 'Kurumsal ve bireysel network altyapısı için yapısal kablolama ve patch panel çözümleri.',
        sections: [
            {
                heading: 'Network Kablolama Türleri',
                steps: [
                    { title: 'Bakır Kablolar (Ethernet)', text: 'Cat5e (1 Gbps), Cat6 (10 Gbps), Cat6a & Cat7 seçenekleri ile yüksek performans.' },
                    { title: 'Fiber Optik Kablolar', text: 'Single Mode (uzun mesafe) ve Multi Mode (kısa mesafe, yüksek hız) çözümler.' }
                ]
            },
            {
                heading: 'Kablolama Süreci',
                steps: [
                    { title: 'Planlama ve Projelendirme', text: 'Alan keşfi, kablo türü seçimi, cihaz yerleşim planı.' },
                    { title: 'Kablo Çekme ve Döşeme', text: 'Kabloların uygun güzergahlardan geçirilmesi, etiketlenmesi.' },
                    { title: 'RJ45 Konnektör Sonlandırma', text: 'T568A/T568B standardına göre sıralama ve krimp işlemi.' },
                    { title: 'Patch Panel ve Switch Bağlantıları', text: 'Kabloların patch panele takılması ve switch/router bağlantısı.' },
                    { title: 'Test ve Devreye Alma', text: 'Kablo test cihazları ve OTDR ile bağlantı kontrolü.' }
                ]
            }
        ],
        highlights: ['En az Cat6 veya fiber altyapı önerisi', 'Elektromanyetik girişimden koruma', 'Düzenli bakım ve destek hizmeti'],
        cities: 'İstanbul, Tekirdağ ve Edirne'
    },

    network: {
        title: 'Network Kurulumu',
        img: 'https://istanbultelekomiletisim.com/wp-content/uploads/2025/04/ChatGPT-Image-18-Nis-2025-22_47_00.png',
        subtitle: 'Switch, router ve ağ cihazlarının kurulumu, konfigürasyonu ve test edilmesi.',
        sections: [
            {
                heading: 'Network Türünün Belirlenmesi',
                content: 'İhtiyaca göre en uygun ağ yapısı belirlenir:',
                steps: [
                    { title: 'LAN (Yerel Alan Ağı)', text: 'Küçük ofisler ve ev ağları için ideal.' },
                    { title: 'WLAN (Kablosuz LAN)', text: 'Wi-Fi bağlantısı ile kablosuz cihazları kapsar.' },
                    { title: 'WAN (Geniş Alan Ağı)', text: 'Büyük işletmeler ve veri merkezleri için.' },
                    { title: 'VPN (Sanal Özel Ağ)', text: 'Güvenli uzaktan erişim çözümü.' }
                ]
            },
            {
                heading: 'Kurulum ve Konfigürasyon',
                steps: [
                    { title: 'Cihaz Seçimi ve Montaj', text: 'Modem, router, switch, access point seçimi ve yerleşimi.' },
                    { title: 'Kablo Bağlantıları', text: 'Ethernet kabloları ile switch ve router bağlantısı.' },
                    { title: 'Kablosuz Ağ Ayarları', text: 'SSID ve şifre belirleme, 2.4 GHz & 5 GHz ayarı.' },
                    { title: 'Güvenlik Yapılandırması', text: 'Firewall, WPA2/WPA3 şifreleme, misafir ağı kurulumu.' }
                ]
            }
        ],
        highlights: ['Profesyonel ağ konfigürasyonu', 'Güvenlik duvarı ve VPN desteği', '7/24 teknik destek'],
        cities: 'İstanbul, Tekirdağ ve Edirne'
    },

    internet: {
        title: 'İnternet Bağlama',
        img: 'https://istanbultelekomiletisim.com/wp-content/uploads/2025/04/WhatsApp-Gorsel-2025-04-18-saat-19.30.40_70785ca2.jpg',
        subtitle: 'Fiber, ADSL, VDSL internet bağlantı kurulumu, aktivasyonu ve hız testi hizmetleri.',
        sections: [
            {
                heading: 'Altyapı Sorgulama ve Başvuru',
                steps: [
                    { title: 'Altyapı Kontrolü', text: 'Adresinizde fiber internet hizmeti olup olmadığı kontrol edilir.' },
                    { title: 'Başvuru İşlemi', text: 'Hız paketi seçilir, abonelik sözleşmesi imzalanır.' }
                ]
            },
            {
                heading: 'Kablo Çekme ve Kurulum',
                steps: [
                    { title: 'Dış Altyapıdan Eve Çekim', text: 'FTTB veya FTTH yöntemiyle fiber kablo çekimi.' },
                    { title: 'ONT ve Modem Bağlantısı', text: 'Fiber kablonun ONT cihazına bağlanması.' },
                    { title: 'Wi-Fi Ayarları', text: 'SSID ve şifre belirleme, 2.4/5 GHz bant ayarları.' },
                    { title: 'Hız Testi ve Aktivasyon', text: 'Speedtest ile hız kontrolü ve servis aktivasyonu.' }
                ]
            }
        ],
        highlights: ['Hızlı aktivasyon süreci', 'Ücretsiz kurulum desteği', '7/24 müşteri desteği'],
        cities: 'İstanbul, Tekirdağ ve Edirne'
    }
};

// === MODAL ===
const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    let html = '';

    if (data.img) {
        html += `<img class="modal-img" src="${data.img}" alt="${data.title}" loading="lazy">`;
    }

    html += `<h2>${data.title}</h2>`;
    if (data.subtitle) {
        html += `<p class="modal-subtitle">${data.subtitle}</p>`;
    }

    data.sections.forEach((section, si) => {
        html += `<h3><i class="fas fa-arrow-right"></i> ${section.heading}</h3>`;
        if (section.content) {
            html += `<p>${section.content}</p>`;
        }
        if (section.steps) {
            html += `<div class="modal-steps">`;
            section.steps.forEach(step => {
                html += `<div class="modal-step">
                    <div class="modal-step-num">${si + 1}.${section.steps.indexOf(step) + 1}</div>
                    <div><strong>${step.title}</strong><p>${step.text}</p></div>
                </div>`;
            });
            html += `</div>`;
        }
    });

    if (data.highlights && data.highlights.length) {
        html += `<div class="modal-tip"><i class="fas fa-star"></i><div>`;
        data.highlights.forEach(h => {
            html += `<span class="modal-badge">${h}</span> `;
        });
        html += `</div></div>`;
    }

    if (data.cities) {
        html += `<p style="margin-top: 16px;"><i class="fas fa-map-marker-alt" style="color: var(--primary-light);"></i> Hizmet Bölgeleri: <strong>${data.cities}</strong></p>`;
    }

    html += `<div class="modal-cta">
        <a href="#contact" class="btn btn-primary" onclick="closeModal()"><i class="fas fa-envelope"></i> Hemen İletişime Geç</a>
        <a href="tel:05332380457" class="btn btn-secondary"><i class="fas fa-phone-alt"></i> 0533 238 04 57</a>
    </div>`;

    modalBody.innerHTML = html;
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});

modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// === MOBILE MENU ===
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// === HEADER SCROLL ===
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    header.style.background = scrollY > 100 ? 'rgba(10,14,26,0.95)' : 'rgba(10,14,26,0.85)';

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;
        const link = nav.querySelector(`a[href="#${section.id}"]`);
        if (link) {
            if (scrollY >= top && scrollY <= bottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// === COUNTER ANIMATION ===
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 1500;
    const start = performance.now();

    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = Math.floor(progress * target) + '+';
        if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

// === FAQ ACCORDION ===
document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
    });
});

// === CONTACT FORM ===
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
        btn.disabled = true;

        setTimeout(() => {
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
        }, 1200);
    });
}

// === NEWSLETTER ===
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = newsletterForm.querySelector('button');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;

        setTimeout(() => {
            newsletterForm.querySelector('input').value = '';
            btn.innerHTML = 'Abone Olundu <i class="fas fa-check"></i>';
            setTimeout(() => { btn.innerHTML = 'Abone Ol'; btn.disabled = false; }, 2000);
        }, 1000);
    });
}

// === SCROLL REVEAL ===
const revealEls = document.querySelectorAll(
    '.service-card, .advantage-item, .detail-card, .area-card, .timeline-item, .contact-card'
);

const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObs.observe(el);
});

// Staggered delays
document.querySelectorAll('.service-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
});
