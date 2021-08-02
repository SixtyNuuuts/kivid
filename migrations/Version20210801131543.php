<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210801131543 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE worksheet_session_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE worksheet_session (id INT NOT NULL, prescription_id INT NOT NULL, start_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, deadline_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, is_completed BOOLEAN DEFAULT NULL, week INT DEFAULT NULL, day INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_411F02A93DB413D ON worksheet_session (prescription_id)');
        $this->addSql('ALTER TABLE worksheet_session ADD CONSTRAINT FK_411F02A93DB413D FOREIGN KEY (prescription_id) REFERENCES prescription (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE prescription ADD duration INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prescription ADD per_day INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prescription ADD per_week INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prescription DROP progression');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE worksheet_session_id_seq CASCADE');
        $this->addSql('DROP TABLE worksheet_session');
        $this->addSql('ALTER TABLE prescription ADD progression INT NOT NULL');
        $this->addSql('ALTER TABLE prescription DROP duration');
        $this->addSql('ALTER TABLE prescription DROP per_day');
        $this->addSql('ALTER TABLE prescription DROP per_week');
    }
}
