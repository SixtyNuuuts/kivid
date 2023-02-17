<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230217152624 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doctor ADD ffmkradhesion_request_token VARCHAR(20) DEFAULT NULL');
        $this->addSql('ALTER TABLE ffmkradhesion DROP is_kivid_adhesion');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doctor DROP ffmkradhesion_request_token');
        $this->addSql('ALTER TABLE ffmkradhesion ADD is_kivid_adhesion BOOLEAN NOT NULL');
    }
}
