<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210709143959 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE worksheet_tag');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE worksheet_tag (worksheet_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(worksheet_id, tag_id))');
        $this->addSql('CREATE INDEX idx_351f554dbad26311 ON worksheet_tag (tag_id)');
        $this->addSql('CREATE INDEX idx_351f554d2a915ffa ON worksheet_tag (worksheet_id)');
        $this->addSql('ALTER TABLE worksheet_tag ADD CONSTRAINT fk_351f554d2a915ffa FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_tag ADD CONSTRAINT fk_351f554dbad26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
