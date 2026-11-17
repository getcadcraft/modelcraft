---
title: Używanie ModelCraft z asystentem AI
summary: Pozwól własnemu asystentowi AI lub skryptowi oglądać model i budować proste bryły: uprawnienia, łączenie przez CadCraft Studio i dziennik aktywności.
keywords: ai, asystent, agent, mcp, model context protocol, skrypt, automatyzacja, modelowanie, pudełko, walec, renderowanie, kolejka renderowania, uprawnienia, rozłączenie, aktywność
from: 629cd0b7
---

## Czego się dowiesz

Jak pozwolić asystentowi AI (albo skryptowi, który napisałeś) pracować z ModelCraft i decydować, czego może dotykać.

ModelCraft **nie ma własnej AI** i niczego nigdzie nie wysyła. Asystenta dostarczasz sam: dowolny program, który obsługuje Model Context Protocol (MCP). ModelCraft tylko udostępnia mu narzędzia, a wybierasz, które.

## Włączanie

1. Otwórz {{ui:Ustawienia}} (koło zębate na pasku aplikacji albo {{key:Mod+,}}) i przejdź do karty {{ui:ModelCraft}}.
2. Pod {{ui:Asystenci}} zaznacz pole **Pozwól asystentom AI i skryptom korzystać z ModelCraft**. Jest wyłączone, dopóki tego nie zrobisz.
3. Wybierz, co może robić: **Odczyt** jest zaznaczony na początku; zaznacz **Edycja**, **Zapisz** albo **Eksport** tylko wtedy, gdy ich potrzebujesz.

Narzędzia spoza zaznaczonych uprawnień nie są oferowane asystentowi, a jeśli mimo to o któreś poprosi, ModelCraft odmawia i zapisuje to w dzienniku aktywności. Wyłączenie przełącznika kończy wszystkie połączenia naraz; {{ui:Resetuj ustawienia ModelCraft}} również go wyłącza.

## Łączenie asystenta

Asystenci łączą się przez **CadCraft Studio** na Twoim komputerze: Studio uruchamia mały serwer, do którego dotrze tylko ten komputer, chroniony tokenem, który tworzy za każdym razem, gdy startuje. W Studio wybierz {{ui:Połącz asystenta}} i skopiuj adres oraz token do swojego asystenta (Studio pokazuje dokładne ustawienia do wklejenia). Nigdy nie udostępniaj tokenu.

:::note
Karta przeglądarki nie może otworzyć połączenia dla asystenta: w aplikacjach przeglądarkowych przełącznik nie działa, dopóki nie użyjesz CadCraft Studio na swoim komputerze.
:::

## Pozostajesz w kontroli

- **Każda zmiana to jeden krok cofnięcia**, opisany nazwą asystenta (na przykład „Asystent: pudełko”). {{key:Mod+Z}} cofa ostatnią zmianę asystenta w całości.
- **Wiesz, kiedy jest połączony.** Przycisk na pasku aplikacji podaje nazwę asystenta, gdy jest połączony; kliknij go, aby zobaczyć, co może robić, albo aby go **Rozłączyć**.
- **Aktywność.** {{ui:Ustawienia}} › {{ui:ModelCraft}} › {{ui:Asystenci}} › {{ui:Aktywność}} wypisuje każde wywołanie: kiedy, które narzędzie, wykonane czy odrzucone. {{ui:Zapisz dziennik}} zachowuje kopię.

## Czego może zażądać asystent

