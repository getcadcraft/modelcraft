---
title: Brisanje in čiščenje
summary: Izbrišite robove, skupine in vodila z radirko ali tipko Delete, zlijte razcepljene ploskve in popravite ploskve, obrnjene v napačno smer.
keywords: izbriši, radirka, delete, odstrani, zlij, združi ploskve, počisti, zalutane črte, obrni ploskev, zadnja stran ploskve, razveljavi
from: 80b92a81
---

## Brisanje z radirko

1. Pritisnite {{key:E}} za {{ui:Eraser}}.
2. Kliknite rob, skupino, komponento ali vodilo. Izbriše se.
3. Za brisanje več elementov pritisnite in povlecite čez njih. Vse, čez kar greste, se označi, ob spustitvi pa gre vse stran.

Radirka ne izbira ploskev: ploskev izgine, ko izbrišete robove, ki jih potrebuje. Ploskve so tisto, skozi kar radirka išče robove.

## Kaj se zgodi s ploskvami

- **Rob med dvema ploskvama v isti ravnini** (na primer črta, narisana čez tla) izgine in se dve ploskvi **zlijeta** v eno.
- **Rob, ki ga ploskev potrebuje, da ostane zaprta** (rob škatle), vzame s seboj tudi to ploskev. Izbrišete en zgornji rob škatle, zgornja ploskev in ena stranska izgineta in ostane odprta škatla.
- **Prosti konci** (točke, ki jih nobeden rob več ne uporablja) se počistijo.

Brisanje zadnjega primerka komponente jo odstrani tudi iz plošče {{ui:Components}}.

## Brisanje s tipko Delete

1. Izberite, kar želite odstraniti, z {{ui:Select}}.
2. Pritisnite {{key:Delete}} ali {{key:Backspace}}.

To odstrani tudi ploskve. Ploskev, izbrisana tako, pusti za seboj svoje robove, zato lahko izbrišete vrh škatle, ohranite njen obris in nato tam narišete kaj drugega.

## Čiščenje zalutanih črt na ravni ploskvi

Če stena ali tla kažejo črte, ki jih ne želite (ostanki risanja), jih izbrišite z {{ui:Eraser}}. Črte, ki ležijo v ploskvi, izginejo; ploskev ostane.

## Ploskev, obrnjena v napačno smer

Ploskev, gledana od zadaj, je modrikasto siva. Če ploskev kaže modrikasto sivo na zunanji strani modela:

1. Izberite ploskev.
2. Kliknite {{ui:Reverse face}} v {{ui:Entity info}}.

Smer ploskev je najpomembnejša pri izvozu: upodabljalniki, igralni pogoni in 3D-tiskalniki lahko skrijejo ali napačno preberejo ploskve, ki kažejo navznoter.

## Razveljavitev napake

{{key:Mod+Z}} razveljavi en korak naenkrat, {{key:Mod+Y}} (ali {{key:Mod+Shift+Z}}) ponovno uveljavi. Povlek z radirko je en korak, ne glede na to, koliko stvari je zajel. Vrstica stanja navede, kaj je bilo razveljavljeno: „Razveljavljeno: brisanje.“
