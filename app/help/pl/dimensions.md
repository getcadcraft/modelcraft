---
title: Wymiaruj i zmieniaj rozmiar tego, co narysowałeś
summary: Umieszczaj wymiary między narożnikami, na łukach i okręgach albo między dwiema krawędziami; wpisz nową długość, by zmienić rozmiar modelu. Wpisz ponownie długość krawędzi albo szerokość, głębokość i wysokość grupy w Informacjach o obiekcie.
keywords: wymiar, wymiary, zmiana rozmiaru, zmień rozmiar, edycja rozmiaru, długość, szerokość, głębokość, wysokość, rozciągnij, wymiar sterujący, adnotacja, zmierz, po fakcie, promień, średnica, kąt, kątowy, łuk, okrąg, R, Ø
from: a1f815ec
---

Rozmiary w ModelCraft nie są stałe po narysowaniu czegoś. Wymiar pokazuje długość na modelu, a wpisanie w nim nowej długości zmienia rozmiar modelu, by pasował. Możesz też wpisać ponownie długość krawędzi albo szerokość, głębokość i wysokość grupy w {{ui:Informacje o obiekcie}}.

## Umieść wymiar

1. Naciśnij {{key:D}} lub kliknij {{ui:Wymiar}} na pasku narzędzi.
2. Kliknij narożnik, od którego mierzysz. Przyciąga do narożników, środków i krawędzi, jak przy rysowaniu.
3. Kliknij drugi narożnik.

   Albo kliknij raz na **krawędź** (podpowiedź mówi „Na krawędzi”) — wymiaruje to całą krawędź jednym kliknięciem.
4. Przesuń kursor tam, gdzie ma być linia wymiaru, i kliknij. Możesz też wpisać odsunięcie, np. `0.5m`, i nacisnąć {{key:Enter}}.

   Linia wymiaru zostaje pozioma dla poziomej krawędzi, chyba że patrzysz na nią z boku. Dla pionowej krawędzi zostaje w pionowej płaszczyźnie, która najlepiej jest do Ciebie zwrócona.

Pasek stanu pokazuje „Wymiar 4 m.”. Wymiary pokazują długość w jednostce modelu i aktualizują się, gdy zmienisz jednostkę w wyborze jednostek.

## Promień, średnica i kąt

To samo narzędzie {{ui:Wymiar}} wymiaruje zaokrąglenia i kąty:

- **Łuk:** kliknij łuk. Podpowiedź mówi {{ui:Promień}}. Przesuń kursor tam, gdzie ma być tekst, i kliknij: wymiar odczytuje **R 1.5 m**.
- **Okrąg:** kliknij okrąg. Dostajesz **średnicę** (**Ø 3 m**) z linią przez okrąg, przechodzącą przez jego środek. Wielokąty działają tak samo, z narożnikami na okręgu.
- **Kąt między dwiema krawędziami:** kliknij jedną krawędź, potem drugą krawędź, która się z nią styka w narożniku (gdy jesteś nad nią, podpowiedź mówi {{ui:Kąt między krawędziami}}). Potem przesuń w kąt, który chcesz, i kliknij. Wewnątrz narożnika dostajesz kąt między krawędziami; przesuń na jedną stronę, a dostaniesz kąt obok (np. 150° zamiast 30°). Jak daleko od narożnika klikniesz, tak ustawi się łuk; albo wpisz tę odległość.

By zamienić promień na średnicę lub z powrotem, zaznacz wymiar i wybierz w {{ui:Pokaż jako}} w {{ui:Informacje o obiekcie}}.

**Zmiana rozmiaru przez nie:** wpisz nowy promień lub średnicę zaraz po umieszczeniu wymiaru albo zaznacz go później i wpisz. Łuk lub okrąg zachowuje swój środek i zmienia rozmiar; ściana, którą ogranicza (krążek, koniec rowka), zmienia się razem z nim. Dwie rzeczy tylko mierzą:

- **Wymiar kąta** nigdy nie zmienia modelu. Aby zmienić kąt, obróć krawędzie narzędziem {{ui:Obróć}}.
- **Okrąg na końcu walca** (okrąg, który wyciągnąłeś narzędziem {{ui:Wypychanie/ciągnięcie}}) nie może zmienić rozmiaru z poziomu wymiaru, bo jego boki musiałyby się zmienić również. Zamiast tego przeskaluj walec wokół jego osi.

## Zmień rozmiar modelu wymiarem

Zaraz po umieszczeniu wymiaru wpisz nową długość i naciśnij {{key:Enter}}: `6m`, `12'`, `3500` w modelu w milimetrach. Model zmienia się na ten rozmiar.

Później, w dowolnym momencie:

1. Przy {{ui:Zaznacz}} kliknij tekst lub linię wymiaru. {{ui:Informacje o obiekcie}} mówi **Wymiar** i pokazuje jego {{ui:Długość}}.
2. Wpisz nową długość i naciśnij {{key:Enter}}. Możesz pisać prosto w polu wartości albo w polu {{ui:Długość}} w {{ui:Informacje o obiekcie}}.

