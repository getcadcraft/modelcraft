---
title: Rotiranje i skaliranje
summary: Okrećite stvari oko tačke klikom ili kucanjem stepeni, i mijenjajte im veličinu ravnomjerno faktorom.
keywords: ručke za skaliranje, rastezanje, neravnomjerno, po osi, okreni, zrcalo, zrcalna kopija, okreni duž, rotiraj, okreni, ugao, stepeni, uglomjer, skaliraj, promijeni veličinu, povećaj, smanji, faktor, ravnomjerno skaliranje
from: 45cdcb49
---

## Rotiranje

{{ui:Rotate}} ({{key:Q}}) okreće odabir oko centralne tačke. Traži tri klika: centar, početni smjer i krajnji smjer.

1. Odaberite šta želite okrenuti. Ako ništa nije odabrano, Rotiraj uzima stvar na koju prvo kliknete.
2. Pritisnite {{key:Q}}. Prsten prati pokazivač i pokazuje ravan u kojoj ćete okretati.
3. Kliknite centar rotacije.
   - Na tlu ili u praznom prostoru prsten leži ravno (plav): okretanje je oko vertikalne ose, kao okretanje zgrade na njenoj parceli.
   - Na površini prsten leži u ravni te površine: okretanje je oko sopstvenog smjera površine. Kliknite na zid da okrenete nešto oko horizontalne ose.
4. Kliknite tačku koja određuje gdje ugao počinje, npr. duž ivice stvari koju okrećete.
5. Pomjerajte pokazivač oko centra. Ugao se prikazuje u vrhu i u polju vrijednosti ({{ui:Angle}}). Kad se približite, skače u koracima od 15°.
6. Kliknite za završetak, ili upišite ugao u stepenima i pritisnite {{key:Enter}}: `90`, `45`, `-30`.

   Pozitivni uglovi se okreću suprotno od kazaljke na satu, gledano sa strane prema kojoj prsten gleda.

Pritisnite {{key:Ctrl}} (ili {{key:Alt}}) dok rotirate da okrenete **kopiju** i ostavite original na mjestu, kao i kod Premjesti; savjet kaže je li kopiranje uključeno, a ponovni pritisak tipke ga isključuje. Upišite `3x` odmah nakon rotirane kopije za još kopija oko istog centra.

Kao i kod Premjesti, rotiranje dijela povezane geometrije uvrće površine koje su za nju vezane. Prvo grupišite stvari da ih okrenete cijele.

:::note
Savjet kaže da strelice biraju osu rotacije, ali u ovoj verziji one prije prvog klika umjesto toga okreću pogled. Da odaberete osu, kliknite centar na površini koja gleda u smjeru koji želite. Pogledajte [Još nije napravljeno](topic:not-built-yet).
:::

## Skaliranje

{{ui:Scale}} ({{key:S}}) mijenja veličinu odabira. Prvo odaberite šta želite promijeniti, pa pritisnite {{key:S}}: na uglovima, ivicama i sredinama strana njegove kutije pojave se mali kvadratići (ručke).

### Rastezanje ili skaliranje ručkama

- **Ugaona** ručka skalira ravnomjerno u svim smjerovima, oko suprotnog ugla.
- Ručka na sredini **strane** rasteže samo u tom smjeru, oko suprotne strane: učinite kutiju dužom bez da je učinite višom.
- Ručka na sredini **ivice kutije** rasteže u dva smjera preko nje.
- Držite {{key:Ctrl}} kad kliknete ručku da skalirate oko sredine kutije.

Kliknite ručku, pomjerite pokazivač i kliknite ponovo; ili kliknite ručku i upišite faktor (`2` udvostručuje, `0.5` polovi) i pritisnite {{key:Enter}}. Da svaki smjer dobije svoj faktor, upišite tri, za crvenu, zelenu i plavu: `2,1,0.5`. U otvorenoj grupi, smjerovi su smjerovi same grupe.

### Skaliranje oko bilo koje tačke

Kliknite bilo gdje osim na ručku da skalirate ravnomjerno oko tačke po izboru. Traži tri klika:

1. Odaberite šta želite promijeniti. Ako ništa nije odabrano, Skaliraj uzima stvar na koju prvo kliknete.
2. Pritisnite {{key:S}}.
3. Kliknite tačku koja ostaje na mjestu (ne na ručki), npr. donji ugao.
4. Kliknite referentnu tačku. Njena udaljenost od prve tačke broji se kao 1×.
5. Pomjerajte pokazivač ka prvoj tački ili od nje. Faktor se prikazuje u savjetu i u polju vrijednosti ({{ui:Scale}}).
6. Kliknite za završetak, ili upišite faktor i pritisnite {{key:Enter}}: `2` udvostručuje veličinu, `0.5` je polovi.

### Skaliranje na tačnu veličinu

Da nešto bude tačne dužine, izračunajte faktor: nova dužina podijeljena s trenutnom dužinom. U režimu s tri klika polje vrijednosti računa, pa upišite `4.2/3.6` da zid od 3.6 m bude dug 4.2 m. Polje vrijednosti ručke prima samo obične brojeve: prvo izračunajte faktor (4.2 podijeljeno s 3.6 je otprilike 1.1667). Prvo odaberite ivicu da pročitate njenu trenutnu dužinu u {{ui:Entity info}}.

### Ispravka uvoza koji je stigao pogrešne veličine

OBJ datoteke nemaju jedinicu, pa model nacrtan u milimetrima stiže 1000 puta prevelik. Odaberite uvezenu grupu, pritisnite {{key:S}}, kliknite ugaonu ručku, upišite `0.001` i pritisnite {{key:Enter}}. Za model nacrtan u inčima upišite `0.0254`.

## Šta treba znati

- Skaliranje oko tačke s tri klika je ravnomjerno. Da rastegnete samo u jednom smjeru, koristite ručku strane ili ivice (vidi gore).
- Skaliranje grupe ili komponente mijenja kopiju koju ste skalirali; ostale kopije komponente zadržavaju svoju veličinu.
- Pritisnite {{key:Esc}} prije posljednjeg klika da otkažete.

## Okreni

{{ui:Edit}} › {{ui:More}} › {{ui:Flip along red}}, {{ui:Flip along green}} ili {{ui:Flip along blue}} zrcali odabir na mjestu, kroz sredinu njegove kutije: lijevo stubište postaje desno. Površine ostaju okrenute prema van, a grupa ili komponenta se zrcali kao cjelina (njena unutrašnjost se ne prepisuje).

{{ui:Flipped copy along red}} (i za zelenu, plavu) ostavlja original na mjestu i stavlja zrcalnu kopiju uz njega, preko suprotne strane kutije odabira: drugo krilo para vrata, drugo krilo zgrade. Geometrija koja tamo dodiruje pridružuje se originalu, kao što se dodirujuća geometrija uvijek pridružuje; prvo napravite original grupom da ih držite odvojeno.

Unutar otvorene grupe, crvena, zelena i plava su ose same grupe.
