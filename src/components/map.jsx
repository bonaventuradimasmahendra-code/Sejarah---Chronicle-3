import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// ============================================================================
// 1. DATA 3 BENDA BERJALAN BERDAMPINGAN (HANYA NAMA KOTA & CAPTION TAHUN)
// ============================================================================
const ARTIFACT_TRACKS = [
  {
    key: 'keris',
    title: 'Keris Pusaka',
    color: '#f43f5e', // Merah Rose
    dashed: false,
    curvature: 0.14,
    labelOffset: -28,
    steps: [
      {
        city: 'Parakan, Temanggung',
        coords: [-7.2833, 110.1000],
        year: '842 M & 907 M - Prasasti Karangtengah & Rukam (Era Mataram Kuno)',
      },
      {
        city: 'Borobudur, Magelang',
        coords: [-7.6079, 110.2038],
        year: 'Abad ke-9 M & 875 M - Relief Candi Borobudur & Artefak Stupa',
      },
      {
        city: 'Kediri',
        coords: [-7.8480, 112.0178],
        year: 'Abad ke-11 - ke-13 M - Era Kadiri (Tangguh Budha / Keris Betok)',
      },
      {
        city: 'Singosari, Malang',
        coords: [-7.8925, 112.6658],
        year: 'Abad ke-11 - ke-13 M - Era Singasari',
      },
      {
        city: 'Trowulan, Mojokerto',
        coords: [-7.5583, 112.3811],
        year: 'Abad ke-14 - ke-15 M - Masa Keemasan Majapahit',
      },
      {
        city: 'Demak',
        coords: [-6.8948, 110.6383],
        year: 'Abad ke-16 - ke-18 M - Era Demak, Pajang, hingga Mataram Islam',
      },
      {
        city: 'Madiun',
        coords: [-7.6298, 111.5239],
        year: 'Akhir Abad ke-16 - Munculnya Tangguh Madiun',
      },
      {
        city: 'Surakarta',
        coords: [-7.5755, 110.8243],
        year: 'Akhir Abad ke-17 - Awal Abad ke-18 - Diwariskan Lintas Generasi',
      },
    ],
  },
  {
    key: 'josua',
    title: 'Toyota Kijang LGX',
    color: '#38bdf8', // Biru Cyan
    dashed: true,
    curvature: 0.22,
    labelOffset: -46,
    steps: [
      {
        city: 'Jakarta (Sunter & Karawang)',
        coords: [-6.2088, 106.8456],
        year: '1997 - 2003 - Era Kelahiran LGX, Facelift EFI (2000) & Facelift Kedua (2002-2003)',
      },
      {
        city: 'Surakarta',
        coords: [-7.5755, 110.8243],
        year: '8 April 2003 & 2004 - Pembelian Keluarga & Akhir Produksi LGX',
      },
    ],
  },
  {
    key: 'octa',
    title: 'Koin Rp100 Emisi 1978',
    color: '#10b981', // Hijau Zamrud
    dashed: false,
    curvature: -0.18,
    labelOffset: 16,
    steps: [
      {
        city: 'Jakarta',
        coords: [-6.2088, 106.8456],
        year: 'Tahun 1970-an & 1978 - Perencanaan Kebijakan & Tahun Emisi Produksi',
      },
      {
        city: 'Semarang',
        coords: [-6.9667, 110.4167],
        year: 'Periode 1978 - 1990-an - Masa Peredaran Aktif & Penarikan Bertahap',
      },
      {
        city: 'Jogobayan, Surakarta',
        coords: [-7.5586, 110.8195],
        year: '1980-an - Diterima & Disimpan oleh Leluhur',
      },
      {
        city: 'Setabelan, Surakarta',
        coords: [-7.5542, 110.8258],
        year: 'Saat Ini - Warisan Peninggalan Leluhur Lintas Generasi',
      },
    ],
  },
];

// Total langkah mengikuti lintasan terpanjang (8 tahap) agar ketiganya berjalan selaras
const TOTAL_TICKS = 8;

// Pemetaan progres tiap benda pada setiap detak timeline (0 s/d 7)
function getStepIndexForTrack(trackKey, tick) {
  if (trackKey === 'keris') return Math.min(tick, 7);
  if (trackKey === 'josua') return tick < 4 ? 0 : 1;
  if (trackKey === 'octa') return Math.min(Math.floor(tick / 2), 3);
  return 0;
}