### Co się przesuwa

Drugi narożnik, który kliknąłeś, się przesuwa, a z nim wszystko za nim:

- **Oba narożniki na jednym elemencie** (szerokość pudła, wysokość ściany): bok przy poruszanym narożniku wysuwa się lub wsuwa, a ściany do niego przylegające się rozciągają. Pudło pozostaje zamkniętą bryłą, a wszystko, co leży w całości po tej stronie, jak komponent okna, przesuwa się razem z nim.
- **Narożniki na dwóch osobnych elementach** (szczelina między dwoma pudłami): element poruszanego narożnika przesuwa się w całości, a szczelina się zmienia.
- **Poruszany narożnik wewnątrz grupy lub komponentu**, w którym nie ma drugiego narożnika: przesuwa się cała grupa.
- **Oba narożniki wewnątrz tej samej grupy lub komponentu**: jest ona rozciągana od środka. Komponent zmienia się wszędzie, gdzie jest umieszczony, tak jak zawsze przy jego edycji.

Aby zmienić, który koniec się przesuwa, zaznacz wymiar i wybierz w {{ui:Przesuwa}} w {{ui:Informacje o obiekcie}}:

| Wybór | Co się dzieje |
|---|---|
| {{ui:Drugi koniec}} (domyślnie) | Koniec, który kliknąłeś jako drugi, się przesuwa |
| {{ui:Pierwszy koniec}} | Koniec, który kliknąłeś jako pierwszy, się przesuwa |
| {{ui:Oba końce (wyśrodkowane)}} | Każdy koniec przesuwa się o połowę zmiany, więc środek zostaje na miejscu |

### Kiedy zmiana rozmiaru jest odrzucana

ModelCraft nic nie zmienia i mówi dlaczego w pasku stanu:

- „a face would bend out of its plane”: wymiar biegnie ukośnie przez kształt. Wymiaruj wzdłuż krawędzi albo wzdłuż czerwonej, zielonej lub niebieskiej osi.
- „a face would shrink to nothing or turn inside out”: nowa długość jest za krótka dla tego kształtu.
- „the end that moves is not on a corner of the model”: ten koniec został umieszczony w pustej przestrzeni albo na środku krawędzi. Wybierz inny koniec w {{ui:Przesuwa}} albo umieść wymiar między dwoma narożnikami.
- „a length must be above zero”.

Każda zmiana rozmiaru to jeden krok: {{key:Mod+Z}} ją cofa.

## Wpisz ponownie rozmiar w Informacjach o obiekcie

Wymiar nie zawsze jest potrzebny:

- **Krawędź:** zaznacz ją. Jej {{ui:Długość}} w {{ui:Informacje o obiekcie}} to pole, w które możesz wpisać wartość. Wpisanie długości w pole wartości też działa. Przesuwa się koniec dalszy wzdłuż czerwonej, potem zielonej, potem niebieskiej osi, a to, co się do niego łączy, się rozciąga. Na przykład ponowne wpisanie długości przedniej dolnej krawędzi pudła poszerza je w prawo.
- **Grupa lub komponent:** zaznacz go. {{ui:Szerokość (czerwona)}}, {{ui:Głębokość (zielona)}} i {{ui:Wysokość (niebieska)}} są polami. Jego dalsza strona (prawa, tylna, górna) się przesuwa. To są osie samej grupy, sprzed ewentualnego obrotu.

Naciśnij {{key:Enter}}, by zastosować, albo {{key:Esc}}, by przywrócić starą wartość.

## Wymiary podążają za modelem

Wymiar jest przypięty do dwóch narożników, na których został umieszczony (kąt: do jego narożnika i dalszych końców dwóch krawędzi; promień lub średnica: do jego łuku lub okręgu). Przesuń, wyciągnij lub zmień rozmiar geometrii, a wymiar podąża za nią i pokazuje nową długość. Zostaje przypięty także po zamienieniu geometrii w grupę lub komponent.

Jeśli koniec został umieszczony w miejscu, które nie jest narożnikiem (na ścianie lub w pustej przestrzeni), albo jego narożnik został wymazany, ten koniec zostaje tam, gdzie był. Wymiar nadal mierzy, ale może zmieniać rozmiar tylko od swojego drugiego końca.

## Usuwanie wymiarów

- Jeden wymiar: zaznacz go i naciśnij {{key:Delete}}, albo kliknij go {{ui:Gumka}}.
- Wszystkie wymiary: gdy nic nie jest zaznaczone, kliknij {{ui:Usuń wszystkie wymiary}} w {{ui:Informacje o obiekcie}}.

Wymiary zapisują się w pliku `.modelcraft`. Nie są eksportowane do innych formatów, które przenoszą tylko model 3D. Plik z wymiarami nadal otworzy się w starszym ModelCraft, bez nich.
