---
title: Zapisywanie, otwieranie i eksport USD
summary: Zapisz cały model jako USD (.usda, .usdc lub .usdz) bez utraty czegokolwiek, otwórz go ponownie i importuj sceny USD z innych programów 3D.
keywords: usd, usda, usdc, usdz, openusd, universal scene description, zapisz jako, eksport, import, składanie scen, archviz, openpbr, materialx, paczka
from: 73d299f9
---

USD to format scen, z którego korzysta wiele programów 3D, do renderowania i archwizualizacji. ModelCraft zapisuje i odczytuje go. `.modelcraft` pozostaje formatem, który zapisuje {{ui:Zapisz}}; USD to jeden z wyborów w {{ui:Zapisz jako}}.

## Zapisz jako USD

1. Wybierz {{ui:Zapisz jako}} w grupie {{ui:Plik}} (lub naciśnij {{key:Mod+Shift+S}}).
2. Wybierz format: {{ui:Tekst (.usda)}} (czytelny, dobry do kontroli wersji), {{ui:Binarny (.usdc)}} (najmniejszy i najszybszy) albo {{ui:Paczka (.usdz)}} (jeden plik z teksturami w środku).
3. Plik jest pobierany (w aplikacji na komputer wybierasz, gdzie ma trafić).

Te same wybory są w {{ui:Eksport}} › {{ui:USD (.usda, .usdc, .usdz)…}}.

## Nic nie przepada

Otwórz plik USD zapisany przez ModelCraft, a model wróci dokładnie taki sam: ściany z otworami, miękkie i ukryte krawędzie, krzywe, grupy i komponenty, etykiety, sceny, wymiary, prowadnice, płaszczyzny przekroju, lampy, zaimportowane tekstury i widok. Inne programy widzą ten sam model jako siatki, grupy, prototypy komponentów, materiały, lampy i kamery.

:::note
Jeśli inny program zmieni geometrię grupy lub komponentu, ModelCraft otworzy tę część jako siatkę z zachowaną zmianą i poda, ile części odczytał w ten sposób. Umieszczenie przesunięte lub usunięte w innym programie pozostaje przesunięte lub usunięte.
:::

## Otwórz lub importuj cudzy USD

- {{ui:Otwórz}} plik `.usd`, `.usda`, `.usdc` lub `.usdz`, aby zacząć model od niego.
- {{ui:Importuj}} go, aby dodać do otwartego modelu. Przeciągnij pliki, do których się odwołuje (inne warstwy, tekstury), razem z nim.

Siatki wchodzą z normalnymi, współrzędnymi UV i kolorami; wspólna geometria jako komponenty, materiały jako kolory malowania, lampy jako lampy, a kamery jako sceny, w metrach, z osią Z w górę, niezależnie od jednostek i osi pionowej pliku.

## Jeszcze nie

Animacje, szkielety i grafy węzłów MaterialX nie są jeszcze odczytywane ani zapisywane jako USD. Animacje ModelCraft i materiały węzłowe są zachowywane w pliku USD zapisanym przez ModelCraft, aby ModelCraft mógł go ponownie otworzyć, ale inne programy ich nie widzą. Warstwy, do których odwołuje się plik, a których ModelCraft nie potrafi odczytać (na przykład dokument MaterialX), są pomijane z uwagą.