// Fungsi pembuat lengkungan jalur agar garis antar-benda tidak saling menumpuk
function buildArc(start, end, curve = 0.15, segments = 28) {
  const [lat1, lng1] = start;
  const [lat2, lng2] = end;
  const midLat = (lat1 + lat2) / 2;
  const midLng = (lng1 + lng2) / 2;
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;

  const ctrlLat = midLat + dLng * curve;
  const ctrlLng = midLng - dLat * curve;

  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * ctrlLat + t * t * lat2;
    const lng = (1 - t) * (1 - t) * lng1 + 2 * (1 - t) * t * ctrlLng + t * t * lng2;
    pts.push([lat, lng]);
  }
  return pts;
}

export default function UnifiedJourneyMap() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layerGroupRef = useRef(null);

  const [tick, setTick] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [overviewMode, setOverviewMode] = useState(false);

  // ============================================================================
  // 2. INISIALISASI PETA SATELIT GELAP (BEBAS API KEY)
  // ============================================================================
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [-7.25, 110.1],
      zoom: 7,
      zoomControl: false,
      attributionControl: false,
    });

    // Basemap Esri World Imagery (Tanpa API Key)
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 18 }
    ).addTo(map);

    layerGroupRef.current = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;

    setTimeout(() => {
      map.invalidateSize();
    }, 150);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // ============================================================================
  // 3. TIMER ANIMASI SIMULTAN
  // ============================================================================
  useEffect(() => {
    if (!isPlaying || overviewMode) return;

    const timer = setInterval(() => {
      setTick((prev) => {
        if (prev >= TOTAL_TICKS - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, [isPlaying, overviewMode]);

  // ============================================================================
  // 4. RENDER 3 JALUR BERDAMPINGAN + NAMA KOTA & TAHUN
  // ============================================================================
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();
    const activeCoordsList = [];

    ARTIFACT_TRACKS.forEach((track) => {
      const maxIdx = overviewMode
        ? track.steps.length - 1
        : getStepIndexForTrack(track.key, tick);

      const visibleSteps = track.steps.slice(0, maxIdx + 1);

      // Gambar garis lengkung per benda
      for (let i = 0; i < visibleSteps.length - 1; i++) {
        const from = visibleSteps[i];
        const to = visibleSteps[i + 1];
        const arcCoords = buildArc(from.coords, to.coords, track.curvature);

        // Glow luar
        L.polyline(arcCoords, {
          color: track.color,
          weight: 8,
          opacity: 0.22,
          lineCap: 'round',
        }).addTo(layerGroup);

        // Garis inti
        L.polyline(arcCoords, {
          color: track.color,
          weight: 3.5,
          opacity: 0.95,
          dashArray: track.dashed ? '8, 7' : undefined,
          lineCap: 'round',
        }).addTo(layerGroup);
      }

      // Gambar titik kota & label tahun
      visibleSteps.forEach((step, idx) => {
        const isCurrentHead = !overviewMode && idx === maxIdx;
        const size = isCurrentHead ? 15 : 9;

        if (isCurrentHead) {
          activeCoordsList.push(step.coords);
        }

        const yearBadgeHtml = isCurrentHead
          ? `<div style="
              font-size: 10px;
              font-weight: 600;
              color: #fde047;
              margin-top: 1px;
            ">${step.year.split('-')[0].trim()}</div>`
          : '';

        const icon = L.divIcon({
          className: '',
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
          html: `
            <div style="position: relative; display: flex; align-items: center; justify-content: center;">
              ${
                isCurrentHead
                  ? `<div style="
                      position: absolute;
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      border: 2px solid ${track.color};
                      animation: pulseRing 1.5s infinite ease-out;
                      pointer-events: none;
                    "></div>`
                  : ''
              }
              <div style="
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: ${track.color};
                border: 2px solid #ffffff;
                box-shadow: 0 0 12px ${track.color};
              "></div>
              <div style="
                position: absolute;
                top: ${track.labelOffset}px;
                white-space: nowrap;
                padding: 3px 8px;
                border-radius: 6px;
                font-family: system-ui, sans-serif;
                font-size: ${isCurrentHead ? '11.5px' : '10.5px'};
                font-weight: 700;
                color: #ffffff;
                background: ${isCurrentHead ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.78)'};
                border: 1.5px solid ${track.color};
                box-shadow: 0 4px 10px rgba(0,0,0,0.55);
                text-align: center;
                pointer-events: none;
              ">
                <div>${step.city}</div>
                ${yearBadgeHtml}
              </div>
            </div>
          `,
        });

        L.marker(step.coords, { icon }).addTo(layerGroup);
      });
    });

    // Sesuaikan kamera agar ketiga jalur yang berjalan berdampingan selalu terlihat
    const allCoords = ARTIFACT_TRACKS.flatMap((t) => t.steps.map((s) => s.coords));
    if (overviewMode || activeCoordsList.length === 0) {
      map.flyToBounds(L.latLngBounds(allCoords), {
        padding: [60, 60],
        duration: 1.2,
      });
    } else {
      const bounds = L.latLngBounds(activeCoordsList);
      map.flyToBounds(bounds.pad(0.45), {
        paddingBottomRight: [40, 190],
        paddingTopLeft: [40, 50],
        maxZoom: 9,
        duration: 1.3,
      });
    }
  }, [tick, overviewMode]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#090d16',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        userSelect: 'none',
      }}
    >
      <style>{`
        .leaflet-tile-pane {
          filter: brightness(0.42) contrast(1.18) saturate(0.5);
        }
        .leaflet-container {
          background: #090d16 !important;
        }
        @keyframes pulseRing {
          0% { transform: scale(0.6); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>

      {/* Kanvas Peta */}
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%', zIndex: 1 }} />

      {/* Panel Bawah: 3 Kartu Caption Tahun Berdampingan + Kontrol Timeline */}
      <div
        style={{
          position: 'absolute',
          bottom: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(95vw, 1080px)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* 3 Kartu Berdampingan (Hanya Nama Kota & Caption Tahun/Era) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '10px',
          }}
        >
          {ARTIFACT_TRACKS.map((track) => {
            const activeIdx = overviewMode
              ? track.steps.length - 1
              : getStepIndexForTrack(track.key, tick);
            const currentData = track.steps[activeIdx];

            return (
              <div
                key={track.key}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.92)',
                  backdropFilter: 'blur(12px)',
                  borderTop: `3px solid ${track.color}`,
                  borderLeft: '1px solid rgba(255,255,255,0.1)',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.6)',
                  color: '#f8fafc',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: track.color,
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: track.color,
                      }}
                    />
                    {track.title}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#cbd5e1',
                    }}
                  >
                    {currentData.city}
                  </span>
                </div>

                {/* Hanya Caption Penjelasan Tahun */}
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.35,
                  }}
                >
                  {currentData.year}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bar Scrubber & Tombol Kontrol */}
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(12px)',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => {
                setOverviewMode(false);
                setIsPlaying((p) => !p);
              }}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isPlaying && !overviewMode ? (
                <Pause size={16} color="#090d16" />
              ) : (
                <Play size={16} color="#090d16" />
              )}
            </button>

            <button
              onClick={() => {
                setOverviewMode(false);
                setIsPlaying(false);
                setTick((t) => Math.max(0, t - 1));
              }}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={15} color="#f8fafc" />
            </button>

            <button
              onClick={() => {
                setOverviewMode(false);
                setIsPlaying(false);
                setTick((t) => Math.min(TOTAL_TICKS - 1, t + 1));
              }}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={15} color="#f8fafc" />
            </button>

            <button
              onClick={() => {
                setOverviewMode(false);
                setTick(0);
                setIsPlaying(true);
              }}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <RotateCcw size={14} color="#cbd5e1" />
            </button>
          </div>

          {/* Slider Timeline */}
          <input
            type="range"
            min={0}
            max={TOTAL_TICKS - 1}
            value={tick}
            onChange={(e) => {
              setOverviewMode(false);
              setIsPlaying(false);
              setTick(Number(e.target.value));
            }}
            style={{
              flex: 1,
              accentColor: '#f59e0b',
              cursor: 'pointer',
            }}
          />

          <button
            onClick={() => {
              setIsPlaying(false);
              setOverviewMode((p) => !p);
            }}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: overviewMode ? '#6366f1' : '#1e293b',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Maximize2 size={15} color="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  );
}