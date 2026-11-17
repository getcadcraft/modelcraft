---
title: 在其他程序中打开场景
summary: 将场景保存为USD文件或glTF文件，供任何可读取它们的程序使用，或在Studio中于本机程序里打开。
keywords: 在…中打开、usd、gltf、glb、导出、渲染程序、archviz、studio、usdview、发送、交接、包、unreal文件夹
from: 812329d5
---

在{{ui:渲染图片…}}的引擎列表中选择一个**在…中打开**条目，即可将场景带到其他程序中。不会有任何内容返回模型。

## 适用于任何程序的文件

- **USD文件**将场景保存为 `.usdc`（若模型包含图片，则保存为 `.usdz`）：与[另存为 USD](topic:usd)的文件相同，包含材质、灯光和相机。它保留实例化和精确的材质数值。大多数渲染器、游戏引擎和查看器都能读取USD。
- **glTF文件（.glb）**保存较轻量的glTF 2.0文件，包含材质、纹理和灯光；ModelCraft所写入的格式请参见[为其他程序导出模型](topic:export-model)。

- **Unreal项目文件夹（.zip）**保存[将场景发送到游戏引擎](topic:render-unreal)所写入的文件夹，用于任何电脑上的项目。

这三种均可在浏览器和Studio中使用。

## 在Studio中：在程序里打开

Studio会列出其在本机找到的、可打开该场景的程序：若usdview位于搜索路径中，则列出usdview，以及本机针对该文件类型的程序。选择一个程序，若它同时支持USD和glTF，则选择其中之一，然后点击{{ui:渲染}}。Studio会将包写入“文档”下的一个新文件夹（`CadCraft hand-off`；不会覆盖任何内容，每次发送都有独立的文件夹），并在其中启动该程序，然后显示文件的位置。

| 程序 | 最适合读取 |
|---|---|
| usdview | USD |
| 本机的程序 | 本机对该文件类型所拥有的任何程序 |

Studio只会启动此固定列表中的程序；对于页面按名称请求的任何程序，它都不会运行，并且绝不会启动依GNU GPL许可证发布的程序（参见[用其他程序绘制图片](topic:render-other-program#programs-cadcraft-never-runs)）。任何能读取USD或glTF的程序都可以打开上方**适用于任何程序的文件**中的文件。

:::note
Twinmotion、Enscape及其他可视化程序不在此列表中：CadCraft尚未与它们进行过测试，也不对其做任何声明。可从此处获取glTF或USD文件作为导入途径。
:::
