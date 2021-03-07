-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2021 at 03:13 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kinder`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `user_id` varchar(100) NOT NULL,
  `f_id` int(40) NOT NULL,
  `request_status` tinyint(1) NOT NULL,
  `approval_status` tinyint(1) NOT NULL,
  `f_email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `mail_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_id`, `username`, `password`, `mail_id`) VALUES
('glpuu696d6', '', 'U2FsdGVkX1/qaWFeMCLgbZFcwtcMY5WdFKuwMwdTuhQ=', 'test@gmail.com'),
('jsnpeo81gp', '', 'U2FsdGVkX1+UCZ1p8BtSS7MBeXGKVlk4fcGb6aCVwrc=', 'rr2102598@gmail.com'),
('z0bed6qdh3', '', 'U2FsdGVkX1818pJHZ0u/+wnHpsfgdI3iN0VnmWw1XlM=', 'rr210259@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `user_id` varchar(100) NOT NULL,
  `message` varchar(40) NOT NULL,
  `to_userid` int(40) NOT NULL,
  `from_userid` int(40) NOT NULL,
  `message_id` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `user_id` varchar(100) NOT NULL,
  `ph_id` int(40) NOT NULL,
  `photo_url` varchar(100) NOT NULL,
  `caption` varchar(100) NOT NULL,
  `upload_time` datetime(6) NOT NULL,
  `like_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `user_id` varchar(100) NOT NULL,
  `s_id` int(40) NOT NULL,
  `media_url` varchar(50) NOT NULL,
  `upload_time` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` varchar(100) NOT NULL,
  `u_name` varchar(100) NOT NULL,
  `u_fname` varchar(100) NOT NULL,
  `u_lname` varchar(100) NOT NULL,
  `u_age` int(50) NOT NULL,
  `u_dob` date DEFAULT NULL,
  `u_gender` text NOT NULL,
  `u_mobile` varchar(40) NOT NULL,
  `u_email` longtext NOT NULL,
  `u_city` text NOT NULL,
  `u_status` varchar(20) NOT NULL,
  `u_lastlogin` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `u_createdAt` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `u_name`, `u_fname`, `u_lname`, `u_age`, `u_dob`, `u_gender`, `u_mobile`, `u_email`, `u_city`, `u_status`, `u_lastlogin`, `u_createdAt`) VALUES
('glpuu696d6', 'Raja Jaisankar', 'Raja', 'Jaisankar', 20, '2000-05-02', 'U2FsdGVkX1/b426GR+8D23Z31Uwd6hU4ThHUg85bDT8=', '', 'test@gmail.com', 'U2FsdGVkX18fSwLacEq1qASmzbqHadEj3bmJ7Xv1OGM=', 'true', '2021-03-06 16:20:33.328784', '2021-03-06 16:20:33.000000'),
('jsnpeo81gp', 'Raja Jaisankar', 'Raja', 'Jaisankar', 20, '2000-05-02', 'U2FsdGVkX19tUem2egFrJTJnkMasbu7IbwrEif79xCY=', '', 'rr2102598@gmail.com', 'U2FsdGVkX19ZpYgi+LcjtF+olr4qPFXN3Jh9LNY1CsE=', 'true', '2021-03-06 10:27:02.683941', '2021-03-06 10:27:02.000000'),
('z0bed6qdh3', 'raja Ja', 'raja', 'Ja', 0, NULL, '', '', 'rr210259@gmail.com', '', 'true', '2021-03-06 10:34:51.581766', '2021-03-06 10:34:51.000000');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `user_id` varchar(100) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `u_gender` text NOT NULL,
  `u_dob` date NOT NULL,
  `u_city` text NOT NULL,
  `u_hobby` text NOT NULL,
  `u_bio` text NOT NULL,
  `u_interests` text NOT NULL,
  `u_email` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_profile`
--

INSERT INTO `user_profile` (`user_id`, `u_name`, `u_gender`, `u_dob`, `u_city`, `u_hobby`, `u_bio`, `u_interests`, `u_email`) VALUES
('glpuu696d6', 'Raja Jaisankar', 'U2FsdGVkX1/b426GR+8D23Z31Uwd6hU4ThHUg85bDT8=', '2000-05-02', 'U2FsdGVkX18fSwLacEq1qASmzbqHadEj3bmJ7Xv1OGM=', 'U2FsdGVkX1+y5yI/dLPovoa8+hhO0Owvcbwy8sfQdr9YSzIN34/x2J7JVn3TH96XnCOV5VcycXBiD7H2h0B8DA==', 'U2FsdGVkX18wMWwQ/w3arp5SiBcQ7Cw0h7W1Iwwh72H+iQCqMjeIfZ/oJnlA4PSx', 'U2FsdGVkX18oLoaRecA9lJqlWMgPw1GIJMY9XaN6B5k=', 'test@gmail.com'),
('jsnpeo81gp', 'Raja Jaisankar', 'U2FsdGVkX19tUem2egFrJTJnkMasbu7IbwrEif79xCY=', '2000-05-02', 'U2FsdGVkX19ZpYgi+LcjtF+olr4qPFXN3Jh9LNY1CsE=', 'U2FsdGVkX19I7gk1dlE+4uOLau8bihBMWgbLo1qkUYkAoKFuSqVPPq0rFpdCmgb9WrrjeMSXLQYbMn/0cxqeOQ==', 'U2FsdGVkX1/ZkOKGkbLG/GpcxGnmDWbgMVfGnrcufuphK5W8c7IAoz0evdOP25Fg', 'U2FsdGVkX19thJX/+yi+6DEm9qhmXFuWu25OuIeML3E=', 'rr2102598@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD UNIQUE KEY `f_email` (`f_email`),
  ADD KEY `friend_id` (`user_id`),
  ADD KEY `f_id` (`f_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `m_id` (`user_id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`ph_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `story`
--
ALTER TABLE `story`
  ADD KEY `sid` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `u_email` (`u_email`) USING HASH;

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friend_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`u_id`);

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_id` FOREIGN KEY (`login_id`) REFERENCES `users` (`u_id`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `m_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`u_id`);

--
-- Constraints for table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `p_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`u_id`);

--
-- Constraints for table `story`
--
ALTER TABLE `story`
  ADD CONSTRAINT `sid` FOREIGN KEY (`user_id`) REFERENCES `users` (`u_id`);

--
-- Constraints for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD CONSTRAINT `u_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`u_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
