<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210910185415 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE exercise_stat ADD worksheet_id INT NOT NULL');
        $this->addSql('ALTER TABLE exercise_stat ADD CONSTRAINT FK_799D9D932A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_799D9D932A915FFA ON exercise_stat (worksheet_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE exercise_stat DROP CONSTRAINT FK_799D9D932A915FFA');
        $this->addSql('DROP INDEX IDX_799D9D932A915FFA');
        $this->addSql('ALTER TABLE exercise_stat DROP worksheet_id');
    }
}
