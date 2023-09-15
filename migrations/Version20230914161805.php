<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230914161805 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendly_event ADD patient_id INT NOT NULL');
        $this->addSql('ALTER TABLE calendly_event ADD event_url VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE calendly_event ADD user_email VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE calendly_event ADD scheduled_event_status VARCHAR(10) DEFAULT NULL');
        $this->addSql('ALTER TABLE calendly_event ADD scheduled_event_start_time TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL');
        $this->addSql('ALTER TABLE calendly_event ADD scheduled_event_end_time TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL');
        $this->addSql('ALTER TABLE calendly_event DROP payload');
        $this->addSql('ALTER TABLE calendly_event ADD CONSTRAINT FK_CEF848E26B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_CEF848E26B899279 ON calendly_event (patient_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE calendly_event DROP CONSTRAINT FK_CEF848E26B899279');
        $this->addSql('DROP INDEX IDX_CEF848E26B899279');
        $this->addSql('ALTER TABLE calendly_event ADD payload TEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE calendly_event DROP patient_id');
        $this->addSql('ALTER TABLE calendly_event DROP event_url');
        $this->addSql('ALTER TABLE calendly_event DROP user_email');
        $this->addSql('ALTER TABLE calendly_event DROP scheduled_event_status');
        $this->addSql('ALTER TABLE calendly_event DROP scheduled_event_start_time');
        $this->addSql('ALTER TABLE calendly_event DROP scheduled_event_end_time');
    }
}
