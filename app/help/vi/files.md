---
title: Mở, lưu, nhập và xuất
summary: Tệp ModelCraft, những gì bạn có thể đưa vào và xuất ra, tệp đi đâu, và điều gì thay đổi khi ngoại tuyến và giữa các trình duyệt.
keywords: mở, lưu, nhập, xuất, tệp, 3dm, skp, khôi phục, tự động lưu, gần đây, máy tính để bàn, mở trong 3d, chuyển giao, tải xuống, tệp modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, định dạng, ngoại tuyến, lưu thành
from: 0b4896d1
---

ModelCraft đọc và ghi tệp trên máy tính của bạn. Không có gì được tải lên: tệp bạn mở được đọc ngay trong trình duyệt, và tệp bạn lưu là một lần tải xuống. Xem [Tệp của bạn đi đâu](common:your-files).

## Tổng quan các định dạng

| Định dạng | Mở | Nhập | Xuất | Dùng để làm gì |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | có | không | {{ui:Lưu}} | Tệp làm việc của bạn. Giữ mọi thứ. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | có | có | {{ui:Lưu thành}}, {{ui:Xuất}} | Các chương trình kết xuất và ráp cảnh. USD của chính ModelCraft giữ mọi thứ. Xem [Lưu, mở và xuất USD](topic:usd). |
| SketchUp (`.skp`) | không | có | không | Đưa mô hình từ SketchUp vào. Giữ nhóm, cấu kiện, màu, họa tiết trên mặt, thẻ và cạnh mềm. Xem [Đưa một mô hình SKP vào](topic:import-sketchup-files). |
| Collada (`.dae`) | không | có | có | Trao đổi mô hình với các phần mềm 3D khác. Giữ nhóm, cấu kiện và màu. |
| OBJ (`.obj`) | không | có | có | Các chương trình kết xuất và trực quan hóa. |
| glTF (`.glb`, `.gltf`) | không | có | chỉ `.glb` | Trình xem web, công cụ trò chơi, AR. |
| STL (`.stl`) | không | có | có | In 3D (tính bằng milimét). |
| PLY (`.ply`) | không | có | có | Lưới có màu: quét 3D, in màu. |
| FBX (`.fbx`) | không | có | không | Mô hình từ các chương trình hoạt họa và trò chơi (FBX 2011 trở lên). |
| Alembic (`.abc`) | không | có | không | Bộ nhớ đệm hình học, ở mẫu đầu tiên. |
| STEP (`.step`, `.stp`) | không | có | không | Chi tiết từ phần mềm mô hình chi tiết và nhà cung cấp, dưới dạng lưới kín ở kích thước thật. Xem [Các định dạng tệp](topic:formats). |
| `.3dm` | không | có | không | Mô hình NURBS: đa bề mặt, lưới, đường cong, khối và lớp, dưới dạng lưới, cạnh, cấu kiện và thẻ. Xem [Đưa một mô hình .3dm vào](topic:import-3dm-files). |
| 3MF (`.3mf`) | không | không | có | In 3D, có màu (tính bằng milimét). Từ {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}: xem [Chuẩn bị một mô hình cho in 3D](topic:print-3d). |
| IFC (`.ifc`) | không | không | có | Các chương trình BIM, và BimCraft. |
| DWG (`.dwg`) | không | có | có | Mặt bằng khu đất hoặc mặt bằng tầng để dựng mô hình lên; gửi mô hình sang chương trình CAD. |
| DXF (`.dxf`) | không | có | có | Như trên, cho mọi chương trình CAD. |

[Các định dạng chi tiết](topic:formats) liệt kê chính xác mỗi định dạng giữ gì và bỏ gì.

## Tệp ModelCraft

Một tệp `.modelcraft` giữ cả mô hình: hình học, nhóm, cấu kiện, đường dẫn hướng, cảnh, đơn vị, và camera cùng kiểu bạn đang dùng khi lưu. Nó không giữ lịch sử hoàn tác.

### Mở một mô hình

1. Bấm {{ui:Mở}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+O}}.
2. Nếu mô hình trên màn hình có thay đổi chưa lưu, ModelCraft hỏi: "Mô hình này có thay đổi chưa được lưu. Lưu một bản sao trước?" Chọn {{ui:Lưu bản sao}}, {{ui:Bỏ thay đổi}} hoặc {{ui:Hủy}}.
3. Chọn tệp `.modelcraft`.

