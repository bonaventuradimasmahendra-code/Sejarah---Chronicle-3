import { useState } from "react";
import VisualJourneyMap from "../components/map";

export default function Index(){
    const [selectedItem, setSelectedItem] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = (select)=>{
        setSelectedItem(select);
        setShow(true);
    }

    function showPop() {
        if (String(selectedItem).toLowerCase().includes("dimas")) {
            return(
                <div className="showpop-container">
                    <div className="video-pop">
                        <video muted controls autoPlay loop key={selectedItem}>
                            <source src="/video/Untitled-flyover-720p.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="explain-pop">
                        <h1>KERIS JALAK TILAM SUMELANG GANDRING</h1>
                        <h4>Penjelasan :</h4>
                        <p>Keris memiliki perjalanan yang panjang dan bernilai historis. Keris memiliki beragam jenis yang identik dan otentik.
                            Salah satunya adalah keris Jalak Tilam Sumelang Gandring, salah satu jenis keris yang berasal dari era Madiun lama, sekitar abad ke 16.
                            Masing-masing jenis memiliki nilai filosofi yang terkandung dari corak dan bentuknya.
                        </p>
                        <ul>
                            <li>
                                <strong>842 Masehi, Prasasti Karangtengah (Era Mataram Kuno):</strong>{" "}
                                Ditemukannya penyebutan istilah <em>kres</em> (keris) pada
                                lempengan perunggu sebagai salah satu benda yang digunakan dalam
                                kelengkapan sesaji upacara keagamaan.
                            </li>
                            <li>
                                <strong>Abad ke-9 Masehi, Relief Candi Borobudur (Era Mataram Kuno):</strong>{" "}
                                Ukiran sejumlah prajurit yang membawa senjata tikam jarak dekat
                                dengan membawa benda yang menyerupai bentuk awal keris pada relief Candi Borobudur.
                            </li>
                            <li>
                                <strong>875 Masehi, Temuan Artefak Stupa (Era Mataram Kuno):</strong>{" "}
                                Ditemukannya artefak senjata penusuk kuno yang menyerupai keris tua di
                                dalam struktur stupa yang dibangun pada tahun 875 M.
                            </li>
                            <li>
                                <strong>907 Masehi, Prasasti Rukam, Temanggung (Era Mataram Kuno):</strong>{" "}
                                Prasasti yang menjelaskan mengenai struktur
                                upacara penetapan tanah perdikan (tanah pemberian), yang kerap dijadikan patokan
                                awal kemunculan keris Jawa sebelum berkembang.
                            </li>
                            <li>
                                <strong>Abad ke-11 - ke-13 Masehi, Era Kadiri hingga Singasari:</strong>{" "}
                                Bentuk keris berevolusi menjadi beragam tipe dengan nilainya masing-masing.
                            </li>
                            <li>
                                <strong>Abad ke-14 - ke-15 Masehi, Masa Keemasan Majapahit:</strong>{" "}
                                Adanya kemajuan dan perubahan cara membuat keris serta perbedaan ungkapan filosofisnya.
                            </li>
                            <li>
                                <strong>Abad ke-16 - ke-18 Masehi, Era Demak, Pajang, hingga Mataram Islam:</strong>{" "}
                                Masuknya Islam dan berkembangnya senjata api dari Eropa.
                                Pembuatan keris berbaur dengan budaya dan merebaknya agama Islam di Indonesia.
                            </li>
                            <li>
                                <strong>Akhir Abad ke-16, Munculnya Tangguh Madiun:</strong>{" "}
                                Di Kadipaten Purabaya (Madiun) pada awal pemerintahan Pajang dan
                                Mataram, terjadi perpaduan antara bentuk lama (Majapahit, Kadiri,
                                Singasari) dengan era Mataram Islam, menghasilkan keris berjenis Tilam dan Gandring.
                            </li>
                            <li>
                                <strong>Akhir Abad ke-17 hingga Awal Abad ke-18:</strong>{" "}
                                Salah satu jenis keris yang berasal dari Madiun diterima oleh
                                leluhur, kemudian diturunkan secara lintas generasi hingga saat ini.
                            </li>
                        </ul>
                        <button onClick={()=> setShow(false)}>Hide</button>
                    </div>
                </div>
            )
        } else if (String(selectedItem).toLowerCase().includes("josua")) {
            return(
                <div className="showpop-container">
                    <div className="video-pop">
                        <video muted controls autoPlay loop key={selectedItem}>
                            <source src="/video/JOSUA.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="explain-pop">
                        <h1>TOYOTA KIJANG LGX</h1>
                        <h4>Penjelasan :</h4>
                        <p>Toyota Kijang LGX (Luxury Grand Extra) adalah salah satu varian dari Toyota Kijang generasi keempat (Kijang Kapsul). 
                            Kijang LGX dibuat oleh PT Toyota Motor Manufacturing Indonesia (TMMIN), di Jakarta pada 1997.</p>
                        <ul>
                            <li>
                                <strong>1997, Kelahiran Kijang Kapsul & Varian LGX Pertama :</strong>{" "}
                                PT Toyota-Astra Motor (TAM) merilis Kijang generasi keempat dengan desain membulat aerodinamis. 
                                Varian <em>Luxury Grand Extra</em> (LGX) direncanakan untuk menjadi tipe termewah sasis panjang dengan fitur AC <em>double blower</em>, <em>power window</em>, <em>tachometer</em>, dan velg <em>alloy</em>, serta pilihan mesin bensin 1.8L karburator (7K) dan diesel 2.4L (2L).
                                Seluruh kijang kapsul diproduksi di Indonesia, tepatnya di Jakarta.
                            </li>
                            <li>
                                <strong>2000 - Facelift Pertama & Era Mesin Injeksi (EFI):</strong>{" "}
                                Tampilan lampu depan dan desain <em>grille</em> diperbarui. Sistem bahan bakar bensin beralih ke injeksi elektronik melalui varian 1.8L (7K-E) dan 2.0L SOHC (1RZ-E), sementara mesin diesel 2.4L tetap dipertahankan.
                            </li>
                            <li>
                                <strong>2002-2003 - Facelift Kedua (Pembaruan Terakhir):</strong>{" "}
                                Pembaruan tampilan lewat <em>grille</em> krom vertikal tebal, model velg baru, peningkatan material interior, serta ketersediaan opsi transmisi otomatis 4-percepatan yang lebih luas.
                            </li>
                            <li>
                                <strong>2004 - Akhir Produksi & Peralihan ke Kijang Innova:</strong>{" "}
                                Produksi Kijang LGX dihentikan secara bertahap menjelang pertengahan tahun dan digantikan oleh generasi kelima, Toyota Kijang Innova, pada Juni 2004.
                            </li>
                            <li>
                                <strong>8 April 2003 :</strong>{" "}
                                Mobil tersebut dibeli oleh salah seorang dari keluarga, dan menjadi mobil pertama yang dimilikinya. Mobil ini kelak diwariskan ke saya dan memiliki nilai historis tersendiri
                            </li>
                        </ul>
                        <button onClick={()=> setShow(false)}>Hide</button>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="showpop-container">
                    <div className="video-pop">
                        <video muted controls autoPlay loop key={selectedItem}>
                            <source src="/video/OCTA.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="explain-pop">
                        <h1>KOIN RP100 TAHUN EMISI 1978</h1>
                        <h4>Penjelasan :</h4>
                        <p>
                            Koin Peringatan pecahan Rp100 Tahun Emisi 1978 adalah salah satu jenis uang logam bersejarah.
                            Koin ini diterbitkan oleh Bank Indonesia dengan tema dan motif khusus Hutan Untuk Kesejahteraan. 
                            Koin yang dijuluki Koin 100 Tipis atau Koin Wayang ini memadukan kampanye pelestarian alam dengan simbol budaya Nusantara.
                        </p>
                        <ul>
                            <li>
                                <strong>Tahun 1970-an, Latar Belakang:</strong>{" "}
                                Pemerintah RI bersama Bank Indonesia merumuskan program kesadaran lingkungan nasional sebagai sarana berkampanye.
                            </li>
                            <li>
                                <strong>Tahun 1978, Produksi:</strong>{" "}
                                Bank Indonesia resmi menerbitkan koin peringatan pecahan Rp100 bertema khusus dan unik tersebut.
                            </li>
                            <li>
                                <strong>Periode 1978 - 1990-an, Masa Peredaran Aktif:</strong>{" "}
                                Beredar luas di masyarakat sebagai alat pembayaran yang sah.8
                            </li>
                            <li>
                                <strong>Masa Penarikan dari Peredaran:</strong>{" "}
                                Seiring pembaruan emisi uang rupiah oleh Bank Indonesia dan pertimbangan masa pakai logam, koin ini ditarik secara bertahap dan dicabut statusnya sebagai alat pembayaran yang sah.
                            </li>
                            <li>
                                <strong>1980an :</strong>{" "}
                                Leluhur menerima dan memiliki koin ini dan disimpan hingga saat ini menjadi barang yang langka.
                            </li>
                            <li>
                                <strong>Saat Ini :</strong>{" "}
                                Menjadi barang peninggalan leluhur yang dapat dijaga dan diwariskan lintas generasi.
                            </li>
                        </ul>
                        <button onClick={() => setShow(false)}>Hide</button>
                    </div>
                </div>
            )
        };
    };

    return (
        <div className={`index-container ${show ? "split-mode" : ""}`}>
            <h1>PERJALANAN HISTORIS BENDA</h1>
            <VisualJourneyMap />
            <h3>Kesamaan pola : </h3>
            <p>Masing-masing benda dari setiap anggota kelompok memiliki kesamaan, yaitu diwariskan secara turun temurun dan dijaga lintas generasi. Masing masing benda juga memiliki nilai historis dan filosofis sendiri dibaliknya.
            </p>

            {show && (
                <section className="left-container">
                    {showPop()}
                </section>
            )}
            
            <section className="right-container">
                {/* KALAU BISA INI NANTI JADI THUMBNAIL, VIDE0 ISA DADI GAMBAR */}
                <div className="video-one" onClick={()=> handleClick("Video Dimas")}>
                    <img src="/image/TN KERIS.jpeg"/>
                    <h1>SEJARAH KERIS</h1>
                    <p>Perjalanan Keris dari perkiraan awal muncul hingga saat ini.</p>
                    <h4>Bonaventura Dimas Mahendra XRPL 11</h4>
                </div>
                <div className="video-two" onClick={()=> handleClick("Video Josua")}>
                    <img src="/image/Toyota_Kijang_Grand_Extra_(depan),_Denpasar.jpg"/>
                    <h1>SEJARAH MOBIL TOYOTA KIJANG LUXURY GRAND EXTRA</h1>
                    <p>Perjalanan Toyota Kijang LGX dari peluncuran perdana hingga kini.</p>
                    <h4>Joshua Vidya Revata XRPL 19</h4>
                </div>
                <div className="video-three" onClick={()=> handleClick("Video Octa")}>
                    <img src="/image/WhatsApp Image 2026-11-05 at 08.16.58.jpeg"/>
                    <h1>KOIN 100 PERAK TAHUN 1978</h1>
                    <p>Perjalanan koin 100 perak yang saat ini menjadi langka.</p>
                    <h4>Octavianus Putra Yodha Chavindo XRPL 24</h4>
                </div>
            </section>
        </div>
    )
}