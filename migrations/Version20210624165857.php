<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210624165857 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reset_password_request DROP CONSTRAINT fk_7ce748aa76ed395');
        $this->addSql('DROP INDEX idx_7ce748aa76ed395');
        $this->addSql('ALTER TABLE reset_password_request ADD patient_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reset_password_request ADD docor_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reset_password_request DROP user_id');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748A6B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748A8149A479 FOREIGN KEY (docor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_7CE748A6B899279 ON reset_password_request (patient_id)');
        $this->addSql('CREATE INDEX IDX_7CE748A8149A479 ON reset_password_request (docor_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE reset_password_request DROP CONSTRAINT FK_7CE748A6B899279');
        $this->addSql('ALTER TABLE reset_password_request DROP CONSTRAINT FK_7CE748A8149A479');
        $this->addSql('DROP INDEX IDX_7CE748A6B899279');
        $this->addSql('DROP INDEX IDX_7CE748A8149A479');
        $this->addSql('ALTER TABLE reset_password_request ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE reset_password_request DROP patient_id');
        $this->addSql('ALTER TABLE reset_password_request DROP docor_id');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT fk_7ce748aa76ed395 FOREIGN KEY (user_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_7ce748aa76ed395 ON reset_password_request (user_id)');
    }
}
