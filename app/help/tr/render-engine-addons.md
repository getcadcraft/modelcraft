---
title: Eklentiyle bir render motoru ekleyin
summary: Bir eklentinin Render iletişim kutusunun Motor listesine neler ekleyebileceği, bir programı çalıştırmak için gereken izin ve Studio'nun neyi denetleyip neyi sorduğu.
keywords: eklenti, addon, motor, render motoru, geliştirici, engine.run, izin, program, betik, imzalı, studio, api
from: cd7a39ba
---

Bir eklenti (Ayarlar › Eklentiler) {{ui:Resim render et…}} öğesinin Motor listesine bir motor ekleyebilir. Eklenti yazarları için tam metin, eklenti belirtiminin 16. bölümündedir; kısaca:

- Eklenti, kendisiyle başlayan bir kimliği, bir adı, isteğe bağlı ayarları ve çalıştırılacak **ya** bir program **ya da** resmi çizen bir JavaScript işlevi olan bir motoru kaydeder.
- Bir program çalıştıran bir motorun **`engine.run`** izni gerekir; bu, kurulumdan önce ve Ayarlar'da gösterilir. Yalnızca Studio'da çalışır; tarayıcıda kaydedilecek bir dosya olarak görünür.
- Eklenti programı adıyla belirtir (düz bir dosya adı: asla bir kabuk değil), **imzalı eklentinin içindeki** bir betiği ve yer tutuculardan ve düz sözcüklerden oluşan argümanları. Studio programı bulur ya da bir kez ona işaret etmenizi ister.
- Bir eklenti ilk kez bir program çalıştırdığında, **Studio kendi iletişim kutusunda size sorar**: hangi eklenti, hangi program ve bir betiğin programın yapabildiği her şeyi yapabileceği. Yalnızca güvendiğiniz bir eklenti için izin verin. Yanıtınız o eklenti ve program için hatırlanır.
- Paket (sahne USD olarak ve bir ayar dosyası; eklenti isterse glTF dosyasıyla birlikte) ile eklentinin betiği yeni, geçici bir klasöre konur, program orada çalışır ve resim, eklentinin motor adıyla işaretlenmiş olarak geri gelir.

:::note
Eklentiler yalnızca eklenti API 1.4 sürümünden itibaren render motorları ekleyebilir. Açık kaynaklı bir komut satırı render programı için çözümlü bir örnek kendi deposundadır; bu render programında henüz çalıştırılmadı.
:::
