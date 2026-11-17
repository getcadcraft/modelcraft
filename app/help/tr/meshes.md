---
title: Örgüler
summary: Bir grubu ya da bileşeni 3B içerik araçlarının modellediği türden bir örgüye dönüştürün ve tekrar it/çek geometrisine çevirin.
keywords: örgü, örgüler, çokgen, çokgenler, n-gon, dörtgen, dörtgenler, köşe noktaları, yarım kenar, uv, uv'ler, dönüştür, örgüye dönüştür, geometriye dönüştür, alt bölümleme, heykel, modelleme, 3B içerik
from: e32363e8
---

ModelCraft iki tür geometriye sahiptir. **İt/çek geometrisi** çizdiğiniz şeydir: birbirine yapışan, birbirini kesen ve iyileşen düz yüzeyler. Bir **örgü** ise 3B içerik araçlarının modellediği türden bir nesnedir: istediğiniz sayıda köşesi olan yüzeyler; her köşenin kendi doku koordinatlarını (UV'ler), normallerini ve renklerini taşıyabildiği yerler ve her köşe noktasının ağırlıklar gibi değerleri. Bir örgü bir grup ya da bileşen gibi yerleştirilir ve aynı modelde it/çek geometrisinin yanında durur.

## Bir grubu ya da bileşeni örgüye çevirin

1. Bir grup ya da bileşen seçin.
2. {{ui:Öğe bilgisi}} içinde {{ui:Örgüye dönüştür}} seçeneğine tıklayın.

Yüzeyleri örgünün yüzeyleri olur (delikli bir yüzey üçgenler olarak gelir), sert kenarlar keskin kalır, yumuşak kenarlar pürüzsüz gölgelenir; boya, malzemeler ve içe aktarılan dokular yüzeylerinde kalır. İçindeki gruplar ve bileşenler tek bir örgüye birleştirilir. Gruplanmamış kenarlar dışarıda bırakılır: bir örgü yüzeyleri tutar. Bir bileşenin her yerleşimi örgüyü gösterir. Tek bir geri alma adımıdır.

## Öğe bilgisinin gösterdikleri

Bir örgü seçin: yüzeylerini, köşe noktalarını ve kenarlarını, kapalı bir katı olup olmadığını (ve hacmini) ve yerleştirildiği hâliyle boyutunu görün. Açık kenarları olan bir örgü bunların sayısını söyler.

## Bir örgüyü tekrar it/çek geometrisine çevirin

Örgüyü seçin ve {{ui:Geometriye dönüştür}} seçeneğine tıklayın. Düz yüzeyler eskisi gibi geri gelir; köşeleri tek bir düzlemde olmayan bir yüzey üçgenler olarak geri gelir. Sert kenarlar serttir, diğerleri yumuşaktır. {{ui:Patlat}}, bir örgünün yüzeylerini doğrudan etrafındaki gruba koyar.

## Bilmeniz gerekenler

- Örgüyü [köşe noktalarını, kenarlarını ve yüzeylerini düzenlemek](topic:mesh-edit) için Örgü çalışma alanında çift tıklayın. İt/çek ile düzenlemek için geometriye dönüştürün; taşıyın, döndürün, ölçekleyin, kopyalayın, boyayın, gizleyin ve etiketleyin, tıpkı bir grup gibi.
- Dışa aktarımlar, 3B baskı, render'lar ve VR bir örgüyü yüzeyleri olarak görür.
- Bir örgü içeren dosya `.modelcraft` dosyasının daha yeni bir sürümü olarak kaydedilir; bu yüzden ModelCraft 0.6 ve eski sürümler onu açamaz. Örgü içermeyen dosyalar eskisi gibi açılır. Eski bir sürümdeki biriyle dosya paylaşmak için önce örgüleri geometriye çevirin.
- Bir örgüdeki geri alma yalnızca her adımın değiştirdiğini tutar; bu yüzden çok büyük bir örgü bile hızlı geri alınır.

Ayrıca bkz. [Gruplar ve bileşenler](topic:groups-components) ve [Henüz yapılmadı](topic:not-built-yet).
