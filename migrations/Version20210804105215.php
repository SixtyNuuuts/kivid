<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210804105215 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet_session ADD is_in_progress BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet_session ADD "order" INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet_session DROP execution');
        $this->addSql('ALTER TABLE worksheet_session DROP day');
        $this->addSql('ALTER TABLE worksheet_session DROP week');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE worksheet_session ADD day INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet_session ADD week INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet_session DROP is_in_progress');
        $this->addSql('ALTER TABLE worksheet_session RENAME COLUMN "order" TO execution');
    }
}
