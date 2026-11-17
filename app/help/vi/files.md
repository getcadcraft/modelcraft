---
title: Mở, lưu, nhập và xuất
summary: Tệp ModelCraft, những gì bạn có thể đưa vào và gửi ra, tệp được lưu ở đâu, và những gì thay đổi khi làm việc ngoại tuyến hoặc giữa các trình duyệt.
keywords: mở, lưu, nhập, xuất, tệp, 3dm, skp, khôi phục, tự động lưu, gần đây, máy tính để bàn, mở trong 3D, chuyển giao, tải xuống, tệp modelcraft, dae, collada, obj, gltf, glb, stl, step, stp, ifc, dwg, dxf, định dạng, ngoại tuyến, lưu thành
from: 3f09ab72
---

ModelCraft đọc và ghi tệp trên máy tính của bạn. Không có gì được tải lên: tệp bạn mở được đọc bên trong trình duyệt, còn tệp bạn lưu là một lần tải xuống. Xem [Tệp của bạn đi đâu](common:your-files).

## Tổng quan định dạng

| Định dạng | Mở | Nhập | Xuất | Dùng để |
|---|---|---|---|---|
| ModelCraft (`.modelcraft`) | có | không | {{ui:Lưu}} | Tệp làm việc của bạn. Giữ mọi thứ. |
| USD (`.usd`, `.usda`, `.usdc`, `.usdz`) | có | có | {{ui:Lưu thành}}, {{ui:Xuất}} | Chương trình kết xuất và lắp ghép cảnh. USD riêng của ModelCraft giữ mọi thứ. Xem [Lưu, mở và xuất USD](topic:usd). |
| SketchUp (`.skp`) | không | có | không | Đưa mô hình từ SketchUp vào. Giữ nhóm, thành phần, màu, texture trên mặt, thẻ và cạnh mềm. Xem [Nhập mô hình SKP](topic:import-sketchup-files). |
| Collada (`.dae`) | không | có | có | Trao đổi mô hình với các phần mềm dựng mô hình 3D khác. Giữ nhóm, thành phần và màu. |
| OBJ (`.obj`) | không | có | có | Chương trình kết xuất và trực quan hóa. |
| glTF (`.glb`, `.gltf`) | không | có | chỉ `.glb` | Trình xem web, công cụ trò chơi, AR. |
| STL (`.stl`) | không | có | có | In 3D (theo milimét). |
| PLY (`.ply`) | không | có | có | Lưới có màu: quét 3D, in màu. |
| FBX (`.fbx`) | không | có | không | Mô hình từ chương trình hoạt hình và trò chơi (FBX 2011 trở lên). |
| Alembic (`.abc`) | không | có | không | Bộ nhớ đệm hình học, tại mẫu đầu tiên. |
| STEP (`.step`, `.stp`) | không | có | không | Chi tiết từ phần mềm mô hình chi tiết và nhà cung cấp, dưới dạng lưới kín ở đúng kích thước thực. Xem [Định dạng tệp](topic:formats). |
| `.3dm` | không | có | không | Mô hình NURBS: polysurface, lưới, đường cong, khối và lớp, dưới dạng lưới, cạnh, thành phần và thẻ. Xem [Nhập mô hình .3dm](topic:import-3dm-files). |
| 3MF (`.3mf`) | không | không | có | In 3D, có màu (theo milimét). Từ {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}: xem [Chuẩn bị mô hình để in 3D](topic:print-3d). |
| IFC (`.ifc`) | không | không | có | Chương trình BIM và BimCraft. |
| DWG (`.dwg`) | không | có | có | Mặt bằng khu đất hoặc mặt bằng sàn để dựng mô hình lên; gửi mô hình sang chương trình CAD. |
| DXF (`.dxf`) | không | có | có | Tương tự, cho mọi chương trình CAD. |

[Định dạng tệp chi tiết](topic:formats) liệt kê chính xác mỗi định dạng giữ và bỏ những gì.

## Tệp ModelCraft

Tệp `.modelcraft` giữ toàn bộ mô hình: hình học, nhóm, thành phần, đường dẫn hướng, cảnh, đơn vị, cùng góc nhìn và kiểu bạn đang dùng khi lưu. Tệp không giữ lịch sử hoàn tác.

### Mở mô hình

1. Nhấp {{ui:Mở}} trong nhóm {{ui:Tệp}}, hoặc nhấn {{key:Mod+O}}.
2. Nếu mô hình trên màn hình có thay đổi chưa lưu, ModelCraft hỏi: "Mô hình này có thay đổi chưa lưu. Lưu bản sao trước?" Chọn {{ui:Lưu bản sao}}, {{ui:Bỏ thay đổi}} hoặc {{ui:Hủy}}.
3. Chọn tệp `.modelcraft`.

