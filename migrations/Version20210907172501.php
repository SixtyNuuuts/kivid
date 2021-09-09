<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210907172501 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT fk_23da50c19861216f');
        $this->addSql('DROP INDEX idx_23da50c19861216f');
        $this->addSql('ALTER TABLE worksheet ADD doctor_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet ADD patient_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet RENAME COLUMN prescriber_id TO creator_id');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C161220EA6 FOREIGN KEY (creator_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C187F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C16B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_23DA50C161220EA6 ON worksheet (creator_id)');
        $this->addSql('CREATE INDEX IDX_23DA50C187F4FB17 ON worksheet (doctor_id)');
        $this->addSql('CREATE INDEX IDX_23DA50C16B899279 ON worksheet (patient_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C161220EA6');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C187F4FB17');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C16B899279');
        $this->addSql('DROP INDEX IDX_23DA50C161220EA6');
        $this->addSql('DROP INDEX IDX_23DA50C187F4FB17');
        $this->addSql('DROP INDEX IDX_23DA50C16B899279');
        $this->addSql('ALTER TABLE worksheet ADD prescriber_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE worksheet DROP creator_id');
        $this->addSql('ALTER TABLE worksheet DROP doctor_id');
        $this->addSql('ALTER TABLE worksheet DROP patient_id');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT fk_23da50c19861216f FOREIGN KEY (prescriber_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_23da50c19861216f ON worksheet (prescriber_id)');
    }
}
