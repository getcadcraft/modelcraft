---
title: Dodajte upodobitveni pogon z dodatkom
summary: Kaj dodatek lahko doda na seznam Pogon v pogovornem oknu Upodobi, dovoljenje, ki ga potrebuje za zagon programa, ter kaj Studio preveri in vpraša.
keywords: dodatek, addon, pogon, upodobitveni pogon, razvijalec, engine.run, dovoljenje, program, skript, podpisan, studio, api
from: cd7a39ba
---

Dodatek (Nastavitve › Dodatki) lahko doda pogon na seznam **Pogon** v {{ui:Upodobi sliko…}}. Celotno besedilo za avtorje dodatkov je v 16. poglavju specifikacije dodatkov; na kratko:

- Dodatek registrira pogon z ID-jem, ki se začne z njegovim lastnim, z imenom, izbirnimi nastavitvami in **bodisi** programom za zagon **bodisi** funkcijo v JavaScriptu, ki nariše sliko.
- Pogon, ki zažene program, potrebuje dovoljenje **`engine.run`**, prikazano pred namestitvijo in v Nastavitvah. Deluje samo v Studiu; v brskalniku se prikaže kot datoteka za shranjevanje.
- Dodatek poimenuje program (preprosto ime datoteke, nikoli lupina), skript, ki je **znotraj podpisanega dodatka**, in argumente, sestavljene iz nadomestil in preprostih besed. Studio najde program ali vas enkrat prosi, da ga pokažete.
- Ko dodatek prvič zažene program, vas **Studio vpraša v svojem pogovornem oknu**: kateri dodatek, kateri program in da lahko skript počne vse, kar lahko počne program. To dovolite samo dodatku, ki mu zaupate. Vaš odgovor se shrani za ta dodatek in program.
- Paket (prizor kot USD in datoteka nastavitev, z datoteko glTF, kadar dodatek to zahteva) in skript dodatka se postavita v novo začasno mapo, program se zažene tam, slika pa se vrne, označena z imenom pogona dodatka.

:::note
Dodatki lahko dodajo upodobitvene pogone samo iz API-ja za dodatke različice 1.4. Zgled za odprtokodni upodabljalnik z ukazno vrstico je v lastnem repozitoriju; v tem upodabljalniku še ni bil preizkušen.
:::
