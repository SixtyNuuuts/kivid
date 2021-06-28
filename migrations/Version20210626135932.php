<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210626135932 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doctor ADD google_id VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE doctor ADD facebook_id VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE patient ADD google_id VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE patient ADD facebook_id VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE doctor DROP google_id');
        $this->addSql('ALTER TABLE doctor DROP facebook_id');
        $this->addSql('ALTER TABLE patient DROP google_id');
        $this->addSql('ALTER TABLE patient DROP facebook_id');
    }
}
