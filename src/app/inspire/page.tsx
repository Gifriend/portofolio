'use client';

import { useEffect, useState } from 'react';

const APK_URL = 'https://github.com/Gifriend/inspire/releases/download/latest/app-release.apk';

type DownloadState = 'idle' | 'started' | 'error';

export default function InspireDownloadPage() {
  const [downloadState, setDownloadState] = useState<DownloadState>('idle');

  useEffect(() => {
    if (!APK_URL) {
      setDownloadState('error');
      return;
    }

    const timer = window.setTimeout(() => {
      setDownloadState('started');
      window.location.href = APK_URL;
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  const onDownloadClick = () => {
    if (!APK_URL) {
      setDownloadState('error');
      return;
    }

    setDownloadState('started');
    window.location.href = APK_URL;
  };

  const buttonText = {
    idle: 'Mulai Unduh',
    started: 'Unduhan Sedang Berlangsung ...',
    error: 'Link tidak tersedia',
  }[downloadState];

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'linear-gradient(115deg, var(--secondary), var(--muted-bg))', padding: '1.5rem' }}>
      <section style={{ width: '100%', maxWidth: '560px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', boxShadow: '0 16px 40px rgba(0,0,0,0.16)', color: 'var(--foreground)', padding: '1.6rem 1.8rem', textAlign: 'center' }}>
        <h1 style={{ margin: '0', fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', letterSpacing: '0.7px', fontWeight: 700 }}>Download Aplikasi Inspire</h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', margin: '1rem 0 1.25rem', lineHeight: 1.5 }}>
          Halaman ini akan otomatis mengarahkan Anda ke file APK dalam beberapa saat. Jika tidak terjadi, gunakan tombol di bawah.
        </p>

        <button
          type="button"
          onClick={onDownloadClick}
          disabled={downloadState === 'error' || downloadState === 'started'}
          style={{
            border: 'none',
            borderRadius: '10px',
            padding: '0.95rem 1.25rem',
            fontWeight: 700,
            cursor: downloadState === 'error' ? 'not-allowed' : 'pointer',
            background: downloadState === 'error' ? 'var(--muted)' : 'var(--foreground)',
            color: 'var(--background)',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            width: '100%',
            marginBottom: '0.9rem',
            opacity: downloadState === 'started' ? 0.85 : 1,
          }}
          onMouseDown={(e) => { if (downloadState !== 'error') e.currentTarget.style.transform = 'scale(0.98)'; }}
          onMouseUp={(e) => { if (downloadState !== 'error') e.currentTarget.style.transform = 'scale(1)'; }}
        >
          {buttonText}
        </button>

        <div style={{ marginTop: '1rem', background: 'var(--muted-bg)', borderRadius: '10px', padding: '0.8rem', color: 'var(--muted)' }}>
          <strong>Catatan:</strong> Jika unduhan tidak segera dimulai, pastikan pop-up tidak diblokir dan Anda menggunakan perangkat yang mendukung file APK.
        </div>
      </section>
    </main>
  );
}
