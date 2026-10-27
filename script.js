/**
 * KONFIGURASI WEBSITE UCANPRJK
 * Silakan edit nilai di bawah ini sesuai kebutuhan Anda.
 */
const CONFIG = {
    // Tautan Sosial. Kosongkan string ("") jika tidak ingin ditampilkan.
    socials: {
        github: "https://github.com/ucanprjk09",
        instagram: "https://instagram.com/ucanprjk",
        tiktok: "https://tiktok.com/@ucanprjk",
        telegram: "https://t.me/UCANPRJKHub" // Ganti dengan URL Telegram yang benar
    },
    
    // Tautan Donasi & Komunitas. Jika dikosongkan, menu dan section terkait akan disembunyikan.
    donateUrl: "", 
    communityUrl: "",

    // Daftar Repository GitHub yang ingin ditampilkan dari akun ucanprjk09.
    // Format: { nama_repo: "Kategori" }
    // Kategori yang didukung (untuk filter): "Magisk Module", "Shell Tools", "Android Tweaks", "Other"
    repositories: [
        // Contoh cara mengisi (hapus komentar // di awal baris jika nama repo sudah ada di GitHub Anda):
        // { repo: "nama-repo-magisk", category: "Magisk Module" },
        // { repo: "nama-repo-tweak", category: "Android Tweaks" }
    ],

    // Fallback data jika API GitHub gagal, limit, atau daftar repository di atas masih kosong.
    fallbackProjects: [
        {
            name: "UCANPRJK Module Template",
            tag_name: "v1.0.0",
            published_at: "2026-10-27T10:00:00Z",
            body: "Ini adalah tampilan placeholder karena daftar repository belum dikonfigurasi atau API sedang tidak dapat diakses.",
            category: "Magisk Module",
            html_url: "https://github.com/ucanprjk09",
            download_url: "#"
        }
    ]
};

// SVG Icons (Inline)
const ICONS = {
    github: `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.64 3.95-1.87 5.46-1.2 1.46-2.98 2.45-4.88 2.71-1.92.27-3.95-.06-5.59-1.14-1.57-1.04-2.72-2.7-3.08-4.57-.36-1.89-.03-3.9 1.02-5.5 1.05-1.58 2.68-2.73 4.54-3.13 1.86-.4 3.86-.16 5.54.8v4.22c-1.18-.75-2.72-1.02-4.04-.6-1.3.43-2.31 1.5-2.73 2.79-.43 1.3-.23 2.78.53 3.91.75 1.1 2.1 1.83 3.48 1.9 1.4.08 2.82-.41 3.81-1.38 1-1.02 1.56-2.45 1.57-3.89V.02h-2.38z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.896-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initSetupConfigs();
    fetchReleases();
});

function initUI() {
    // Tahun di Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', menuToggle.classList.contains('active'));
    });

    // Tutup menu saat link diklik (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Intersection Observer untuk Animasi
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Fallback Image Stiker
    const heroImg = document.getElementById('hero-sticker');
    heroImg.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200"><rect width="200" height="200" fill="%232c2c35"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-size="14">Ganti Gambar di</text><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-size="14">assets/images/anime-sticker.png</text></svg>';
    });
}

function initSetupConfigs() {
    // Render Social Icons
    const socialContainer = document.getElementById('social-links-container');
    for (const [platform, url] of Object.entries(CONFIG.socials)) {
        if (url && url.trim() !== "") {
            const a = document.createElement('a');
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.setAttribute('aria-label', `Kunjungi ${platform} UCANPRJK`);
            a.innerHTML = ICONS[platform];
            socialContainer.appendChild(a);
        }
    }

    // Toggle Donate & Community Sections
    if (CONFIG.donateUrl && CONFIG.donateUrl.trim() !== "") {
        document.getElementById('nav-donate-container').classList.remove('hidden');
        const donateSection = document.getElementById('donate');
        donateSection.classList.remove('hidden');
        document.getElementById('donate-btn').href = CONFIG.donateUrl;
    }

    if (CONFIG.communityUrl && CONFIG.communityUrl.trim() !== "") {
        document.getElementById('nav-community-container').classList.remove('hidden');
        const commSection = document.getElementById('community');
        commSection.classList.remove('hidden');
        document.getElementById('community-btn').href = CONFIG.communityUrl;
    }
}

// Fetch GitHub Releases
async function fetchReleases() {
    const grid = document.getElementById('projects-grid');
    const statusMsg = document.getElementById('projects-status');
    const githubUser = 'ucanprjk09';
    let allProjects = [];

    if (CONFIG.repositories.length === 0) {
        statusMsg.style.display = 'none';
        renderProjects(CONFIG.fallbackProjects);
        setupFilters(CONFIG.fallbackProjects);
        return;
    }

    try {
        const promises = CONFIG.repositories.map(async (repoInfo) => {
            const res = await fetch(`https://api.github.com/repos/${githubUser}/${repoInfo.repo}/releases/latest`);
            if (!res.ok) throw new Error(`API error for ${repoInfo.repo}`);
            const data = await res.json();
            return {
                ...data,
                category: repoInfo.category || 'Other'
            };
        });

        const results = await Promise.allSettled(promises);
        
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                allProjects.push(result.value);
            }
        });

        if (allProjects.length === 0) {
            throw new Error("Tidak ada data rilis yang ditemukan atau terkena limit API.");
        }

        statusMsg.style.display = 'none';
        renderProjects(allProjects);
        setupFilters(allProjects);

    } catch (error) {
        console.warn("Fetch gagal, menggunakan fallback data:", error);
        statusMsg.style.display = 'none';
        renderProjects(CONFIG.fallbackProjects);
        setupFilters(CONFIG.fallbackProjects);
    }
}

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach(repo => {
        const date = new Date(repo.published_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        const downloadUrl = repo.assets && repo.assets.length > 0 ? repo.assets[0].browser_download_url : repo.html_url;
        const desc = repo.body ? repo.body.substring(0, 100) + '...' : 'Tidak ada deskripsi.';

        const card = document.createElement('div');
        card.className = 'project-card glass';
        card.dataset.category = repo.category;
        
        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${repo.name || repo.tag_name}</h3>
                <span class="project-version">${repo.tag_name}</span>
            </div>
            <div class="project-meta">
                <span class="project-category">${repo.category}</span>
                <span>${date}</span>
            </div>
            <p class="project-desc">${desc}</p>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">Repository</a>
                <a href="${downloadUrl}" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupFilters(projects) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hapus status active
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            cards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'flex';
                    // Trigger reflow untuk animasi (opsional jika ditambah CSS)
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}