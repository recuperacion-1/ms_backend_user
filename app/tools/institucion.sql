-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2024 a las 17:33:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `institucion`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_BuscarEstudiante` (IN `_ESTUDIANTE` VARCHAR(100))   BEGIN

SELECT ESTUDIANTE, CLAVE, NOMBRE, ID FROM institucion WHERE salon = ESTUDIANTE LIMIT 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Buscarsalon` (IN `_ESTUDIANTE` VARCHAR(100))   BEGIN

SELECT ESTUDIANTE, NOMBRE, ID FROM institucion WHERE institucion = _USUARIO LIMIT 1;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Crearestudiante` (IN `_NOMBRE` VARCHAR(100), IN `_ESTUDIANTE` VARCHAR(100), IN `_CLAVE` VARCHAR(500))  NO SQL BEGIN

INSERT INTO salon (NOMBRE, ESTUDIANTE, CLAVE)
VALUES (_NOMBRE, _ESTUDIANTE, _CLAVE);

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Eliminarestudiante` (IN `ID` INT)  NO SQL BEGIN

DELETE FROM salon WHERE ID = ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_ListarEstudiante` ()  NO SQL BEGIN

SELECT NOMBRE,ESTUDIANTE,CLAVE
FROM salon;
	
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Modificarestudiante` (IN `_ID` INT, IN `_NOMBRE` VARCHAR(100), IN `_estudiante` VARCHAR(100), IN `_CLAVE` VARCHAR(500))  NO SQL BEGIN

UPDATE salon SET NOMBRE = _NOMBRE,
ESTUDIANTE = _ESTUDIANTE,
CLAVE = _CLAVE WHERE ID = _ID;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_Mostrarsalon` (IN `_ID` INT)  NO SQL BEGIN

SELECT NOMBRE,estudiante,CLAVE
FROM salon WHERE ID = _ID;
	
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `institucion`
--

CREATE TABLE `institucion` (
  `id` int(10) NOT NULL,
  `estudiante` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `institucion`
--

INSERT INTO `institucion` (`id`, `estudiante`, `nombre`) VALUES
(1, '1', 'juan');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salon`
--

CREATE TABLE `salon` (
  `id` int(10) NOT NULL,
  `estudiante` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salon`
--

INSERT INTO `salon` (`id`, `estudiante`, `nombre`, `clave`) VALUES
(2, '12', 'pepito', '33'),
(3, '44', 'pepita', '23'),
(4, '266', 'juanaa', '143');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `institucion`
--
ALTER TABLE `institucion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salon`
--
ALTER TABLE `salon`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `institucion`
--
ALTER TABLE `institucion`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `salon`
--
ALTER TABLE `salon`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
