---
title: Objekti krive
summary: Crtajte Bézier, NURBS i krive sa pravim segmentima, dajte im debljinu, širinu ili suženje, popunite ravne, postavite tekst kao krivu i pretvorite ih u mreže.
keywords: kriva, krive, bezier, nurbs, splajn, splajnovi, putanja, cev, cevi, kabl, uže, skošenje, izvlačenje, suženje, nagib, poluprečnik, popuna, profil, tekst, slova, logo, kriva u mrežu
from: 602bf077
---

**Objekat krive** je kriva koja pravi oblik: cev duž nje (skošenje), traka (izvlačenje), suženi rog (suženje) ili, kada je ravna i zatvorena, popunjena ploča ili slova. Oblik prati krivu: pomerite tačku i cev se pomera s njom. Kada je oblik dobar, pretvorite ga u mrežu.

## Dodavanje krive

Izaberite {{ui:Kriva}} na listi radnih prostora i pritisnite {{ui:Dodaj}}:

| Vrsta | Šta je |
| --- | --- |
| Bézier kriva, Bézier krug | Prolazi kroz svoje tačke; svaka tačka ima dve ručice koje određuju pravac krive |
| NURBS kriva, NURBS krug, Putanja | Glatka, vuče se ka svojim tačkama (počinje i završava se na krajnjim tačkama); svaka tačka ima težinu |
| Tekst | Vaš tekst kao ravne, popunjene konture slova |

Nova kriva dobija tanku cev da bi se videla i mogla izabrati; postavite njenu dubinu skošenja na 0 za golu krivu.

Možete i da počnete od nečega nacrtanog: izaberite luk, krug, poligon ili nacrtanu krivu u radnom prostoru Model i pritisnite {{ui:Napravi objekat krive}} u {{ui:Podaci o entitetu}}. Nacrtane linije ostaju.

## Uređivanje tačaka

Dvaput kliknite objekat krive (ili ga izaberite i izaberite {{ui:Kriva}}) da ga uredite.

- Kliknite tačku ili ručicu (Shift dodaje ili uklanja); prevucite je da je pomerite. Prevucite po praznom prostoru da birate okvirom.
- {{ui:Produži}} ({{key:E}}, ili {{key:Ctrl}}+klik) dodaje tačku posle izabranog kraja, na kursoru.
- {{ui:Podeli}} ({{key:W}}) stavlja tačku između svakog para izabranih suseda; Bézier zadržava svoj oblik.
- {{ui:Premesti}}, {{ui:Okreni}}, {{ui:Skaliraj}} pomeraju izabrane tačke pokazivačem (tasteri modelera {{key:G}} {{key:R}} {{key:S}}, tasteri guranje/povlačenje {{key:M}} {{key:Q}} {{key:S}}); kliknite da zadržite, {{key:Esc}} da otkažete.
- {{ui:Zatvori}} ({{key:C}}) zatvara otvoreni splajn ili otvara zatvoreni; {{ui:Obrnuto}} ({{key:Shift+R}}) ga pušta u suprotnom smeru.
- Bézier ručice: {{ui:Zaglađivanje}} ({{key:V}}) ih postavlja za glatku krivu, {{ui:Ugao}} ({{key:Shift+V}}) ih usmerava ka susedima, {{ui:Slobodno}} ({{key:Alt+V}}) ih ostavlja tamo gde ste ih stavili. Prevlačenje ručice je čini slobodnom.
- {{ui:Bézier}}, {{ui:NURBS}} i {{ui:Poli}} menjaju vrstu izabranih splajnova, zadržavajući tačke.

Svaka promena je jedan korak opoziva.

## Oblik

Podešavanja su na panelu (i u {{ui:Podaci o entitetu}} u radnom prostoru Model):

- **Oblik:** 3D krive idu bilo kojim pravcem; ravna kriva ostaje u svojoj ravni i može da se popuni.
- **Popuni zatvorene splajnove** (ravne): konture postaju ploča; kontura unutar druge je rupa, pa slova zadržavaju svoje rupe.
- **Izvlačenje:** polovina širine trake (otvorene ili 3D krive), ili polovina debljine ploče (popunjene).
- **Dubina skošenja** i **zaobljenost:** okrugla cev duž krive (uz izvlačenje: zaobljena traka); na popunjenom obliku, zaobljena ivica.
- **Zatvori krajeve:** poklopci na otvorenoj cevi.
- **Suženje duž krive:** skalira ravnomerno duž svakog splajna, na primer `1, 0.2` za rog, `0, 1, 0` za vreteno.
- **Glatkoća** i, za NURBS, **red**: koliko je fino nacrtana i koliko je glatka (2 prava … 6 najglatkija).
- Uz izabrane tačke: **poluprečnik** (debljina cevi tamo, puta skošenje), **nagib** (okreće traku oko krive) i, za NURBS, **težina**.

Modifikatori rade nad objektom krive kao nad mrežom: niz duž nje, ogledalo, površina podele. Pogledajte [Modifikatori na mreži](topic:modifiers).

## Pretvaranje u mrežu

{{ui:U mrežu}} (u radnom prostoru {{ui:Kriva}} ili u {{ui:Podaci o entitetu}}, {{ui:Kriva u mrežu}}) pretvara objekat krive u mrežu koju sada prikazuje; njegovi modifikatori ostaju iznad. Zatim ga uredite u radnom prostoru Mreža. Opozivanje ga vraća.

Pogledajte i [Mreže](topic:meshes) i [Uređivanje mreže](topic:mesh-edit).
