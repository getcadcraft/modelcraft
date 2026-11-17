---
title: Shto një motor renderimi me një shtojcë
summary: Çfarë mund të shtojë një shtojcë në listën e Motorit të dialogut Rendero, leja që i nevojitet për të ekzekutuar një program, dhe çfarë kontrollon dhe pyet Studio.
keywords: shtojcë, addon, motor, motor renderimi, zhvillues, engine.run, leje, program, skriptë, e nënshkruar, studio, api
from: cd7a39ba
---

Një shtojcë (Cilësimet › Shtojcat) mund të shtojë një motor në listën e Motorit të {{ui:Rendero një foto…}}. Teksti i plotë për autorët e shtojcave është seksioni 16 i specifikimit të shtojcave; shkurt:

- Shtojca regjistron një motor me një id që fillon me të vetin, një emër, cilësime opsionale, dhe **ose** një program për ta ekzekutuar **ose** një funksion në JavaScript që vizaton foton.
- Një motor që ekzekuton një program kërkon lejen **`engine.run`**, e shfaqur para instalimit dhe në Cilësimet. Ai ekzekutohet vetëm në Studio; në shfletues shfaqet si një skedar për ruajtje.
- Shtojca emëron programin (një emër i thjeshtë skedari, kurrë një shell), një skriptë **që gjendet brenda shtojcës së nënshkruar**, dhe argumentet e përbëra nga vendmbajtës dhe fjalë të thjeshta. Studio e gjen programin ose ju kërkon ta tregoni një herë.
- Herën e parë që një shtojcë ekzekuton një program, **Studio ju pyet në dialogun e vet**: cila shtojcë, cili program, dhe që një skriptë mund të bëjë çdo gjë që mund të bëjë programi. Lejojeni vetëm për një shtojcë të besuar. Përgjigja juaj mbahet mend për atë shtojcë dhe atë program.
- Paketa (skena si USD dhe një skedar cilësimesh, me skedarin glTF kur e kërkon shtojca) dhe skripta e shtojcës shkojnë në një dosje të re të përkohshme, programi ekzekutohet aty, dhe fotoja kthehet e shënuar me emrin e motorit të shtojcës.

:::note
Shtojcat mund të shtojnë motorë renderimi vetëm nga API e shtojcave 1.4. Një shembull i punuar për një renderues me rresht komandash me burim të hapur gjendet në depon e tij; nuk është ekzekutuar akoma në atë renderues.
:::
