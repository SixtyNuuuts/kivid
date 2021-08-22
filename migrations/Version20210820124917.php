<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210820124917 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentary ADD patient_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE commentary ADD doctor_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CA6B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CA87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_1CAC12CA6B899279 ON commentary (patient_id)');
        $this->addSql('CREATE INDEX IDX_1CAC12CA87F4FB17 ON commentary (doctor_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE commentary DROP CONSTRAINT FK_1CAC12CA6B899279');
        $this->addSql('ALTER TABLE commentary DROP CONSTRAINT FK_1CAC12CA87F4FB17');
        $this->addSql('DROP INDEX IDX_1CAC12CA6B899279');
        $this->addSql('DROP INDEX IDX_1CAC12CA87F4FB17');
        $this->addSql('ALTER TABLE commentary DROP patient_id');
        $this->addSql('ALTER TABLE commentary DROP doctor_id');
    }
}
