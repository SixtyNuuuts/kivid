<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210815182220 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE subscription ALTER current_period_start TYPE TIMESTAMP(0) WITHOUT TIME ZONE');
        $this->addSql('ALTER TABLE subscription ALTER current_period_start DROP DEFAULT');
        $this->addSql('ALTER TABLE subscription ALTER current_period_end TYPE TIMESTAMP(0) WITHOUT TIME ZONE');
        $this->addSql('ALTER TABLE subscription ALTER current_period_end DROP DEFAULT');
        $this->addSql('COMMENT ON COLUMN subscription.current_period_start IS NULL');
        $this->addSql('COMMENT ON COLUMN subscription.current_period_end IS NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE subscription ALTER current_period_start TYPE TIMESTAMP(0) WITHOUT TIME ZONE');
        $this->addSql('ALTER TABLE subscription ALTER current_period_start DROP DEFAULT');
        $this->addSql('ALTER TABLE subscription ALTER current_period_end TYPE TIMESTAMP(0) WITHOUT TIME ZONE');
        $this->addSql('ALTER TABLE subscription ALTER current_period_end DROP DEFAULT');
        $this->addSql('COMMENT ON COLUMN subscription.current_period_start IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN subscription.current_period_end IS \'(DC2Type:datetime_immutable)\'');
    }
}
