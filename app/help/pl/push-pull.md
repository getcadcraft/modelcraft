---
title: Wypychanie i ciągnięcie powierzchni w bryły
summary: Zamień powierzchnię w prostopadłościan, zmień wysokość budynku, dodaj wykusz lub wnękę i powtórz odległość dwukrotnym kliknięciem.
keywords: wypychanie ciągnięcie, wyciągnij, wysokość, bryła, prostopadłościan, masa, wyższy, wnęka, wypukłość, powtórz, dwukrotne kliknięcie, objętość, poziom, na powierzchni, zrównaj, ta sama wysokość
from: dc093c91
---

{{ui:Wypychanie/ciągnięcie}} ({{key:P}}) przesuwa powierzchnię wzdłuż jej własnego kierunku: w górę i w dół dla podłogi, do środka i na zewnątrz dla ściany. To, co się dzieje, zależy od powierzchni.

## Zrób bryłę z powierzchni

1. Narysuj powierzchnię, na przykład prostokąt na ziemi ([Rysuj powierzchnie](topic:draw-faces)).
2. Naciśnij {{key:P}}.
3. Najedź na powierzchnię. Podświetli się.
4. Kliknij powierzchnię, a następnie przesuń wskaźnik. Powierzchnia wznosi się (lub opada), a z jej krawędzi wyrastają boki. Pole wartości ({{ui:Odległość}}) i podpowiedź pokazują odległość.
5. Kliknij, aby zakończyć, albo wpisz odległość i naciśnij {{key:Enter}}: `3m`, `10'`, `2700` w modelu w milimetrach.

   Masz teraz zamkniętą bryłę. Zaznacz ją całą i zgrupuj (zobacz [Grupy i komponenty](topic:groups-components)): {{ui:Informacje o obiekcie}} pokaże wtedy „Bryła: Tak” i jej objętość.

Pojedyncza powierzchnia może pójść w obie strony: wyciągnij ją w górę, aby uzyskać masę nad ziemią, wepchnij w dół, aby uzyskać dół lub fundament.

:::tip
Zamiast klikać dwa razy, naciśnij na powierzchnię, przeciągnij i puść. Na ekranie dotykowym to naturalny sposób: naciśnij, przeciągnij, unieś.
:::

## Ciągnij do wysokości czegoś innego

Podczas ciągnięcia najedź na narożnik, środek krawędzi, krawędź lub prowadnicę innej części modelu. Powierzchnia przyciąga się do tej wysokości, a znacznik pokazuje punkt. Użyj tego, aby zrobić dwa bloki tej samej wysokości albo zatrzymać się na linii prowadzącej, którą postawiłeś [miarką](topic:guides-measure).

Możesz też najechać na powierzchnię równoległą do tej, którą wypychasz, na przykład na górę innego bloku lub na górę pudełka, na którym stoi słup. Podpowiedź mówi „Na powierzchni”, a wypychana powierzchnia kończy się na tym samym poziomie. Na przykład wepchnij wewnętrzną powierzchnię rury w dół, aż zrówna się z pudełkiem pod rurą.

Powierzchnia pod kątem do wypychanej nie wyznacza poziomu. Odległość podąża za wskaźnikiem. Tak samo jest z powierzchnią za wypychaną.

Gdy wypychana powierzchnia ponownie kończy się równo z otaczającymi ją powierzchniami, jej boki znikają. Nie zostają boki o zerowej wysokości, a kontur, który narysowałeś, zostaje na powierzchni, więc możesz ją później ponownie wypchnąć. Aby znów była jedną powierzchnią, usuń krawędzie konturu za pomocą {{ui:Gumka}}: dwie powierzchnie się połączą.

## Zrób pudełko wyższym lub niższym

Wypchnij lub ciągnij górę pudełka. Ponieważ boki już biegną prosto w górę, góra po prostu się przesuwa: pudełko staje się wyższe lub niższe, a nie powstają nowe krawędzie.

- Wepchnięcie góry aż do dołu usuwa pudełko. ModelCraft zatrzymuje się na zerowej wysokości; nigdy nie wywraca pudełka na lewą stronę.
- Tak samo dzieje się z każdą powierzchnią, której wszyscy sąsiedzi biegną w jej kierunku, na przykład z końcem ściany.

## Dodaj wykusz lub wnękę

1. Narysuj prostokąt na boku pudełka (zacznij go na powierzchni; zostaje na płaszczyźnie powierzchni).
2. Naciśnij {{key:P}} i ciągnij nowy prostokąt **na zewnątrz**. Dodaje materiał: wykusz, komin, daszek.
3. Lub wepchnij go **do środka**. Wycina wnękę: ganek, niszę, cofnięte wejście.

Gdy boki nowej części pokrywają się z już istniejącymi powierzchniami, łączą się w jedną powierzchnię, więc nie dostajesz przypadkowych linii na płaskiej ścianie.

## Wepchnij na wylot

Wepchnięcie powierzchni w bryłę zatrzymuje się na pierwszej powierzchni za nią. Gdy do niej dotrze, wycina otwór na wylot. W ten sposób robi się okna i drzwi w ścianie o grubości. Zobacz [Wytnij otwór w ścianie](topic:openings).

## Wpisz odległość

Po kliknięciu powierzchni wpisz odległość i naciśnij {{key:Enter}}.

- Wpisana odległość idzie w kierunku, w jakim się poruszałeś. Jeśli jeszcze nie ruszyłeś, idzie w stronę przodu powierzchni (z bryły na zewnątrz, z ziemi w górę).
- Wpisz liczbę ujemną, na przykład `-500`, aby iść w drugą stronę.
- Jeśli zmienisz zdanie przed kliknięciem, naciśnij {{key:Esc}}. Powierzchnia wraca na miejsce.

## Powtórz ostatnią odległość

Po jednym wypchnięciu lub ciągnięciu dwukrotnie kliknij inną powierzchnię, mając wciąż wybrane {{ui:Wypychanie/ciągnięcie}}. Przesunie się o tę samą odległość. To szybki sposób, by nadać kilku ścianom lub kilku podłogom tę samą grubość lub wysokość.

ModelCraft pamięta odległość, dopóki nie przełączysz się na inne narzędzie.

## Warto wiedzieć

- Wypychanie/ciągnięcie działa na jednej powierzchni naraz. Jeśli klikniesz coś, co nie jest powierzchnią, pasek stanu pokaże: „Wypychanie/ciągnięcie działa na powierzchni. Kliknij powierzchnię.”
- Aby wypchnąć lub ciągnąć powierzchnię wewnątrz grupy lub komponentu, najpierw go otwórz (kliknij dwukrotnie).
- Przy włączonej opcji **Kolizja** wypychanie lub ciągnięcie, które natrafi na inną bryłę, zatrzymuje się tam, gdzie się dotyka, a podpowiedź mówi, czego dotyka (nazwa obiektu albo „luźna geometria w tej grupie”), i podświetla powierzchnie, na które trafiło. Kieszeń, którą wpychasz w jej własną bryłę (na przykład przesunięta powierzchnia wepchnięta z powrotem w dół), należy do tej bryły i nigdy nie zatrzymuje jej ścianka.
- Dwie bryły wepchnięte w siebie nie tną się ani nie łączą: ich powierzchnie po prostu przenikają. Zobacz [Jeszcze nie zbudowano](topic:not-built-yet).
