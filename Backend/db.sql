DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `idbooking` int NOT NULL AUTO_INCREMENT,
  `booking` varchar(45) NOT NULL,
  PRIMARY KEY (`idbooking`),
  UNIQUE KEY `idbooking_UNIQUE` (`idbooking`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `dependencies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependencies` (
  `iddependency` int NOT NULL AUTO_INCREMENT,
  `dependency_name` varchar(45) NOT NULL,
  PRIMARY KEY (`iddependency`),
  UNIQUE KEY `iddependencies_UNIQUE` (`iddependency`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependencies`
--

LOCK TABLES `dependencies` WRITE;
/*!40000 ALTER TABLE `dependencies` DISABLE KEYS */;
INSERT INTO `dependencies` VALUES (1,'Habitaciones'),(2,'Aseo general'),(3,'Administración'),(4,'Empleados'),(5,'Zonas comunes');
/*!40000 ALTER TABLE `dependencies` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `service` varchar(45) NOT NULL,
  PRIMARY KEY (`idservice`),
  UNIQUE KEY `idservices_UNIQUE` (`idservice`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Hospedaje'),(2,'Restaurante'),(3,'Paseo campestre'),(4,'Evento social'),(5,'Guia turistico');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `idstatus` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`idstatus`),
  UNIQUE KEY `idstatuses_UNIQUE` (`idstatus`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'Disponible'),(2,'Fuera de servicio'),(3,'Dañado'),(4,'Con problemas'),(5,'En procesamiento'),(6,'Esperando al cliente'),(7,'Finalizado');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `typeelements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeelements` (
  `idtype_element` int NOT NULL AUTO_INCREMENT,
  `type_element` varchar(45) NOT NULL,
  PRIMARY KEY (`idtype_element`),
  UNIQUE KEY `idtype_elements_UNIQUE` (`idtype_element`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeelements`
--

LOCK TABLES `typeelements` WRITE;
/*!40000 ALTER TABLE `typeelements` DISABLE KEYS */;
INSERT INTO `typeelements` VALUES (1,'Aseo'),(2,'Zonas verdes'),(3,'Habitaciones'),(4,'Electrodomesticos'),(5,'Red electrica'),(6,'Red potable'),(7,'Internet'),(8,'General');
/*!40000 ALTER TABLE `typeelements` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `typeusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typeusers` (
  `idtypeUser` int NOT NULL AUTO_INCREMENT,
  `typeUser` varchar(45) NOT NULL,
  PRIMARY KEY (`idtypeUser`),
  UNIQUE KEY `idtypeUsers_UNIQUE` (`idtypeUser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeusers`
--

LOCK TABLES `typeusers` WRITE;
/*!40000 ALTER TABLE `typeusers` DISABLE KEYS */;
INSERT INTO `typeusers` VALUES (1,'Administrator'),(2,'Employee'),(3,'Client');
/*!40000 ALTER TABLE `typeusers` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `name_user` varchar(45) NOT NULL,
  `dni_user` varchar(10) NOT NULL,
  `phone_user` varchar(10) NOT NULL,
  `mail_user` varchar(45) NOT NULL,
  `type_user` int NOT NULL,
  `password_user` varchar(255) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `idusers_UNIQUE` (`iduser`),
  KEY `type_user_idx` (`type_user`),
  CONSTRAINT `type_user` FOREIGN KEY (`type_user`) REFERENCES `typeusers` (`idtypeUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Diego Corredor','1052414564','3229010668','diego.corredor.98@gmail.com',1,'$2b$10$BPwMnLvp4L.r9mY83qYHte8YMDl9gUTkcl6oQUL1KkaU.bx.D/QG.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `idbooking` int NOT NULL AUTO_INCREMENT,
  `type_service` int NOT NULL,
  `type_booking` int NOT NULL,
  `count_beds` int NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `count_childs` int NOT NULL,
  `count_adults` int NOT NULL,
  `observations` varchar(45) DEFAULT NULL,
  `name_client` varchar(45) NOT NULL,
  `dni_client` varchar(45) NOT NULL,
  `phone_client` varchar(45) NOT NULL,
  `mail_client` varchar(45) NOT NULL,
  `state_booking` int NOT NULL,
  PRIMARY KEY (`idbooking`),
  UNIQUE KEY `idbooking_UNIQUE` (`idbooking`),
  KEY `service_type_idx` (`type_service`),
  KEY `booking_type_idx` (`type_booking`),
  KEY `status_booking_idx` (`state_booking`),
  CONSTRAINT `booking_type` FOREIGN KEY (`type_booking`) REFERENCES `bookings` (`idbooking`),
  CONSTRAINT `service_type` FOREIGN KEY (`type_service`) REFERENCES `services` (`idservice`),
  CONSTRAINT `status_booking` FOREIGN KEY (`state_booking`) REFERENCES `statuses` (`idstatus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `codes` (
  `idcode` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `state_code` varchar(45) NOT NULL,
  `booking_code` int NOT NULL,
  PRIMARY KEY (`idcode`),
  UNIQUE KEY `idcodes_UNIQUE` (`idcode`),
  KEY `code_booking_idx` (`booking_code`),
  CONSTRAINT `code_booking` FOREIGN KEY (`booking_code`) REFERENCES `booking` (`idbooking`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `codes`
--

LOCK TABLES `codes` WRITE;
/*!40000 ALTER TABLE `codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `codes` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `inventary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventary` (
  `idinventary` int NOT NULL AUTO_INCREMENT,
  `name_element` varchar(45) NOT NULL,
  `type_element` int NOT NULL,
  `count_element` int NOT NULL,
  `state_element` int NOT NULL,
  `value_element` varchar(45) NOT NULL,
  `dependency_element` int NOT NULL,
  `date_start` datetime NOT NULL,
  `description_element` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idinventary`),
  UNIQUE KEY `idinventary_UNIQUE` (`idinventary`),
  KEY `element_type_idx` (`type_element`),
  KEY `element_status_idx` (`state_element`),
  KEY `element_dependecy_idx` (`dependency_element`),
  CONSTRAINT `element_dependecy` FOREIGN KEY (`dependency_element`) REFERENCES `dependencies` (`iddependency`),
  CONSTRAINT `element_status` FOREIGN KEY (`state_element`) REFERENCES `statuses` (`idstatus`),
  CONSTRAINT `element_type` FOREIGN KEY (`type_element`) REFERENCES `typeelements` (`idtype_element`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventary`
--

LOCK TABLES `inventary` WRITE;
/*!40000 ALTER TABLE `inventary` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventary` ENABLE KEYS */;
UNLOCK TABLES;
