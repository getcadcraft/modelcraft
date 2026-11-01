---
title: Mula dengan ModelCraft
summary: Untuk apa ModelCraft, cara membukanya, dan kotak pertama anda daripada segi empat tepat hingga model yang disimpan.
keywords: mula, model pertama, bermula, tutorial, pengenalan, kotak, jisim, 3d, tolak tarik, mula pantas, berpandu, panduan, pemula, baharu dalam 3d
from: d47ad719
---

ModelCraft ialah pemodel 3D untuk reka bentuk awal: kajian jisim, susun atur bilik, bentuk bangunan ringkas dan bayang yang dibuatnya. Anda melukis bentuk rata, menariknya ke atas menjadi pepejal, dan terus bekerja padanya dengan melukis pada mukanya. Ia berjalan dalam pelayar web anda, dan model anda kekal pada komputer anda.

Jika anda pernah menggunakan SketchUp, kebanyakan yang anda tahu masih terpakai: huruf alat yang sama, tolak/tarik, kotak nilai untuk saiz tepat, kumpulan dan komponen. [Datang daripada pemodel lain](topic:coming-from) menyenaraikan apa yang berbeza.

## Buka ModelCraft

1. Buka ModelCraft dalam versi semasa Chrome, Edge, Firefox atau Safari. Lihat [Pelayar dan komputer](common:browsers).
2. Tunggu paparan 3D muncul: kawasan terang (atau gelap) di tengah dengan kad bertajuk "Mula memodel".

Skrin mempunyai bar alat di sepanjang atas, {{ui:Outliner}} dan {{ui:Components}} di sebelah kiri, paparan 3D di tengah, {{ui:Entity info}}, {{ui:Style}} dan {{ui:Scenes}} di sebelah kanan, dan bar status di sepanjang bawah dengan kotak nilai dan unit. [Skrin ModelCraft](topic:workspace) menerangkan setiap bahagian.

