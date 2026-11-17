---
title: Méretezés és átméretezés a megrajzolt elemeken
summary: Helyezzen méreteket sarkok, ívek és körök, vagy két él közé; írjon be új hosszt a modell átméretezéséhez. Egy él hosszát, illetve egy csoport szélességét, mélységét és magasságát az Entitásinfóban írhatja át.
keywords: méretezés, méretek, átméretezés, méret módosítása, méret szerkesztése, hossz, szélesség, mélység, magasság, nyújtás, méretező kényszer, jelölés, utólagos, sugár, átmérő, szög, szögméret, ív, kör, R, Ø
from: a1f815ec
---

A ModelCraft méretei nem rögzítettek, miután valami megrajzolódott. A méretezés hosszt mutat a modellen, és ha új hosszt írnak bele, a modell ahhoz igazodik. Egy él hosszát, illetve egy csoport szélességét, mélységét és magasságát az {{ui:Entitásinfó}} panelen is átírhatja.

## Méret elhelyezése

1. Nyomja meg a {{key:D}} billentyűt, vagy kattintson az eszköztáron a {{ui:Méretezés}} gombra.
2. Kattintson arra a sarokra, ahonnan mérni szeretne. A sarkokhoz, felezőpontokhoz és élekhez tapad, ahogy a rajzolásnál.
3. Kattintson a második sarokra.

   Vagy kattintson egyszer egy **élre** (a súgó szövege: „Élen”), hogy az egész élt egy kattintással megméretezze.
4. Vigye a mutatót oda, ahol a méretvonalnak lennie kell, és kattintson. Megadhatja az eltolást is, például `0.5m`-t, és nyomja meg az {{key:Enter}} billentyűt.

   Vízszintes élnél a méretvonal vízszintes marad, hacsak oldalról nem nézi. Függőleges élnél a rá merőleges, Önre legjobban néző függőleges síkban marad.

Az állapotsor ezt mutatja: „Méretezés 4 m.” A méretek a modell mértékegységében jelennek meg, és frissülnek, ha a választóban megváltoztatja a mértékegységet.

## Sugár, átmérő és szög

Ugyanaz a {{ui:Méretezés}} eszköz méri a köröket, íveket és szögeket:

- **Egy ív:** kattintson az ívre. A súgó szövege: {{ui:Sugár}}. Vigye a mutatót oda, ahová a szöveg kerüljön, és kattintson: a méret **R 1.5 m**-t mutat.
- **Egy kör:** kattintson a körre. Kap egy **átmérőt** (**Ø 3 m**), a kört a középpontján átmenő vonallal. A sokszögek ugyanígy működnek, csúcsaik a körön vannak.
- **Két él közötti szög:** kattintson az egyik élre, majd egy olyan második élre, amely sarkban találkozik vele (a mutató alatt a súgó szövege: {{ui:Angle between the edges}}). Ezután vigye a mutatót a kívánt szög belsejébe, és kattintson. A sarkon belül a két él közötti szöget kapja; ha egy oldalra mozdítja, a mellette lévő szöget (például 150°-ot 30° helyett). Hogy milyen messze kattint a sarkától, az határozza meg, hol van az ív; vagy írja be ezt a távolságot.

Sugár és átmérő között úgy vált, hogy kijelöli a méretet, majd az {{ui:Entitásinfó}} panelen a {{ui:Megjelenítés mint}} lehetőséget választja.

**Átméretezés ezekkel:** írjon új sugarat vagy átmérőt közvetlenül a méret elhelyezése után, vagy később jelölje ki, és írjon be egy értéket. Az ív vagy kör megtartja a középpontját és változtatja a méretét; a határolt lap (korong, horony vége) vele együtt változik. Két dolog csak mér:

- **Egy szögméret** soha nem változtatja a modellt. Szög megváltoztatásához forgassa el az éleket a {{ui:Forgatás}} paranccsal.
- **Egy henger végén lévő kör** (olyan kör, amelyet a {{ui:Tolás/húzás}} paranccsal húzott ki) nem méretezhető át a méretéből, mert az oldalainak is változnia kellene. Helyette léptékezze a hengert a tengelye körül.

## A modell átméretezése méretezéssel

Közvetlenül a méret elhelyezése után írjon be új hosszt, és nyomja meg az {{key:Enter}} billentyűt: `6m`, `12'`, `3500` milliméteres modellben. A modell ahhoz a mérethez igazodik.

Később, bármikor:

1. A {{ui:Kijelölés}} eszközzel kattintson a méret szövegére vagy vonalára. Az {{ui:Entitásinfó}} panel azt írja, hogy **Méretezés**, és mutatja a {{ui:Hossz}} értékét.
2. Írja be az új hosszt, és nyomja meg az {{key:Enter}} billentyűt. Közvetlenül az értékmezőbe írhat, vagy az {{ui:Entitásinfó}} panel {{ui:Hossz}} mezőjébe.

