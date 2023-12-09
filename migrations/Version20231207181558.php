<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231207181558 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doctor DROP give_free_access_prescri');
        $this->addSql('ALTER TABLE subscription ADD doctor_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE subscription ALTER patient_id DROP NOT NULL');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D387F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_A3C664D387F4FB17 ON subscription (doctor_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE subscription DROP CONSTRAINT FK_A3C664D387F4FB17');
        $this->addSql('DROP INDEX IDX_A3C664D387F4FB17');
        $this->addSql('ALTER TABLE subscription DROP doctor_id');
        $this->addSql('ALTER TABLE subscription ALTER patient_id SET NOT NULL');
        $this->addSql('ALTER TABLE doctor ADD give_free_access_prescri BOOLEAN DEFAULT NULL');
    }
}
