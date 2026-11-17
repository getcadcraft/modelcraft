---
title: Sculpt mesh-ka
summary: Qaabeey mesh sida dhoobo oo leh brush-yada — sawir, dhoobo, siib, qabo, buufi, crease, pinch, simee — ilaali qaybaha maaska, muraayad X, oo ku dar faahfaahin meesha aad sculpt-ka ku sameyso.
keywords: sculpt, sculpting, brush, brushes, dhoobo, sawir, siib, qabo, buufi, crease, pinch, simee, mask, symmetry, muraayad, faahfaahin, dynamic topology, qalin, cadaadis, tablet, stylus
from: 5477801a
---

Workspace-ka Sculpt wuxuu qaabeeyaa mesh-ka brush-yada, sida dhoobada: jiid dusha oo waa kor u kacaa, hoos u dhacaa, siibaa ama raacaa pointer-ka brush-ka wareega, xooggiisu wuu badanyahay bartamaha oo wuu baabbi'aa geeskiisa.

## Bilow

Dooro mesh oo dooro {{ui:Sculpt}} liiska Workspace. Kooxda ama component-ku wuxuu noqdaa mesh marka hore, sida Workspace-ka Mesh. Brush-yadu waxay ku shaqeeyaan vertex-yada mesh-ka, sidaas darteed mesh leh vertex badan wuxuu qaadan karaa qaabab yar yar: marka hore kala qaybi (amarka {{ui:Kala qaybi}} ee Workspace-ka Mesh, ama modifier-ka Subdivision surface oo aad Apply gareyso), ama shid {{ui:Faahfaahin}}.

## Brushes

| Brush | Furaha | Waxa uu sameeyo |
| --- | --- | --- |
| {{ui:Sawir}} | {{key:D}} | Dusha hoosteeda brush-ka wuu kor u qaadaa |
| {{ui:Clay}} | {{key:C}} | Lakabyo siman oo dhoobo ah ayuu dhisaa, godadka marka hore buuxiyaa |
| {{ui:Siib}} | {{key:S}} | Wuu siibaa buuqyada; hay {{key:Shift}} si aad u siibto brush kasta |
| {{ui:Qabo}} | {{key:G}} | Dusha ayuu la jiidaa pointer-ka |
| {{ui:Buufi}} | {{key:I}} | Dusha ayuu ka buufiyaa jihadiisa |
| {{ui:Crease}} | {{key:Shift+C}} | Godad fiiqan ayuu jaraa |
| {{ui:Pinch}} | {{key:P}} | Dusha ayuu u jiidaa dhexda brush-ka |
| {{ui:Simee}} | {{key:T}} | Dusha ayuu ku riixaa diyaaradda celceliska |
| {{ui:Mask}} | {{key:M}} | Maaska ayuu rinjiyeeyaa kaas oo dusha ka ilaaliya brush-yada kale |

Riix {{key:Ctrl}} inta aad sarakaysid si aad u shaqeyso dhinac kale (hoos halkii sare, xiidmo halkii godad, ka saar maaska), ama shid {{ui:Ka saar}}.

## Cabbirka iyo xoogga

Cabbirka brush-ka waa pixel-yada shaashadda ku yaal, sidaas darteed waxay u dareemaa isku mid sida aad u fogaato: {{key:[}} iyo {{key:]}} ayuu yaraysiiyaa iyo weynaysiiyaa, {{key:Shift+[}} iyo {{key:Shift+]}} ayuu beddelaa xoogga. Panel-ku wuxuu muujiyaa labadaba.

Qalin tablet-ka, cadaadis badan ayaa brush-ka dhigaya mid weyn oo xoog badan; panel-ku wuxuu labadaba damiyaa.

## Muraayad, maaska iyo faahfaahin

- {{ui:Mirror X}} ({{key:X}}) wuxuu sculpt-gareeyaa labada dhinac casaan kulmiya isku mar, wejiyada iyo sawirrada.
- Maaskadu wuu madowdaa inta aad sculpt-gareyso. {{ui:Clear mask}} ({{key:Alt+M}}) ayuu ka saaraa, {{ui:Invert mask}} ({{key:Ctrl+I}}) wuxuu maaskeeyaa waxa bilaa ahaa, wuxuuna bilaayaa waxa la maaskeeyey. Maaskada waxa lagu kaydiyaa mesh-ka.
- {{ui:Detail}} wuxuu ku daraa triangles meesha aad sculpt-gareyso: geesaha ka dheer cabbirka panel-ka (pixel-yada shaashadda) waa la kala qaybiyaa brush-ka hoosteeda. Waxay u baahan tahay mesh triangles ah, wuxuuna weydiiyaa in marka hore la sameeyo.

Jiid kasta hal tallaabo ayuu ka noqdaa.

:::note
Faahfaahintu waxay keliya ku darta triangles; ma tirtirto kuwii noqday kuwo yaraan. Remesh (Workspace-ka Mesh) wuxuu dib u siman yeelaa mesh-ka oo dhan.
:::

Eeg sidoo kale [Tafatir mesh](topic:mesh-edit), [Meshes](topic:meshes) iyo [Modifiers mesh-ka dushiisa](topic:modifiers).
