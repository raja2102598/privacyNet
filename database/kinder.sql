-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2021 at 06:14 PM
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
('j2uybfj7cu', '', 'U2FsdGVkX19Bka544n4jZVGVDqrhWxr0GG6OG9s4i/U=', 'sakthimallicyr@gmail.com'),
('wf6z89f1jh', '', 'U2FsdGVkX19tyJMinx6z0w3+Y7yDUjkbFg+4DqVYanU=', 'test@gmail.com');

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
('j2uybfj7cu', 'Sakthivel M', 'Sakthivel', 'M', 0, NULL, '', '', 'sakthimallicyr@gmail.com', '', 'true', '2021-03-09 06:30:43.571620', '2021-03-09 06:30:43.000000'),
('wf6z89f1jh', 'Test 1', 'Test', '1', 20, '2000-05-21', 'U2FsdGVkX18K1mhhgpp/VXxDnEDQOM6agJszzKsDv0c=', '', 'test@gmail.com', 'U2FsdGVkX18UDXUi4rOSNi7IVmPOQ1RnUFbR+UlUIgo=', 'true', '2021-03-08 08:27:16.933538', '2021-03-08 08:27:16.000000');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `user_id` varchar(100) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `user_pic_url` text NOT NULL,
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

INSERT INTO `user_profile` (`user_id`, `u_name`, `user_pic_url`, `u_gender`, `u_dob`, `u_city`, `u_hobby`, `u_bio`, `u_interests`, `u_email`) VALUES
('j2uybfj7cu', 'Sakthivel M', 'https://firebasestorage.googleapis.com/v0/b/privacynet-faafb.appspot.com/o/images%2FCollegeIdCard.png?alt=media&token=590ab051-8aa2-400c-b20f-88a4e27cea3c', 'U2FsdGVkX19Do67c4OU5mDER0NAvVqeKnJLqrpTgn4s=', '0000-00-00', 'U2FsdGVkX19pHKoyQiNsfmEl441zo55uaucXf58wVP0=', 'U2FsdGVkX18cYM5722tRKlCNTCQ+GQHr+aZNHa2w3bg=', 'U2FsdGVkX1+LElSHWDtBox1+64FvFzeELDo/BTbK+ve9ZMXzKWulnLxHfkvl2GhC', 'U2FsdGVkX19A5735pzZDHPBMDqv2eOT+D0oJ1X5TT6o=', 'sakthimallicyr@gmail.com'),
('wf6z89f1jh', 'Raja', 'https://firebasestorage.googleapis.com/v0/b/privacynet-faafb.appspot.com/o/images%2Fcrlogo.jpg?alt=media&token=b0a602af-7a19-4b90-a983-61ff63e49caa', 'U2FsdGVkX18K1mhhgpp/VXxDnEDQOM6agJszzKsDv0c=', '2000-05-21', 'U2FsdGVkX18UDXUi4rOSNi7IVmPOQ1RnUFbR+UlUIgo=', 'U2FsdGVkX183GcXEDSmb8h67w5SiSsPNi6WBa9YK/Zc=', 'U2FsdGVkX1+Rs5Kpj8UiNl9jWDDU80uNCpf5uLmmYyRevMVAw3NDpl6Y/PeLjolw', 'U2FsdGVkX1+OPP3aNn9FpbcVUNQN/KpF7OVbL+rS/ac=', 'test@gmail.com');

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
