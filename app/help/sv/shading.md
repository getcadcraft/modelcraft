---
title: Gör material med noder
summary: Bygg ett material av strukturer, bilder och matematik i arbetsytan Skuggning, se det i vyn när du arbetar, och måla ytor med det.
keywords: skuggning, baka, bakning, strukturbakning, ambient occlusion, ao, krökning, normalbakning, högpolig, lågpolig, ljuskarta, dekal, dekaler, klistermärke, logga, etikett, strukturmålning, måla struktur, material, materialx, mtlx, openpbr, standard surface, materialbibliotek, librarycraft, strukturuppsättning, pbr, importera strukturer, zip, cc0, dra, nod, noder, nodredigerare, shader, struktur, procedurell, brus, schackruta, voronoi, celler, vågor, tegel, plattor, trä, marmor, gradient, smuts, kantslitage, färgramp, blanda, bulk, normalkarta, ruhet, metallicitet, opacitet, utskärning, emission, glöd, förskjutning, lådmappning, triplanär, uv, bild, bildstruktur
from: d7368b21
---

Ett material som görs i arbetsytan **Skuggning** tillhör filen. Det är en liten graf: **noder** som gör strukturer, bilder och tal, länkade till **Materialutgången**, vars ingångar är ytans utseende — basfärg, ruhet, metallicitet, normal, opacitet, emission och resten av OpenPBR-modellen. Du målar ytor med det som med vilket biblioteksmaterial som helst, och varje ändring syns i vyn direkt.

## Öppna det

Välj {{ui:Skuggning}} i listan över arbetsytor. 3D-vyn behåller överkanten av skärmen och **nodredigeraren** tar nedre delen. Panelen till höger listar filens egna material.

- {{ui:Nytt material}} skapar ett grått material med bara sin Materialutgång.
- **Gör en redigerbar kopia av ett biblioteksmaterial** gör tegel, trä, platta och resten till en graf du kan ändra: dess struktur kommer via en Biblioteksstruktur-nod, dess ojämnheter via en Bulk-nod.
- {{ui:Måla med det}} målar de markerade ytorna eller grupperna, eller väljer materialet för målningsverktyget. Målningsverktygets material listar också filens egna under **I den här filen**.
- {{ui:Duplicera}} och {{ui:Ta bort}} arbetar på materialet du redigerar. Borttagning kan inte ångras: ytor som målats med det visar standardfärgen tills du målar dem igen.

## Material från biblioteket

Panelens **Materialbibliotek (Bibliotek)** listar bibliotekets material, var och ett med en förhandsvisning renderad av CadCraft:s path tracer. De är strukturuppsättningar släppta under CC0, med kredit till de som gjort dem.

- Klicka på ett för att föra in det i filen (dess bilder följer med) och, med ytor eller grupper markerade, måla dem.
- Dra ett till en yta eller grupp i vyn för att bara måla den.
- Det blir ett av filens material: ändra dess noder som vilket som helst. Dess kredit syns i panelen och stannar i filen.

## Importera en struktuppsättning

{{ui:Bilder eller en zip…}} eller {{ui:En mapp…}} under **Importera en struktuppsättning** gör ett material av en uppsättning kartor. Kartorna hittas via orden i deras filnamn: color, albedo, diffuse eller basecolor; roughness (eller gloss, omvandlad till ruhet); metalness eller metallic; normal (OpenGL eller DirectX, från `gl` / `dx` i namnet); height eller displacement; ambient occlusion; opacity; emission. Packade kartor (ARM, ORM) lämnas utanför. Plattan börjar på 1 × 1 m: ange dess verkliga storlek på Materialutgången. Höjd går till förskjutning med dess skala på 0 — höj skalan för att använda den på nät.

## MaterialX

MaterialX är det öppna format som andra 3D- och renderingsprogram använder för att föra vidare material.

- {{ui:Exportera som MaterialX…}} sparar materialet du redigerar: dess värden, och varje struktur som en PNG-bild bredvid `.mtlx`-filen (i en zip). Välj den shader det skrivs som: **OpenPBR Surface** (MaterialX 1.39, samma modell som ModelCraft använder) eller **Standard Surface** (MaterialX 1.38, som fler program läser idag). Strukturerna placeras med UV-koordinater i meter; box- och triplanär-placering skrivs som UV.
- {{ui:Importera MaterialX…}} (eller {{ui:Från en mapp…}}) läser `.mtlx`-filer med OpenPBR-, Standard Surface-, UsdPreviewSurface- eller glTF PBR-shaders. Ge den bilderna också, eller en zip med allt: en bild hittas via sin sökväg, sitt namn eller sitt namn med en annan bildtyp (en `.exr` som filerna anger kan komma som en `.jpg` bredvid den). Strukturer, normalkartor, aritmetik, blandningar och förskjutning kommer in som noder; annat behåller sitt värde, och statusraden säger vad som lämnats utanför.

