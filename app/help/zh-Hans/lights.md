---
title: 用灯具照亮模型
summary: 在模型中放置灯、聚光灯和面光源，使渲染图片能呈现夜晚的房间或被照亮的室内，并带有柔和的阴影。
keywords: 灯光, 灯, 照明, 灯泡, 吸顶灯, 聚光灯, 筒灯, 面光源, 区域光, 流明, 亮度, 色温, 暖光, 夜晚, 室内, 渲染
from: c8d72cbc
---

灯会照亮[渲染图片](topic:render)。它们不会改变三维视图，在三维视图中每盏灯都以其自身颜色的小标记显示。

## 添加灯

1. 在右侧的{{ui:Lights}}部分中，点击{{ui:Lamp}}、{{ui:Spotlight}}或{{ui:Light panel}}。
2. 点击放置位置。捕捉的工作方式与绘图时相同。
   - 在天花板或墙面上，**灯**会悬挂在离表面 25 cm 处，位于你所观察的一侧；**面光源**贴在表面上，并朝远离表面的方向发光。
   - **聚光灯**需要点击两次：先指定位置，再指定照射的目标。

新灯会在{{ui:Lights}}中被选中，可以直接修改。

## 修改灯

在{{ui:Lights}}中点击灯的名称，或用{{ui:Select}}点击视图中灯的标记。然后：

| 设置 | 作用 |
|---|---|
| {{ui:Brightness (lumens)}} | 灯发出的光量。家用灯泡约为 800 流明；明亮的吸顶面板约为 3000 |
| {{ui:Color}} | {{ui:Warm}}（家用灯泡）、{{ui:Neutral}}或{{ui:Daylight}}，或任意颜色 |
| {{ui:Beam (degrees)}} | 聚光灯的光束角度（锥体边缘之间的夹角） |
| {{ui:Bulb size}}、{{ui:Width}}、{{ui:Depth}} | 灯泡和面板越大，阴影越柔和 |
| {{ui:Red (x)}}、{{ui:Green (y)}}、{{ui:Height}} | 灯的位置 |

灯名称旁边的勾选框可打开或关闭该灯。{{ui:Delete the light}}会删除它。每次修改都是一个步骤：{{key:Ctrl+Z}}可撤销。灯会保存在`.modelcraft`文件中。

## 夜晚的图片

在{{ui:Render a picture…}}中，勾选{{ui:Use another date and time for this picture}}，并选择一个傍晚的时刻。太阳落山后，天空变暗，只有灯光照亮模型。如果图片太暗，可在对话框中提高{{ui:Brightness}}，或添加灯。

:::tip
要查看室内房间，请将相机放在房间内（通过环绕和缩放，或使用[场景](topic:scenes)），在天花板上添加一盏灯，然后在夜间渲染。在{{ui:Fast}}模式下，远离灯的角落会比照片中更暗；[高质量模式](topic:render#high-quality)可让光线在墙面之间反弹。
:::
