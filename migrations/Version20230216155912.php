<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230216155912 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doctor ADD civility VARCHAR(2) DEFAULT NULL');
        $this->addSql('ALTER TABLE ffmkradhesion ALTER civility TYPE VARCHAR(2)');
        $this->addSql('ALTER TABLE ffmkradhesion ALTER civility DROP DEFAULT');
        $this->addSql('ALTER TABLE patient ADD civility VARCHAR(2) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE doctor DROP civility');
        $this->addSql('ALTER TABLE patient DROP civility');
        $this->addSql('ALTER TABLE ffmkradhesion ALTER civility TYPE SMALLINT');
        $this->addSql('ALTER TABLE ffmkradhesion ALTER civility DROP DEFAULT');
    }
}