Mô hình mở ra theo đơn vị đã lưu, với góc nhìn đã lưu. Bạn cũng có thể kéo thả tệp `.modelcraft` vào khung nhìn 3D, hoặc nhấp một tệp trong danh sách tệp gần đây trên thẻ khởi động (các trình duyệt có thể mở lại tệp, và ứng dụng máy tính).

:::desktop
Trong ứng dụng máy tính, nhấp đúp tệp `.modelcraft` sẽ mở nó trong ModelCraft, và **Mở bằng** trên tệp Collada, OBJ, glTF, DWG hoặc DXF cũng vậy (tệp được nhập vào một mô hình mới).
:::

### Lưu mô hình

Nhấp {{ui:Lưu}} hoặc nhấn {{key:Mod+S}}. Trình duyệt tải xuống `<name>.modelcraft`, trong đó tên là tệp bạn đã mở, hoặc "Untitled" với mô hình mới.

:::desktop
Trong ứng dụng máy tính, {{ui:Lưu}} ghi đè lên tệp bạn đã mở. Mô hình mới sẽ hỏi nơi lưu.
:::

- {{ui:Lưu thành}} ({{key:Mod+Shift+S}}) lưu một bản sao dưới dạng tệp `.modelcraft` hoặc [USD](topic:usd); khi trình duyệt cho phép, nó hỏi tên và nơi lưu. Nếu không, đổi tên tệp đã tải xuống: lần lưu tiếp theo sau khi bạn mở tệp đã đổi tên sẽ dùng tên mới.
- Mỗi lần lưu là một lần tải xuống mới. Tùy cài đặt của trình duyệt, tệp sẽ vào thẳng thư mục tải xuống hoặc hỏi nơi lưu. Nếu tệp cùng tên đã có ở đó, hầu hết trình duyệt thêm một số, chẳng hạn `Untitled (1).modelcraft`.

:::chromium
Để chọn thư mục mỗi lần, mở cài đặt của trình duyệt, tìm "tải xuống" và bật tùy chọn hỏi nơi lưu từng tệp trước khi tải xuống.
:::

:::firefox
Để chọn thư mục mỗi lần, mở **Cài đặt**, rồi **Chung**, và trong phần "Tải xuống" chọn "Luôn hỏi nơi lưu tệp".
:::

:::safari
Để đổi nơi tải xuống, mở **Safari**, rồi **Cài đặt**, rồi **Chung**, và đặt "Vị trí tải tệp xuống".
:::

### Bắt đầu mô hình mới

Nhấp {{ui:Mới}}. Nếu có thay đổi chưa lưu, ModelCraft hỏi trước. Mô hình mới bắt đầu trống, theo đơn vị của ngôn ngữ bạn dùng (foot và inch ở Hoa Kỳ, milimét ở nơi khác), không có cảnh nào.

### Nếu trình duyệt đóng trước khi bạn lưu

ModelCraft giữ một bản sao công việc chưa lưu trong trình duyệt vài giây sau mỗi thay đổi. Bản sao được ghi ở nền, nên mô hình lớn không làm bạn phải chờ trong lúc được giữ lại. Nếu thẻ hoặc trình duyệt đóng trước khi bạn lưu, lần mở ModelCraft tiếp theo sẽ hỏi "Khôi phục công việc của bạn?". Khôi phục sẽ mở mô hình như lúc trước, nhưng chưa lưu thành tệp: lưu để giữ lại. Xem [Khôi phục công việc của bạn](common:recover).

### Từ CadCraft: Mở trong ModelCraft

Trong ứng dụng vẽ CadCraft, **Xem**, rồi **Thêm**, rồi **Mở trong ModelCraft** chuyển bản vẽ đang mở sang ModelCraft trong một thẻ mới, dưới dạng DWG. Bản vẽ đến như khi nhập một DWG: các đường trên mặt đất, trong một nhóm, sẵn sàng để dựng mô hình lên. Không có gì được tải lên; tệp đi qua bộ nhớ lưu trữ của trình duyệt bạn.

## Nhập

Nhập thêm một tệp vào mô hình bạn đang mở; nó không thay thế mô hình.

1. Nhấp {{ui:Nhập}} trong nhóm {{ui:Tệp}}, hoặc kéo thả tệp vào khung nhìn 3D.
2. Chọn tệp SketchUp, Collada, OBJ, glTF, FBX, PLY, STL, Alembic, STEP, `.3dm`, USD, DWG hoặc DXF.

   Tệp vào thành **một nhóm**, được chọn, và khung nhìn phóng to để hiển thị nó. Thanh trạng thái cho biết những gì đã vào, và liệt kê những gì không nhập được, chẳng hạn "Chưa nhập: 2 texture".

3. Để làm việc trực tiếp với hình học của nó, nhấp đúp nhóm để chỉnh sửa bên trong, hoặc nhấp {{ui:Phân rã}}.

Vài điều cần biết:

