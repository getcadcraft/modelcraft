---
title: Khắc phục sự cố
summary: Triệu chứng, nguyên nhân và cách khắc phục, từ chế độ xem 3D trống đến việc nhập sai kích thước, cùng các thông báo ModelCraft hiển thị.
keywords: sự cố, rắc rối, lỗi, không hoạt động, trống, webgl, đồ họa, chậm, thông báo, nhập thất bại, sai kích thước, không chọn được, cảm ứng, phím không hoạt động, mất công việc
from: 6e7394be
---

## Chế độ xem 3D trống

**Triệu chứng:** giữa màn hình vẫn trống, hoặc chỉ hiển thị màu nền, và nhấp công cụ cũng không có tác dụng.

**Nguyên nhân:** ModelCraft vẽ bằng WebGL 2, công nghệ đồ họa 3D của trình duyệt. Nó bị thiếu khi trình duyệt quá cũ, khi tăng tốc phần cứng bị tắt, hoặc khi driver đồ họa bị chặn.

**Cách khắc phục:**

:::chromium
1. Mở cài đặt của trình duyệt và tìm "tăng tốc đồ họa".
2. Bật "Sử dụng tăng tốc đồ họa khi có" rồi khởi động lại trình duyệt.
3. Nếu đã bật, gõ `chrome://gpu` vào thanh địa chỉ (`edge://gpu` trong Edge) và tìm "WebGL2" trong danh sách. Nếu ghi là đã tắt, hãy cập nhật driver đồ họa.
:::

:::firefox
1. Mở **Cài đặt**, rồi **Chung**, và cuộn đến "Hiệu suất".
2. Bỏ chọn "Sử dụng cài đặt hiệu suất được đề xuất", rồi đánh dấu "Sử dụng tăng tốc phần cứng khi có sẵn". Khởi động lại Firefox.
3. Nếu vẫn lỗi, gõ `about:support` vào thanh địa chỉ và xem mục "Đồ họa" để tìm WebGL 2.
:::

:::safari
Cập nhật macOS và Safari. Các phiên bản Safari gần đây luôn bật WebGL 2. Nếu bạn đã thay đổi các tính năng thử nghiệm trong **Safari**, rồi **Cài đặt**, rồi **Nâng cao** (hoặc **Feature Flags**), hãy đặt lại chúng.
:::

Trên máy tính công việc, máy tính từ xa hoặc máy ảo, đồ họa 3D có thể bị chặn theo chính sách. Thử một máy tính khác. Xem [Trình duyệt và máy tính](common:browsers).

## Phím không hoạt động, hoặc gõ vào ô

**Nguyên nhân:** tiêu điểm bàn phím đang ở một ô trong bảng: danh sách {{ui:Mặt}} trong {{ui:Kiểu}}, một thiết lập mặt trời, ô {{ui:Tên}} trong {{ui:Thông tin đối tượng}}, hoặc bộ chọn đơn vị. Các phím chữ và phím mũi tên khi đó đi vào ô đó.

**Cách khắc phục:** nhấp vào khung nhìn 3D, rồi nhấn lại phím. Các phím cũng không hoạt động khi một hộp thoại đang mở.

## Gõ số không có tác dụng

- **Chưa có hướng.** Một độ dài được gõ sẽ đi theo hướng con trỏ chỉ từ lần nhấp đầu tiên. Di chuyển con trỏ một chút theo hướng bạn muốn, rồi gõ.
- **Sai thời điểm.** Hầu hết công cụ chỉ nhận giá trị được gõ sau lần nhấp đầu tiên: nhấp góc đầu tiên, mặt hoặc điểm để di chuyển từ đó trước. {{ui:Vòng tròn}} và {{ui:Đa giác}} nhận số cạnh trước lần nhấp đầu tiên.
- **"Nhập một độ dài, chẳng hạn 3m, 10'6" hoặc 4m,3m."** ModelCraft không đọc được. Kiểm tra dấu phẩy thập phân (`2,5`): hãy dùng dấu chấm.

## Hình dạng bắt đầu sai chỗ trên màn hình cảm ứng

