# Cria a tabela se ela não existir
CREATE TABLE IF NOT EXISTS `names` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);