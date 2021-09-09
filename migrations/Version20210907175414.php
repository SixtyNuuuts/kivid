<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210907175414 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT fk_23da50c161220ea6');
        $this->addSql('DROP INDEX idx_23da50c161220ea6');
        $this->addSql('ALTER TABLE worksheet DROP creator_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE worksheet ADD creator_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT fk_23da50c161220ea6 FOREIGN KEY (creator_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_23da50c161220ea6 ON worksheet (creator_id)');
    }
}
