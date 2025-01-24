---
id: tech
title: Opis Technologiczny
sidebar_position: 3
---

# Opis Technologiczny

Opis technologiczny niniejszego projektu został stworzony, aby szczegółowo przedstawić zastosowane rozwiązania techniczne, narzędzia oraz technologie, które wykorzystano w procesie realizacji aplikacji. Dokument ten ma na celu zapewnienie czytelnikowi pełnego obrazu zastosowanych metod, a także uzasadnienie podjętych decyzji technologicznych. Dzięki temu możliwe jest lepsze zrozumienie struktury i działania aplikacji oraz ocena jej potencjału do dalszego rozwoju.


Przygotowując opis technologiczny, kierowaliśmy się potrzebą przejrzystej dokumentacji, która będzie pomocna nie tylko dla członków zespołu projektowego, ale również dla przyszłych użytkowników i osób odpowiedzialnych za rozwój aplikacji. Dokument stanowi cenny zasób, który:

:::tip
- Wyjaśnia, dlaczego wybrane technologie i narzędzia zostały uznane za najbardziej odpowiednie dla tego projektu.
- Zawiera szczegółowy opis komponentów aplikacji, takich jak warstwa backendowa, frontendowa, bazy danych oraz narzędzia wspierające.
- Ułatwia kontynuację pracy nad projektem w przyszłości.
:::
---

## 3.1 Języki programowania

- **PHP 8.3.0**
    - Wybraliśmy PHP, ponieważ jest szeroko stosowany i doskonale nadaje się do logiki backendowej. PHP zapewnia stabilność, łatwą integrację z bazami danych oraz dostęp do licznych gotowych bibliotek i narzędzi.

- **JavaScript ES 2024**
    - JavaScript umożliwia tworzenie dynamicznych i intuicyjnych interfejsów użytkownika, odpowiadając za interaktywność na froncie.

---

## 3.2 Framework

- **Laravel 11.0**
    - Laravel to framework PHP z wieloma wbudowanymi funkcjami, takimi jak system autoryzacji, zarządzanie bazą danych oraz wsparcie dla REST API. Wybraliśmy Laravel z uwagi na wcześniejsze doświadczenia zespołu.

---

## 3.3 Front-end

- **HTML5 i CSS3**
    - HTML odpowiada za strukturę i semantykę strony, a CSS za stylizację i wizualne dostosowanie aplikacji.

---

## 3.4 System zarządzania bazą danych

- **MySQL 8.4.3**
    - MySQL został wybrany ze względu na jego znajomość wśród wszystkich członków zespołu.

---

## 3.5 Serwer HTTP

- **Apache**
    - Wybraliśmy Apache ze względu na jego łatwą integrację z MySQL oraz znajomość środowiska przez zespół.

---

## 3.6 Narzędzie do zarządzania wersją

- **Git/GitHub**
    - GitHub służy do hostowania kodu, zarządzania projektami i współpracy zespołowej. Wybrano go dzięki doświadczeniom zdobytym w poprzednich projektach.

---

## 3.7 Narzędzie do zarządzania zależnościami

- **Composer 2.7.8**
    - Composer to menedżer zależności w PHP, który wykorzystaliśmy do instalacji bibliotek, pakietów i frameworków, takich jak Laravel.

---

## 3.8 Testy

- **Postman 11.19.0**
    - Narzędzie do testowania, dokumentowania i automatyzacji interfejsów API. Umożliwia wysyłanie zapytań HTTP, takich jak GET, POST, PUT czy DELETE, oraz analizowanie odpowiedzi serwera.

---