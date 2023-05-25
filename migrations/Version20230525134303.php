<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230525134303 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet ADD access_public_slug VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet DROP access_public_token');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet ADD access_public_token VARCHAR(15) DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet DROP access_public_slug');
    }
}
