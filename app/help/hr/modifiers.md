---
title: Modifikatori na mreži, grupi ili komponenti
summary: Skalirajte, zrcalite, nizajte, zaglađujte, zakosite, prerežite i savijte mrežu bez promjene nje; ponavljajte ili skalirajte grupu ili komponentu istim slogom; učinite ga trajnim kad budete spremni.
keywords: modifikator, modifikatori, slog, grupa, komponenta, skaliraj, zrcali, niz, kružni niz, zagladi, zakosi, učvrsti, debljina, bulova operacija, pomak, šum, zavari, prorijedi, pojednostavi, rešetka, kavez, deformacija krivuljom, savij, stegni omotač, primijeni, nerazorno, podjela površine, površina podjele, ispeci
from: dd5ec1cb
---

**Modifikator** mijenja ono što mreža prikazuje, bez promjene same mreže. Zrcalite jednu polovicu dijela i modelirajte samo nju; zaokružite kutiju površinom podjele i nastavite uređivati kutiju. Modifikatori stoje u **slogu** i rade redom, odozgo prema dolje. Ono što vidite, izvozite, ispisujete i renderirate jest mreža sa svakim uključenim modifikatorom.

## Dodavanje modifikatora

1. Odaberite mrežu. U radnom prostoru Model njezin odjeljak **Modifikatori** je u {{ui:Informacije o entitetu}}; u radnom prostoru Mreža je u ploči desno.
2. Odaberite jedan iz {{ui:Dodaj modifikator…}}. Ide na dno sloga.
3. Promijenite njegove postavke ispod naziva. Duljine uzimaju iste vrijednosti kao okvir za vrijednost, pa `600mm`, `2'6"` i `(6m)/4` svi rade.

Svaka promjena je jedan korak poništavanja: {{key:Mod+Z}} je vraća.

## Gumbi na svakom modifikatoru

- Kvačica ga uključuje ili isključuje.
- Gumb s ekranom ga prikazuje ili skriva u prikazu (ostaje u slogu).
- Gumb s kamerom ga prikazuje ili skriva u renderiranim slikama i videima, pa modifikator može biti samo za renderiranje (ili samo za prikaz).
- Strelice ga pomiču gore ili dolje u slogu. Redoslijed je važan: zrcaljenje pa podjela daje glatki šav, podjela pa zrcaljenje ne daje.
- {{ui:Primijeni}} čini oblik dijelom mreže: modifikatori iznad njega i ovaj sam obavljaju se na samoj mreži i napuštaju slog. Jedan je korak poništavanja.
- Križić ga uklanja.

## Modifikatori

| Modifikator | Što radi |
|---|---|
| {{ui:Skaliraj}} | Skalira oko ishodišta objekta, faktorom za crvenu, zelenu i plavu. I na grupi ili komponenti. |
| Zrcali | Dodaje zrcaljenu kopiju preko crvene, zelene ili plave kroz ishodište mreže i spaja polovice tamo gdje se dodiruju. |
| {{ui:Niz}} | Kopira u liniji (korak vlastite veličine puta brojevi koje date, plus fiksni korak), oko osi ili duž krivulje u modelu. Grupa ili komponenta uzima liniju. |
| Površina podjele | Zaglađuje mrežu Catmull-Clark podjelom. Oštri bridovi ostaju žlijebljeni. Renderi mogu koristiti više razina od prikaza. |
| {{ui:Zakosi}} | Zaobljuje svaki brid oštriji od zadanog kuta. |
| Učvrsti | Daje površini debljinu i zatvara rub. |
| Bulova operacija | Odreže, spoji ili zadrži preklapanje s drugim objektom u modelu. Oba moraju biti zatvorena tijela. |
| Pomak | Pomiče površinu unutra ili van glatkim šumom. Isto sjeme daje iste izbočine svaki put. |
| Zavari | Spaja vrhove bliže od zadane udaljenosti. |
| Prorijedi | Zadržava udio trokuta, uklanjajući one koji najmanje mijenjaju oblik. |
| {{ui:Zagladi}} | Opušta vrhove prema susjedima. |
| {{ui:Rešetka}} | Savija mrežu pomoću kaveza: pomičite točke kaveza i mreža ide za njima. |
| Deformacija krivuljom | Savija mrežu duž krivulje u modelu, duž crvene, zelene ili plave. |
| Stegni omotač | Pomiče svaki vrh na najbližu točku drugog objekta. |

## Na grupi ili komponenti

Grupa ili komponenta također može zadržati recept, pa sjenilo svjetiljke može biti **Skaliraj** i **Niz** jednog sjenila, a promjena jednog broja mijenja svjetiljku.

