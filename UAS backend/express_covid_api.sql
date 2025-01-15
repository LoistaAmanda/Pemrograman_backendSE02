-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jan 2025 pada 08.55
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_covid_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `status` enum('Positive','Recovered','Dead') DEFAULT NULL,
  `in_date_at` date DEFAULT NULL,
  `out_date_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`) VALUES
(1, 'Andi Pratama', '081234567890', 'Jl. Merdeka No. 10, Jakarta', 'Positive', '2025-01-01', NULL),
(2, 'Siti Nuraini', '082345678901', 'Jl. Raya No. 15, Bandung', 'Recovered', '2025-01-02', '2025-01-10'),
(3, 'Budi Santoso', '083456789012', 'Jl. Sejahtera No. 20, Surabaya', 'Dead', '2025-01-05', '2025-01-07'),
(4, 'Dewi Lestari', '084567890123', 'Jl. Kebangsaan No. 25, Yogyakarta', 'Recovered', '2025-01-03', '2025-01-08'),
(5, 'Ilyas Abdul Azis', '085678901234', 'Jl. Raya Timur No. 30, Medan', 'Positive', '2025-01-04', NULL),
(6, 'Rina Fatimah', '086789012345', 'Jl. Pahlawan No. 35, Malang', 'Dead', '2025-01-06', '2025-01-09'),
(7, 'Ahmad Fikri', '087890123456', 'Jl. Maju No. 40, Bali', 'Positive', '2025-01-02', NULL),
(8, 'Maya Hidayat', '088901234567', 'Jl. Harmoni No. 45, Makassar', 'Recovered', '2025-01-07', '2025-01-12'),
(9, 'Hendra Wijaya', '089012345678', 'Jl. Cendana No. 50, Jakarta', 'Dead', '2025-01-08', '2025-01-10'),
(10, 'Loista Amanda Noviar', '090123456789', 'Jl. Sutera No. 55, Semarang', 'Positive', '2025-01-09', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
