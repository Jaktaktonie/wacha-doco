---
id: manual
title: Instrukcja instalacji i uruchomienia
sidebar_position: 5
---

# Instrukcja lokalnego i zdalnego uruchomienia systemu

---

## 2.1 Wymagania

Aby uruchomić projekt lokalnie, wymagane są następujące programy i wersje:

- **XAMPP**: 8.2.12
- **Composer**: 2.8.3

---

## 2.2 Lokalna instalacja i uruchomienie

Wykonaj poniższe kroki, aby zainstalować i uruchomić projekt lokalnie:

### 2.2.1 Klonowanie repozytorium

```bash
git clone https://github.com/danielmosakowski/stacjapaliw.git
cd stacjapaliw
```

### 2.2.2 Instalacja zależności PHP

W katalogu projektu wykonaj polecenie:

```bash
composer install
```

### 2.32.3 Utworzenie pliku `.env`

Skopiuj przykładowy plik `.env`:

```bash
cp .env.example .env
```

Dostosuj ustawienia w pliku `.env`:
:::caution
```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=stacjapaliw
DB_USERNAME=root
DB_PASSWORD=
```
:::
### 2.2.4 Wygenerowanie klucza aplikacji

Wykonaj polecenie:

```bash
php artisan key:generate
```

### 2.2.5 Migracje bazy danych

Wykonaj polecenie:

```bash
php artisan migrate
```

### 2.2.6 Zapełnienie bazy danych

Wykonaj polecenie:

```bash
php artisan db:seed
```

### 2.2.7 Uruchomienie serwera aplikacji

Uruchom aplikację poleceniem:

```bash
php artisan serve
```

🌐 Aplikacja będzie dostępna pod adresem:

[http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 2.3 Zdalna instalacja i uruchomienie

W przypadku wdrożenia aplikacji na serwerze zdalnym wykonaj następujące kroki:

### 2.3.1 Klonowanie repozytorium

Zaloguj się na serwer i wykonaj:

```bash
git clone https://github.com/danielmosakowski/stacjapaliw.git
cd stacjapaliw
composer install
```

### 2.3.2 Konfiguracja pliku `.env`

Dostosuj ustawienia pliku `.env` w katalogu projektu, podobnie jak w instrukcji lokalnej.

### 2.3.3 Migracje i zapełnienie bazy danych

Wykonaj migracje i wypełnij bazę danych poleceniami:

```bash
php artisan migrate
php artisan db:seed
```

### 2.3.4 Konfiguracja serwera Apache

Ustaw serwer Apache tak, aby wskazywał na katalog `public` w projekcie.

### 2.3.5 Uruchomienie aplikacji

Aplikacja powinna być dostępna pod skonfigurowanym adresem serwera.