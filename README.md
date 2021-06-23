# KIVID

Application : Prescriptions d'exercices de kinésithérapie. 

### Prérequi

*Prérequis sur votre machine pour le bon fonctionnement de ce projet : 
- PHP Version 7.4 [Installer PHP](https://www.php.net/manual/fr/install.php)
- Composer [Installer Composer](https://getcomposer.org/download/) 
- Symfony CLI (Binaire) [Installer Binaire Symfony](https://symfony.com/download) 
- Docker & Docker-compose [Installer Docker-compose](https://docs.docker.com/compose/install/)
- Npm [Installer Npm](https://www.npmjs.com/get-npm) 

### Installation

Après avoir cloné le projet avec ``git clone https://gitlab.com/kivid/kivid.git kivid``

Exécutez la commande ``cd kivid`` pour vous rendre dans le dossier depuis le terminal.

Ensuite, dans l'ordre taper les commandes dans votre terminal : 

- 1 ``composer install`` afin d'installer toutes les dépendances composer du projet.

- 2 ``npm install --force`` afin d'installer toutes les dépendances npm du projet.

- 3 ``npm run dev`` pour compiler les assets en dev, ``npm run watch`` pour compiler et observer les modifications des assets en dev, ``npm run build`` pour le build prod.

- 4 ``docker-compose up -d`` afin de lancer l'ensemble des conteneurs docker (BDD + Mailer).

- 5 ``symfony console doctrine:migrations:migrate`` afin d'exécuter l'ensemble des migrations en base de donnée.

- 6 ``symfony serve -d`` afin de lancer le serveur symfony.

Vous pouvez maintenant accéder à l'application : ``https://127.0.0.1:8000``


### Analyse du code

- 1 ``php vendor/bin/phpcs -p --standard=PSR12 --ignore=./src/Kernel.php ./src`` pour analyser les fichiers PHP, Javascript, CSS afin de détecter des violations définies par le standard PSR2.

- 2 ``php vendor/bin/phpcbf -p --standard=PSR12 --ignore=./src/Kernel.php ./src`` pour corriger au maximum les erreurs détectées par phpcs.

- 3 ``php vendor/bin/phpstan analyse`` pour une analyse statique du code.

- 4 ``symfony console lint:twig templates`` pour vérifier les erreurs de syntaxe dans les fichiers Twig.
