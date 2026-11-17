import { useState } from "react";

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
                                <strong>842 Masehi - Prasasti Karangtengah (Era Mataram Kuno):</strong>{" "}
                                Ditemukannya penyebutan istilah <em>kres</em> (keris) pada
                                lempengan perunggu sebagai salah satu benda yang digunakan dalam
                                kelengkapan sesaji upacara keagamaan.
                            </li>
                            <li>
                                <strong>Abad ke-9 Masehi – Relief Candi Borobudur (Era Mataram Kuno):</strong>{" "}
                                Gambaran sejumlah prajurit yang membawa senjata tikam jarak dekat
                                dengan siluet yang menyerupai bentuk awal keris pada relief Candi Borobudur.
                            </li>
                            <li>
                                <strong>875 Masehi – Temuan Artefak Stupa (Era Mataram Kuno):</strong>{" "}
                                Ditemukannya artefak senjata tikam kuno menyerupai keris tua di
                                dalam struktur stupa yang dibangun pada tahun 875 M.
                            </li>
                            <li>
                                <strong>907 Masehi – Prasasti Rukam, Temanggung (Era Mataram Kuno):</strong>{" "}
                                Tercatatnya keberadaan keris secara lebih jelas dalam struktur
                                upacara penetapan tanah perdikan, yang kerap dijadikan patokan
                                kronologis awal kemunculan keris Jawa sebelum berkembang lebih luas.
                            </li>
                            <li>
                                <strong>Abad ke-11 – ke-13 Masehi – Era Kadiri hingga Singasari:</strong>{" "}
                                Bentuk keris berevolusi menjadi tipe yang dikenal sebagai Tangguh
                                Budha atau Keris Betok.
                            </li>
                            <li>
                                <strong>Abad ke-14 – ke-15 Masehi – Masa Keemasan Majapahit:</strong>{" "}
                                Revolusi teknik metalurgi dengan memadukan besi, baja, dan batu meteorit.
                            </li>
                            <li>
                                <strong>Abad ke-16 – ke-18 Masehi – Era Demak, Pajang, hingga Mataram Islam:</strong>{" "}
                                Masuknya Islam dan berkembangnya senjata api.
                            </li>
                            <li>
                                <strong>Akhir Abad ke-16 – Munculnya Tangguh Madiun:</strong>{" "}
                                Di Kadipaten Purabaya (Madiun) pada awal pemerintahan Pajang dan
                                Mataram, terjadi perpaduan antara bentuk lama (Majapahit, Kadiri,
                                Singasari) dengan era Mataram, menghasilkan keris berjenis Tilam dan Gandring.
                            </li>
                            <li>
                                <strong>Akhir Abad ke-17 – Awal Abad ke-18:</strong>{" "}
                                Salah satu jenis keris yang berasal dari Madiun diterima oleh
                                leluhur saya, kemudian diturunkan secara lintas generasi hingga saat ini.
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
                        <p>Toyota Kijang LGX (Luxury Grand Extra) adalah varian tertinggi bersasis panjang (long wheelbase) dari Toyota Kijang generasi keempat (Kijang Kapsul). 
                            Kijang LGX dibuat oleh PT Toyota Motor Manufacturing Indonesia (TMMIN), di Jakarta pada 1997.</p>
                        <ul>
                            <li>
                                <strong>1997 – Kelahiran Kijang Kapsul & Varian LGX Pertama (Era Pra-Facelift):</strong>{" "}
                                PT Toyota-Astra Motor (TAM) merilis Kijang generasi keempat dengan desain membulat aerodinamis. Varian <em>Luxury Grand Extra</em> (LGX) diposisikan sebagai tipe termewah sasis panjang (<em>long wheelbase</em>) dengan fitur AC <em>double blower</em>, <em>power window</em>, <em>tachometer</em>, dan velg <em>alloy</em>, serta pilihan mesin bensin 1.8L karburator (7K) dan diesel 2.4L (2L).
                            </li>
                            <li>
                                <strong>2000 – Facelift Pertama & Era Mesin Injeksi (EFI):</strong>{" "}
                                Mendapat penyegaran berupa lampu depan kristal multireflektor dan desain <em>grille</em> baru. Sistem bahan bakar bensin beralih ke injeksi elektronik melalui varian 1.8L (7K-E) dan 2.0L SOHC (1RZ-E), sementara mesin diesel 2.4L tetap dipertahankan.
                            </li>
                            <li>
                                <strong>2002–2003 – Facelift Kedua (Sentuhan Mewah Terakhir):</strong>{" "}
                                Pembaruan tampilan lewat <em>grille</em> krom vertikal tebal, model velg baru, peningkatan material interior, serta ketersediaan opsi transmisi otomatis 4-percepatan yang lebih luas.
                            </li>
                            <li>
                                <strong>2004 – Akhir Produksi & Peralihan ke Kijang Innova:</strong>{" "}
                                Produksi Kijang LGX dihentikan secara bertahap menjelang pertengahan tahun dan digantikan oleh generasi kelima, Toyota Kijang Innova, pada Juni 2004.
                            </li>
                            <li>
                                <strong>Lokasi Produksi (Pabrik Sunter & Karawang):</strong>{" "}
                                Seluruh lini Kijang Kapsul LGX dirakit di Indonesia oleh PT Toyota Motor Manufacturing Indonesia (TMMIN) di Pabrik Sunter (Jakarta Utara) sebagai pusat perakitan awal dan mesin, serta Pabrik Karawang Plant 1 (Jawa Barat) yang mengambil alih porsi besar perakitan sejak 1998 hingga 2004.
                            </li>
                            <li>
                                <strong>8 April 2003 :</strong>{" "}
                                Mobil tersebut dibeli oleh kakek Joshua, dan menjadi mobil pertama yang dimilikinya. Mobil ini kelak diwariskan ke saya dan memiliki nilai historis tersendiri
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
                        <h1>KOIN RP100 TAHUN EMISI 1978 (HUTAN UNTUK KESEJAHTERAAN)</h1>
                        <h4>Penjelasan :</h4>
                        <p>
                            Koin Peringatan (<em>Commemorative Coin</em>) pecahan Rp100 Tahun Emisi 1978 merupakan uang logam bersejarah yang diterbitkan oleh Bank Indonesia dengan tema khusus &ldquo;Hutan Untuk Kesejahteraan&rdquo;. 
                            Koin yang dijuluki &ldquo;Koin 100 Tipis&rdquo; atau &ldquo;Koin Wayang&rdquo; ini memadukan kampanye pelestarian alam dengan simbol budaya Nusantara melalui ilustrasi Gunungan (Kayon) dan Rumah Gadang.
                        </p>
                        <ul>
                            <li>
                                <strong>Tahun 1970-an – Latar Belakang &amp; Perencanaan Kebijakan:</strong>{" "}
                                Pemerintah RI bersama Bank Indonesia merumuskan program kesadaran lingkungan nasional untuk mengampanyekan pelestarian hutan, pencegahan penggundulan, serta reboisasi guna mendukung kesejahteraan rakyat.
                            </li>
                            <li>
                                <strong>Tahun 1978 – Tahun Emisi &amp; Produksi:</strong>{" "}
                                Bank Indonesia resmi menerbitkan koin peringatan pecahan Rp100 bertema &ldquo;Hutan Untuk Kesejahteraan&rdquo; dengan ilustrasi Gunungan wayang dan Rumah Gadang, yang dikenal sebagai &ldquo;Koin 100 Tipis&rdquo; (berbeda dari versi tebal emisi 1973).
                            </li>
                            <li>
                                <strong>Periode 1978 – 1990-an – Masa Peredaran Aktif:</strong>{" "}
                                Beredar luas di masyarakat sebagai alat pembayaran yang sah (<em>legal tender</em>) sehari-hari sekaligus menjadi media sosialisasi pelestarian alam bagi warga.
                            </li>
                            <li>
                                <strong>Masa Penarikan dari Peredaran:</strong>{" "}
                                Seiring pembaruan emisi uang rupiah oleh Bank Indonesia dan pertimbangan masa pakai logam, koin ini ditarik secara bertahap dan dicabut statusnya sebagai alat pembayaran yang sah.
                            </li>
                            <li>
                                <strong>Era Modern / Saat Ini – Komoditas Numismatik:</strong>{" "}
                                Bertransformasi menjadi benda koleksi antik (numismatik) yang diburu kolektor uang kuno untuk nostalgia maupun kelengkapan sejarah alat pembayaran Indonesia.
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
                    <video muted controls>
                        <source src="" type="video/mp4"></source>
                    </video>
                    <h1>KOIN 100 PERAK TAHUN 1978</h1>
                    <p>Perjalanan koin 100 perak yang saat ini menjadi langka.</p>
                    <h4>Octavianus Putra Yodha Chavindo XRPL 24</h4>
                </div>
            </section>
        </div>
    )
}