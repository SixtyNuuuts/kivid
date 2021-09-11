<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210910203032 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE score_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE score (id INT NOT NULL, patient_id INT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, label VARCHAR(255) DEFAULT NULL, point INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_329937516B899279 ON score (patient_id)');
        $this->addSql('COMMENT ON COLUMN score.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_329937516B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE score_id_seq CASCADE');
        $this->addSql('DROP TABLE score');
    }
}
