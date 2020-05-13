-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: bankManagement
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accountHolder`
--

DROP TABLE IF EXISTS `accountHolder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accountHolder` (
  `AccId` int(11) NOT NULL AUTO_INCREMENT,
  `AccHolderName` varchar(60) DEFAULT NULL,
  `branchName` varchar(60) DEFAULT NULL,
  `Balance` bigint(20) DEFAULT NULL,
  `EmailId` varchar(90) DEFAULT NULL,
  `PhoneNumber` bigint(20) DEFAULT NULL,
  `Address` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`AccId`),
  UNIQUE KEY `AccId` (`AccId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accountHolder`
--

LOCK TABLES `accountHolder` WRITE;
/*!40000 ALTER TABLE `accountHolder` DISABLE KEYS */;
INSERT INTO `accountHolder` VALUES (1,'Ramesh','Wagoli',500,'ramesh@gmail.com',9822043112,'Kharadi'),(2,'Saklan','Wagoli',500,'saklan@gmail.com',9822043113,'Kharadi'),(3,'Mukesh','Hadapsar',500,'mukesh@gmail.com',9822043114,'Kharadi'),(4,'Chaba','Hadapsar',500,'chaba@gmail.com',9822043115,'Mundawa'),(5,'Sapana','Hadapsar',500,'sapna@gmail.com',9822043116,'Mundawa'),(6,'Shakila','Hadapsar',500,'shakila@gmail.com',9822041117,'Mundawa'),(7,'Narendre','Yerwada',500,'narendre@gmail.com',9822041121,'Yerwada'),(8,'Sara','Yerwada',500,'sara@gmail.com',9822043118,'Yerwada'),(9,'Shabista','Yerwada',500,'shabista@gmail.com',9822043119,'Yerwada'),(10,'Sumaiyah','Hadapsar',500,'sumaiyah@gmail.com',9822043120,'Yerwada');
/*!40000 ALTER TABLE `accountHolder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `AccountNumber` bigint(20) NOT NULL,
  `Amount` bigint(20) DEFAULT NULL,
  `TimeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `AccId` int(11) DEFAULT NULL,
  `TypeOfTransaction` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`AccountNumber`,`TimeStamp`),
  KEY `AccId` (`AccId`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`AccId`) REFERENCES `accountHolder` (`AccId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,500,'2020-05-10 17:14:24',1,'D'),(1,600,'2020-05-10 17:14:28',1,'D'),(2,600,'2020-05-10 18:41:37',1,'D'),(2,600,'2020-05-10 19:00:09',1,'D'),(2,600,'2020-05-10 19:01:20',1,'C');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger changeBalance after insert on transaction  for each row begin if new.TypeOfTransaction like 'D' then update accountHolder set Balance= accountHolder.Balance+new.Amount where accountHolder.AccId=new.AccId; else update accountHolder set Balance= accountHolder.Balance-new.Amount where accountHolder.AccId=new.AccId; end if; end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-11 10:23:46
