---
title: Zobacz model na budowie telefonem z Androidem (AR)
summary: Unieś telefon z Androidem i Chrome, by zobaczyć model w pełnej skali nad kamerą, wyrównany do budynku dwoma punktami, na których stoisz, z soczewką rentgenowską i szybkim sprawdzeniem przy następnej wizycie. Do oglądania, nie do wytyczania.
keywords: ar, rzeczywistość rozszerzona, telefon, android, chrome, webxr, na budowie, budowa, kamera, pełna skala, rentgen, wyrównaj, dopasuj, sprawdź ponownie, arcore
from: 0f43b50b
---

{{ui:Widok na budowie (AR, telefon)}} w menu {{ui:Widoki}} pokazuje model w jego rzeczywistej skali nad kamerą telefonu. Działa na **telefonie z Androidem z Chrome**, na bezpiecznej stronie (https), gdy telefon obsługuje AR. Na iPhonie lub iPadzie, komputerze albo w aplikacji Android, która tylko pokazuje stronę www, pozycja mówi, dlaczego nie może się uruchomić; użyj tam widoku 3D albo otwórz tę stronę w Chrome na telefonie.

**Telefon służy do oglądania.** Nie mierz, nie wytyczaj ani nie ciąć niczego na podstawie tego, co pokazuje ekran: telefon dryfuje, gdy idziesz, a błąd wskazania rośnie z odległością od dwóch punktów, na których wyrównałeś (kilka centymetrów w ich pobliżu, więcej dalej). Nic tutaj nie ma dokładności geodezyjnej.

## Wyrównaj model

1. Otwórz model na telefonie i wybierz {{ui:Widok na budowie (AR, telefon)}}. Zezwól na kamerę.
2. Panel na dole nazywa pierwszy punkt (narożnik modelu przy ziemi). Stań tam na budowie, celuj zielonym kręgiem w ziemię i stuknij {{ui:Ustaw punkt}}.
3. Przejdź do drugiego punktu, oddalonego co najmniej o pół metra (im dalej, tym lepsze dopasowanie), i zrób to samo.
4. Model pojawia się w pełnej skali, obrócony i przesunięty, by pasować do obu miejsc. Panel podaje, jak zgodne są oba punkty.

{{ui:Zacznij od nowa}} czyści punkty. Wyrównanie zachowuje się w pliku modelu, więc następnym razem, gdy otworzysz model na budowie, zacznie już wyrównany.

## Soczewka rentgenowska

{{ui:Soczewka rentgenowska}} pokazuje cały model w pudełku przed telefonem (około półtora metra szerokości i trzy metry głębokości), a poza nim tylko słabe widmo, więc widzisz, co jest za ścianą, bez utraty rzeczywistej ściany.

## Następna wizyta

Stań przy pierwszym punkcie i stuknij {{ui:Sprawdź ponownie}}, potem {{ui:Ustaw punkt}}. Przy odchyłce poniżej 5 centymetrów wyrównanie zostaje. Do pół metra odchyłki model przesuwa się o różnicę. Przy większej odchyłce panel prosi, byś ponownie wskazał oba miejsca.

## Wyjście

{{ui:Wyjdź z AR}} kończy sesję. Obraz z kamery zostaje w przeglądarce: nic nie jest przesyłane.
