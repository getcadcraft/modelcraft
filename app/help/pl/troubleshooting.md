---
title: Rozwiązywanie problemów
summary: Objawy, przyczyny i rozwiązania, od pustego widoku 3D po importy w złym rozmiarze, wraz z komunikatami, które pokazuje ModelCraft.
keywords: problem, kłopot, błąd, nie działa, pusty, webgl, grafika, wolno, komunikat, import nieudany, zły rozmiar, nie można zaznaczyć, dotyk, klawisze nie działają, utracona praca
from: 6e7394be
---

## Widok 3D jest pusty

**Objaw:** środek ekranu pozostaje pusty albo pokazuje tylko kolor tła, a klikanie narzędzi nic nie robi.

**Przyczyna:** ModelCraft rysuje za pomocą WebGL 2, czyli grafiki 3D przeglądarki. Brakuje jej, gdy przeglądarka jest stara, gdy wyłączono akcelerację sprzętową albo gdy sterownik grafiki jest zablokowany.

**Rozwiązanie:**

:::chromium
1. Otwórz ustawienia przeglądarki i wyszukaj „akceleracja grafiki”.
2. Włącz „Użyj akceleracji grafiki, jeśli jest dostępna” i uruchom przeglądarkę ponownie.
3. Jeśli jest już włączona, wpisz `chrome://gpu` w pasku adresu (`edge://gpu` w Edge) i poszukaj „WebGL2” na liście. Jeśli jest tam napisane, że wyłączone, zaktualizuj sterownik grafiki.
:::

:::firefox
1. Otwórz **Ustawienia**, potem **Ogólne**, i przewiń do „Wydajność”.
2. Odznacz „Użyj zalecanych ustawień wydajności”, a następnie zaznacz „Użyj akceleracji sprzętowej, jeśli jest dostępna”. Uruchom Firefox ponownie.
3. Jeśli nadal się nie udaje, wpisz `about:support` w pasku adresu i sprawdź w sekcji „Grafika” wpis WebGL 2.
:::

:::safari
Zaktualizuj macOS i Safari. Najnowsze wersje Safari mają zawsze włączony WebGL 2. Jeśli w menu **Safari**, potem **Ustawienia**, potem **Zaawansowane** (lub **Feature Flags**) zmieniono funkcje eksperymentalne, zresetuj je.
:::

Na komputerze służbowym, pulpicie zdalnym lub w maszynie wirtualnej grafika 3D może być zablokowana przez zasady. Wypróbuj inny komputer. Zob. [Przeglądarki i komputery](common:browsers).

## Klawisze nie działają albo piszą w polu

**Przyczyna:** fokus klawiatury jest w polu panelu: na liście {{ui:Ściany}} w {{ui:Styl}}, w ustawieniu słońca, w polu {{ui:Nazwa}} w {{ui:Informacje o obiekcie}} albo w wyborze jednostek. Litery i klawisze strzałek trafiają wtedy do tego pola.

**Rozwiązanie:** kliknij w widok 3D, a potem naciśnij klawisz ponownie. Klawisze nie działają też, gdy otwarte jest okno dialogowe.

## Wpisanie liczby nic nie robi

- **Jeszcze brak kierunku.** Wpisana długość idzie w kierunku, w który wskazuje kursor od pierwszego kliknięcia. Przesuń kursor nieco w wybranym kierunku, a potem wpisz wartość.
- **Zły moment.** Większość narzędzi przyjmuje wpisaną wartość dopiero po pierwszym kliknięciu: najpierw kliknij pierwszy narożnik, ścianę lub punkt, z którego ma się odbyć przesunięcie. {{ui:Okrąg}} i {{ui:Wielokąt}} przyjmują liczbę boków przed pierwszym kliknięciem.
- **"Wpisz długość, np. 3m, 10'6" lub 4m,3m."** ModelCraft nie mógł tego odczytać. Sprawdź, czy nie ma przecinka dziesiętnego (`2,5`): użyj kropki.

