<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210708151817 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE exercise_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE worksheet_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE exercise (id INT NOT NULL, video_id INT DEFAULT NULL, number_of_repetitions INT DEFAULT NULL, number_of_series INT DEFAULT NULL, option VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AEDAD51C29C1004E ON exercise (video_id)');
        $this->addSql('CREATE TABLE worksheet (id INT NOT NULL, title VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN worksheet.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE worksheet_tag (worksheet_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(worksheet_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_351F554D2A915FFA ON worksheet_tag (worksheet_id)');
        $this->addSql('CREATE INDEX IDX_351F554DBAD26311 ON worksheet_tag (tag_id)');
        $this->addSql('CREATE TABLE worksheet_exercise (worksheet_id INT NOT NULL, exercise_id INT NOT NULL, PRIMARY KEY(worksheet_id, exercise_id))');
        $this->addSql('CREATE INDEX IDX_F40B5F222A915FFA ON worksheet_exercise (worksheet_id)');
        $this->addSql('CREATE INDEX IDX_F40B5F22E934951A ON worksheet_exercise (exercise_id)');
        $this->addSql('ALTER TABLE exercise ADD CONSTRAINT FK_AEDAD51C29C1004E FOREIGN KEY (video_id) REFERENCES video (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_tag ADD CONSTRAINT FK_351F554D2A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_tag ADD CONSTRAINT FK_351F554DBAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_exercise ADD CONSTRAINT FK_F40B5F222A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_exercise ADD CONSTRAINT FK_F40B5F22E934951A FOREIGN KEY (exercise_id) REFERENCES exercise (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE worksheet_exercise DROP CONSTRAINT FK_F40B5F22E934951A');
        $this->addSql('ALTER TABLE worksheet_tag DROP CONSTRAINT FK_351F554D2A915FFA');
        $this->addSql('ALTER TABLE worksheet_exercise DROP CONSTRAINT FK_F40B5F222A915FFA');
        $this->addSql('DROP SEQUENCE exercise_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE worksheet_id_seq CASCADE');
        $this->addSql('DROP TABLE exercise');
        $this->addSql('DROP TABLE worksheet');
        $this->addSql('DROP TABLE worksheet_tag');
        $this->addSql('DROP TABLE worksheet_exercise');
    }
}
