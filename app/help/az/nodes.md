---
title: Düyünlər: naqillə model qurmaq
summary: Ədədləri nöqtələrə, nöqtələri əyrilərə, əyriləri səthlərə birləşdirin. Başlanğıc ədədi dəyişdikdə hər şey yenidən qurulur. Hər düyün həm də CraftScript sətridir, qrafik faylda saxlanılır.
keywords: düyünlər, düyün redaktoru, vizual skriptinq, parametrik, qrafik, naqillər, portlar, sərbəst forma, freeform, nurbs, loft, ekstrüziya, fırlatma, dairə, əyri, səth, seriya, aralıq, təsadüfi, siyahı, skript, craftscript, Grasshopper
from: 9c8e254f
---

**Düyünlər** redaktoru qutuları bir-birinə birləşdirərək həndəsə qurur. Hər qutu (düyün) kiçik bir iş görür: ədəd, nöqtə, dairə, loft yaradır. Bir düyünün nəticəsini növbətinin girişinə birləşdirirsiniz və başlanğıcdakı ədədi dəyişdikdə model onu izləyir.

Sağ paneldən açın: {{ui:Düyünlər}} › {{ui:Düyünlər…}}. Artıq qrafiki olan fayl onu özü açır. Bu, 3D görünüşün üzərindəki pəncərədir: başlıq çubuğundan sürükləyərək köçürün, künc tutacağından sürükləyərək ölçüsünü dəyişin.

## Naqillə birləşdirmək

1. Soldakı siyahıdan düyün seçin (axtarış qutusuna yazaraq daraldın; <kbd>Enter</kbd> ilk uyğun olanı əlavə edir). O, kətanın ortasında görünür.
2. Bir düyünün sağındakı dəyirmi **çıxış** nöqtəsindən digərinin solundakı dəyirmi **giriş** nöqtəsinə sürükləyin. Nöqtə uyğun olanda yaşıl, olmayanda qırmızı olur; səbəbini görmək üçün üzərinə gəlin.
3. Heç nə birləşdirilməyən giriş yazılmış dəyər üçün qutu göstərir. Ədəd yazın və <kbd>Tab</kbd> basın: nəticə yenidən qurulur.
4. Düyünün başlığındakı kiçik dairə onun **gözüdür**. Gözü açıq olan düyün 3D görünüşdə çəkilir: əyrilər xətt kimi, səthlər kölgəli, nöqtələr nöqta kimi.

Düyünü başlıq çubuğundan sürükləyin. Fonu sürükləyərək sürüşdürün, təkərlə yaxınlaşdırın. <kbd>Delete</kbd> seçilmiş düyünü silir. {{ui:Səliqəyə sal}} düyünləri sütunlarda düzür, {{ui:Sığdır}} hamısını görünən hala gətirir, {{ui:Geri qaytar}} və {{ui:Təkrarla}} redaktələrinizdə addım-addım gedir.

## Tiplər və vahidlər

Portların tipi var: ədəd, bəli/xeyr, nöqtə, vektor, əyri, səth, mesh, cisim və ya bunların hər biri üçün "həndəsə". Nöqtə vektor girişinə, vektor isə nöqtəyə ötürülə bilər. Ədədlərin vahidi var: **uzunluq** millimetrlə, **bucaq** dərəcə ilə ölçülür. Uzunluq bucağa birləşdirilə bilməz; uzunluq vurulmuş uzunluq (sahə) rədd olunur. Beləliklə səhv naqil yaradılan anda dayandırılır.

Kvadrat nöqtə **siyahıdır**. Siyahı tək dəyərli girişə çatanda düyün hər element üçün bir dəfə işləyir və nəticəsi siyahıya çevrilir. Qısa siyahı son elementini təkrarlayır. Məsələn, hündürlüklərin **Seriya**sı **Köçür**ə verildikdə kopyaların yığını alınır.

## Cisimlər və Booleanlar düyün kimi

**Cisimlər** qrupu Səthlər panelindəki eyni dəqiq səthlərdən qapalı cisimlər yaradır: **Qutu cismi**, **Silindr cismi** və **Kürə cismi** (ölçülər mm ilə), **Birləşdir**, **Çıxart** və **Kəsişdir** (ikinci cisim birincidən götürülür; tolerantlıq cisim mühərrikinin üçbucaqlarının dəqiq səthlərdən nə qədər kənara çıxa biləcəyidir), **Üzlər arasında yuvarlaqlaşdırma** (üzlər cisimdəki nömrələri ilə, 1 birincisi üçün; radius və, 0-dan böyük olduqda, sonda radius), **Cisim həcmi** (mm³) və **Cismi mesh-ə** (görmək və ya çevirmək üçün). Cisimin öz port tipi var: nöqtə və ya ədəd cisim girişinə birləşdirilə bilməz, nöqtə qırmızı qalır. Boolean və yuvarlaqlaşdırma düyünləri proqramın öz cisim mühərrikindən istifadə edir, redaktor ilk dəfə açılanda yüklənir.

## Xətalar

İş görə bilməyən düyün adının altında qırmızı rənglə səbəbini göstərir ("Radius sıfırdan böyük olmalıdır."), sonrakı düyünlər gözləyir. Eyni mesaj Problemlər panelində də Problem kimi görünür, buradan da tapa bilərsiniz.

## Hər düyün skript sətridir

{{ui:Skript}} basın, qrafiki CraftScript kimi görün: hər düyün üçün bir sətir, məsələn `n3 = nd_circle(n2, n1, [0 0 1]);`. Mətni redaktə edin və {{ui:Bu skriptdən qrafik yarat}} basın ki, qrafik geri gəlsin. Eyni `nd_` funksiyaları PartCraft-dakı CraftScript-də də işləyir, beləliklə qrafik orada işə salına, dövrə salına və ya sınaqdan keçirilə bilər. Təsadüfi ədədlər həmişə **seed** alır, buna görə eyni qrafik hər kompüterdə eyni nəticəni verir.

## Fayl ilə birlikdə saxlanılır

Qrafik model faylında saxlanılır. Düyünlər öz əyri, səth və meshlərini yaradır: siz soruşmayana qədər modelin üzlərini dəyişmirlər.

## Modelə çevir

Səth və ya mesh yaradan düyünün gözünü açın, sonra Düyünlər pəncərəsində {{ui:Modelə çevir}} basın. Göstərilən hər səth və ya mesh metrlərlə modeldə redaktə oluna bilən üz qrupuna çevrilir. Bu bir geri qaytarma addımıdır. Qrafik qalır, lakin kopya artıq onu izləmir: ədədi dəyişin və yenisi üçün yenidən çevirin. Nöqtələr və əyrilər cisim deyil, buna görə kənarda qalır və mesaj neçə ədəd olduğunu deyir.
