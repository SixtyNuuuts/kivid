<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210815165229 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE subscription ADD patient_id INT NOT NULL');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D36B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_A3C664D36B899279 ON subscription (patient_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE subscription DROP CONSTRAINT FK_A3C664D36B899279');
        $this->addSql('DROP INDEX IDX_A3C664D36B899279');
        $this->addSql('ALTER TABLE subscription DROP patient_id');
    }
}