1. Odaberite grupu ili komponentu. U {{ui:Informacije o entitetu}} njezin odjeljak **Modifikatori** prikazuje slog (u početku prazan).
2. Odaberite {{ui:Skaliraj}} ili {{ui:Niz}} iz {{ui:Dodaj modifikator…}}. Grupa postaje komponenta koja je **izvornik, postavljen slogom**. Izvornik se čuva: uredite ga i svaka kopija odmah slijedi.
3. Skaliranje uzima faktor za crvenu, zelenu i plavu (`1, 1, 2` udvostručuje visinu). Niz uzima broj kopija, korak kao udio dosadašnje veličine rezultata, i dodatni korak u duljinama.

Slog ide odozgo prema dolje na vlastitim osima izvornika oko njegova ishodišta, pa redoslijed je važan: Niz od tri kopije na razmaku 3 m, zatim Skaliraj 2 na crvenoj, stavlja kopije na 6 m razmaka; prvo Skaliraj pa Niz ih drži na 3 m. Kvačica, strelice i križić rade kao na mreži; gumbi prikaza i kamere te Primijeni na jednom modifikatoru ne rade, jer je slog na grupi jedna cjelina.

- {{ui:Uredi izvor}} otvara izvornik na mjestu. Promjene se vide u svakoj kopiji; zatvaranje vraća na mjesto gdje ste bili.
- {{ui:Ispeci modifikatore}} rezultat pretvara u obične bridove i plohe i uklanja slog, u jednom koraku poništavanja. Kopije koje se preklapaju ostaju zasebna geometrija: ispečeno nije spajanje (unija).
- Kopije komponente dijele recept; {{ui:Učini jedinstvenom}} ga odvaja (izvornik ostaje zajednički).
- Slog se sprema u datoteku, prenosi se kopiranjem i lijepljenjem te poništavanjem, a Očisti neiskorišteno čuva izvornik. Program koji ne poznaje modifikatore i dalje prikazuje kopije.
- Do ispeca rezultat se ne može ući, rastaviti, promijeniti veličinu ni rastegnuti: svaka promjena bi ga ponovno izgradila. Svaka radnja to kaže.
- Ograničenja su 32 modifikatora i 1,000 kopija. Komponenta izrađena za rastezanje (Rastegni) i slog još ne mogu zajedno dijeliti definiciju.

## Podjela površine

Podjela zaglađuje mrežu Catmull-Clark postupkom: svaka ploha postaje četverokutne plohe, a svaka razina daje četiri puta više. Kutija s dvije ili tri razine već izgleda kao zaobljen oblik, a vi nastavljate uređivati kutiju.

- **Razine u prikazu** određuju koliko je glatko.
- **Razine u renderima** određuju koliko su glatke renderirane slike i videi; renderi mogu koristiti više razina od prikaza.
- **Renderi na pravoj glatkoj površini** stavljaju točke renderirane mreže na graničnu površinu prema kojoj razine teže, pa čak i dvije razine renderiraju kao glatko kao mnogo njih.
- **Žlijebovi** održavaju bridove oštrima: u radnom prostoru Mreža odaberite bridove i koristite {{ui:Žlijeb}} (1 ostaje oštar, 0.5 se malo zaobljuje, 0 je glatko). Vidi [Uređivanje mreže](topic:mesh-edit).
- **Snizite razinu prikaza na velikoj mreži:** kad bi tražene razine dale više ploha nego što računalo prikaza dobro podnosi, prikaz pokazuje nižu razinu i kaže koju. {{ui:Primijeni}} uvijek koristi sve razine. Koliko je ploha dopušteno ovisi o razredu vašeg računala u {{ui:Postavke}} › Renderiranje › Vaše računalo.
- Otvoreni rubovi zadržavaju svoje kutove i ostaju na liniji svojih bridova.

## Savijanje kavezom rešetke

1. Dodajte modifikator {{ui:Rešetka}} i pritisnite {{ui:Dodaj kavez rešetke oko mreže}}. Kavez od 3 × 3 × 3 točke pojavljuje se oko mreže, nacrtan žicama.
2. Otvorite kavez u radnom prostoru Mreža (dvostruki klik na njega) i pomičite njegove točke. Mreža ih glatko prati.

:::tip
Kavez je mreža kao svaka druga: sakrijte ga njegovom oznakom kad završite.
:::

## Velike mreže

Mali slogovi se izračunavaju odmah. Velik se izračunava u pozadini na svakoj jezgri vašeg računala: prikaz i dalje pokazuje zadnji rezultat dok novi nije gotov. Bulove operacije prvi put učitavaju modeler tijela; prikaz to kratko kaže.

## Što modifikatori još ne rade

- Težine po vrhu (opadanje naslikano na mreži) za Pomak, Zagladi i Stegni omotač.
- Modifikatori osim Skaliraj i linearnog Niza na geometriji guranja i povlačenja (grupe i komponente): prvo je pretvorite u mrežu ({{ui:Pretvori u mrežu}}). Zrcaljenje, kružni ili krivuljni niz, Savij i Sužavanje na grupama dolaze kasnije.
