---
title: Nod: bina model dengan pendawaian
summary: Sambungkan nombor kepada titik, titik kepada lengkung, dan lengkung kepada permukaan. Tukar satu nombor dan semua yang bergantung padanya dibina semula. Setiap nod juga ialah satu baris CraftScript, dan graf disimpan dalam fail.
keywords: nod, penyunting nod, pengaturcaraan visual, parametrik, graf, wayar, port, bentuk bebas, bentuk-bebas, nurbs, loft, ekstrud, putar, bulatan, lengkung, permukaan, siri, julat, rawak, senarai, skrip, craftscript, grasshopper
from: 9c8e254f
---

Penyunting **Nod** membina geometri dengan menyambungkan kotak bersama. Setiap kotak (nod) melakukan satu kerja kecil: membuat nombor, titik, bulatan, loft. Anda menyambungkan hasil satu nod kepada input nod seterusnya, dan model mengikutinya apabila anda menukar nombor di permulaan.

Bukanya dari panel sebelah kanan: {{ui:Nod}} › {{ui:Nod…}}. Fail yang sudah mempunyai graf akan membukanya dengan sendirinya. Ia ialah tetingkap di atas paparan 3D: seret bar tajuknya untuk mengalihkannya, seret bucunya untuk menukar saiz.

## Pendawaian

1. Pilih nod dari senarai di sebelah kiri (taip dalam kotak carian untuk menyempitkannya; <kbd>Enter</kbd> menambah padanan pertama). Ia muncul di tengah kanvas.
2. Seret dari titik **output** bulat di sebelah kanan satu nod ke titik **input** bulat di sebelah kiri nod lain. Titik itu bertukar hijau apabila ia sesuai dan merah apabila tidak; halakan penunjuk kepadanya untuk melihat sebabnya.
3. Input yang tiada apa disambungkan menunjukkan kotak untuk nilai yang ditaip. Taip nombor dan tekan <kbd>Tab</kbd>: hasilnya dibina semula.
4. Bulatan kecil di bar tajuk nod ialah **mata**nya. Nod dengan mata dihidupkan dilukis dalam paparan 3D: sebagai garisan untuk lengkung, berlorek untuk permukaan, titik untuk titik.

Seret nod mengikut bar tajuknya. Seret latar belakang untuk pan, pusingkan roda untuk zum. <kbd>Delete</kbd> memadamkan nod yang dipilih. {{ui:Kemas}} menyusun nod dalam lajur, {{ui:Muat}} membawa semuanya ke dalam pandangan, {{ui:Buat asal}} dan {{ui:Buat semula}} melangkah melalui suntingan anda.

## Jenis dan unit

Port mempunyai jenis: nombor, ya/tidak, titik, vektor, lengkung, permukaan, jejaring, pepejal, atau "geometri" untuk mana-mana daripadanya. Titik boleh menyuap input vektor dan sebaliknya. Nombor membawa unit: **panjang** dalam milimeter dan **sudut** dalam darjah. Panjang tidak boleh menyuap sudut, dan panjang darab panjang (luas) ditolak, jadi wayar yang salah dihentikan apabila anda membuatnya.

Titik segi empat ialah **senarai**. Apabila senarai sampai ke input nilai tunggal, nod dijalankan sekali untuk setiap item, dan hasilnya menjadi senarai. Senarai yang lebih pendek mengulang item terakhirnya. Sebagai contoh, **Siri** ketinggian disambungkan kepada **Alih** menghasilkan timbunan salinan.

## Pepejal dan Boolean sebagai nod

Kumpulan **Pepejal** membuat jasad tertutup daripada permukaan tepat yang sama seperti panel Permukaan: **Kotak pepejal**, **Silinder pepejal** dan **Sfera pepejal** (saiz dalam mm), **{{ui:Gabung}}**, **Tolak** dan **Persilang** (pepejal kedua diambil dari yang pertama; toleransi ialah sejauh mana segi tiga enjin pepejal boleh berada dari permukaan tepat), **Fillet antara muka** (muka mengikut nombornya dalam pepejal, 1 untuk yang pertama; jejari dan, di atas 0, jejari di hujung), **Isipadu pepejal** (mm³) dan **Pepejal ke jejaring** (untuk melihat atau membakarnya). Pepejal mempunyai jenis port sendiri: titik atau nombor tidak boleh disambungkan kepada input pepejal, dan titik kekal merah. Nod Boolean dan Fillet menggunakan enjin pepejal program, yang dimuatkan kali pertama penyunting dibuka.

## Ralat

Nod yang tidak dapat melakukan kerjanya menyatakan sebabnya di bawah namanya, dalam warna merah ("Jejari mesti melebihi sifar."), dan nod selepasnya menunggu. Mesej yang sama juga muncul sebagai Masalah dalam panel Masalah, jadi anda boleh mencarinya dari situ.

## Setiap nod ialah satu baris skrip

Tekan {{ui:Skrip}} untuk melihat graf sebagai CraftScript: satu baris bagi setiap nod, seperti `n3 = nd_circle(n2, n1, [0 0 1]);`. Edit teks dan tekan {{ui:Buat graf daripada skrip ini}} untuk membawanya kembali sebagai graf. Fungsi `nd_` yang sama berfungsi dalam CraftScript di PartCraft, jadi graf boleh dijalankan, dijadikan gelung atau diuji di sana. Nombor rawak sentiasa memerlukan **benih**, supaya graf yang sama memberikan hasil yang sama di setiap komputer.

## Disimpan bersama fail

Graf disimpan dalam fail model. Nod membuat lengkung, permukaan dan jejaring sendiri: ia tidak mengubah muka model sehingga anda memintanya.

## Bakar ke model

Hidupkan mata nod yang membuat permukaan atau jejaring, kemudian tekan {{ui:Bakar ke model}} dalam tetingkap Nod. Setiap permukaan atau jejaring yang ditunjukkan menjadi kumpulan muka dalam model, dalam meter, yang boleh anda sunting seperti biasa. Ia ialah satu langkah {{ui:Buat asal}}. Graf kekal, tetapi salinan itu tidak lagi mengikutinya: tukar nombor dan bakar semula untuk yang baharu. Titik dan lengkung bukan pepejal, jadi ia ditinggalkan, dan mesej itu menyatakan berapa banyak.