## Kształt zaczyna się w złym miejscu na ekranie dotykowym

**Objaw:** palcem pierwszy prostokąt jest w porządku, ale następny prostokąt, okrąg lub linia zaczyna się tam, gdzie kończył się poprzedni dotyk, a nie tam, gdzie dotknięto.

**Przyczyna:** błąd w tej wersji: na ekranie dotykowym narzędzie zapamiętuje ostatni punkt przyciągania z poprzedniego gestu.

**Rozwiązanie:** przed każdym nowym kształtem dotknij ponownie przycisku narzędzia na pasku narzędzi. Uruchamia to narzędzie od nowa, a pierwszy punkt trafia tam, gdzie dotykasz.

## Edycja jednej grupy zmieniła inną

**Objaw:** skopiowano grupę za pomocą {{ui:Przesuń}} i {{key:Ctrl}}, otwarto jedną kopię i ją edytowano, a druga kopia też się zmieniła. {{ui:Lista obiektów}} pokazuje obie z tą samą nazwą.

**Przyczyna:** w tej wersji kopiowanie grupy tworzy drugie umieszczenie tej samej grupy, tak jak w przypadku komponentu. Przycisk {{ui:Uczyń niepowtarzalnym}} jest oferowany tylko dla komponentów.

**Rozwiązanie:** zaznacz kopię, którą chcesz zmienić, kliknij {{ui:Utworzenie komponentu}} w {{ui:Informacje o obiekcie}}, a potem {{ui:Uczyń niepowtarzalnym}}. Ta kopia ma teraz własną zawartość. Można też ją {{ui:Rozbij}}.

## Wypychanie/ciągnięcie nie działa tak, jak się spodziewano

