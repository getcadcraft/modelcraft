---
title: Objekti krive
summary: Crtaj Bézier, NURBS i krive s ravnim segmentima, daj im debljinu, širinu ili suženje, popuni ravne, postavi tekst kao krivu i pretvori ih u mreže.
keywords: kriva, krive, bezier, nurbs, spline, splajn, putanja, cijev, kabl, uže, skošenje, izvlačenje, sužavanje, nagib, poluprečnik, popuna, profil, tekst, slova, logo, kriva u mrežu
from: 602bf077
---

**Objekat krive** je kriva koja pravi oblik: cijev duž nje (skošenje), traku (izvlačenje), suženi rog (sužavanje) ili, kad je ravna i zatvorena, popunjenu ploču ili slova. Oblik prati krivu: pomjeri tačku i cijev se pomjera s njom. Kad je oblik dobar, pretvori ga u mrežu.

## Dodaj krivu

Odaberi {{ui:Kriva}} na listi radnih prostora i pritisni {{ui:Dodaj}}:

| Vrsta | Šta je |
| --- | --- |
| Bézier kriva, Bézier krug | Prolazi kroz svoje tačke; svaka tačka ima dvije ručice koje podešavaju smjer krive |
| NURBS kriva, NURBS krug, Putanja | Glatka, vučena prema svojim tačkama (počinje i završava se na krajnjim tačkama); svaka tačka ima težinu |
| Tekst | Tvoj tekst kao ravne, popunjene konture slova |

Nova kriva dobija tanku cijev da bi se vidjela i odabrala; postavi joj dubinu skošenja na 0 za golu krivu.

Možeš krenuti i od nečega nacrtanog: odaberi luk, krug, poligon ili nacrtanu krivu u radnom prostoru Model i pritisni {{ui:Napravi objekt krive}} u {{ui:Podaci o entitetu}}. Nacrtane linije ostaju.

## Uređivanje tačaka

Dvaput klikni objekat krive (ili ga odaberi i izaberi {{ui:Kriva}}) da ga uređuješ.

- Klikni tačku ili ručicu ({{key:Shift}} dodaje ili uklanja); prevuci je da je pomjeriš. Prevuci po praznom prostoru da odabereš okvirom.
- {{ui:Produži}} ({{key:E}}, ili {{key:Ctrl}}+klik) dodaje tačku nakon odabranog kraja, na pokazivaču.
- {{ui:Dijeljenje}} ({{key:W}}) stavlja tačku između svakog para odabranih susjeda; Bézier zadržava svoj oblik.
- {{ui:Pomjeri}}, {{ui:Okreni}}, {{ui:Skaliraj}} pomjeraju odabrane tačke pomoću pokazivača (tipke modelera {{key:G}} {{key:R}} {{key:S}}, tipke gurni/povuci {{key:M}} {{key:Q}} {{key:S}}); klikni da zadržiš, {{key:Esc}} da otkažeš.
- {{ui:Zatvori}} ({{key:C}}) zatvara otvorenu krivu ili otvara zatvorenu; {{ui:Obrtanje}} ({{key:Shift+R}}) je pušta u suprotnom smjeru.
- Bézier ručice: {{ui:Zaglađivanje}} ({{key:V}}) ih postavlja za glatku krivu, {{ui:Ugao}} ({{key:Shift+V}}) ih usmjerava prema susjedima, {{ui:Slobodno}} ({{key:Alt+V}}) ih ostavlja gdje si ih stavio. Prevlačenje ručice je čini slobodnom.
- {{ui:Bézier}}, {{ui:NURBS}} i {{ui:Poli}} mijenjaju tip odabranih splajnova, zadržavajući tačke.

Svaka izmjena je jedan korak poništavanja.

## Oblik

Postavke su u panelu (i u {{ui:Podaci o entitetu}} u radnom prostoru Model):

- **Oblik:** 3D krive idu bilo kuda; ravna kriva ostaje u svojoj ravni i može se popuniti.
- **Popuni zatvorene splajnove** (ravne): konture postaju ploča; kontura unutar druge je rupa, pa slova zadržavaju svoje rupe.
- **Izvlačenje:** polovina širine trake (otvorene ili 3D krive), ili polovina debljine ploče (popunjene).
- **Dubina skošenja** i **zaobljenost:** okrugla cijev duž krive (uz izvlačenje: zaobljena traka); na popunjenom obliku, zaobljena ivica.
- **Zatvori krajeve:** poklopci na otvorenoj cijevi.
- **Sužavanje duž krive:** ravnomjerno skalira duž svakog splajna, na primjer `1, 0.2` za rog, `0, 1, 0` za vreteno.
- **Glatkoća** i, za NURBS, **red**: koliko je fino nacrtana i koliko glatka (2 ravno … 6 najglađe).
- Uz odabrane tačke: **poluprečnik** (debljina cijevi na tom mjestu, puta skošenje), **nagib** (okreće traku oko krive) i, za NURBS, **težina**.

Modifikatori rade na objektu krive kao na mreži: Niz duž nje, Ogledalo, Podjela površine. Vidi [Modifikatori na mreži](topic:modifiers).

## Pretvori u mrežu

{{ui:U mrežu}} (u radnom prostoru Kriva ili u {{ui:Podaci o entitetu}}, {{ui:Kriva u mrežu}}) pretvara objekt krive u mrežu koju sada prikazuje; njegovi modifikatori ostaju na vrhu. Zatim ga uredi u radnom prostoru Mreža. Poništavanje ga vraća nazad.

Vidi također [Mreže](topic:meshes) i [Uređivanje mreže](topic:mesh-edit).
