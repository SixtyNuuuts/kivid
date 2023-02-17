<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230215151751 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE ffmkradhesion_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE ffmkradhesion (id INT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, numcli VARCHAR(255) NOT NULL, civility SMALLINT DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, maiden_name VARCHAR(255) DEFAULT NULL, firstname VARCHAR(255) DEFAULT NULL, suite_name VARCHAR(255) DEFAULT NULL, entity_name VARCHAR(255) DEFAULT NULL, street_number VARCHAR(255) DEFAULT NULL, street_name VARCHAR(255) DEFAULT NULL, street_complement VARCHAR(255) DEFAULT NULL, postal_code VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, country VARCHAR(255) DEFAULT NULL, date_of VARCHAR(255) DEFAULT NULL, num_rpps VARCHAR(255) DEFAULT NULL, tel VARCHAR(255) DEFAULT NULL, mobile VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, birthdate VARCHAR(255) DEFAULT NULL, is_kivid_adhesion BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_AA313C31CCF507C6 ON ffmkradhesion (numcli)');
        $this->addSql('COMMENT ON COLUMN ffmkradhesion.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE doctor ADD ffmkradhesion_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE doctor ADD CONSTRAINT FK_1FC0F36A61C533F8 FOREIGN KEY (ffmkradhesion_id) REFERENCES ffmkradhesion (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1FC0F36A61C533F8 ON doctor (ffmkradhesion_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE doctor DROP CONSTRAINT FK_1FC0F36A61C533F8');
        $this->addSql('DROP SEQUENCE ffmkradhesion_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE prescription_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('DROP TABLE ffmkradhesion');
        $this->addSql('DROP INDEX UNIQ_1FC0F36A61C533F8');
        $this->addSql('ALTER TABLE doctor DROP ffmkradhesion_id');
    }
}
