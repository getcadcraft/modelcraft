---
title: USD-ni saxlayın, açın və ixrac edin
summary: Bütün modeli heç nə itirmədən USD (.usda, .usdc və ya .usdz) kimi saxlayın, yenidən açın və digər 3D proqramlardan USD səhnələrini idxal edin.
keywords: usd, usda, usdc, usdz, openusd, universal səhnə təsviri, fərqli saxla, ixrac, idxal, səhnə yığımı, arxitektura vizualizasiyası, openpbr, materialx, paket
from: 73d299f9
---

USD çoxlu 3D, render və arxitektura vizualizasiya proqramlarının paylaşdığı səhnə formatıdır. ModelCraft onu yazır və oxuyur. `.modelcraft` {{ui:Saxla}} ilə yazılan format olaraq qalır; USD isə {{ui:Fərqli saxla}} daxilində seçimdir.

## USD kimi saxlayın

1. {{ui:Fayl}} qrupunda {{ui:Fərqli saxla}} seçin (və ya {{key:Mod+Shift+S}} basın).
2. Formatı seçin: {{ui:Mətn (.usda)}} (oxunaqlı, versiya nəzarəti üçün yaxşı), {{ui:İkili (.usdc)}} (ən kiçik və ən sürətli) və ya {{ui:Paket (.usdz)}} (içində tekstura olan bir fayl).
3. Fayl yüklənir (masaüstü tətbiqində harada saxlanacağını seçirsiniz).

Eyni seçimlər {{ui:İxrac}} › {{ui:USD (.usda, .usdc, .usdz)…}} daxilindədir.

## Heç nə itirilmir

ModelCraft-ın saxladığı USD faylını açsanız, modeli dəqiq geri alırsınız: deşikləri olan üzlər, yumşaq və gizli kənarlar, əyrilər, qruplar və komponentlər, teqlər, səhnələr, ölçülər, bələdçilər, kəsik müstəviləri, lampalar, idxal edilmiş teksturalar və görünüş. Digər proqramlar eyni modeli mesh-lər, qruplar, komponentlər üçün prototiplər, materiallar, lampalar və kameralar kimi görür.

:::note
Digər proqram qrupun və ya komponentin həndəsəsini dəyişdirsə, ModelCraft həmin hissəni dəyişiklik saxlanmaqla mesh kimi açır və neçə hissəni belə oxuduğunu deyir. Digər proqramda köçürülmüş və ya silinmiş yerləşdirmə köçürülmüş və ya silinmiş qalır.
:::

## Başqasının USD-sini açın və ya idxal edin

- {{ui:Aç}} `.usd`, `.usda`, `.usdc` və ya `.usdz` faylını açıb ondan model başladın.
- {{ui:İdxal et}} ilə onu açıq modelə əlavə edin. İstinad etdiyi faylları (digər qatlar, teksturalar) onunla birlikdə buraxın.

Mesh-lər normalları, UV koordinatları və rənglərlə gəlir; paylaşılan həndəsə komponent kimi, materiallar boya rəngləri kimi, lampalar lampa kimi, kameralar isə səhnə kimi gəlir; faylın vahidlərindən və yuxarı oxundan asılı olmayaraq metrlərdə, Z yuxarı ilə.

## Hələ yox

Animasiya, skeletlər və MaterialX node qrafikləri hələ USD kimi oxunmur və yazılmır. ModelCraft-ın öz animasiyası və node materialları özünün saxladığı USD faylında qorunur ki, ModelCraft onu yenidən aça bilsin, lakin digər proqramlar onları görmür. ModelCraft-ın oxuya bilmədiyi və faylın istinad etdiyi qatlar (məsələn, MaterialX sənədi) qeydlə birlikdə çıxarılır.
