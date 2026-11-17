---
title: Meniji, tipke in miška
summary: Izberite slog menija, ki ustreza modelirniku, ki ga že poznate, dodelite kateremu koli ukazu svojo tipko, premaknite ukaze med meniji ter nastavite, kaj počnejo kolešček ter srednji in desni gumb miške.
keywords: slog menija, meniji, menijska vrstica, orodna vrstica, bližnjice na tipkovnici, bližnjice, tipke, slog tipk, preslikava tipk, prilagodi, ponovno določi tipke, miška, kolešček, obrni, smer povečave, srednji gumb, desni gumb, orbita, pomik, izvoz, uvoz, preklapljanje, znano, potisni/povleci, modelirnik
from: e56fce3d
---

Orodja ModelCraft so enaka, ne glede na to, kako do njih pridete. **Slog menija** določa, kje so na zaslonu, kako se imenujejo tam in katere tipke jih zaženejo. Izberite ga v {{ui:Nastavitve}} ({{key:Mod+,}}) › {{ui:ModelCraft}} › {{ui:Meniji, tipke in miška}}; sprememba je takojšnja, ta brskalnik si jo zapomni.

## Slogi

| Slog | Kaj dobite |
|---|---|
| {{ui:ModelCraft}} | Lastna orodna vrstica ModelCraft (Datoteka, Riši, Spremeni, Razvrsti, Uredi, Kamera) in njegove enočrkovne tipke: {{key:L}} črta, {{key:R}} pravokotnik, {{key:P}} potisni/povleci, {{key:M}} premakni, {{key:Q}} zasukaj, {{key:S}} merilo, {{key:E}} radirka, {{key:O}} orbita. Začetni slog. |
| {{ui:Push-pull}} | Vrstica menijev (Datoteka, Uredi, Pogled, Kamera, Riši, Orodja, Okno) nad vrsto glavnih orodij, z enakimi enočrkovnimi tipkami. |
| {{ui:Modeler}} | Glava menijske vrstice (Datoteka, Uredi, Pogled, Izberi, Dodaj, Objekt, Mreža) in tipke modelirnikov mrež: {{key:W}} izberi, {{key:G}} zgrabi, {{key:R}} zasukaj in {{key:S}} spremeni merilo izbora hkrati ({{key:X}}, {{key:Y}} ali {{key:Z}} zaklene os med premikanjem), {{key:E}} potisni/povleci, {{key:B}} pravokotnik, {{key:X}} izbriši, {{key:A}} izberi vse, {{key:Alt+A}} nič, {{key:Shift+D}} podvoji, {{key:Mod+G}} skupina, {{key:H}} skrij. Srednji gumb orbitira; {{key:Shift}} in srednji gumb pomikata pogled, {{key:Mod}} in srednji gumb ga povečujeta; desni gumb prekliče, kar orodje počne. |
| {{ui:Beginner}} | Trak, katerega zavihek {{ui:Ustvari}} ima nekaj velikih gumbov: oblike za spuščanje, luknje, premik, zasuk in velikost, poravnavo, {{ui:Skupina}} (luknje, izrezane v oblike) in preverjanje za 3D-tiskanje; vsa druga orodja na zavihku {{ui:Več orodij}}. Desni gumb orbitira, srednji gumb pomika pogled. Glejte [slog Začetnik](topic:beginner). |

Slog tipk, ki ga poznate iz {{ui:Ključi}} v spodnjem desnem kotu pogleda in iz {{ui:Uredi}} › {{ui:Več}}, je ista izbira: izbira tipk modelirnika tam izbere slog {{ui:Modeler}}, izbira tipk potisni/povleci pa ga pusti pri slogu {{ui:ModelCraft}}. Če ste v starejši različici izbrali tipke modelirnika, se ModelCraft enkrat sam odpre v slogu {{ui:Modeler}}.

:::tip
Tipka, ki pripada tipkam potisni/povleci, a jo vaš slog dodeli drugemu ukazu, ne naredi nič, vrstica stanja pa pove, kam je šel njen ukaz („V Modeler, Potisni/povleci je E“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} in puščične tipke vedno ohranijo svoj pomen, številke vedno gredo v polje za vrednost, medtem ko ima orodje, ki nekaj premika, prednost pred lastnimi tipkami.
:::

## Naredite po svoje

1. Izberite slog, ki je najbližje tistemu, kar želite, nato kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Ključi in meniji}} poiščite ukaz (pomaga iskalno polje). {{ui:Dodaj tipko}} in pritisnite tipko. Kliknite tipko, da jo odstranite.
3. Z menijsko vrstico {{ui:Kje je}} premaknete ukaz v drug meni ali na {{ui:Samo tipke}}.
4. Na {{ui:Miška}} nastavite kolešček in kaj počnejo gumbi v 3D pogledu.
5. Dajte mu ime in kliknite {{ui:Shrani}}.

Shranjevanje vgrajenega sloga ustvari vašo kopijo („Moj Modeler“); vgrajeni se nikoli ne spremeni. Vaša kopija bere tipke tako, kot slog, iz katerega je začela: tista, narejena iz {{ui:Modeler}}, ohrani delovanje tipk zgrabi, zasukaj in spremeni merilo hkrati.

## Miška

- **Kolešček**: {{ui:Drsenje navzgor poveča}} (začetno) ali {{ui:Drsenje navzgor pomanjša}}, in kako hitro. Stiskanje s prsti na sledilni ploščici vedno poveča ali pomanjša v smeri, v kateri se gibljejo prsti.
- **Vlečenje v 3D pogledu**: {{ui:Lastni za vsak pogled}} ohrani gumbe ModelCraft (srednji gumb orbitira, desni gumb ali {{key:Shift}} in srednji gumb pomikata pogled). Ali pa nastavite srednji in desni gumb na orbito, pomik, povečavo ali nič; {{key:Shift}} z gumbom zamenja orbito in pomik. Levi gumb vedno pripada uporabljenemu orodju.
- **Sledilne ploščice**: {{ui:Nastavitve}} › {{ui:ModelCraft}} › {{ui:Pomikanje}} še vedno določa, ali dva prsta orbitirata (sledilna ploščica) ali povečujeta (miška). Glejte [Orbita, pomik in povečava](topic:orbit-pan-zoom).

## Vzemite s seboj

{{ui:Izvozi}} shrani uporabljen slog kot majhno datoteko `.ccinput.json`; {{ui:Uvozi…}} doda enega, z drugega računalnika ali od sodelavca. Uvožena datoteka lahko kaže samo na lastne ukaze ModelCraft: vse drugo se izpusti in šteje v vrstici stanja. {{ui:Izbriši ta slog}} odstrani enega od vaših.

:::note
Te nastavitve ostanejo v tem brskalniku. {{ui:Uporabi ta slog v vseh programih}} pod karticami slogov poskrbi, da se vsak program odpre v ustreznem slogu: {{ui:Push-pull}} gre z drugimi programi, ki imajo slog z menijsko vrstico. {{ui:Modeler}} nima ustreznika v drugih programih, zato ostane izbira samo za ModelCraft.
:::

Sorodno: [Dejanja tipk in miške](topic:keyboard) · [Nastavitve ModelCraft](topic:settings) · [Prihod iz drugih modelirnikov](topic:coming-from)
