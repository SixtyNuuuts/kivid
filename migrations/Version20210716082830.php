<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210716082830 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet ADD doctor_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C187F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_23DA50C187F4FB17 ON worksheet (doctor_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C187F4FB17');
        $this->addSql('DROP INDEX IDX_23DA50C187F4FB17');
        $this->addSql('ALTER TABLE worksheet DROP doctor_id');
    }
}
