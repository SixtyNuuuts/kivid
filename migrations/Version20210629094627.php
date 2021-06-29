<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210629094627 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE tag_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE video_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE tag (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE video (id INT NOT NULL, name VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, thumbnail_url VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE video_tag (video_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(video_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_F910728729C1004E ON video_tag (video_id)');
        $this->addSql('CREATE INDEX IDX_F9107287BAD26311 ON video_tag (tag_id)');
        $this->addSql('ALTER TABLE video_tag ADD CONSTRAINT FK_F910728729C1004E FOREIGN KEY (video_id) REFERENCES video (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE video_tag ADD CONSTRAINT FK_F9107287BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE video_tag DROP CONSTRAINT FK_F9107287BAD26311');
        $this->addSql('ALTER TABLE video_tag DROP CONSTRAINT FK_F910728729C1004E');
        $this->addSql('DROP SEQUENCE tag_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE video_id_seq CASCADE');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE video');
        $this->addSql('DROP TABLE video_tag');
    }
}
