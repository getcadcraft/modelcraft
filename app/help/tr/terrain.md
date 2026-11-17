---
title: Arazi: eş yükseklik eğrilerinden zemin ve şekillendirme
summary: Zemini eş yükseklik eğrilerinden ya da bir ızgara olarak oluşturun, sonra yumuşak bir fırçayla yükseltin ve alçaltın.
keywords: arazi, zemin, peyzaj, topografya, eş yükseklik eğrileri, kontur, eğriler, saha, yamaç, tepe, höyük, kum havuzu, yumuşat, şekillendir, eğim, TIN
from: 407652b3
---

Arazi, üçgenlerden oluşan bir zemindir; bu yüzden her şekli izleyebilir. Bir gruptur: düzenlemek için çift tıklayın.

## Eş yükseklik eğrilerinden

1. Eğrileri kendi yüksekliklerinde elde edin: çizin ya da [bir saha planını içe aktarın](topic:site-plan) ve her eğriyi kendi seviyesine kaldırın.
2. Onları seçin (tüm eğrilerin tüm kenarları).
3. {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Seçili eş yükseklik eğrilerinden arazi}}.

ModelCraft eş yükseklik noktalarını üçgenlerle birleştirir (bir TIN) ve içteki her kenarı yumuşatarak zeminin pürüzsüz gölgelenmesini sağlar. Eğriler kendileri kalır; artık ihtiyacınız olmadığında silin ya da gizleyin. Çok yoğun eğriler 8 000 noktaya indirgenir.

## Şekillendirilecek bir ızgara

{{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Arazi ızgarası…}} bir genişlik, derinlik ve hücre boyutu ister, sonra köşesine tıkladığınız yere düz bir üçgen ızgarası yerleştirir. Küçük hücreler daha pürüzsüz şekillendirir ama daha fazla yüzey oluşturur (en fazla 200 × 200 hücre).

## Şekillendirme: zemini yükseltin ve alçaltın

1. Açmak için araziye çift tıklayın.
2. {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Arazi şekillendir}}. Bir daire, işaretçinin altındaki zeminde fırçayı gösterir.
3. Fırçanın altındaki zemini yükseltmek için yukarı, alçaltmak için aşağı sürükleyin. Orta en çok hareket eder ve zemin dairenin kenarında sıfıra iner; böylece höyükler ve çukurlar pürüzsüz çıkar.

Bir höyüğü tam bir yüksekliğe getirmek için bir kez tıklayın, sonra yüksekliği yazın, örneğin `1.5m` (eksi işareti alçaltır), ve {{key:Enter}} tuşuna basın. Fırçayı değiştirmek için tıklamadan önce bir uzunluk yazın: `5m`, fırçayı yarıçapı 5 m olacak şekilde ayarlar.

Her şekillendirme tek bir geri alma adımıdır.

## Bilmeniz gerekenler

- Şekillendirme yalnızca üçgen yüzeyleri taşır, bu yüzden her yüzey düz kalır. Elle çizilen yüzeyler (dikdörtgenler, çokgenler) arazi değildir: araç bunu söyler.
- Şekillendirme noktaları doğrudan yukarı ve aşağı taşır; nokta eklemez. Daha ince ayrıntı için daha küçük hücreli bir ızgara yapın.
- Arazi, diğer her grup gibi dışa aktarılır. IFC'de diğer her şey gibi bir bina öğesi vekilidir.
