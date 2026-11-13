import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // DATA MAHASISWA MENGGUNAKAN useState
  const [mahasiswa] = useState([
    {
      nim: "230101001",
      nama: "Andi Pratama",
      hp: "081234567801",
      email: "andi@gmail.com",
      alamat: "Surabaya",
      prodi: "Informatika",
      tahun: "2023",
    },
    {
      nim: "230101002",
      nama: "Siti Rahma",
      hp: "081234567802",
      email: "siti@gmail.com",
      alamat: "Sidoarjo",
      prodi: "Sistem Informasi",
      tahun: "2023",
    },
    {
      nim: "230101003",
      nama: "Budi Santoso",
      hp: "081234567803",
      email: "budi@gmail.com",
      alamat: "Gresik",
      prodi: "Manajemen Informatika",
      tahun: "2022",
    },
    {
      nim: "230101004",
      nama: "Dewi Anggraini",
      hp: "081234567804",
      email: "dewi@gmail.com",
      alamat: "Mojokerto",
      prodi: "Informatika",
      tahun: "2023",
    },
    {
      nim: "230101005",
      nama: "Rizky Firmansyah",
      hp: "081234567805",
      email: "rizky@gmail.com",
      alamat: "Lamongan",
      prodi: "Sistem Informasi",
      tahun: "2024",
    },
  ]);

  // STATE JAM DIGITAL
  const [waktu, setWaktu] = useState(new Date());

  // USE EFFECT LIVE CLOCK
  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const jam = waktu.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const tanggal = waktu.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const totalProdi = new Set(mahasiswa.map((mhs) => mhs.prodi)).size;

  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <div className="logo">🎓</div>
          <div>
            <h1>Student Management</h1>
            <p>Daftar Data Mahasiswa </p>
          </div>
        </div>

        <div className="clock-card">
          <div className="clock-icon">🕒</div>
          <div>
            <span className="clock-label">Waktu Sekarang</span>
            <h2>{jam}</h2>
            <p>{tanggal}</p>
          </div>
        </div>
      </header>

      {/* WELCOME */}
      <section className="welcome-section">
        <div>
          <span className="welcome-label">DASHBOARD AKADEMIK</span>
          <h2>Selamat Datang!</h2>
          <p>
            Berikut merupakan informasi dan daftar data
            mahasiswa yang tersimpan pada aplikasi.
          </p>
        </div>
        <div className="welcome-icon">📚</div>
      </section>

      {/* STATISTIK */}
      <section className="stats-container">
        <div className="stat-card">
          <div className="stat-icon blue">👨‍🎓</div>
          <div>
            <p>Total Mahasiswa</p>
            <h2>{mahasiswa.length}</h2>
            <span>Data mahasiswa terdaftar</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">📖</div>
          <div>
            <p>Program Studi</p>
            <h2>{totalProdi}</h2>
            <span>Program studi tersedia</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">📅</div>
          <div>
            <p>Tahun Akademik</p>
            <h2>2026</h2>
            <span>Tahun akademik berjalan</span>
          </div>
        </div>
      </section>

      {/* TABEL MAHASISWA */}
      <section className="table-section">
        <div className="section-header">
          <div>
            <span className="section-label">STUDENT INFORMATION</span>
            <h2>Daftar Data Mahasiswa</h2>
            <p>Informasi lengkap mahasiswa yang tersimpan dalam sistem.</p>
          </div>

          <div className="total-data">
            📋 {mahasiswa.length} Mahasiswa
          </div>
        </div>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>NIM</th>
                <th>Nama Mahasiswa</th>
                <th>No. HP</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Program Studi</th>
                <th>Tahun Masuk</th>
              </tr>
            </thead>

            <tbody>
              {mahasiswa.map((mhs, index) => (
                <tr key={mhs.nim}>
                  <td>
                    <span className="number-badge">{index + 1}</span>
                  </td>
                  <td className="nim">{mhs.nim}</td>
                  <td className="nama">{mhs.nama}</td>
                  <td>{mhs.hp}</td>
                  <td className="email">{mhs.email}</td>
                  <td>{mhs.alamat}</td>
                  <td>
                    <span className="prodi-badge">{mhs.prodi}</span>
                  </td>
                  <td>
                    <span className="year-badge">{mhs.tahun}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <p>Menampilkan <strong>{mahasiswa.length}</strong> data mahasiswa</p>
          <span>Data Dummy ReactJS</span>
        </div>
      </section>

      
      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Student Management System</p>
        <p>Built with ReactJS | useState & useEffect</p>
      </footer>

    </div>
  );
}

export default App;
