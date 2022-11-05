-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2022 at 07:25 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agromap`
--

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `id` int(11) NOT NULL,
  `Business_name` varchar(255) NOT NULL,
  `Business_email` varchar(255) NOT NULL,
  `Business_Type` varchar(255) NOT NULL,
  `Contact` varchar(20) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Website_URL` varchar(2083) NOT NULL,
  `Category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`id`, `Business_name`, `Business_email`, `Business_Type`, `Contact`, `Location`, `Description`, `Website_URL`, `Category`) VALUES
(2, 'fdtyjiskmz', 'dfeufujhgje@gmail.com', 'farm', 'fjfcdkmzx', 'paxdsword', 'paxdsword', 'https://stackoverflow.com/questions/219569/best-database-field-type-for-a-url', 'paxdsword'),
(3, 'fdtyjiskmz', 'dfegyuiufujhgje@gmail.com', 'farm', 'fjfcdkmzx', 'paxdsword', 'paxdsword', 'https://stackoverflow.com/questions/219569/best-database-field-type-for-a-url', 'paxdsword');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `Lastname` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `Lastname`, `Phone`, `email`, `password`) VALUES
(1, '', '', '', 'jacqainabyoona19@gmail.com', 'e8e6da5a8524e4f54ef4eaf085bd3a47'),
(2, '', '', '', '', 'd41d8cd98f00b204e9800998ecf8427e'),
(3, '', '', '', 'jonestriscillah@gmail.com', 'ad8d03e2b6624d28af40bc076edfc879'),
(4, 'Vttvtb', '', '', 'Fvtvtgt', '43813f4f5e0af6e5a8a54d41b7f20f7c'),
(5, 'Maria Nandccf', 'Maria Nabvvv', '', ' Vvvxfffg', '2c913f70c93fc0caebec321e8ea0b1d9'),
(6, 'Fuucvkg', 'Uccugig', '', 'Hxuuc', '55c01c74981f2bda96b24b64710ff057'),
(7, 'Maria Nandawula', 'Maria Nandawula', 'Maria Nandawula', 'Dfvghgf', 'e16cf799d986d3abd8b424fa1840acb5'),
(8, 'Chvh', 'Cggigi', 'Ufjgjug', 'Ufugjf', '71407a030ebadbd92affed54260e9bbf'),
(9, 'Fvggg', 'C,chvjv', 'Gjvjgug', 'H  hixjvtxjv', '54bf59c98a2f1b2b22cd15fb714d8508'),
(10, 'Maria', 'Nandawula', '02093948448', 'jonstriscillah@gmail.com', 'e8e6da5a8524e4f54ef4eaf085bd3a47'),
(11, 'Vhnj', 'Ghh', 'Gggg', 'jones@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(12, 'Tracy', 'Mary', '1234567', 'jones2@gmail.com', 'e8e6da5a8524e4f54ef4eaf085bd3a47'),
(13, 'Maria', 'Trscy', '106337876', 'kirondejosiahp4@gmil.com', '324761cfc8d8271bc4273ba3f72716c2'),
(14, '', '', '', 'znkskskskjs@gmail.com', 'f8a7a41bd728c96576db5975761a409f'),
(15, 'Ycibib', '', '', 'jdjksksj@gmail.com', '57dffabc8b74de7dd3d36e60c4a37922'),
(16, 'Mari', 'Nandawul', '092939493992929', 'jonestriscilla@gmail.com', '807c5f39c1401fd04ebd6f9e6ccfc0e6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business`
--
ALTER TABLE `business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