- **"Wypychanie/ciągnięcie działa na ścianie. Kliknij ścianę."** Kliknięto krawędź albo puste miejsce. Najedź kursorem, aż ściana się podświetli, i kliknij.
- **Ściana jest wewnątrz grupy.** Najpierw kliknij grupę dwukrotnie, aby ją otworzyć.
- **Okno nie przecięło ściany.** Prostokąt musi być narysowany na powierzchni ściany, a nie przed nią, a ściana musi mieć tylną powierzchnię. Zob. [Wycinanie otworu w ścianie](topic:openings#if-it-did-not-cut-through).
- **Dwie bryły nachodzą na siebie bez połączenia.** Bryły wepchnięte jedna w drugą nie przecinają się i nie łączą w tej wersji.

## Linia lub kształt nie utworzył ściany

Ściana wypełnia się tylko wtedy, gdy krawędzie zamykają płaską pętlę. Sprawdź, czy ostatni punkt przyciągnął się do pierwszego („Koniec”) i czy wszystkie krawędzie leżą w jednej płaszczyźnie. Pętla lekko wychodząca z płaszczyzny zostaje liniami. Narysuj ponownie jedną z jej krawędzi, przyciągając do narożników.

## Nie mogę zaznaczyć ani usunąć ściany

- Przy {{ui:Zaznacz}} kliknięcie blisko krawędzi bierze krawędź. Klikaj bliżej środka ściany.
- {{ui:Gumka}} nie wybiera ścian. Zaznacz ścianę i naciśnij {{key:Delete}}, albo usuń jedną z jej krawędzi.
- Jeśli ściana należy do grupy lub komponentu, kliknięcie zaznacza całość. Kliknij dwukrotnie, aby ją otworzyć.

## "Najpierw zaznacz coś do przesunięcia albo kliknij na to."

{{ui:Przesuń}}, {{ui:Obróć}} i {{ui:Skaluj}} potrzebują czegoś do pracy: zaznacz to najpierw albo uruchom narzędzie, klikając sam obiekt (nie puste miejsce ani prowadnicę).

## "Najpierw zaznacz jakąś geometrię (przeciągnij ramkę albo potrójnie kliknij, aby zaznaczyć wszystko, co połączone)."

{{key:G}} i {{key:Shift+G}} potrzebują zaznaczenia. Prowadnic nie można grupować.

## Klawisze strzałek obracają widok zamiast blokować

Blokady działają tylko po pierwszym kliknięciu narzędzia rysowania lub edycji. {{ui:Wypychanie/ciągnięcie}} nie ma blokad, a w {{ui:Obróć}} nie zmieniają kąta obrotu. W innych chwilach klawisze strzałek obracają widok.

## Esc w pełnym ekranie

W pełnym ekranie przeglądarka może użyć pierwszego {{key:Esc}}, aby wyjść z pełnego ekranu. Naciśnij {{key:Esc}} ponownie, aby anulować narzędzie.

## Brak środkowego przycisku

Naciśnij {{key:O}} dla {{ui:Orbita}} i przeciągnij albo użyj klawiszy strzałek. Zob. [Orbita, przesuwanie i powiększanie](topic:orbit-pan-zoom#without-a-middle-button).

## Importy

| Komunikat | Co zrobić |
|---|---|
| "ModelCraft importuje SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG i DXF. … nie jest żadnym z nich." | Wyeksportuj model z innego programu w jednym z tych formatów |
| "Ten plik ma ponad 300 MB." | Uprość lub podziel model w innym programie |
| "…zbyt duży, by modelować go tutaj (ponad 2 miliony wierzchołków)." | To samo |
| "Ten plik .gltf wymaga "…"…" | Przeciągnij `.gltf` razem z plikami `.bin` i tekstur albo otwórz wersję `.glb` |
| "Ten plik glTF wymaga rozszerzenia …, którego ModelCraft jeszcze nie odczytuje." | Wyeksportuj ponownie z innego programu bez tego rozszerzenia (na przykład tekstur KTX2) |
| OBJ przychodzi bez kolorów lub tekstur | Przeciągnij `.obj` razem z jego plikiem `.mtl` i obrazkami |
| "Ten plik Alembic używa starego układu HDF5…" | Zapisz go ponownie w innym programie jako plik Ogawa Alembic |
| FBX przychodzi bez tekstur | Przeciągnij `.fbx` razem z obrazkami tekstur albo osadź media przy eksporcie |
| "Ten plik FBX jest w wersji …, której ModelCraft nie odczytuje" | Wyeksportuj ponownie jako FBX 2011 lub nowszy |
| STL lub PLY przychodzi 1,000 razy za duży lub za mały | STL jest odczytywany w milimetrach, a PLY w metrach: przeskaluj go (zob. [Obróć i skaluj](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "To nie jest plik Collada (.dae)…" albo "…nie jest poprawnym XML…" | Plik jest uszkodzony albo nie jest Collada. Wyeksportuj go ponownie |
| "Ten plik Collada nie ma geometrii, którą ModelCraft może zaimportować." | Zawiera tylko kamery, światła lub odwołania do innych plików |
| "To jest binarny DXF. Zapisz go jako DXF ASCII i spróbuj ponownie." | Zapisz go ponownie z programu CAD jako ASCII |
| "To nie jest rysunek DWG…" | Plik nie jest DWG albo jest uszkodzony |
| "Rysunku nie udało się odczytać (…). Może być uszkodzony albo zapisany w wersji DWG, której czytnik nie obsługuje…" | Nawiasy podają przyczynę. Zapisz go z programu CAD jako DXF albo jako DWG z AutoCAD 2000 do 2018 |
| "Ten rysunek sięga dalej niż 10,000 km od swojego początku…" | Przesuń rysunek bliżej punktu 0,0 w programie CAD |

### Import ma zły rozmiar albo leży na boku

- **OBJ:** OBJ nie ma jednostki; ModelCraft odczytuje metry. Model w milimetrach przychodzi 1000 razy za duży: [przeskaluj](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) go o `0.001`, a model w calach o `0.0254`.
- **OBJ leży na boku:** ModelCraft oczekuje plików OBJ z osią Y skierowaną w górę. Plik zapisany z osią Z w górę przychodzi leżąc. Obróć go o 90° wokół czerwonej osi: kliknij środek {{ui:Obróć}} na ścianie skierowanej wzdłuż czerwonej osi albo otwórz plik w jego programie i wyeksportuj z osią Y w górę.
- **DWG lub DXF:** w oknie „Jednostki rysunku” wybrano złą jednostkę. Cofnij i zaimportuj ponownie.

## Otwieranie plików

| Komunikat | Co zrobić |
|---|---|
| "To nie jest plik modelu ModelCraft (nie jest JSON)." | Dla innych formatów użyj {{ui:Importuj}} |
| "To nie jest plik ModelCraft, który możemy otworzyć: …" | Plik jest uszkodzony albo zmieniono go ręcznie |
| "Ten model zapisał nowszy ModelCraft…" | Otwórz go w nowszej wersji |
| "Ten plik ma ponad 200 MB." | Model jest za duży, by go tu otworzyć |

## Utracona praca

ModelCraft nie zapisuje sam do pliku. Gdy zamkniesz lub przeładujesz kartę z niezapisanymi zmianami, przeglądarka najpierw pyta („Opuścić witrynę?” lub „Przeładować witrynę?”); wybierz pozostanie na stronie i zapisz. Nowy i Otwórz też pytają („Niezapisane zmiany”). Jeśli przeglądarka lub komputer uległy awarii, otwórz ModelCraft ponownie w tej samej przeglądarce: zaoferuje odzyskanie niezapisanej pracy („Odzyskać swoją pracę?”; zob. [Odzyskiwanie pracy](common:recover)). Zapisuj często, naciskając {{key:Mod+S}}.

## Folder pobierania zapełnia się kopiami

Każdy zapis jest nowym pobraniem, nazwanym `Untitled (1).modelcraft`, `Untitled (2).modelcraft` i tak dalej. Usuń stare kopie albo ustaw przeglądarkę, aby pytała, gdzie zapisać każdy plik, i sama nadpisała stary plik. Zob. [Otwieranie, zapisywanie, importowanie i eksportowanie](topic:files#save-a-model).

## Działa wolno

- Każdy krok cofania przechowuje kopię modelu (a [siatka](topic:meshes) zachowuje tylko to, co się zmieniło), więc przy bardzo dużym imporcie geometrii wypychanej każda edycja trwa dłużej. Rozbij lub usuń to, czego nie potrzebujesz, zapisz i otwórz ponownie: ponowne otwarcie czyści też historię cofania.
- Cienie od słońca kosztują najwięcej. Podczas modelowania odznacz {{ui:Cienie od słońca}}.

## Brak cieni

{{ui:Cienie od słońca}} są wyłączone, słońce jest pod horyzontem w wybranym czasie („The sun is down at this time.”), albo styl to {{ui:Szkielet}}, który nie rysuje cieni.

## "Ta przeglądarka nie pozwoliła na pełny ekran."

Niektóre przeglądarki i osadzone widoki odmawiają pełnego ekranu. Zamiast tego użyj własnego pełnego ekranu przeglądarki ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft nie otwiera się bez połączenia

ModelCraft otwiera się offline tylko wtedy, gdy zapisano go do pracy offline w tej przeglądarce: przycisk na pasku aplikacji musi pokazywać {{ui:Gotowe offline}}. Otwórz go, będąc online, i kliknij {{ui:Zapisz do pracy offline}}. Jeśli przycisk pokazuje {{ui:Nie udało się zapisać}}, kliknij go ponownie przy lepszym połączeniu. {{ui:Tryb offline niedostępny}} oznacza, że to okno (okno prywatne albo komputer zarządzany przez organizację) nie może zachować kopii. Zob. [Praca offline](common:offline).
