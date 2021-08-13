<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210803122926 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE exercise_stat_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE exercise_stat (id INT NOT NULL, exercise_id INT NOT NULL, done_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, criterion VARCHAR(255) NOT NULL, rating INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_799D9D93E934951A ON exercise_stat (exercise_id)');
        $this->addSql('COMMENT ON COLUMN exercise_stat.done_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE exercise_stat ADD CONSTRAINT FK_799D9D93E934951A FOREIGN KEY (exercise_id) REFERENCES exercise (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE exercise_stat_id_seq CASCADE');
        $this->addSql('DROP TABLE exercise_stat');
    }
}
