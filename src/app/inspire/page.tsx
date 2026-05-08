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
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'var(--background)', padding: '1.5rem' }}>
      <section style={{
        width: '100%',
        maxWidth: '560px',
        background: 'var(--card-bg)',
        border: '3px solid var(--border)',
        boxShadow: '6px 6px 0px var(--shadow-color)',
        color: 'var(--foreground)',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <h1 style={{ margin: '0', fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', letterSpacing: '0.7px', fontWeight: 900, textTransform: 'uppercase' }}>Download Aplikasi Inspire</h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', margin: '1rem 0 1.25rem', lineHeight: 1.5, fontWeight: 500 }}>
          Halaman ini akan otomatis mengarahkan Anda ke file APK dalam beberapa saat. Jika tidak terjadi, gunakan tombol di bawah.
        </p>

        <button
          type="button"
          onClick={onDownloadClick}
          disabled={downloadState === 'error' || downloadState === 'started'}
          style={{
            border: '3px solid var(--border)',
            padding: '0.95rem 1.25rem',
            fontWeight: 900,
            cursor: downloadState === 'error' ? 'not-allowed' : 'pointer',
            background: downloadState === 'error' ? 'var(--muted)' : 'var(--accent)',
            color: 'var(--foreground)',
            boxShadow: '4px 4px 0px var(--shadow-color)',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            width: '100%',
            marginBottom: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={(e) => {
            if (downloadState !== 'error') {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0px var(--shadow-color)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)';
            e.currentTarget.style.boxShadow = '4px 4px 0px var(--shadow-color)';
          }}
          onMouseDown={(e) => {
            if (downloadState !== 'error') {
              e.currentTarget.style.transform = 'translate(4px, 4px)';
              e.currentTarget.style.boxShadow = '0px 0px 0px var(--shadow-color)';
            }
          }}
          onMouseUp={(e) => {
            if (downloadState !== 'error') {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '6px 6px 0px var(--shadow-color)';
            }
          }}
        >
          {buttonText}
        </button>

        <div style={{
          marginTop: '1rem',
          background: 'var(--accent)',
          border: '3px solid var(--border)',
          boxShadow: '3px 3px 0px var(--shadow-color)',
          padding: '0.8rem',
          color: 'var(--foreground)',
          fontWeight: 600,
        }}>
          <strong>Catatan:</strong> Jika unduhan tidak segera dimulai, pastikan pop-up tidak diblokir dan Anda menggunakan perangkat yang mendukung file APK.
        </div>
      </section>
    </main>
  );
}