## Dekaler

En dekal är en bild lagd på en yta — en logga, en skylt, en etikett, en fläck — med ett eget material.

- Ställ in **Bredd på en ny dekal**, välj sedan {{ui:Placera en dekal…}} (eller {{ui:Dekal}} i verktygsfältet), välj en PNG-, JPEG- eller WebP-bild och klicka på en yta. Bilden projiceras på ytorna där, med bibehållna proportioner; transparenta delar av en PNG förblir genomskinliga.
- Den tillhör gruppen eller komponenten du klickade i och rör sig med den. Den täcker ytorna inom sin ruta som vetter åt samma håll, och stoppar vid kanterna på det den ligger på.
- Varje dekal får ett eget material, med namnet **Dekal: <bild>**, i filens lista: redigera det som vilket som helst (ruhet, en bulk, en glöd). {{ui:Material}} bredvid dekalen öppnar det.
- Bredvid varje dekal: dess bredd (höjden följer bilden), {{ui:Vrid}} (ett kvartsvarv) och {{ui:Ta bort}}. Dekaler sparas med filens material, utanför Ångra.
- De syns i skuggad vy, i snabbrenderingar och i högkvalitativa bilder.

## Måla på strukturen

{{ui:Måla textur}} (eller {{ui:Måla}} under **Måla på strukturen**) gör pekaren till en rund pensel. Dra på en yta som bär ett av filens material: penseln målar bilden bakom dess basfärg.

- På ett nät målar den längs nätets UV (vik ut det i UV-arbetsytan först); på andra ytor målar den över ytan, så målningen upprepas med materialets platta.
- Ett material vars basfärg är en ren färg får en ny 512 × 512-bild av den färgen första gången du målar på det. Ett material vars basfärg kommer från andra noder behöver en Bildnod länkad till Basfärg.
- Ställ in penselns färg, storlek (i bildpixlar), styrka och hårdhet i panelen. {{ui:Ångra drag}} eller Ctrl+Z (medan du målar) tar tillbaka ett drag, upp till de senaste 20.
- Den målade bilden sparas i filen. Biblioteksmaterial kan inte målas: gör en redigerbar kopia först.

## Baka strukturer

**Baka strukturer** skriver det som formen och scenen ger en yta till bilder längs ett nätets UV.

- Markera ett nät som har UV (vik ut det i UV-arbetsytan), bocka för kartorna och tryck på {{ui:Baka}}:
  - **Ambient occlusion** — hur öppen varje punkt är: hörn, veck och platser under andra saker blir mörkare. Allt som visas i modellen skuggar den, upp till ocklusionsavståndet.
  - **Krökning** — ljus längs yttre kanter, mörk i inre hörn, mellangrå på plana och svagt böjda delar, över den kantbredd du ställt in.
  - **Normaler från det högdetaljerade objektet** — markera även en detaljerad kopia: dess ytdetalj skrivs som en normalkarta för det enklare (objektet med färre trianglar bakas på). Sökavståndet är hur långt ifrån varandra de två ytorna får vara.
  - **Belysning** — solen för modellens plats och datum (Stil) med dess skuggor, plus himlen, som en ljuskarta.
- Bilderna går med i filen och syns i Bildnoder. Om materialet du redigerar har en **Smuts och kantslitage**-nod läser den den nya ocklusionen och krökningen direkt.
- Fler strålar per texel ger jämnare ocklusion och belysning och tar längre tid. Bakningen körs på datorns processorkärnor i bakgrunden; {{ui:Stoppa bakningen}} stoppar den.

## Bygg en graf

1. {{ui:Lägg till en nod…}} (eller {{key:Shift+A}} i nodredigeraren) lägger till en nod i mitten av redigeraren.
2. Dra från en utgångsprick (på en nods högra sida) till en ingångsprick (på en nods vänstra sida) för att länka dem. En andra länk till en ingång ersätter den första; dra en länkad ingång bort för att ta bort länken.
3. Ingångar som inte är länkade visar sitt värde: skriv ett tal eller välj en färg. Inställningar sitter längst ned på varje nod.

