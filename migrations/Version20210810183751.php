<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210810183751 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT fk_23da50c187f4fb17');
        $this->addSql('DROP INDEX idx_23da50c187f4fb17');
        $this->addSql('ALTER TABLE worksheet RENAME COLUMN doctor_id TO creator_id');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C19861216F FOREIGN KEY (creator_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_23DA50C19861216F ON worksheet (creator_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C19861216F');
        $this->addSql('DROP INDEX IDX_23DA50C19861216F');
        $this->addSql('ALTER TABLE worksheet RENAME COLUMN creator_id TO doctor_id');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT fk_23da50c187f4fb17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_23da50c187f4fb17 ON worksheet (doctor_id)');
    }
}
