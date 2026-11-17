---
title: Objekti krivulje
summary: Crtajte Bézier, NURBS i krivulje s ravnim segmentima, dajte im debljinu, širinu ili suženje, ispunite ravne, postavite tekst kao krivulju i pretvorite ih u mreže.
keywords: krivulja, krivulje, bezier, nurbs, spline, splajn, putanja, cijev, kabel, uže, skošenje, izvlačenje, suženje, nagib, radijus, ispuna, profil, tekst, slova, logotip, krivulja u mrežu
from: 602bf077
---

**Objekt krivulje** je krivulja koja čini oblik: cijev duž nje (skošenje), traka (izvlačenje), sužavajući rog (suženje) ili, kad je ravna i zatvorena, ispunjena ploča ili slova. Oblik slijedi krivulju: pomaknete točku i cijev se pomiče s njom. Kad je oblik ispravan, pretvorite ga u mrežu.

## Dodajte krivulju

Odaberite {{ui:Krivulja}} na popisu radnih prostora i pritisnite {{ui:Dodaj}}:

| Vrsta | Što je |
| --- | --- |
| Bézier krivulja, Bézier kružnica | Prolazi kroz svoje točke; svaka točka ima dvije ručke koje postavljaju smjer krivulje |
| NURBS krivulja, NURBS kružnica, Putanja | Glatka, vučena prema svojim točkama (počinje i završava u svojim krajnjim točkama); svaka točka ima težinu |
| Tekst | Vaš tekst kao ravne, ispunjene obrise slova |

Nova krivulja dobiva tanku cijev da se može vidjeti i odabrati; postavite joj dubinu skošenja na 0 za golu krivulju.

Također možete krenuti od nečega nacrtanog: odaberite luk, kružnicu, poligon ili nacrtanu krivulju u radnom prostoru Model i pritisnite {{ui:Napravi objekt krivulje}} u {{ui:Informacije o entitetu}}. Nacrtane linije ostaju.

## Uređivanje točaka

Dvaput kliknite objekt krivulje (ili ga odaberite i odaberite {{ui:Krivulja}}) da ga uredite.

- Kliknite točku ili ručku ({{key:Shift}} dodaje ili uklanja); povucite je da je pomaknete. Povucite po praznom prostoru da odaberete okvirom.
- {{ui:Produži}} ({{key:E}}, ili {{key:Ctrl}}+klik) dodaje točku nakon odabranog kraja, na kursoru.
- {{ui:Podijeli}} ({{key:W}}) stavlja točku između svakog para odabranih susjeda; Bézier zadržava svoj oblik.
- {{ui:Pomakni}}, {{ui:Zakreni}}, {{ui:Skaliraj}} pomiču odabrane točke s kursorom (tipke modelara {{key:G}} {{key:R}} {{key:S}}, tipke potisni/povuci {{key:M}} {{key:Q}} {{key:S}}); kliknite da zadržite, {{key:Esc}} za odustajanje.
- {{ui:Zatvori}} ({{key:C}}) zatvara otvoreni splajn ili otvara zatvoreni; {{ui:Obrni}} ({{key:Shift+R}}) ga pokreće suprotnim smjerom.
- Bézier ručke: {{ui:Zagladi}} ({{key:V}}) ih postavlja za glatku krivulju, {{ui:Kut}} ({{key:Shift+V}}) ih usmjerava prema susjedima, {{ui:Slobodno}} ({{key:Alt+V}}) ih ostavlja gdje ste ih stavili. Povlačenje ručke je čini slobodnom.
- {{ui:Bézier}}, {{ui:NURBS}} i {{ui:Poli}} mijenjaju vrstu odabranih splajnova, zadržavajući točke.

Svaka promjena je jedan korak poništavanja.

## Oblik

Postavke su na ploči (i u {{ui:Informacije o entitetu}} u radnom prostoru Model):

- **Oblik:** 3D krivulje idu bilo kamo; ravna krivulja ostaje u svojoj ravnini i može se ispuniti.
- **Ispuni zatvorene splajnove** (ravne): obrisi postaju ploča; obris unutar drugog je rupa, pa slova zadržavaju svoje rupe.
- **Izvlačenje:** polovica širine trake (otvorene ili 3D krivulje), ili polovica debljine ploče (ispunjene).
- **Dubina skošenja** i **zaobljenost:** okrugla cijev duž krivulje (uz izvlačenje: zaobljena traka); na ispunjenom obliku, zaobljeni brid.
- **Zatvori krajeve:** poklopci na otvorenoj cijevi.
- **Suženje duž nje:** jednoliko skalira duž svakog splajna, npr. `1, 0.2` za rog, `0, 1, 0` za vreteno.
- **Glatkoća** i, za NURBS, **red**: koliko je fino nacrtana i koliko je glatka (2 ravno … 6 najglađe).
- Uz odabrane točke: **radijus** (debljina cijevi na tom mjestu, puta skošenje), **nagib** (zakreće traku oko krivulje) i, za NURBS, **težina**.

Modifikatori rade na vrhu objekta krivulje kao na mreži: Niz duž nje, Zrcali, Subdivision površina. Vidi [modifikatore na mreži](topic:modifiers).

## Pretvorba u mrežu

{{ui:U mrežu}} (u radnom prostoru Krivulja ili u {{ui:Informacije o entitetu}}, {{ui:Krivulja u mrežu}}) pretvara objekt krivulje u mrežu koju sada prikazuje; njegovi modifikatori ostaju na vrhu. Zatim ga uredite u radnom prostoru za mreže. Poništavanje ga vraća natrag.

Vidi također [Mreže](topic:meshes) i [Uređivanje mreže](topic:mesh-edit).
