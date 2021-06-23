<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210623092702 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE doctor_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE patient_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE doctor (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, avatar_url VARCHAR(255) DEFAULT NULL, is_verified BOOLEAN NOT NULL, description TEXT DEFAULT NULL, city VARCHAR(255) NOT NULL, street VARCHAR(255) DEFAULT NULL, entity_name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1FC0F36AE7927C74 ON doctor (email)');
        $this->addSql('COMMENT ON COLUMN doctor.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE doctor_patient (doctor_id INT NOT NULL, patient_id INT NOT NULL, PRIMARY KEY(doctor_id, patient_id))');
        $this->addSql('CREATE INDEX IDX_8977B44687F4FB17 ON doctor_patient (doctor_id)');
        $this->addSql('CREATE INDEX IDX_8977B4466B899279 ON doctor_patient (patient_id)');
        $this->addSql('CREATE TABLE patient (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, avatar_url VARCHAR(255) DEFAULT NULL, is_verified BOOLEAN NOT NULL, birthdate TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1ADAD7EBE7927C74 ON patient (email)');
        $this->addSql('COMMENT ON COLUMN patient.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN patient.birthdate IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE doctor_patient ADD CONSTRAINT FK_8977B44687F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE doctor_patient ADD CONSTRAINT FK_8977B4466B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE doctor_patient DROP CONSTRAINT FK_8977B44687F4FB17');
        $this->addSql('ALTER TABLE doctor_patient DROP CONSTRAINT FK_8977B4466B899279');
        $this->addSql('DROP SEQUENCE doctor_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE patient_id_seq CASCADE');
        $this->addSql('DROP TABLE doctor');
        $this->addSql('DROP TABLE doctor_patient');
        $this->addSql('DROP TABLE patient');
    }
}
