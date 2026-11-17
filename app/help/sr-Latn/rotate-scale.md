---
title: Rotiranje i skaliranje
summary: Okrećite stvari oko tačke klikom ili kucanjem stepeni i proporcionalno im menjajte veličinu faktorom.
keywords: hvataljke za skaliranje, istezanje, neravnomerno, po osi, preokret, ogledanje, ogledalna kopija, preokreni duž, rotiraj, okreni, ugao, stepeni, uglomer, skaliraj, promeni veličinu, uvećaj, smanji, faktor, ravnomerno skaliranje
from: 45cdcb49
---

## Rotiranje

{{ui:Rotate}} ({{key:Q}}) okreće izbor oko središnje tačke. Traži tri klika: središte, početni pravac i krajnji pravac.

1. Izaberite ono što želite da okrenete. Ako ništa nije izabrano, Rotiraj uzima ono što prvo kliknete.
2. Pritisnite {{key:Q}}. Prsten prati pokazivač i prikazuje ravan u kojoj ćete okretati.
3. Kliknite središte rotacije.
   - Na tlu ili u praznom prostoru prsten leži ravno (plavo): okretanje je oko vertikalne ose, kao kad okrećete zgradu na parceli.
   - Na površini prsten leži u ravni te površine: okretanje je oko sopstvenog pravca površine. Kliknite na zid da okrenete nešto oko horizontalne ose.
4. Kliknite tačku koja postavlja gde počinje ugao, na primer duž ivice stvari koju okrećete.
5. Pomerajte pokazivač oko središta. Ugao se prikazuje u vrhu i u polju vrednosti ({{ui:Angle}}). Hvata se u koracima od 15° kad ste blizu jednog.
6. Kliknite da završite ili ukucajte ugao u stepenima i pritisnite {{key:Enter}}: `90`, `45`, `-30`.

   Pozitivni uglovi okreću se suprotno od kazaljke na satu, gledano sa strane na koju prsten gleda.

Pritisnite {{key:Ctrl}} (ili {{key:Alt}}) dok rotirate da okrenete **kopiju** i ostavite original na mestu, kao kod Premeštanja; vrh kaže da li je kopiranje uključeno, a ponovni pritisak tog tastera ga isključuje. Ukucajte `3x` odmah posle okrenute kopije za još kopija oko istog središta.

Kao i kod Premeštanja, rotiranje dela povezane geometrije uvrće površine koje su za nju vezane. Prvo grupišite stvari da biste ih okrenuli cele.

:::note
Vrh kaže da strelice biraju osu rotacije, ali u ovoj verziji one umesto toga okreću prikaz pre prvog klika. Da biste izabrali osu, kliknite središte na površini koja gleda u smeru koji želite. Pogledajte [Još nije napravljeno](topic:not-built-yet).
:::

## Skaliranje

{{ui:Scale}} ({{key:S}}) menja veličinu izbora. Prvo izaberite ono što želite da promenite, pa pritisnite {{key:S}}: na uglovima, ivicama i sredinama strana njegove kutije pojavljuju se mali kvadratići (hvataljke).

### Istezanje ili skaliranje hvataljkama

- **Ugaona** hvataljka skalira ravnomerno u svim smerovima, oko suprotnog ugla.
- Hvataljka na sredini **strane** istegne se samo u tom pravcu, oko suprotne strane: produžite kutiju bez povećanja visine.
- Hvataljka na sredini **ivice kutije** istegne se u dva pravca preko nje.
- Držite {{key:Ctrl}} kad kliknete hvataljku da skalirate oko sredine kutije.

Kliknite hvataljku, pomerite pokazivač i ponovo kliknite; ili kliknite hvataljku, ukucajte faktor (`2` udvostručuje, `0.5` prepolovljuje) i pritisnite {{key:Enter}}. Da biste svakom pravcu dali sopstveni faktor, ukucajte tri, za crvenu, zelenu i plavu: `2,1,0.5`. U otvorenoj grupi pravci su sopstveni pravci grupe.

### Skaliranje oko bilo koje tačke

Kliknite bilo gde osim na hvataljku da ravnomerno skalirate oko tačke po svom izboru. Traži tri klika:

1. Izaberite ono što želite da promenite. Ako ništa nije izabrano, Skaliraj uzima ono što prvo kliknete.
2. Pritisnite {{key:S}}.
3. Kliknite tačku koja ostaje na mestu (ne na hvataljku), na primer donji ugao.
4. Kliknite referentnu tačku. Njeno rastojanje od prve tačke računa se kao 1×.
5. Pomerajte pokazivač ka prvoj tački ili od nje. Faktor se prikazuje u vrhu i u polju vrednosti ({{ui:Scale}}).
6. Kliknite da završite ili ukucajte faktor i pritisnite {{key:Enter}}: `2` udvostručuje veličinu, `0.5` prepolovljuje je.

### Skaliranje na tačnu veličinu

Da biste nešto napravili tačne dužine, izračunajte faktor: nova dužina podeljena trenutnom dužinom. U režimu sa tri klika polje vrednosti računa, pa ukucajte `4.2/3.6` da zid od 3.6 m napravite dugačak 4.2 m. Polje vrednosti hvataljke prihvata samo obične brojeve, pa prvo izračunajte faktor (4.2 podeljeno sa 3.6 je oko 1.1667). Prvo izaberite ivicu da pročitate njenu trenutnu dužinu u {{ui:Entity info}}.

### Ispravka uvoza pogrešne veličine

OBJ datoteke nemaju jedinicu, pa model nacrtan u milimetrima stiže 1000 puta prevelik. Izaberite uvezenu grupu, pritisnite {{key:S}}, kliknite ugaonu hvataljku i ukucajte `0.001` pa pritisnite {{key:Enter}}. Za model nacrtan u inčima ukucajte `0.0254`.

## Stvari koje treba znati

- Skaliranje oko tačke u tri klika je ravnomerno. Da biste istegli u jednom pravcu, koristite hvataljku strane ili ivice (vidi gore).
- Skaliranje grupe ili komponente menja primerak koji ste skalirali; ostali primerci komponente zadržavaju svoju veličinu.
- Pritisnite {{key:Esc}} pre poslednjeg klika da otkažete.

## Preokret

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} ili {{ui:Flip along blue}} ogleda izbor na mestu, kroz sredinu njegove kutije: leva stepenica postaje desna. Površine ostaju okrenute napolje, a grupa ili komponenta se ogleda kao celina (njena unutrašnjost se ne prepisuje).

{{ui:Flipped copy along red}} (i duž zelene, plave) ostavlja original na mestu i stavlja ogledalnu kopiju pored njega, preko suprotne strane kutije izbora: drugo krilo para vrata, drugo krilo zgrade. Slobodna geometrija koja se tu dodiruje pridružuje se originalu, kao što dodirnuta geometrija uvek čini; prvo napravite original grupom da biste ih držali odvojeno.

U otvorenoj grupi, crvena, zelena i plava su sopstvene ose grupe.
