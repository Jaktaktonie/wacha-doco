---
id: opis-funkcjonalny-systemu
title: Opis Funkcjonalny Systemu
sidebar_position: 3
---

# Opis Funkcjonalny Systemu

## 1. Rejestracja i Logowanie

### 1.1 Rejestracja
- Użytkownicy mogą tworzyć konta, podając następujące informacje:
    - Imię i nazwisko
    - Email
    - Hasło
    - Potwierdzenie hasła
- Walidacja danych:
    - Sprawdzenie poprawności emaila.
    - Zgodność hasła i potwierdzenia hasła.
- Formularz zgłoszeniowy automatycznie sprawdza błędy i wyświetla komunikaty w interfejsie.

### 1.2 Logowanie
- Proces logowania wymaga podania:
    - Adresu email
    - Hasła
- Funkcjonalności:
    - Generowanie tokena autoryzacji po poprawnym zalogowaniu.
    - Obsługa błędów, takich jak nieprawidłowe dane logowania.

---

## 2. Dashboard użytkownika

### 2.1 Funkcjonalności Dashboardu
- Przegląd najważniejszych danych użytkownika:
    - Liczba punktów zdobytych za zgłaszanie cen paliw.
    - Lista ulubionych stacji paliw.
    - Historia działań użytkownika (zgłoszenia cen paliw).
    - Dane użytkownika (imię, email, ID).
- Zarządzanie ustawieniami:
    - Powiadomienia
    - Preferencje językowe
    - Prywatność

### 2.2 Interakcje z danymi
- Autoryzacja na podstawie tokena.
- Dynamiczne pobieranie i aktualizacja danych za pomocą API.

---

## 3. Mapa i lista stacji paliw

### 3.1 Mapa
- Wyświetlanie lokalizacji stacji paliw na mapie.
- Interaktywność:
    - Kliknięcie na stację wyświetla szczegółowe informacje.
    - Dynamiczne aktualizowanie zawartości na podstawie filtrów.

### 3.2 Lista stacji paliw
- Szczegółowe informacje o stacjach:
    - Nazwa
    - Adres
    - Rodzaje paliw i ich ceny
- Filtrowanie wyników:
    - Marka stacji (np. Orlen, BP).
    - Rodzaj paliwa (benzyna, diesel, LPG).
    - Cena paliwa (zakres cenowy).
    - Data ostatniej aktualizacji cen.

---

## 4. Zgłaszanie cen paliw

### 4.1 Formularz zgłoszeniowy
- Umożliwia użytkownikom:
    - Wprowadzanie ceny paliwa.
    - Załączanie zdjęcia potwierdzającego cenę.
    - Automatyczne przypisanie lokalizacji na podstawie mapy.

### 4.2 Walidacja i obsługa błędów
- Cena paliwa musi być większa od zera.
- Zdjęcie wymagane (tylko obsługiwane formaty).
- Lokalizacja stacji jest obowiązkowa.

---

## 5. Zarządzanie użytkownikami (Administrator)

### 5.1 Widok listy użytkowników
- Lista użytkowników zawiera:
    - Imię i nazwisko
    - Adres email
    - Status konta (aktywne/zablokowane)
- Możliwość:
    - Blokowania i odblokowywania kont.

### 5.2 Statystyki użytkowników
- Liczba zarejestrowanych użytkowników.
- Liczba aktywnych kont.
- Liczba zablokowanych kont.

---

## 6. Zarządzanie stacjami paliw (Administrator)

### 6.1 Dodawanie i edycja stacji
- Dodawanie nowych stacji:
    - Nazwa
    - Adres
    - Koordynaty GPS
    - Marka
- Edycja istniejących danych stacji.

### 6.2 Zarządzanie markami stacji
- Dodawanie, edytowanie i usuwanie marek stacji.

---

## 7. Zarządzanie propozycjami cen (Administrator)

### 7.1 Widok propozycji
- Lista zgłoszonych cen zawiera:
    - Cenę paliwa
    - Zdjęcie potwierdzające
    - Status propozycji (zaakceptowane/odrzucone)

### 7.2 Nagrody dla użytkowników
- System nagradzania użytkowników punktami za zatwierdzone zgłoszenia.

### 7.3 Statystyki propozycji
- Liczba zaakceptowanych i odrzuconych zgłoszeń.
- Średni czas rozpatrywania propozycji.
