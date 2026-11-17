---
title: 匯出模型供其他程式使用
summary: 依用途選擇渲染、網路、3D 列印、BIM 與 BimCraft 所適用的匯出格式，並確認各格式保留的內容。
keywords: 列印, 3MF, PDF, 紙張, 影像, 圖片, 螢幕擷取畫面, 算圖, 儲存視圖, 匯出, 分享, 算圖, 渲染, glTF, GLB, Collada, DAE, OBJ, STL, 3D 列印, IFC, BIM, BimCraft, 傳送, 其他軟體
from: 9e13e80d
---

匯出會建立模型在其他格式中的複本。也請保留 `.modelcraft` 檔案：它是唯一能保留所有內容的檔案，也是 ModelCraft 可直接開啟的唯一檔案。

## 匯出

1. 先儲存（{{key:Mod+S}}），確保工作檔案安全。
2. 在{{ui:File}}群組中按一下{{ui:Export}}。
3. 選擇格式。瀏覽器會下載該檔案，檔名與模型相同。

會匯出整個模型。若要匯出其中一部分，請先儲存，刪除其餘部分，匯出，然後復原或重新開啟。

## 選擇格式

| 用途 | 選擇 | 備註 |
|---|---|---|
| 在另一個 3D 建模程式中開啟 | {{ui:Collada (.dae)}} | 保留群組、巢狀群組、元件（共用而非複製）、名稱與顏色。Z 朝上，單位為公尺。 |
| 渲染，或用於視覺化程式 | {{ui:OBJ (.obj)}} 或 {{ui:glTF binary (.glb)}} | OBJ 的通用性最高；它會將每個群組的放置寫成獨立物件，但沒有顏色，也不保留共用元件。glTF 保留元件與顏色。 |
| 放到網路上、遊戲引擎或 AR 中使用 | {{ui:glTF binary (.glb)}} | 單一檔案，內含所有內容。 |
| 進行 3D 列印 | {{ui:Check for 3D printing (STL or 3MF)…}} | 檢查模型是否封閉且面朝向正確，然後以毫米寫出 STL 或 3MF。請參閱[讓模型準備好 3D 列印](topic:print-3d)。{{ui:STL for printing (.stl, millimeters)}}會不經檢查，直接寫出整個模型。 |
| 在 BimCraft 或其他 BIM 程式中開啟 | {{ui:IFC for BimCraft (.ifc)}} | 每個最上層的群組或元件會成為一個建築元素。 |

狀態列會確認每次匯出，例如「已匯出 House.stl（毫米）。」或「已匯出 House.dae（Collada 1.4.1，Z 朝上，單位為公尺；元件保持共用）。」

## 匯出前

- **將物件分組。** Collada、glTF 與 IFC 會將群組與元件保留為獨立物件。散落的幾何會以一個整體輸出；在 IFC 中會成為名為「Loose geometry」的單一元素。
- **為物件命名。** 群組與元件名稱會寫入 Collada 與 IFC，因此名為「North wall」的牆，會以「North wall」出現。
- **檢查面的朝向。** 外側顯示藍灰色的面，在匯出後會朝內。請用{{ui:Reverse face}}修正（請參閱[刪除與清理](topic:erase#a-face-facing-the-wrong-way)）。
- **列印時**，請將各零件製作為封閉實體：選取每個群組，並確認{{ui:Entity info}}顯示「Solid: Yes」。接著將模型縮放至列印尺寸，或在印表機軟體中縮放。

## 將模型傳送至 BimCraft

1. 將每個建築零件製作成群組或元件，並為其命名。
2. 選擇{{ui:Export}}，然後選擇{{ui:IFC for BimCraft (.ifc)}}。
3. 在 BimCraft 中開啟下載的 `.ifc` 檔案。

若要用於概念量體，請改用{{ui:Export}} › {{ui:Massing to BimCraft…}}：每個群組會以含樓層、樓地板面積與體積的量體選項傳送。請參閱[將量體傳送至 BimCraft](topic:massing-to-bimcraft)。

一般的 IFC 匯出與兩個程式之間沒有直接連結。該 IFC 只有一個樓層，且每個元素都是一般的建築元素代理，不含類型或屬性：只帶有形狀與名稱。封閉的群組會成為實體形狀；開放的群組則會成為曲面。

## 未屬於任何面的線

不屬於任何面的邊（類似輔助線的線條，或匯入的基地平面圖）會以線條形式輸出至 OBJ 與 Collada。glTF 與 STL 沒有可容納它們的位置，因此會省略。輔助線與場景不會匯出為任何格式。

## 將視圖儲存為圖片

{{ui:Export}} › {{ui:Image of the view (.png)}}會精確儲存 3D 視圖所顯示的內容，大小與螢幕上相同。{{ui:Image at twice the size (.png)}}會將寬度與高度各加倍（適合列印或清晰的投影片），標註與標記會以該尺寸重新繪製，而非拉伸。

若要製作類似日光的圖片（天空、太陽、柔和陰影、玻璃），請改用{{ui:Export}} › {{ui:Render a picture…}}：請參閱[算出圖片](topic:render)。

若要製作乾淨的圖片，請先開啟[展示檢視](topic:styles-shadows#presentation-view)（{{key:Shift+P}}）：座標軸、輔助線、剖面輪廓與選取範圍都不會顯示。依需要設定相機、樣式與陰影，或前往[場景](topic:scenes)；若要儲存場景的動畫影片，請在{{ui:Scenes}}面板中使用{{ui:Export animation}}。

## 列印視圖，或儲存為 PDF

- {{ui:Export}} › {{ui:PDF of the view (.pdf)}}會儲存為一頁的 PDF：視圖為螢幕大小的兩倍，含其標註，置於 A4 頁面上（模型以英尺與英吋為單位時則為 Letter），橫向，底部有一行，顯示檔名、日期與單位。
- {{ui:Export}} › {{ui:Print the view…}}會將同一頁面交給瀏覽器的列印對話方塊。可選擇印表機，或選擇「另存為 PDF」。

頁面會如實顯示視圖：透視視圖沒有比例尺。若要繪製按比例的圖面，請關閉{{ui:Perspective}}，並從{{ui:Top}}或{{ui:Front}}觀看，同時為重要尺寸加上[標註](topic:dimensions)。[展示檢視](topic:styles-shadows#presentation-view)會省略座標軸、輔助線與選取範圍；標註則保留。
