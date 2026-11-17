---
title: 將場景傳送至遊戲引擎
summary: Studio 可以把場景寫入 Unreal Engine 專案，並在每次傳送時保持同步；自行做的編輯保存在 CadCraft 從不寫入的圖層中。開啟它的外掛尚未釋出。
keywords: unreal, unreal engine, 遊戲引擎, 連結, 傳送, usd stage, 專案, live, 電影攝影機, 電影算圖佇列
from: 9a765cc2
---

在 CadCraft Studio 的引擎清單中，可以保存一個指向 Unreal Engine 專案的**連結**。只能單向：從 CadCraft 到 Unreal。

## 傳送場景

1. 在引擎清單中選擇 Unreal 項目。第一次使用時，Studio 會要求選取專案資料夾（即含有 `.uproject` 檔案的那個），之後會記住該資料夾。
2. 按一下{{ui:傳送}}。Studio 會在專案中寫入 `CadCraft/<file name>/`：USD 檔案形式的場景、設定檔、配光檔，以及兩個小型圖層檔。
3. 修改模型、儲存後再次傳送。只會取代場景與設定檔。

## 自行做的編輯不會遺失

Unreal 開啟的舞台是一個小型根圖層，只會建立一次，其下有兩個圖層：上層為**使用者圖層**（`<name>.user.usda`，一開始是空的，CadCraft 從不改寫），下層為 CadCraft 的場景。保存在使用者圖層中的編輯，在重新傳送場景後會保留。在 Unreal 關卡中放置的燈光與其他角色位於舞台之外，同樣不會受到影響。

## 不使用 Studio 時

在瀏覽器中，或在 Studio 找不到 Unreal 的電腦上，於引擎清單中選擇 **Unreal 專案資料夾（.zip）**，然後按一下{{ui:算圖}}。它會將同一個資料夾儲存為 zip：解壓縮到專案的 `CadCraft` 資料夾中。第一次保持勾選**包含舞台檔案**；之後保存時取消勾選，這樣 zip 只含場景與設定檔，你的使用者圖層就不會被取代。

:::note
負責開啟舞台、套用太陽、燈具、攝影機與曝光、跟隨每次傳送並為攝影機算圖的 Unreal 外掛**尚未釋出**，也尚未在 Unreal 中執行過。在釋出之前，傳送只會把檔案放入專案中，Unreal 自己的 USD 工具可以開啟這些檔案。Windows 是第一個支援的系統，macOS 將接著支援。
:::