### Mi mozog

A második sarok, amelyre kattintott, mozog, és mozog minden, ami azon túl van:

- **Mindkét sarok egy darabon** (egy doboz szélessége, egy fal magassága): a mozgó sarok oldala kifelé vagy befelé csúszik, és a hozzá kapcsolódó lapok nyúlnak. A doboz zárt test marad, és az oldalon teljesen elhelyezkedő minden, például egy ablakkomponens, vele együtt mozog.
- **A sarkok két külön darabon** (két doboz közötti rés): a mozgó sarok darabja egészben mozog, és a rés változik.
- **A mozgó sarok egy csoporton vagy komponensen belül, a másik sarok viszont nem:** az egész csoport mozog.
- **Mindkét sarok ugyanazon csoporton vagy komponensen belül:** a belsejében nyúlik. A komponens mindenhol változik, ahol elhelyezték, ahogy a szerkesztése mindig is.

Ahhoz, hogy megváltoztassa, melyik vég mozog, jelölje ki a méretet, és az {{ui:Entitásinfó}} panelen válassza a {{ui:Mozog}} lehetőséget:

| Választás | Mi történik |
|---|---|
| {{ui:Second end}} (alapértelmezett) | A második kattintott vég mozog |
| {{ui:First end}} | Az első kattintott vég mozog |
| {{ui:Both ends (centered)}} | Mindkét vég a változás felét mozgatja, így a közép helyben marad |

### Amikor az átméretezést elutasítják

A ModelCraft nem változtat semmit, és az állapotsorban megmondja, miért:

- „egy lap kihajlana a síkjából”: a méret átlósan fut az alakzaton át. Méretezzen egy él mentén, vagy a piros, zöld vagy kék tengely mentén.
- „egy lap összezsugorodna semmivé, vagy befordulna”: az új hossz túl rövid az alakzathoz.
- „a mozgó vég nem egy modellsarkon van”: az a vég üres térben vagy egy él közepén lett elhelyezve. Válassza a másik véget a {{ui:Mozog}} alatt, vagy helyezze a méretet két sarokra.
- „a hossznak nullánál nagyobbnak kell lennie”.

Minden átméretezés egy lépés: a {{key:Mod+Z}} visszavonja.

## Méret átírása az Entitásinfóban

Nem mindig kell méretezés:

- **Egy él:** jelölje ki. Az {{ui:Entitásinfó}} panelen a {{ui:Hossz}} egy beírható mező. Az értékmezőbe írt hossz is működik. Az a vég mozog, amely a piros, majd a zöld, majd a kék tengely mentén tovább van, és ami hozzá kapcsolódik, az nyúlik. Például egy doboz első alsó élének átírása szélesebbé teszi a dobozt jobbra.
- **Egy csoport vagy komponens:** jelölje ki. A {{ui:Szélesség (piros)}}, a {{ui:Mélység (zöld)}} és a {{ui:Magasság (kék)}} beírható mezők. A távolabbi oldala (jobb, hátsó, felső) mozog. Ezek a csoport saját tengelyei, mielőtt bármilyen forgatást adott volna neki.

A {{key:Enter}} alkalmazza, az {{key:Esc}} visszaállítja a régi értéket.

## A méretek követik a modellt

A méret a két sarokhoz kötődik, amelyekre elhelyezte (szögméretnél: a sarkához és a két élének távoli végeihez; sugár vagy átmérő esetén: az íveihez vagy köréhez). Ha mozgatja, tolja/húzza vagy átméretezi a geometriát, a méret követi, és az új hosszt mutatja. Akkor is kötve marad, ha a geometriából csoportot vagy komponenst készít.

Ha egy vég nem sarokra került (lapra vagy üres térbe), vagy a sarkát kitörölték, az a vég ott marad, ahol volt. A méret így is mér, de csak a másik végéről tud átméretezni.

## Méretek eltávolítása

- Egy méret: jelölje ki, és nyomja meg a {{key:Delete}} billentyűt, vagy kattintson rá a {{ui:Radír}} eszközzel.
- Az összes méret: ha semmi sincs kijelölve, kattintson az {{ui:Entitásinfó}} panelen a {{ui:Minden méret törlése}} gombra.

A méretek a `.modelcraft` fájlba mentődnek. Más formátumokba nem exportálódnak, mert azok csak a 3D-s modellt viszik át. A méreteket tartalmazó fájl régebbi ModelCraft-ban is megnyílik, csak méretek nélkül.
