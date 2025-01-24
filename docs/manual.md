---
id: manual
title: Instalacja
sidebar_position: 4
---

# Instrukcja uruchomienia
---

## Środowisko deweloperskie

1. **Klonowanie repozytorium**  
Pierwszym krokiem jest pobranie kodu źródłowego aplikacji na lokalną maszynę. W tym celu korzystamy z Gita, który jest narzędziem do zarządzania wersjami.
Użyj poniższych komend w terminalu:  

```bash
git clone https://github.com/username/repository.git
cd repository
   ```
:::info To polecenie pobierze całe repozytorium z kodem źródłowym na Twój komputer i przejdzie do jego katalogu.
:::

2. **Instalacja zależności**:  
   Aplikacja korzysta z dwóch typów zależności: backendowych i frontendowych. Backendowe zarządzane są za pomocą Composer, natomiast frontendowe za pomocą npm.
   Uruchom kolejno:

```bash
composer install
npm install
   ```
Composer pobierze wszystkie pakiety PHP potrzebne do działania aplikacji, takie jak Laravel, a npm zainstaluje zależności JavaScript używane do obsługi interfejsu użytkownika.  

3. **Konfiguracja środowiska**  
Konfiguracja aplikacji opiera się na pliku .env, który przechowuje dane takie jak połączenie z bazą danych, klucze API czy inne wrażliwe informacje.

- Skopiuj domyślny plik konfiguracyjny:
```bash
cp .env.example .env
```
- Edytuj plik .env, wprowadzając swoje dane, np.

```bash
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=fuel_price_db
DB_USERNAME=root
DB_PASSWORD=notregularpassword
```
4. **Uruchomienie migracji bazy danych**  
Laravel oferuje potężny system migracji, który umożliwia łatwe tworzenie i modyfikowanie schematów bazy danych. Aby zainicjować strukturę bazy danych, użyj:

```bash
php artisan migrate
```
To polecenie utworzy wszystkie wymagane tabele w bazie danych.

5. **Start lokalnego serwera**  

```bash
php artisan serve
```
Po uruchomieniu serwera aplikacja będzie dostępna pod adresem: http://localhost:8000.  

---
## Szczegóły implementacji

### Rejestracja i logowanie

System rejestracji i logowania opiera się na funkcjach wbudowanych w Laravel, które zapewniają bezpieczeństwo i łatwość implementacji.  

- **Formularz rejestracyjny**
Poniżej znajduje się kod HTML formularza rejestracyjnego, który pozwala użytkownikom utworzyć konto:

```bash
<form action="/register" method="post">
    <input type="text" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Hasło">
    <button type="submit">Zarejestruj się</button>
</form>
```
- **Logowanie użytkownika**  
  Proces logowania opiera się na weryfikacji danych w bazie użytkowników oraz zarządzaniu sesjami. Laravel domyślnie oferuje funkcje do obsługi błędów, takich jak nieprawidłowe dane logowania.
- **Resetowanie hasła**
  Mechanizm resetowania hasła pozwala użytkownikom odzyskać dostęp do konta poprzez link wysyłany na adres e-mail.
