---
title: 本机的渲染能力
summary: “设置”›“渲染”显示本浏览器允许本应用用于渲染的图形、处理器核心和内存，以及决定渲染从何处开始的级别。
keywords: 本机, 显卡, GPU, WebGPU, WebGL, 处理器, CPU, 核心, 线程, 内存, RAM, 共享内存, 隔离, 级别, 级别, 速度, 慢, 渲染速度, 笔记本电脑
from: 8a0c21c9
---

打开{{ui:Settings}}（{{key:Mod+,}}），停留在本应用自己的选项卡中，然后滚动到{{ui:Rendering}}。{{ui:Your machine}}列出本浏览器允许本应用用于渲染的内容。其中的任何信息都不会离开这台计算机。

| 行 | 含义 |
|---|---|
| {{ui:Graphics}} | 浏览器报告的显卡。“WebGPU”表示它可以完成全部渲染工作；“WebGL 2 only”表示实时视图和{{ui:Render a picture…}}使用它（通过WebGL路径追踪器可获得高质量效果），而需要WebGPU的视图内渲染和渲染队列不可用；软件替代方案表示所有工作都由处理器完成 |
| {{ui:Processor}} | 浏览器报告的处理器核心数量 |
| {{ui:Memory}} | 在浏览器提供该信息时，显示计算机大致的内存容量。有些浏览器不提供此信息 |
| {{ui:Shared memory}} | 页面是否可以在其工作线程之间共享内存。开启时，每个核心都可以处理同一份场景副本；关闭时，每个核心都需要自己的副本，因此大型场景同时能容纳的核心更少 |
| {{ui:Fast processor code}} | 浏览器是否运行速度更快的WebAssembly代码。关闭时使用较慢的备用代码 |
| {{ui:Level}} | {{ui:Graphics card, high}}、{{ui:Graphics card, basic}}或{{ui:Processor only}}，其原因显示在下方 |

## 级别

级别决定[实时视图](topic:live-view)从何处开始（{{ui:For this computer}}）、它绘制多少分散的对象，以及在视图中[细分曲面](topic:modifiers#subdivision-surface)最多可显示多少个面，从而使使用集成显卡或完全没有独立显卡的笔记本电脑仍能保持流畅响应。集成显卡或手机图形芯片，或内存为 4 GB 或更少的计算机，永远不会获得{{ui:Graphics card, high}}。

:::note
浏览器之间存在差异。同一台计算机在一个浏览器中可能显示WebGPU，而在另一个浏览器中显示“WebGL 2 only”。在Linux上，大多数浏览器尚未支持WebGPU。
:::
