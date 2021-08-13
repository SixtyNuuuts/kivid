<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210811145957 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE worksheet_exercise');
        $this->addSql('ALTER TABLE exercise ADD worksheet_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE exercise ADD CONSTRAINT FK_AEDAD51C2A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_AEDAD51C2A915FFA ON exercise (worksheet_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE worksheet_exercise (worksheet_id INT NOT NULL, exercise_id INT NOT NULL, PRIMARY KEY(worksheet_id, exercise_id))');
        $this->addSql('CREATE INDEX idx_f40b5f22e934951a ON worksheet_exercise (exercise_id)');
        $this->addSql('CREATE INDEX idx_f40b5f222a915ffa ON worksheet_exercise (worksheet_id)');
        $this->addSql('ALTER TABLE worksheet_exercise ADD CONSTRAINT fk_f40b5f222a915ffa FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_exercise ADD CONSTRAINT fk_f40b5f22e934951a FOREIGN KEY (exercise_id) REFERENCES exercise (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE exercise DROP CONSTRAINT FK_AEDAD51C2A915FFA');
        $this->addSql('DROP INDEX IDX_AEDAD51C2A915FFA');
        $this->addSql('ALTER TABLE exercise DROP worksheet_id');
    }
}