| Narzędzie | Uprawnienie | Co robi |
|---|---|---|
| `app_info`, `model_describe` | Odczyt | Jednostkę modelu, rozmiar, każdą grupę i komponent z ich położeniem, informację, czy to zamknięta bryła, oraz jej objętość |
| `view_screenshot` | Odczyt | Obraz widoku 3D, taki jak jest pokazany |
| `box_add`, `cylinder_add` | Edycja | Pudełko albo walec jako nową grupę, w miejscu i o rozmiarze podanym przez Ciebie lub asystenta („3m”, „10'” albo liczba w jednostce modelu) |
| `instance_move`, `instances_erase` | Edycja | Przesuwa lub usuwa grupy i komponenty |
| `faces_list`, `materials_list` | Odczyt | Ściany grupy lub luźnej geometrii (kierunek, pole i środek każdej); materiały i kolory, którymi można malować |
| `push_pull` | Edycja | Wypycha lub ciągnie ścianę, tak jak robi {{ui:Wypychanie/ciągnięcie}} |
| `paint` | Edycja | Maluje ściany albo całą grupę kolorem lub materiałem |
| `group_make` | Edycja | Tworzy grupę lub komponent z luźnych ścian i grup |
| `scene_add`, `scene_show` | Edycja | Zapisuje widok jako scenę; przechodzi do zapisanej sceny |
| `mesh_add` | Edycja | Obiekt siatki, od którego można zacząć (sześcian, kula, walec …), tak jak dodaje go obszar roboczy {{ui:Siatka}} |
| `modifiers_list`, `modifier_add`, `modifier_set`, `modifier_remove` | Odczyt / Edycja | Stos modyfikatorów siatki: lustro, macierz, podział powierzchni, fazowanie i reszta; nic nie jest stosowane na stałe |
| `usd_export` | Eksport | Model jako OpenUSD (.usda, .usdc albo .usdz), tak jak zapisuje go zapis modelu jako USD ([USD](topic:usd)); do folderu dozwolonego w Studio, w przeciwnym razie jako pobranie |
| `render_still` | Eksport | Wyrenderowany obraz widoku lub zapisanej sceny, tak jak robi go przycisk {{ui:Renderuj}} w oknie {{ui:Renderuj}}, z Twoimi ustawieniami renderowania, chyba że poprosi o inne (ustawienie sceny: zewnętrzna, wnętrze, przekrój, noc lub auto; szybka albo wysokiej jakości, rozmiar, próbki, niebo); PNG, który może obejrzeć, albo plik PNG, EXR lub render w folderze dozwolonym w Studio ([Wyrenderuj obraz](topic:render)) |
| `render_queue` | Eksport | Dodaje obrazy wysokiej jakości do kolejki okna Renderuj (widok lub zapisane sceny) i uruchamia kolejkę; gotowe obrazy trafiają do dozwolonego folderu albo zostają w {{ui:Kolejka renderowania}} w oknie Renderuj. Wymaga WebGPU |
| `link_push` | Edycja | Aktualizuje model połączony z innego programu (zob. [Utrzymuj model .3dm na żywo](topic:live-3dm-link)) |
| `link_status` | Odczyt | Mówi, czy połączony model jest nadal dostępny i kiedy ostatnio się aktualizował |
| `undo` | Edycja | Cofa własne kroki |

Bryły tworzone przez asystenta trafiają jako grupy, więc nigdy nie łączą się z tym, co narysowałeś. Nie ma narzędzia, które zapisuje model: zapis zostaje przy Tobie, a eksport albo renderowanie wymaga zaznaczonego **Eksport**. Render nie zmienia modelu; renderowanie zapisanej sceny przesuwa widok do niej, tak jak robi {{ui:Sceny}}.

## Gdy coś nie działa

- **Asystent nie widzi narzędzi ModelCraft:** sprawdź, czy przełącznik jest włączony w tym oknie i czy okno jest otwarte w Studio.
- **„wymaga uprawnienia do edycji”:** zaznacz **Edycja** pod {{ui:Asystenci}}, a potem zapytaj ponownie.
- **Błędy „401” lub „token”:** token się zmienił (Studio został uruchomiony ponownie albo wybrano {{ui:Nowy token}}). Skopiuj nowy token do ustawień asystenta.

## Zobacz też

- [Przepisy dla asystentów AI](common:assistants-recipes): przykłady krok po kroku, każdy z narzędziami, które wywołuje.
