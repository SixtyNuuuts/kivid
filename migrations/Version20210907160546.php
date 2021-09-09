<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210907160546 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet_session DROP CONSTRAINT fk_411f02a93db413d');
        $this->addSql('DROP SEQUENCE prescription_id_seq CASCADE');
        $this->addSql('DROP TABLE prescription');
        $this->addSql('DROP INDEX idx_411f02a93db413d');
        $this->addSql('ALTER TABLE worksheet_session RENAME COLUMN prescription_id TO worksheet_id');
        $this->addSql('ALTER TABLE worksheet_session ADD CONSTRAINT FK_411F02A2A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_411F02A2A915FFA ON worksheet_session (worksheet_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE prescription_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE prescription (id INT NOT NULL, patient_id INT NOT NULL, doctor_id INT NOT NULL, worksheet_id INT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX idx_1fbfb8d987f4fb17 ON prescription (doctor_id)');
        $this->addSql('CREATE INDEX idx_1fbfb8d96b899279 ON prescription (patient_id)');
        $this->addSql('CREATE INDEX idx_1fbfb8d92a915ffa ON prescription (worksheet_id)');
        $this->addSql('COMMENT ON COLUMN prescription.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE prescription ADD CONSTRAINT fk_1fbfb8d96b899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prescription ADD CONSTRAINT fk_1fbfb8d987f4fb17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prescription ADD CONSTRAINT fk_1fbfb8d92a915ffa FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_session DROP CONSTRAINT FK_411F02A2A915FFA');
        $this->addSql('DROP INDEX IDX_411F02A2A915FFA');
        $this->addSql('ALTER TABLE worksheet_session RENAME COLUMN worksheet_id TO prescription_id');
        $this->addSql('ALTER TABLE worksheet_session ADD CONSTRAINT fk_411f02a93db413d FOREIGN KEY (prescription_id) REFERENCES prescription (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_411f02a93db413d ON worksheet_session (prescription_id)');
    }
}