**Triệu chứng:** dùng ngón tay, hình chữ nhật đầu tiên vẫn ổn, nhưng hình chữ nhật, vòng tròn hoặc đường thẳng tiếp theo bắt đầu ở nơi cử chỉ trước đó của bạn kết thúc, thay vì nơi bạn chạm.

**Nguyên nhân:** lỗi trong bản dựng này: trên màn hình cảm ứng, công cụ ghi nhớ điểm bắt cuối cùng từ cử chỉ trước.

**Cách khắc phục:** chạm lại vào nút công cụ trên thanh công cụ trước mỗi hình mới. Điều đó khởi động lại công cụ, và điểm đầu tiên nằm đúng nơi bạn chạm.

## Chỉnh sửa một nhóm làm thay đổi nhóm khác

**Triệu chứng:** bạn sao chép một nhóm bằng {{ui:Di chuyển}} và {{key:Ctrl}}, mở một bản sao và chỉnh sửa, nhưng bản sao kia cũng thay đổi. {{ui:Cây đối tượng}} hiển thị cả hai với cùng tên.

**Nguyên nhân:** trong bản dựng này, sao chép một nhóm tạo ra một vị trí thứ hai của cùng nhóm đó, giống như một cấu kiện. Nút {{ui:Tạo bản riêng}} của ModelCraft chỉ được cung cấp cho cấu kiện.

**Cách khắc phục:** chọn bản sao bạn muốn thay đổi, nhấp {{ui:Tạo cấu kiện}} trong {{ui:Thông tin đối tượng}}, rồi {{ui:Tạo bản riêng}}. Bản sao đó giờ có nội dung riêng. Hoặc {{ui:Phân rã}} nó.

## Đẩy/kéo không làm điều bạn mong đợi

