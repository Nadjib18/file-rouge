# Tuto

- lien du tuto: [https://www.moesif.com/blog/technical/api-development/Django-REST-API-Tutorial/](tutoriel django rest)

## Environnement vityuel

- installer l'environnement virtuel

```powershell
python -m venv venv
```

- activer l'environnement virtuel

```powershell
venv\Scripts\activate
```

- désactiver l'environnement virtuel

```powershell
deactivate
```

## Dépendances du projet

- création du fichier requirements.txt

```text
django
djangorestframework
environs
```

- installationdes dépendances

```powershell
pip install -r requirements.txt
```

## Initialisation du projet

- création du projet Django

```powershell
django-admin startproject myworkinprogress
```

- ajout de "rest_framework" dans le fichier setting.py dans la liste INSTALLED_APPS

- lancer le serveur django pour vérifier que l'installation a réussi

```powershell
cd myworkinprogress
python manage.py runserver
```

Aller sur le lien,typiquement [http://127.0.0.1:8000](lien de l'application) et voir le résultat

- migration initiale

```powershell
python manage.py migrate
```

## Création de l'application Django

```powershell
python manage.py startapp api
```

- ajout de "api" dans le fichier setting.py dans la liste INSTALLED_APPS

## Définir les modèles dans le fichier models.py

- faire les migrations

```powershell
python manage.py makemigrations api
python manage.py migrate
```

## Créer un sérializer dans le fichier serializers.py que l'on va créer

## Créer les vues dans le fichier views.py

## Configurer le routage url