- **Kích thước và hướng lên:** Tệp Collada nêu đơn vị và trục nào hướng lên, và ModelCraft sẽ chuyển đổi. glTF luôn theo mét. Tệp OBJ không mang đơn vị: ModelCraft đọc chúng là mét, với Y hướng lên. Nếu OBJ vào lớn hoặc nhỏ gấp 1000 lần, dùng [Tỷ lệ](topic:rotate-scale) với hệ số như `0.001` hoặc `1000`.
- **DWG và DXF** vào dưới dạng đường (cạnh) trên mặt đất, không phải mặt. Nếu bản vẽ không nêu đơn vị, hộp thoại có tiêu đề "Đơn vị bản vẽ" hỏi một đơn vị bản vẽ là gì. Xem [Dựng mô hình trên mặt bằng khu đất](topic:site-plan).
- **Giới hạn:** tệp trên 300 MB bị từ chối khi nhập, và trên 200 MB khi mở. Tệp có hơn 2 triệu đỉnh hoặc mặt bị từ chối vì quá lớn. OBJ trên 64 MB bị từ chối trước khi được đọc. Tệp văn bản (Collada, OBJ, STL ASCII, USD dạng văn bản) được đọc từng phần, khoảng 4 MB, nên không khối văn bản nào giữ cả tệp; một OBJ 16 MB dùng khoảng 0.5 GB bộ nhớ khi mở trong thử nghiệm của chúng tôi.

## Xuất

1. Nhấp {{ui:Xuất}} trong nhóm {{ui:Tệp}}.
2. Chọn định dạng: {{ui:glTF binary (.glb)}}, {{ui:Collada (.dae)}}, {{ui:OBJ (.obj)}}, {{ui:STL for printing (.stl, millimeters)}}, {{ui:PLY with colours (.ply)}}, {{ui:USD (.usda, .usdc, .usdz)…}}, {{ui:IFC for BimCraft (.ifc)}}, {{ui:DWG for CAD (.dwg, 2004)}} hoặc {{ui:DXF for CAD (.dxf, R12)}}.

Tệp tải xuống được đặt tên như mô hình. Toàn bộ mô hình được xuất, không chỉ vùng chọn. Các tệp glTF, Collada và OBJ được ghi ở nền, nên ModelCraft vẫn làm việc khi một mô hình lớn đang xuất; tải xuống bắt đầu khi tệp sẵn sàng. Mô hình trống thì không được xuất: "Mô hình trống: vẽ gì đó trước." Xem [Xuất mô hình cho chương trình khác](topic:export-model).

## Trực tuyến và ngoại tuyến

Mọi thứ trong ModelCraft chạy trên máy tính của bạn, nên dựng mô hình, mở, lưu, nhập và xuất đều hoạt động không cần kết nối khi ứng dụng đã tải xong.

Để mở ModelCraft hoàn toàn không có kết nối, lưu để dùng ngoại tuyến khi bạn đang trực tuyến:

1. Nhấp {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng phía trên.
2. Nút đếm lên ("Đang lưu 40 trên 212") trong khi lưu. ModelCraft lưu các tệp của chính nó (trong đó có trình đọc DWG), trợ giúp này và thư viện 3D, nên có thể mất một lúc.
3. Khi nút hiển thị {{ui:Sẵn sàng ngoại tuyến}}, ModelCraft mở từ cùng địa chỉ mà không cần kết nối, và nhập DWG cũng hoạt động ngoại tuyến.

Sau đó nhấp {{ui:Sẵn sàng ngoại tuyến}} để chọn {{ui:Lưu lại (lấy bản mới nhất)}} hoặc {{ui:Xóa bản ngoại tuyến}}. Nếu nút hiển thị {{ui:Không thể lưu}}, một số tệp chưa tải xuống xong: kiểm tra kết nối và nhấp lại để thử. {{ui:Không dùng được chế độ ngoại tuyến}} nghĩa là cửa sổ trình duyệt này không thể giữ bản sao (cửa sổ riêng tư và một số máy tính được quản lý). Xem [Làm việc ngoại tuyến](common:offline).

Lưu đám mây chưa có sẵn. Mọi mô hình nằm ở nơi bạn lưu nó.

:::offline
Bạn đang ngoại tuyến. Bạn vẫn có thể tiếp tục dựng mô hình và lưu. Trừ khi thanh ứng dụng hiển thị {{ui:Sẵn sàng ngoại tuyến}}, đừng tải lại thẻ này cho đến khi bạn trực tuyến trở lại.
:::

## Ứng dụng máy tính

:::desktop
Bạn đang dùng ModelCraft trong CadCraft Studio, ứng dụng máy tính với cả tám ứng dụng. Tệp mở và lưu tại nơi bạn chọn.
:::

:::web
ModelCraft chạy trong trình duyệt trên Mac, Windows và Linux, và trong CadCraft Studio, ứng dụng máy tính với cả tám ứng dụng trong một bản cài đặt, tại getcadcraft.com/download.
:::
