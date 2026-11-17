---
title: Spoločný model s Live TeamWork
summary: Čo sa mení v ModelCraft počas relácie Live TeamWork z CadCraft Studio: skupiny a komponenty všetkých v jednom modeli, kto môže naraz tvarovať čo, váš vlastný krok späť a pripojenie z prehliadača v rovnakej sieti.
keywords: naživo, live teamwork, studio live, spolu, spolupráca, relácia, zdieľať naživo, pripojiť, skupina, komponent, tlač ťah, kurzor, ukazovateľ, vidieť jeden druhého, mená, farba, výber, krok späť, hostiteľ
from: d8d2f282
---

## Čo sa naučíte

Čo sa stane s modelom, keď na ňom súčasne pracuje viacero ľudí. CadCraft Studio spúšťa a pripája reláciu Live TeamWork (Zdieľať, Pripojiť); táto stránka je o samotnom modeli.

## Práca vo vlastnej skupine

Všetci upravujú ten istý model a vaše vlastné úpravy sa hneď ukážu. Ako sa zmeny zlučujú, závisí od toho, čo meníte:

- **Presúvanie, pomenovanie, farbenie alebo skrývanie umiestnených skupín a komponentov** sa zlúči: dvaja ľudia, ktorí presúvajú dve skupiny, si obaja ponechajú svoje presuny.
- **Geometria vnútri jednej skupiny** (jej hrany a plochy: kreslenie, ťahanie/tlačenie, mazanie) je jeden kus. Keď dvaja ľudia tvarujú tú istú skupinu v rovnakom okamihu, druhá zmena sa vráti späť a stavový riadok to povie. Rôzne skupiny sa navzájom nikdy nebrzdia.
- **Voľná geometria** (nie v žiadnej skupine) je vlastná skupina modelu: naraz ju môže tvarovať len jeden človek.

Takže sa dohodnite, kto pracuje v ktorej skupine, alebo vytvorte skupinu pre časť každého človeka, skôr než začnete. Vodidlá, kóty a rezné roviny sa zlučujú jedna po druhej; scény, značky, podlažia a osi výkresu patria tomu, kto ich zmenil naposledy.

## Vidieť jeden druhého

Každý v relácii má vlastnú farbu. Vidíte ukazovateľ každej osoby ako šípku v jej farbe s jej menom vedľa, v hĺbke pohľadu, na ktorý sa pozeráte, a prerušovaný rámček v jej farbe okolo toho, čo má vybraté.

Ukazovatele, mená a výbery sú len pre reláciu: nikdy sa neukladajú do súboru a nikdy nevstupujú do ničího kroku späť. Plynule sa presúvajú k miestu, kde je každý, takže zostávajú plynulé aj na pomalom pripojení.

## Krok späť vracia vašu vlastnú prácu

{{key:Mod+Z}} vráti váš posledný krok späť a ostatných nechá tak. Keď niekto medzitým zmenil to isté, nič sa nevráti späť a stavový riadok povie, kto to bol.

## Pripojenie z prehliadača

Spoluhráč bez Studia môže naskenovať obrázok pod kódom hostiteľa telefónom, tabletom alebo počítačom v tej istej sieti. ModelCraft sa otvorí v prehliadači a naplní sa modelom hostiteľa, keď ho hostiteľ pustí dnu. Pozvánkový odkaz umožní pripojiť sa z inej siete: hostiteľ potrebuje miesto Team Cloud Plan pre aplikáciu, všetci ostatní sa pripoja zadarmo, a odkaz funguje len dovtedy, kým je relácia hostiteľa otvorená.

## Keď relácia skončí

Model ukladá len hostiteľ. Všetci ostatní si ponechajú neuloženú kópiu: uložte ju, ak ju chcete zachovať.