- **"Đẩy/kéo hoạt động trên một mặt. Nhấp vào một mặt."** Bạn đã nhấp vào một cạnh hoặc khoảng trống. Di chuột cho đến khi mặt được tô sáng, rồi nhấp.
- **Mặt nằm trong một nhóm.** Nhấp đúp vào nhóm để mở nó trước.
- **Một cửa sổ không cắt xuyên qua tường.** Hình chữ nhật phải được vẽ trên mặt của tường, không phải phía trước nó, và tường phải có mặt sau. Xem [Cắt lỗ mở qua tường](topic:openings#if-it-did-not-cut-through).
- **Hai khối chồng lên nhau mà không gộp.** Các khối đặc được đẩy vào nhau không cắt hoặc nối nhau trong bản dựng này.

## Một đường hoặc hình không tạo thành mặt

Một mặt chỉ được lấp đầy khi các cạnh khép kín thành một vòng phẳng. Kiểm tra xem điểm cuối cùng có bắt vào điểm đầu tiên ("Điểm cuối") không, và tất cả các cạnh có nằm trong một mặt phẳng không. Một vòng hơi lệch khỏi mặt phẳng sẽ vẫn là các đường. Vẽ lại một trong các cạnh của nó, bắt vào các góc.

## Tôi không thể chọn hoặc xóa một mặt

- Với {{ui:Chọn}}, nhấp gần một cạnh sẽ chọn cạnh đó. Nhấp gần giữa mặt hơn.
- {{ui:Tẩy}} không chọn mặt. Chọn mặt rồi nhấn {{key:Delete}}, hoặc xóa một trong các cạnh của nó.
- Nếu nó thuộc một nhóm hoặc cấu kiện, nhấp sẽ chọn toàn bộ. Nhấp đúp để mở.

## "Chọn thứ gì đó để di chuyển trước, hoặc nhấp vào nó."

{{ui:Di chuyển}}, {{ui:Xoay}} và {{ui:Tỷ lệ}} cần có thứ để làm việc: chọn nó trước, hoặc bắt đầu công cụ bằng cách nhấp vào chính đối tượng (không phải khoảng trống hoặc đường dẫn hướng).

## "Chọn một số hình học trước (kéo một cửa sổ, hoặc nhấp ba lần để chọn mọi thứ được nối)."

{{key:G}} và {{key:Shift+G}} cần một vùng chọn. Đường dẫn hướng không thể được nhóm.

## Các phím mũi tên xoay thay vì khóa

Khóa chỉ hoạt động sau lần nhấp đầu tiên của một công cụ vẽ hoặc chỉnh sửa. {{ui:Đẩy/kéo}} không có khóa, và trong {{ui:Xoay}} chúng không thay đổi góc xoay. Vào các lúc khác, các phím mũi tên xoay khung nhìn.

## Esc khi toàn màn hình

Ở chế độ toàn màn hình, trình duyệt có thể dùng lần {{key:Esc}} đầu tiên để thoát toàn màn hình. Nhấn {{key:Esc}} lần nữa để hủy công cụ.

## Không có nút giữa

Nhấn {{key:O}} cho {{ui:Xoay quanh}} rồi kéo, hoặc dùng các phím mũi tên. Xem [Xoay quanh, di chuyển khung nhìn và thu phóng](topic:orbit-pan-zoom#without-a-middle-button).

## Nhập

| Thông báo | Cần làm gì |
|---|---|
| "ModelCraft nhập SketchUp (.skp), Collada (.dae), OBJ, glTF (.glb/.gltf), FBX, PLY, STL, Alembic (.abc), DWG và DXF. … không thuộc các định dạng này." | Xuất mô hình từ chương trình kia sang một trong các định dạng này |
| "Tệp này lớn hơn 300 MB." | Đơn giản hóa hoặc tách mô hình trong chương trình kia |
| "…quá lớn để tạo mô hình ở đây (hơn 2 triệu đỉnh)." | Tương tự |
| "Tệp .gltf này cần "…"…" | Thả `.gltf` cùng với các tệp `.bin` và kết cấu của nó, hoặc mở phiên bản `.glb` |
| "Tệp glTF này cần phần mở rộng … mà ModelCraft chưa đọc được." | Xuất lại từ chương trình kia mà không dùng phần mở rộng đó (ví dụ kết cấu KTX2) |
| Một OBJ nhập vào mà không có màu hoặc kết cấu | Thả `.obj` cùng với `.mtl` và các hình ảnh của nó |
| "Tệp Alembic này dùng bố cục HDF5 cũ…" | Lưu lại từ chương trình kia dưới dạng tệp Ogawa Alembic |
| Một FBX nhập vào mà không có kết cấu | Thả `.fbx` cùng với các hình ảnh kết cấu, hoặc nhúng phương tiện khi xuất |
| "Tệp FBX này là phiên bản …, mà ModelCraft không đọc được" | Xuất lại dưới dạng FBX 2011 hoặc mới hơn |
| Một STL hoặc PLY nhập vào lớn hơn hoặc nhỏ hơn 1,000 lần | STL được đọc theo milimét và PLY theo mét: hãy co giãn nó (xem [Xoay và tỷ lệ](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)) |
| "Đây không phải tệp Collada (.dae)…" hoặc "…không phải XML đúng định dạng…" | Tệp bị hỏng hoặc không phải Collada. Xuất lại |
| "Tệp Collada này không có hình học nào ModelCraft có thể nhập." | Nó chỉ chứa camera, đèn hoặc tham chiếu đến các tệp khác |
| "Đây là DXF nhị phân. Lưu dưới dạng DXF ASCII rồi thử lại." | Lưu lại từ chương trình CAD dưới dạng ASCII |
| "Đây không phải bản vẽ DWG…" | Tệp không phải DWG, hoặc bị hỏng |
| "Không thể đọc bản vẽ này (…). Có thể nó bị hỏng, hoặc được lưu ở phiên bản DWG mà trình đọc không xử lý…" | Phần trong ngoặc cho biết lý do. Lưu dưới dạng DXF, hoặc DWG từ AutoCAD 2000 đến 2018, từ chương trình CAD |
| "Bản vẽ này vươn xa hơn 10,000 km so với gốc của nó…" | Di chuyển bản vẽ về gần 0,0 trong chương trình CAD |

### Bản nhập sai kích thước hoặc nằm nghiêng

- **OBJ:** OBJ không có đơn vị; ModelCraft đọc theo mét. Một mô hình tính bằng milimét sẽ vào lớn gấp 1000 lần: [tỷ lệ](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size) nó bằng `0.001`; một mô hình tính bằng inch thì bằng `0.0254`.
- **OBJ nằm nghiêng:** ModelCraft mong đợi các tệp OBJ có trục Y hướng lên. Tệp được ghi với trục Z hướng lên sẽ nằm ngang. Xoay nó 90° quanh trục đỏ: nhấp tâm {{ui:Xoay}} trên một mặt hướng dọc theo màu đỏ, hoặc mở tệp trong chương trình của nó và xuất với trục Y hướng lên.
- **DWG hoặc DXF:** bạn đã chọn sai đơn vị trong hộp thoại "Đơn vị bản vẽ". Hoàn tác và nhập lại.

## Mở tệp

| Thông báo | Cần làm gì |
|---|---|
| "Đây không phải tệp mô hình ModelCraft (nó không phải JSON)." | Dùng {{ui:Nhập}} cho các định dạng khác |
| "Đây không phải tệp ModelCraft có thể mở: …" | Tệp bị hỏng hoặc đã bị chỉnh sửa thủ công |
| "Mô hình này được lưu bởi một ModelCraft mới hơn…" | Mở nó bằng phiên bản mới hơn |
| "Tệp này lớn hơn 200 MB." | Mô hình quá lớn để mở ở đây |

## Tôi làm mất công việc

ModelCraft không tự lưu vào tệp. Khi bạn đóng hoặc tải lại một thẻ trình duyệt có thay đổi chưa lưu, trình duyệt sẽ hỏi trước ("Rời khỏi trang web?" hoặc "Tải lại trang web?"); hãy chọn ở lại và lưu. Tạo mới và Mở cũng hỏi ("Thay đổi chưa lưu"). Nếu trình duyệt hoặc máy tính bị sập, hãy mở lại ModelCraft trong cùng trình duyệt: nó sẽ đề nghị khôi phục công việc chưa lưu ("Khôi phục công việc của bạn?"; xem [Khôi phục công việc của bạn](common:recover)). Thường xuyên lưu bằng {{key:Mod+S}}.

## Thư mục tải xuống của tôi đầy bản sao

Mỗi lần lưu là một lần tải xuống mới, được đặt tên `Untitled (1).modelcraft`, `Untitled (2).modelcraft` và cứ thế. Xóa các tệp cũ, hoặc đặt trình duyệt hỏi nơi lưu mỗi tệp và tự ghi đè tệp cũ. Xem [Mở, lưu, nhập và xuất](topic:files#save-a-model).

## Chạy chậm

- Mỗi bước hoàn tác giữ một bản sao của mô hình (một [lưới (mesh)](topic:meshes) chỉ giữ phần đã thay đổi), nên khi nhập một lượng lớn hình học đẩy/kéo, mỗi lần chỉnh sửa lâu hơn. Phân rã hoặc xóa những gì bạn không cần, lưu, rồi mở lại: mở lại cũng xóa lịch sử hoàn tác.
- Bóng đổ mặt trời tốn nhiều tài nguyên nhất. Bỏ chọn {{ui:Bóng đổ mặt trời}} khi bạn đang tạo mô hình.

## Không có bóng

{{ui:Bóng đổ mặt trời}} đang tắt, mặt trời đang lặn vào thời điểm bạn chọn ("Mặt trời đang lặn vào thời điểm này."), hoặc kiểu là {{ui:Khung dây}}, kiểu này không vẽ bóng.

## "Trình duyệt này không cho phép toàn màn hình."

Một số trình duyệt và một số khung nhúng từ chối toàn màn hình. Hãy dùng chế độ toàn màn hình của chính trình duyệt ({{pick:mac=Control-Command-F|windows linux=F11}}).

## ModelCraft không mở khi không có kết nối

ModelCraft chỉ mở ngoại tuyến sau khi đã được lưu để dùng ngoại tuyến trong trình duyệt đó: nút trên thanh ứng dụng phải hiển thị {{ui:Sẵn sàng ngoại tuyến}}. Mở khi đang trực tuyến và nhấp {{ui:Lưu để dùng ngoại tuyến}}. Nếu nút hiển thị {{ui:Không thể lưu}}, hãy nhấp lại khi kết nối tốt hơn; {{ui:Không dùng được chế độ ngoại tuyến}} nghĩa là cửa sổ này (cửa sổ riêng tư, hoặc máy tính được quản lý) không thể giữ bản sao. Xem [Làm việc ngoại tuyến](common:offline).
