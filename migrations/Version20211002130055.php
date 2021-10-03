<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211002130055 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE part_of_body_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE part_of_body (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE video_part_of_body (video_id INT NOT NULL, part_of_body_id INT NOT NULL, PRIMARY KEY(video_id, part_of_body_id))');
        $this->addSql('CREATE INDEX IDX_5F3F654529C1004E ON video_part_of_body (video_id)');
        $this->addSql('CREATE INDEX IDX_5F3F6545536269F1 ON video_part_of_body (part_of_body_id)');
        $this->addSql('ALTER TABLE video_part_of_body ADD CONSTRAINT FK_5F3F654529C1004E FOREIGN KEY (video_id) REFERENCES video (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE video_part_of_body ADD CONSTRAINT FK_5F3F6545536269F1 FOREIGN KEY (part_of_body_id) REFERENCES part_of_body (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet ADD part_of_body_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C1536269F1 FOREIGN KEY (part_of_body_id) REFERENCES part_of_body (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_23DA50C1536269F1 ON worksheet (part_of_body_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE video_part_of_body DROP CONSTRAINT FK_5F3F6545536269F1');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C1536269F1');
        $this->addSql('DROP SEQUENCE part_of_body_id_seq CASCADE');
        $this->addSql('DROP TABLE part_of_body');
        $this->addSql('DROP TABLE video_part_of_body');
        $this->addSql('DROP INDEX IDX_23DA50C1536269F1');
        $this->addSql('ALTER TABLE worksheet DROP part_of_body_id');
    }
}