Mô hình mở bằng đơn vị lúc nó được lưu, với camera lúc nó được lưu. Bạn cũng có thể thả một tệp `.modelcraft` lên khung nhìn 3D, hoặc bấm vào một tệp trong danh sách tệp gần đây trên thẻ bắt đầu (trình duyệt mở lại được tệp, và ứng dụng máy tính để bàn).

:::desktop
Trong ứng dụng máy tính để bàn, bấm đúp một tệp `.modelcraft` sẽ mở nó trong ModelCraft, và **Mở bằng** trên tệp Collada, OBJ, glTF, DWG hoặc DXF cũng vậy (nó được nhập vào một mô hình mới).
:::

### Lưu một mô hình

Bấm {{ui:Lưu}} hoặc nhấn {{key:Mod+S}}. Trình duyệt tải xuống `<name>.modelcraft`, trong đó tên là tệp bạn đã mở, hoặc "Chưa đặt tên" cho mô hình mới.

:::desktop
Trong ứng dụng máy tính để bàn, {{ui:Lưu}} ghi thẳng vào tệp bạn đã mở. Một mô hình mới sẽ hỏi nơi lưu.
:::

- {{ui:Lưu thành}} ({{key:Mod+Shift+S}}) lưu một bản sao dưới dạng tệp `.modelcraft` hoặc [USD](topic:usd); khi trình duyệt làm được, nó hỏi tên và nơi lưu. Nếu không, hãy đổi tên tệp đã tải xuống: lần lưu kế tiếp sau khi bạn mở tệp đã đổi tên sẽ dùng tên mới.
- Mỗi lần lưu là một lần tải xuống mới. Tùy cài đặt của trình duyệt, nó đi thẳng vào thư mục tải xuống của bạn hoặc hỏi nơi lưu. Nếu đã có một tệp trùng tên ở đó, hầu hết trình duyệt thêm một số, như `Untitled (1).modelcraft`.

:::chromium
Để chọn thư mục mỗi lần, hãy mở cài đặt của trình duyệt, tìm "tải xuống" và bật "Hỏi nơi lưu từng tệp trước khi tải xuống".
:::

:::firefox
Để chọn thư mục mỗi lần, hãy mở **Cài đặt**, rồi **Chung**, và dưới "Tải xuống" chọn "Luôn hỏi bạn nơi lưu tệp".
:::

:::safari
Để đổi nơi tải xuống, hãy mở **Safari**, rồi **Cài đặt**, rồi **Chung**, và đặt "Vị trí tải xuống tệp".
:::

### Bắt đầu một mô hình mới

Bấm {{ui:Mới}}. Nếu có thay đổi chưa lưu, ModelCraft hỏi trước. Một mô hình mới bắt đầu trống, theo đơn vị của vùng ngôn ngữ của bạn (feet và inch ở Hoa Kỳ, milimét ở nơi khác), không có cảnh nào.

### Nếu trình duyệt đóng trước khi bạn lưu

ModelCraft giữ một bản sao công việc chưa lưu trong trình duyệt của bạn vài giây sau mỗi thay đổi. Nếu thẻ hoặc trình duyệt đóng trước khi bạn lưu, lần sau bạn mở ModelCraft nó sẽ hỏi "Khôi phục công việc của bạn?". Khôi phục sẽ mở mô hình như lúc trước, chưa lưu vào tệp: hãy lưu để giữ lại. Xem [Khôi phục công việc của bạn](common:recover).

### Từ CadCraft: Mở trong ModelCraft

Trong ứng dụng vẽ CadCraft, **Xem**, rồi **Thêm**, rồi **Mở trong ModelCraft** chuyển bản vẽ đang mở sang ModelCraft trong một thẻ mới, dưới dạng DWG. Nó đến theo cách một DWG nhập vào: các đường thẳng trên mặt đất, trong một nhóm, sẵn sàng để dựng mô hình lên. Không có gì được tải lên; tệp đi qua bộ nhớ riêng của trình duyệt.

## Nhập

Nhập thêm một tệp vào mô hình bạn đang mở; nó không thay thế mô hình.

1. Bấm {{ui:Nhập}} trong nhóm {{ui:Tệp}}, hoặc thả tệp lên khung nhìn 3D.
2. Chọn một tệp SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG hoặc DXF.

   Tệp đến dưới dạng **một nhóm**, đang được chọn, và khung nhìn thu phóng để hiển thị nó. Thanh trạng thái cho biết cái gì đã vào, và liệt kê mọi thứ không nhập được, như "Chưa nhập: 2 texture".

