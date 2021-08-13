<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210810120027 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prescription DROP duration');
        $this->addSql('ALTER TABLE prescription DROP per_day');
        $this->addSql('ALTER TABLE prescription DROP per_week');
        $this->addSql('ALTER TABLE worksheet ADD duration INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet ADD per_day INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet ADD per_week INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE worksheet DROP duration');
        $this->addSql('ALTER TABLE worksheet DROP per_day');
        $this->addSql('ALTER TABLE worksheet DROP per_week');
        $this->addSql('ALTER TABLE prescription ADD duration INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prescription ADD per_day INT DEFAULT NULL');
        $this->addSql('ALTER TABLE prescription ADD per_week INT DEFAULT NULL');
    }
}
