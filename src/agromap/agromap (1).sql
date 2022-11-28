-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2022 at 10:51 AM
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
(4, 'Mukwano Getrude Farm', 'mukwanogetrude@gmail.com', 'Farmer', '07349374819', 'Mukono', 'this is a poultry farm located at mukono', 'https://unffe.org.ug/', 'Poultry'),
(5, 'kyaggwe Farmers Associations', 'kyaggwefarmers@gmail.com', 'Farmer', '0479033833', 'Kabowa', 'poultry farm', 'https://unffe.org.ug/', 'Poultry'),
(6, 'Bujjuko Farm', 'mukwanogetrude@gmail.com', 'Farmer', '07349374819', 'Mukono', 'this is a poultry farm located at mukono', 'https://unffe.org.ug/', 'Poultry'),
(7, 'Bulenga Farm', 'kyaggwefarmers@gmail.com', 'Farmer', '0479033833', 'Kabowa', 'poultry farm', 'https://unffe.org.ug/', 'Poultry'),
(8, 'Green house farm', 'greenhouse23@gmail.com', 'Farmer', '07735333738', 'Bulenga', 'Poultry farm', '', 'Poultry'),
(9, 'Green house farm', 'greenhouse23@gmail.com', 'Farmer', '07735333738', 'Bulenga', 'Poultry farm', '', 'Poultry'),
(10, 'Marvins farm', 'greenhouse23@gmail.com', 'Farmer', '07735333738', 'Bulenga', 'Poultry farm', '', 'Poultry'),
(11, 'Sena farm', 'greenhouse23@gmail.com', 'Farmer', '07735333738', 'Bulenga', 'Poultry farm', '', 'Poultry'),
(12, 'Yana farm', 'greenhouse23@gmail.com', 'Farmer', '07735333738', 'Bulenga', 'Poultry farm', '', 'Poultry'),
(13, 'Jesa Poultry farm', 'greenhouse23@gmail.com', 'Farmer', '07735333738', 'Bulenga', 'Poultry farm', '', 'Poultry');

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
  `password` varchar(100) NOT NULL,
  `status` int(11) DEFAULT 0,
  `email_verification_link` varchar(255) NOT NULL,
  `email_verified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `Lastname`, `Phone`, `email`, `password`, `status`, `email_verification_link`, `email_verified_at`) VALUES
(1, '', '', '', 'jacqainabyoona19@gmail.com', 'e8e6da5a8524e4f54ef4eaf085bd3a47', 0, '', '2022-11-26 09:45:58'),
(2, '', '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', 0, '', '2022-11-26 09:45:58'),
(3, '', '', '', 'jonestriscillah@gmail.com', 'ad8d03e2b6624d28af40bc076edfc879', 0, '', '2022-11-26 09:45:58'),
(4, 'Vttvtb', '', '', 'Fvtvtgt', '43813f4f5e0af6e5a8a54d41b7f20f7c', 0, '', '2022-11-26 09:45:58'),
(5, 'Maria Nandccf', 'Maria Nabvvv', '', ' Vvvxfffg', '2c913f70c93fc0caebec321e8ea0b1d9', 0, '', '2022-11-26 09:45:58'),
(6, 'Fuucvkg', 'Uccugig', '', 'Hxuuc', '55c01c74981f2bda96b24b64710ff057', 0, '', '2022-11-26 09:45:58'),
(7, 'Maria Nandawula', 'Maria Nandawula', 'Maria Nandawula', 'Dfvghgf', 'e16cf799d986d3abd8b424fa1840acb5', 0, '', '2022-11-26 09:45:58'),
(8, 'Chvh', 'Cggigi', 'Ufjgjug', 'Ufugjf', '71407a030ebadbd92affed54260e9bbf', 0, '', '2022-11-26 09:45:58'),
(9, 'Fvggg', 'C,chvjv', 'Gjvjgug', 'H  hixjvtxjv', '54bf59c98a2f1b2b22cd15fb714d8508', 0, '', '2022-11-26 09:45:58'),
(10, 'Maria', 'Nandawula', '02093948448', 'jonstriscillah@gmail.com', 'e8e6da5a8524e4f54ef4eaf085bd3a47', 0, '', '2022-11-26 09:45:58'),
(11, 'Vhnj', 'Ghh', 'Gggg', 'jones@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 0, '', '2022-11-26 09:45:58'),
(12, 'Tracy', 'Mary', '1234567', 'jones2@gmail.com', 'e8e6da5a8524e4f54ef4eaf085bd3a47', 0, '', '2022-11-26 09:45:58'),
(14, '', '', '', 'znkskskskjs@gmail.com', 'f8a7a41bd728c96576db5975761a409f', 0, '', '2022-11-26 09:45:58'),
(15, 'Ycibib', '', '', 'jdjksksj@gmail.com', '57dffabc8b74de7dd3d36e60c4a37922', 0, '', '2022-11-26 09:45:58'),
(20, 'djejj', 'jfjokf', '04958493', 'triscilanandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, '2b5c553e4e7467021731c71477da9142', '2022-11-27 11:29:51'),
(21, 'djejj', 'jfjokf', '04958493', 'triscilSanandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, 'f7607ed9678bcce61e8bc4762f4448dd', '2022-11-27 11:30:31'),
(22, 'djejj', 'jfjokf', '04958493', 'triscilSandandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, 'c99d09d7c94430903659f3f9f72175d8', '2022-11-27 11:31:48'),
(24, 'djejj', 'jfjokf', '04958493', 'triscilSaandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, '92b9b0221b8cd79fbc4cb0a5b1dbd793', '2022-11-27 11:43:53'),
(25, 'djejj', 'jfjokf', '04958493', 'triscilandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, '16ed4c018df70a5e6c40dd27653c4cd6', '2022-11-27 11:44:47'),
(26, 'djejj', 'jfjokf', '04958493', 'triscssilandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, '9cb47bb4ffa0b91158fb8272b8045223', '2022-11-27 11:52:06'),
(27, 'djejj', 'jfjokf', '04958493', 'trisssilandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, 'b1b0fcf12ddb0b8ebff30f5f51c3eac9', '2022-11-27 11:53:19'),
(28, 'djejj', 'jfjokf', '04958493', 'triDDsssilandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, '95f39741a0e562bd55dca7d56a92938e', '2022-11-27 11:53:28'),
(33, 'djejj', 'jfjokf', '04958493', 'triscillandy@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, '128c496d55f530e8efea01f0b24e3ae9', '2022-11-27 12:18:50'),
(34, 'djejj', 'jfjokf', '04958493', 'triscillady@gmail.com', '570c1c701acec1ac7552214ede7d4626', 0, '513e33dc2348eaefb02dd86463464546', '2022-11-28 09:25:21');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