3. Để làm việc trực tiếp với hình học của nó, bấm đúp nhóm để chỉnh sửa bên trong, hoặc bấm {{ui:Phân rã}}.

Một số điều cần biết:

- **Kích thước và hướng lên:** tệp Collada cho biết đơn vị và trục nào hướng lên, và ModelCraft chuyển đổi chúng. glTF luôn tính bằng mét. Tệp OBJ không mang đơn vị: ModelCraft đọc chúng là mét, với Y hướng lên. Nếu một OBJ vào quá lớn hoặc quá nhỏ 1000 lần, hãy dùng [Tỷ lệ](topic:rotate-scale) với một hệ số như `0.001` hoặc `1000`.
- **DWG và DXF** vào dưới dạng các đường thẳng (cạnh) trên mặt đất, không phải mặt. Nếu bản vẽ không nói đơn vị của nó, một hộp thoại có tiêu đề "Đơn vị bản vẽ" hỏi một đơn vị bản vẽ là bao nhiêu. Xem [Dựng mô hình trên mặt bằng khu đất](topic:site-plan).
- **Giới hạn:** tệp trên 300 MB bị từ chối khi nhập, và trên 200 MB khi mở. Tệp có hơn 2 triệu đỉnh hoặc mặt bị từ chối vì quá lớn.

## Xuất

1. Bấm {{ui:Xuất}} trong nhóm {{ui:Tệp}}.
2. Chọn một định dạng: {{ui:glTF nhị phân (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL để in (.stl, milimét)}}, {{ui:PLY có màu (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC cho BimCraft (.ifc)}}, {{ui:DWG cho CAD (.dwg, 2004)}} hoặc {{ui:DXF cho CAD (.dxf, R12)}}.

Trình duyệt tải xuống tệp, đặt tên theo mô hình. Cả mô hình được xuất, không chỉ vùng chọn. Mô hình trống không được xuất: "Mô hình đang trống: hãy vẽ gì đó trước." Xem [Xuất mô hình cho các chương trình khác](topic:export-model).

## Trực tuyến và ngoại tuyến

Mọi thứ trong ModelCraft chạy trên máy tính của bạn, nên mô hình hóa, mở, lưu, nhập và xuất đều chạy không cần kết nối sau khi ứng dụng đã tải.

Để mở ModelCraft hoàn toàn không có kết nối, hãy lưu nó để dùng ngoại tuyến khi bạn đang trực tuyến:

1. Bấm {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng ở trên cùng.
2. Nút đếm lên ("Đang lưu 40 trên 212") trong lúc lưu. ModelCraft lưu các tệp của chính nó (trong đó có trình đọc DWG), phần trợ giúp này và thư viện 3D, nên có thể mất một lúc.
3. Khi nút ghi {{ui:Sẵn sàng ngoại tuyến}}, ModelCraft mở được từ cùng địa chỉ mà không cần kết nối, và nhập DWG cũng chạy ngoại tuyến.

Sau này bấm {{ui:Sẵn sàng ngoại tuyến}} để chọn {{ui:Lưu lại (lấy bản mới nhất)}} hoặc {{ui:Xóa bản ngoại tuyến}}. Nếu nút ghi {{ui:Không thể lưu}}, một số tệp chưa tải xuống được: hãy kiểm tra kết nối và bấm lại để thử. {{ui:Không dùng được chế độ ngoại tuyến}} nghĩa là cửa sổ trình duyệt này không giữ được bản sao (cửa sổ riêng tư và một số máy tính được quản lý). Xem [Làm việc ngoại tuyến](common:offline).

Lưu lên đám mây chưa có. Mỗi mô hình ở nơi bạn lưu nó.

:::offline
Bạn đang ngoại tuyến. Bạn vẫn có thể tiếp tục dựng mô hình và lưu. Trừ khi thanh ứng dụng hiện {{ui:Sẵn sàng ngoại tuyến}}, đừng tải lại thẻ này cho đến khi bạn trực tuyến trở lại.
:::

## Ứng dụng máy tính để bàn

:::desktop
Bạn đang dùng ModelCraft trong CadCraft Studio, ứng dụng máy tính để bàn có cả tám ứng dụng. Tệp mở và lưu ở nơi bạn chọn.
:::

:::web
ModelCraft chạy trong trình duyệt trên Mac, Windows và Linux, và trong CadCraft Studio, ứng dụng máy tính để bàn có cả tám ứng dụng trong một lần cài, tại getcadcraft.com/download.
:::
