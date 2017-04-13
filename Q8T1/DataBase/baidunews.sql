-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-27 09:35:12
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newimg`, `newstime`) VALUES
(1, '精选', '第一条数据', './image/1.jpeg', '2017-02-01 00:00:00'),
(5, '百家', '测试修改', 'image/3.jpeg', '2017-02-21 00:00:00'),
(6, '本地', '1212', 'image/4.jpeg', '2017-02-22 00:00:00'),
(7, '精选', '第二条数据', 'image/2.jpeg', '2017-02-02 00:00:00'),
(8, '精选', '第三条数据', 'image/3.jpeg', '2017-02-03 00:00:00'),
(9, '精选', '第四条数据', 'image/4.jpeg', '2017-02-04 00:00:00'),
(10, '精选', '第五条数据', 'image/5.jpeg', '2017-02-05 00:00:00'),
(11, '精选', '第六条数据', 'image/6.jpeg', '2017-02-06 00:00:00'),
(12, '精选', '第七条数据', 'image/7.jpeg', '2017-02-07 00:00:00'),
(13, '精选', '第八条数据', 'image/8.PNG', '2017-02-08 00:00:00'),
(14, '精选', '第九条数据', 'image/9.jpeg', '2017-02-09 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
