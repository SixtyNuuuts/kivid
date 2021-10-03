<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210924134346 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE commentary_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE doctor_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE exercise_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE exercise_stat_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE notification_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE option_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE patient_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE reset_password_request_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE score_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE subscription_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE tag_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE video_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE worksheet_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE worksheet_session_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE commentary (id INT NOT NULL, exercise_id INT DEFAULT NULL, worksheet_id INT DEFAULT NULL, patient_id INT DEFAULT NULL, doctor_id INT DEFAULT NULL, worksheet_session_id INT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, content TEXT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1CAC12CAE934951A ON commentary (exercise_id)');
        $this->addSql('CREATE INDEX IDX_1CAC12CA2A915FFA ON commentary (worksheet_id)');
        $this->addSql('CREATE INDEX IDX_1CAC12CA6B899279 ON commentary (patient_id)');
        $this->addSql('CREATE INDEX IDX_1CAC12CA87F4FB17 ON commentary (doctor_id)');
        $this->addSql('CREATE INDEX IDX_1CAC12CA2D97C74D ON commentary (worksheet_session_id)');
        $this->addSql('COMMENT ON COLUMN commentary.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE doctor (id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, avatar_url VARCHAR(255) DEFAULT NULL, is_verified BOOLEAN DEFAULT NULL, google_id VARCHAR(255) DEFAULT NULL, facebook_id VARCHAR(255) DEFAULT NULL, gender VARCHAR(255) DEFAULT NULL, description TEXT DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, street VARCHAR(255) DEFAULT NULL, entity_name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1FC0F36AE7927C74 ON doctor (email)');
        $this->addSql('COMMENT ON COLUMN doctor.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE exercise (id INT NOT NULL, video_id INT DEFAULT NULL, worksheet_id INT DEFAULT NULL, number_of_repetitions INT DEFAULT NULL, number_of_series INT DEFAULT NULL, option VARCHAR(255) DEFAULT NULL, tempo VARCHAR(255) DEFAULT NULL, hold INT DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, position INT DEFAULT NULL, is_completed BOOLEAN DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AEDAD51C29C1004E ON exercise (video_id)');
        $this->addSql('CREATE INDEX IDX_AEDAD51C2A915FFA ON exercise (worksheet_id)');
        $this->addSql('COMMENT ON COLUMN exercise.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE exercise_stat (id INT NOT NULL, exercise_id INT NOT NULL, worksheet_session_id INT DEFAULT NULL, worksheet_id INT NOT NULL, done_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, criterion VARCHAR(255) NOT NULL, rating DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_799D9D93E934951A ON exercise_stat (exercise_id)');
        $this->addSql('CREATE INDEX IDX_799D9D932D97C74D ON exercise_stat (worksheet_session_id)');
        $this->addSql('CREATE INDEX IDX_799D9D932A915FFA ON exercise_stat (worksheet_id)');
        $this->addSql('CREATE TABLE notification (id INT NOT NULL, patient_id INT DEFAULT NULL, doctor_id INT DEFAULT NULL, type VARCHAR(255) NOT NULL, content JSON NOT NULL, is_viewed BOOLEAN NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_BF5476CA6B899279 ON notification (patient_id)');
        $this->addSql('CREATE INDEX IDX_BF5476CA87F4FB17 ON notification (doctor_id)');
        $this->addSql('COMMENT ON COLUMN notification.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE option (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE patient (id INT NOT NULL, doctor_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, avatar_url VARCHAR(255) DEFAULT NULL, is_verified BOOLEAN DEFAULT NULL, google_id VARCHAR(255) DEFAULT NULL, facebook_id VARCHAR(255) DEFAULT NULL, gender VARCHAR(255) DEFAULT NULL, birthdate TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, last_login_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, add_request_doctor BOOLEAN DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1ADAD7EBE7927C74 ON patient (email)');
        $this->addSql('CREATE INDEX IDX_1ADAD7EB87F4FB17 ON patient (doctor_id)');
        $this->addSql('COMMENT ON COLUMN patient.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN patient.birthdate IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE reset_password_request (id INT NOT NULL, patient_id INT DEFAULT NULL, doctor_id INT DEFAULT NULL, selector VARCHAR(20) NOT NULL, hashed_token VARCHAR(100) NOT NULL, requested_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, expires_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_7CE748A6B899279 ON reset_password_request (patient_id)');
        $this->addSql('CREATE INDEX IDX_7CE748A87F4FB17 ON reset_password_request (doctor_id)');
        $this->addSql('COMMENT ON COLUMN reset_password_request.requested_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN reset_password_request.expires_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE score (id INT NOT NULL, patient_id INT NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, label VARCHAR(255) DEFAULT NULL, points INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_329937516B899279 ON score (patient_id)');
        $this->addSql('COMMENT ON COLUMN score.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE subscription (id INT NOT NULL, patient_id INT NOT NULL, stripe_subscription_id VARCHAR(255) DEFAULT NULL, stripe_customer_id VARCHAR(255) DEFAULT NULL, current_period_start TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, current_period_end TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, is_active BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_A3C664D36B899279 ON subscription (patient_id)');
        $this->addSql('CREATE TABLE tag (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE video (id INT NOT NULL, name VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, thumbnail_url VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, youtube_id VARCHAR(255) DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN video.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE video_tag (video_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(video_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_F910728729C1004E ON video_tag (video_id)');
        $this->addSql('CREATE INDEX IDX_F9107287BAD26311 ON video_tag (tag_id)');
        $this->addSql('CREATE TABLE video_option (video_id INT NOT NULL, option_id INT NOT NULL, PRIMARY KEY(video_id, option_id))');
        $this->addSql('CREATE INDEX IDX_62D1A07D29C1004E ON video_option (video_id)');
        $this->addSql('CREATE INDEX IDX_62D1A07DA7C41D6F ON video_option (option_id)');
        $this->addSql('CREATE TABLE worksheet (id INT NOT NULL, doctor_id INT DEFAULT NULL, patient_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, part_of_body VARCHAR(255) DEFAULT NULL, duration INT DEFAULT NULL, per_day INT DEFAULT NULL, per_week INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_23DA50C187F4FB17 ON worksheet (doctor_id)');
        $this->addSql('CREATE INDEX IDX_23DA50C16B899279 ON worksheet (patient_id)');
        $this->addSql('COMMENT ON COLUMN worksheet.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE worksheet_session (id INT NOT NULL, worksheet_id INT NOT NULL, start_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, end_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, done_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, is_in_progress BOOLEAN DEFAULT NULL, is_completed BOOLEAN DEFAULT NULL, exec_order INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_411F02A2A915FFA ON worksheet_session (worksheet_id)');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CAE934951A FOREIGN KEY (exercise_id) REFERENCES exercise (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CA2A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CA6B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CA87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CA2D97C74D FOREIGN KEY (worksheet_session_id) REFERENCES worksheet_session (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE exercise ADD CONSTRAINT FK_AEDAD51C29C1004E FOREIGN KEY (video_id) REFERENCES video (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE exercise ADD CONSTRAINT FK_AEDAD51C2A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE exercise_stat ADD CONSTRAINT FK_799D9D93E934951A FOREIGN KEY (exercise_id) REFERENCES exercise (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE exercise_stat ADD CONSTRAINT FK_799D9D932D97C74D FOREIGN KEY (worksheet_session_id) REFERENCES worksheet_session (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE exercise_stat ADD CONSTRAINT FK_799D9D932A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CA6B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CA87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE patient ADD CONSTRAINT FK_1ADAD7EB87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748A6B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748A87F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE score ADD CONSTRAINT FK_329937516B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE subscription ADD CONSTRAINT FK_A3C664D36B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE video_tag ADD CONSTRAINT FK_F910728729C1004E FOREIGN KEY (video_id) REFERENCES video (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE video_tag ADD CONSTRAINT FK_F9107287BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE video_option ADD CONSTRAINT FK_62D1A07D29C1004E FOREIGN KEY (video_id) REFERENCES video (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE video_option ADD CONSTRAINT FK_62D1A07DA7C41D6F FOREIGN KEY (option_id) REFERENCES option (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C187F4FB17 FOREIGN KEY (doctor_id) REFERENCES doctor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet ADD CONSTRAINT FK_23DA50C16B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE worksheet_session ADD CONSTRAINT FK_411F02A2A915FFA FOREIGN KEY (worksheet_id) REFERENCES worksheet (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE commentary DROP CONSTRAINT FK_1CAC12CA87F4FB17');
        $this->addSql('ALTER TABLE notification DROP CONSTRAINT FK_BF5476CA87F4FB17');
        $this->addSql('ALTER TABLE patient DROP CONSTRAINT FK_1ADAD7EB87F4FB17');
        $this->addSql('ALTER TABLE reset_password_request DROP CONSTRAINT FK_7CE748A87F4FB17');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C187F4FB17');
        $this->addSql('ALTER TABLE commentary DROP CONSTRAINT FK_1CAC12CAE934951A');
        $this->addSql('ALTER TABLE exercise_stat DROP CONSTRAINT FK_799D9D93E934951A');
        $this->addSql('ALTER TABLE video_option DROP CONSTRAINT FK_62D1A07DA7C41D6F');
        $this->addSql('ALTER TABLE commentary DROP CONSTRAINT FK_1CAC12CA6B899279');
        $this->addSql('ALTER TABLE notification DROP CONSTRAINT FK_BF5476CA6B899279');
        $this->addSql('ALTER TABLE reset_password_request DROP CONSTRAINT FK_7CE748A6B899279');
        $this->addSql('ALTER TABLE score DROP CONSTRAINT FK_329937516B899279');
        $this->addSql('ALTER TABLE subscription DROP CONSTRAINT FK_A3C664D36B899279');
        $this->addSql('ALTER TABLE worksheet DROP CONSTRAINT FK_23DA50C16B899279');
        $this->addSql('ALTER TABLE video_tag DROP CONSTRAINT FK_F9107287BAD26311');
        $this->addSql('ALTER TABLE exercise DROP CONSTRAINT FK_AEDAD51C29C1004E');
        $this->addSql('ALTER TABLE video_tag DROP CONSTRAINT FK_F910728729C1004E');
        $this->addSql('ALTER TABLE video_option DROP CONSTRAINT FK_62D1A07D29C1004E');
        $this->addSql('ALTER TABLE commentary DROP CONSTRAINT FK_1CAC12CA2A915FFA');
        $this->addSql('ALTER TABLE exercise DROP CONSTRAINT FK_AEDAD51C2A915FFA');
        $this->addSql('ALTER TABLE exercise_stat DROP CONSTRAINT FK_799D9D932A915FFA');
        $this->addSql('ALTER TABLE worksheet_session DROP CONSTRAINT FK_411F02A2A915FFA');
        $this->addSql('ALTER TABLE commentary DROP CONSTRAINT FK_1CAC12CA2D97C74D');
        $this->addSql('ALTER TABLE exercise_stat DROP CONSTRAINT FK_799D9D932D97C74D');
        $this->addSql('DROP SEQUENCE commentary_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE doctor_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE exercise_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE exercise_stat_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE notification_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE option_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE patient_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE reset_password_request_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE score_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE subscription_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE tag_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE video_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE worksheet_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE worksheet_session_id_seq CASCADE');
        $this->addSql('DROP TABLE commentary');
        $this->addSql('DROP TABLE doctor');
        $this->addSql('DROP TABLE exercise');
        $this->addSql('DROP TABLE exercise_stat');
        $this->addSql('DROP TABLE notification');
        $this->addSql('DROP TABLE option');
        $this->addSql('DROP TABLE patient');
        $this->addSql('DROP TABLE reset_password_request');
        $this->addSql('DROP TABLE score');
        $this->addSql('DROP TABLE subscription');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE video');
        $this->addSql('DROP TABLE video_tag');
        $this->addSql('DROP TABLE video_option');
        $this->addSql('DROP TABLE worksheet');
        $this->addSql('DROP TABLE worksheet_session');
    }
}
