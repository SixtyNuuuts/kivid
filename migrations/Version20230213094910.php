<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230213094910 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE video_library_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE video_library (id INT NOT NULL, reference VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE video ADD video_library_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE video ADD CONSTRAINT FK_7CC7DA2C7E825961 FOREIGN KEY (video_library_id) REFERENCES video_library (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_7CC7DA2C7E825961 ON video (video_library_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE video DROP CONSTRAINT FK_7CC7DA2C7E825961');
        $this->addSql('DROP SEQUENCE video_library_id_seq CASCADE');
        $this->addSql('DROP TABLE video_library');
        $this->addSql('DROP INDEX IDX_7CC7DA2C7E825961');
        $this->addSql('ALTER TABLE video DROP video_library_id');
    }
}