:::note
ModelCraft memerlukan WebGL, ciri lukisan 3D pelayar anda. Jika bahagian tengah skrin kekal kosong dan alat tidak berbuat apa-apa, lihat [Penyelesaian masalah](topic:troubleshooting#the-3d-view-is-blank).
:::

## Semak unit dahulu

Lihat sudut kanan bawah. Pemilih unit menunjukkan panjang diukur dalam unit apa.

- Model baharu bermula dalam **kaki dan inci** apabila pelayar anda ditetapkan kepada Amerika Syarikat (juga Liberia dan Myanmar), dan dalam **milimeter** di tempat lain.
- Untuk menukarnya, pilih unit lain dalam pemilih: {{ui:ft and in}}, {{ui:in}}, {{ui:m}}, {{ui:cm}} atau {{ui:mm}}. Model itu sendiri tidak berubah saiz; hanya cara panjang ditunjukkan dan cara nombor kosong dibaca.

Nombor yang anda taip tanpa unit menggunakan unit model. Dalam model kaki dan inci, nombor kosong ialah **inci**, jadi `120` bermaksud 10 kaki.

## Biarkan ModelCraft membimbing model pertama anda

Baharu dalam 3D? Pada kad {{ui:Start modeling}}, klik {{ui:Guided first model}} (ia juga ada dalam {{ui:Views}}). Kad kecil membimbing anda melalui empat langkah, daripada segi empat tepat rata kepada model yang sedia untuk pencetak 3D:

1. Lukis segi empat tepat di atas tanah.
2. Tarik ke atas menjadi kotak.
3. Jadikan kotak itu satu objek (kumpulan).
4. Semak untuk cetakan 3D, kemudian muat turun fail 3MF atau STL.

Kad itu memerhatikan model, bukan butang: ia bergerak ke langkah seterusnya apabila langkah itu selesai, tidak kira bagaimana anda melakukannya, dan kembali satu langkah apabila anda buat asal. {{ui:Pick the tool}} memilih alat untuk anda. Tutupnya pada bila-bila masa dengan {{ui:×}}.

## Lukis kotak pertama anda

1. Tekan {{key:R}} untuk alat {{ui:Rectangle}}, atau klik {{ui:Rectangle}} dalam kumpulan {{ui:Draw}} bar alat.
2. Klik sekali di atas tanah berhampiran tengah paparan. Itulah bucu pertama.
3. Alihkan penunjuk menjauh. Segi empat tepat mengikutinya, dan kotak nilai di bawah (dilabel {{ui:Dimensions}}) menunjukkan saiznya.
4. Taip saiz dan tekan {{key:Enter}}: contohnya `4m,3m`, atau `16',12'` dalam kaki dan inci. Anda tidak perlu klik dalam kotak nilai dahulu; menaip nombor akan menghantarnya ke sana.

   Anda mendapat segi empat tepat rata di atas tanah. Ia ialah **muka**: permukaan dengan tepi di sekelilingnya.

5. Tekan {{key:P}} untuk {{ui:Push/pull}}.
6. Klik segi empat tepat, alihkan penunjuk ke atas, dan klik sekali lagi. Atau klik segi empat tepat dan taip ketinggian, seperti `3m` atau `10'`, kemudian tekan {{key:Enter}}.

   Segi empat tepat menjadi kotak dengan bahagian atas, bawah dan empat sisi.

7. Tekan {{key:Space}} untuk kembali ke {{ui:Select}}, kemudian klik bahagian atas kotak. {{ui:Entity info}} di sebelah kanan menunjukkan luasnya.

:::tip
Anda juga boleh seret dan bukannya klik dua kali: tekan pada bucu pertama, seret, dan lepaskan pada yang kedua. Kedua-dua cara berfungsi untuk setiap alat lukisan.
:::

## Lihat sekeliling

- **Orbit:** seret dengan butang tengah tetikus (roda), atau tekan {{key:O}} dan seret dengan butang kiri.
- **Pan:** seret dengan butang kanan, atau dengan butang tengah sambil menahan {{key:Shift}}.
- **Zum:** pusingkan roda. Ia menzum ke arah apa sahaja di bawah penunjuk.
- **Lihat semua:** tekan {{key:Shift+Z}}, atau klik {{ui:Extents}}.

Pada pad jejak atau skrin sentuh, gerakannya berbeza. Lihat [Orbit, pan dan zum](topic:orbit-pan-zoom).

## Buat asal

Tekan {{key:Mod+Z}} untuk buat asal dan {{key:Mod+Y}} untuk buat semula, atau gunakan {{ui:Undo}} dan {{ui:Redo}} dalam bar alat. ModelCraft mengingati 200 langkah terakhir semasa model dibuka. Sejarah itu tidak disimpan dalam fail.

## Simpan model anda

1. Klik {{ui:Save}} dalam kumpulan {{ui:File}}, atau tekan {{key:Mod+S}}.
2. Pelayar memuat turun fail dinamakan mengikut model anda, seperti `Untitled.modelcraft`. Bar status memberitahu ke mana ia pergi: "Untitled.modelcraft disimpan ke muat turun anda."

**Menyimpan ialah muat turun.** Setiap simpanan membuat salinan baharu dalam folder muat turun anda; ia tidak menulis ganti fail yang anda buka. Untuk memastikan folder projek kemas, alihkan atau namakan semula fail di sana sendiri. [Buka, simpan, import dan eksport](topic:files) menerangkan sebabnya dan apa lagi yang boleh anda buat.

:::warning
ModelCraft tidak menyimpan sendiri. Jika anda menutup tab dengan perubahan yang belum disimpan, pelayar akan bertanya dahulu ("Leave site?"). Pilih untuk kekal, kemudian simpan.
:::

## Dapatkan bantuan

Tekan {{key:F1}} atau klik {{ui:Help}} dalam bar aplikasi untuk membuka bantuan ini di sebelah model. Ia berfungsi tanpa sambungan. Tekan {{key:F1}} sekali lagi, atau {{key:Esc}} di dalam bantuan, untuk menutupnya. Lihat [Menggunakan bantuan ini](common:help).

## Ke mana seterusnya

- [Lukis muka dengan garisan, segi empat tepat dan bulatan](topic:draw-faces)
- [Tolak dan tarik muka menjadi pepejal](topic:push-pull)
- [Taip saiz tepat dalam kotak nilai](topic:value-box)
- [Setiap tindakan kekunci dan tetikus](topic:keyboard)
