---
title: Premakni, kopiraj in ustvari razpostavitve
summary: Premaknite stvari s klikom ali za natančno razdaljo, kopirajte jih s tipko za spremembo in naredite vrsto enakomerno razmaknjenih kopij.
keywords: premakni, kopiraj, podvoji, razpostavi, matrika, vrsta, razmik, razdeli, odmik, raztegni, stolpci, ponovi, večkratno kopiranje
from: 280245fc
---

{{ui:Premakni (M)}} ({{key:M}}) premakne vse, kar je izbrano, z ene točke na drugo. Če držite tipko za spremembo, nastane kopija, po kopiranju pa lahko vnesete, koliko jih še želite.

## Premik objekta

1. Izberite, kar želite premakniti (glejte [Izbiranje stvari](topic:select)). Če nič ni izbrano, orodje Premakni vzame tisto, na kar kliknete.
2. Pritisnite {{key:M}}.
3. Kliknite točko, od koder premikate. Izberite nekaj smiselnega, na primer vogal: ta točka bo natančno pristala tam, kjer kliknete nato.
4. Premaknite kazalec. Izbor sledi kazalcu. Zaskoči se na točke, robove ter rdečo, zeleno in modro smer, kot to počne črta.
5. Kliknite, kam naj gre točka, ali vnesite razdaljo in pritisnite {{key:Enter}}.

   Opomba v vrstici stanja se za naslednji premik vrne na „Kliknite točko, od koder premikate …“.

Vnesena razdalja gre v smeri, v katero kažete. Lahko vnesete tudi natančen odmik, `<2m,0,0>` (2 m vzdolž rdeče), ali natančen cilj za izbrano točko, `[0,0,0]` (izhodišče). Glejte [Vnos natančnih velikosti](topic:value-box).

Za premik vzdolž ene osi po prvem kliku pritisnite puščično tipko: {{key:Right}} zaklene na rdečo, {{key:Left}} na zeleno, {{key:Up}} na modro. Ponovno pritisnite isto puščico za odklep.

## Premik dela oblike jo raztegne

Geometrija, ki ni združena, je povezana. Če izberete eno ploskev ali nekaj robov in jih premaknete, se ploskve, ki so nanje pripete, raztegnejo za njimi. Premaknete zgornjo ploskev škatle v stran, se škatla nagne; premaknete en rob strehe, se spremeni naklon strehe. Ploskve, ki ne morejo več ostati ravne, se prepognejo v trikotnike.

Za premik celotnega predmeta brez raztezanja ga najprej izberite v celoti (trikrat kliknite nanj) ali, bolje, naredite iz njega skupino ali komponento (glejte [Skupine in komponente](topic:groups-components)).

## Kopiranje stvari

1. Izberite, kar želite kopirati.
2. Pritisnite {{key:M}}.
3. Držite {{key:Ctrl}} (ali {{key:Alt}}) in kliknite točko, od koder premikate. Na Macu enako naredita {{key:Mod}} ali {{key:Alt}}. Opomba pravi „Ctrl premakne namesto tega“, kar pomeni, da kopirate.

   Tudi po prvem kliku lahko pritisnete in spustite {{key:Ctrl}} ali {{key:Alt}} in tako preklapljate med premikanjem in kopiranjem.

4. Kliknite, kam naj gre kopija, ali vnesite razdaljo in pritisnite {{key:Enter}}.

   Izvirnik ostane tam, kjer je bil, kopija pa je izbrana.

## Kopiraj, izreži, prilepi in podvoji

- {{key:Mod+C}} kopira izbor, {{key:Mod+X}} izreže (kopira in nato izbriše). {{ui:Kopiraj}} in {{ui:Prilepi}} sta tudi gumba v skupini {{ui:Uredi}} v orodni vrstici, {{ui:Več}} poleg njiju pa ima izreži, prilepi na isto mesto in podvoji.
- {{key:Mod+V}} prilepi: obris kopije sledi kazalcu in se zaskakuje kot katero koli orodje; klik jo položi tako, da je njen najnižji vogal tam. {{key:Esc}} prekliče.
- {{key:Mod+Shift+V}} prilepi na isto mesto, točno tja, od koder je kopija prišla. Uporabno za premik v odprto skupino.
- {{key:Mod+D}} ({{key:Shift+D}} v slogu Modeler) podvoji: kopija nastane in takoj sledi kazalcu; kliknite, da jo položite, vnesite razdaljo ali pritisnite {{key:Esc}}, da jo opustite. Takoj zatem vnesite `3x` za več kopij zapored.

Prilepljena skupina postane nova skupina. Prilepljena komponenta je še ena postavitev iste komponente, zato urejanje ene spremeni vse. Kopije se prilepijo tudi v drug zavihek ModelCraft v tem brskalniku (tam pridejo kot nove definicije).

## Vrsta kopij

Takoj po kopiranju, medtem ko je orodje {{ui:Premakni (M)}} še aktivno:

- Vnesite `3x` (ali `*3`) in pritisnite {{key:Enter}} za tri kopije zapored, vsako na enaki razdalji kot prva kopija. Dobite tri nove kopije poleg izvirnika.
- Vnesite `/3` in pritisnite {{key:Enter}}, da razdelite: tri kopije enakomerno razporejene od izvirnika do mesta prve kopije, zadnja na tem mestu. To uporabite za zapolnitev razpona: postavite eno kopijo na skrajni konec in nato razdelite.

Takoj lahko vnesete drugo število: `5x` nadomesti vrsto `3x`. Opomba vas opomni: „Kopirano. Za več kopij zapored vnesite 3x ali /3 za razdelitev razdalje.“

### Primer: stebri na vsakih 6 metrov

1. Naredite steber in ga spremenite v komponento ({{key:G}}), da se bodo vse kopije pozneje spremenile skupaj.
2. Pritisnite {{key:M}}, držite {{key:Ctrl}} in kliknite osnovni vogal stebra.
3. Premaknite vzdolž rdeče osi, vnesite `6m` in pritisnite {{key:Enter}}.
4. Vnesite `4x` in pritisnite {{key:Enter}}. Imate pet stebrov, vsak 6 m narazen.

## Na kaj paziti

- Pred drugim klikom pritisnite {{key:Esc}}, da prekličete; vse se vrne na prvotno mesto.
- Premakni deluje znotraj skupine, ki jo urejate. Za premik cele skupine jo najprej zaprite in jo izberite od zunaj.
- Ko je {{ui:Trk}} vklopljen (spodaj desno in v [nastavitvah ModelCraft](topic:settings#solids-stop-where-they-touch)), se premik ustavi tam, kjer se izbor dotakne drugega telesa, namesto da bi šel skoznje. Kliknite {{ui:Trk}}, da ga za premik, ki naj gre skozi, izklopite.
- Če želite kopijo dati v drugo skupino: kopirajte jo, odprite drugo skupino in prilepite ({{key:Mod+Shift+V}} ohrani isto mesto).