Dra en nod i dess rubrik för att flytta den, dra i tomt utrymme för att panorera, och använd hjulet för att zooma. {{key:Delete}} tar bort de markerade noderna eller länken, {{key:Mod+Z}} ångrar, {{key:Mod+D}} duplicerar, {{key:F}} visar alla noder. Varje ändring är ett ångra-steg i nodredigeraren. Modellens egen ångra ändrar inte material.

| Noder | Vad de gör |
|---|---|
| Strukturkoordinater | Var på plattan en punkt är: upprepa den, förskjut den, vrid den ett kvartsvarv. |
| Värde, Färg | Ett tal, en färg. |
| Bild | En bild i filen (en som kom med en importerad modell, eller en du lade till med {{ui:Lägg till en bild…}}). Välj **Färger** för ett foto och **Data** för en ruhets- eller normalkarta. |
| Biblioteksstruktur | Ett biblioteksmaterials struktur, ruhet och höjd. |
| Schackruta, Brus | Rutor; mjukt fraktalt brus med sin detalj, ruhet och frö. |
| Voronoi-celler, Vågor, Gradient | Celler (avstånd till närmaste punkt, kanterna mellan cellerna, en färg per cell); band över, upp eller diagonalt, som sinus, såg eller triangel, böjda av brus; linjära, kvadratiska, radiella och sfäriska gradienter. |
| Tegel, Plattor | Tegelrader med förskjuten löpning, eller ett rutnät av plattor: färger, murbruk eller fog, en glugg och en fasning i meter, en höjd för ojämnheter, ett slumptal per bit. |
| Trä, Marmor | Ringar längs fibern med fina trådar; ådror böjda av turbulens. |
| Smuts och kantslitage | Sliter konvexa kanter och smutsar ihåligheter utifrån ett näts krökning- och ocklusionsbilder ([Baka strukturer](topic:shading#bake-textures) skapar dem; eller ställ in dess två bildinställningar, i nätets UV-layout: placera materialet med UV-koordinater). Utan dem ändrar den ingenting. |
| Blanda färger, Färgramp, Nyans/mättnad/värde, Ljusstyrka och kontrast, Invertera, Gamma, Dela och kombinera RGB | Färgarbete. |
| Matematik, Mappa intervall | Aritmetik på tal (addera, multiplicera, potens, mjuk steg och mer). |
| Bulk, Normalkarta | En normal från en höjd (Bulk) eller från en normalkartbild (Normalkarta: välj den gröna kanalens riktning). |

## Materialutgången

Dess inställningar säger hur strukturen ligger på ytor:

- **Plattans bredd** och **Plattans höjd**: hur många meter en platta av strukturen täcker. Allt som en graf gör upprepas över plattan utan skarv.
- **Placerad efter**: **UV-koordinater** följer ytor (tryck/dra-ytor: längs varje yta; nät: deras UV, en UV-enhet = en platta), **Box** projicerar från närmaste av de tre axlarna, **Triplanär** blandar de tre projektionerna på lutande ytor (**Blandningsskärpa**: högre ger en hårdare blandning).
- **Normalstyrka** skalar normalingången. **Förskjutningsskala** anger hur långt förskjutningsingången flyttar ett näts hörn.
- {{ui:Fler ingångar}} visar resten av OpenPBR-ingångarna: coat, fuzz, subsurface, thin film, transmission och deras färger.

## I högkvalitativa bilder

Path tracern läser basfärg, ruhet, metallicitet, opacitet, normal och emission från grafen när de ändras över ytan. Varje annan ingång du länkar (en coat som varierar, till exempel) används med sitt medelvärde; panelen säger vilka. En utskärning från en opacitetsstruktur visar sin form, och dess skugga är jämnt genomskinlig. En glödande struktur lyser upp det den vetter mot, utan att samplas som en lampa.

**Förskjutning** flyttar bara hörnen på nät, så lägg till en Subdivision-modifierare för detaljer ([Modifierare](topic:modifiers)). Tryck/dra-ytor behåller sin form och får ojämnheterna från normalen.

:::tip
På en dator med WebGPU räknas grafen ut på grafikkortet; utan det, på processorn. Resultatet blir detsamma.
:::
