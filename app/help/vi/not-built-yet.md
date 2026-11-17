---
title: Chưa xây dựng
summary: Bản ModelCraft này chưa làm được những gì, và hiện nay nên làm gì thay thế.
keywords: thiếu, chưa có, giới hạn, lộ trình, vật liệu, kết cấu bề mặt, văn bản, lớp, cắt, tách, đám mây, máy tính để bàn
from: 179fa5e4
---

ModelCraft là một bản phát hành sớm. Trang này liệt kê những gì nó chưa làm được, để bạn không phải tìm kiếm, và cách gần nhất để hoàn thành công việc hiện nay.

## Công cụ vẽ

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Vẽ tay tự do | Nhấp các điểm bằng {{ui:Curve}} |
| Đổi số đoạn của cung hoặc vòng tròn sau khi đã vẽ | Xóa và vẽ lại sau khi gõ `24s` |
| Chọn kiểu chữ cho [văn bản 3D](topic:text3d), hoặc sửa nội dung sau khi đã đặt | Xóa và thêm lại văn bản |
| Đổi góc bằng cách gõ vào kích thước góc, hoặc đổi kích thước hình trụ từ kích thước vòng tròn của nó | Xoay các cạnh bằng {{ui:Rotate}}; co giãn hình trụ bằng {{ui:Scale}} |
| Kích thước trong tệp mô hình đã xuất | Kích thước hiển thị trong ảnh, bản in và PDF của khung nhìn; tệp mô hình chỉ mang hình học |
| Cắt, Tách và Vỏ ngoài | Các nhóm kín [Hợp, Trừ và Giao](topic:solids), hoặc [giao các mặt](topic:intersect) rồi xóa phần không cần |
| Chọn trục xoay bằng phím mũi tên | Nhấp tâm {{ui:Rotate}} trên mặt hướng theo chiều trục cần có |
| Khóa nhiều suy luận cùng lúc | Khóa một hướng bằng phím mũi tên, rồi bắt điểm |
| Đổi kích thước theo đường nghiêng, hoặc từ đầu kích thước không nằm ở góc | Đặt kích thước trên hai góc, dọc một cạnh, hoặc dọc trục đỏ, xanh lá hoặc xanh dương |

## Hoạt hình

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Tạo hoạt hình cho mặt, cạnh, thời điểm trong ngày của mặt trời, kiểu hiển thị hoặc những gì đang bị ẩn | Làm phần chuyển động thành nhóm hoặc cấu kiện; kết xuất video riêng cho thời điểm khác trong ngày |
| Camera đi theo một đường vẽ sẵn, hoặc nhìn một vật đang di chuyển | Đặt thêm khóa camera dọc đường đi ([Tạo hoạt hình](topic:animation)) |
| Âm thanh trong video, và video chất lượng cao (dò đường đi) khi không có WebGPU | Thêm âm thanh trong trình chỉnh sửa video; không có WebGPU, kết xuất video bằng bộ kết xuất nhanh ([Kết xuất video](topic:animation#render-the-video)) |
| Đèn có hoạt hình (độ sáng, độ lan tỏa, màu) trong video đã kết xuất, góc ống kính có hoạt hình mà không có khóa camera trong video, tạo hoạt hình cho vật liệu hoặc cài đặt kết xuất | Đèn chuyển động trong khung nhìn; với video, khóa thêm camera để thu phóng; kết xuất video riêng cho các cài đặt đèn khác nhau ([Tạo hoạt hình cho mọi thuộc tính](topic:animate)) |
| Phản chiếu trọng số hoặc xương từ bên này sang bên kia, bao xương có thể nhìn thấy, hiển thị trọng số tô bóng từng điểm (chúng hiển thị theo từng mặt), xem lưới đã tạo dáng khi đang vẽ trọng số | Tô cả hai bên, hoặc làm một nửa rồi dùng bộ sửa Đối xứng trước khi thêm khung xương; chuyển giữa Tô trọng số và Tạo dáng để kiểm tra |
| Xương đọc từ tệp glTF, FBX hoặc USD dưới dạng khung xương, và ghi khung xương vào các tệp đó | Mô hình có khung xương vào ở trạng thái nghỉ với trọng số của tệp; thêm xương theo thứ tự khớp của tệp, rồi {{ui:Use the file's weights}} ([Tạo hoạt hình](topic:animate)) |
| Di chuyển đích IK hoặc cực bằng cách kéo trong khung nhìn, chọn không gian riêng của ràng buộc (cục bộ hoặc thế giới), kéo giãn chuỗi IK, IK dọc đường cong | Nhập điểm của đích, hoặc nhắm vào một vật thể rồi di chuyển vật đó; giữ chuỗi ở đúng độ dài |
| Vải, chất lỏng, vật thể mềm, khớp và bản lề giữa các vật cứng, va chạm theo hình dạng chính xác của vật (chỉ có hộp và quả cầu bao quanh), mô phỏng trực tiếp khi bạn phát, tốc độ hoặc vòng quay ban đầu (vật bắt đầu ở trạng thái nghỉ) | Ghi lại các vật cứng và phát các khóa; tạo bản lề bằng khóa; tách hình dạng lạ thành các hộp (nhóm) |
| Xuất hoạt hình sang glTF hoặc các tệp mô hình khác | Kết xuất video; tệp `.modelcraft` và [tệp USD](topic:usd) mà ModelCraft đã lưu dùng cho ModelCraft |
| Gõ bình luận hoặc tiêu đề cho một vấn đề trong VR, ghi chú bằng giọng nói, di chuyển mặt phẳng cắt bằng tay trong VR | Đặt vấn đề trong VR, rồi thêm nội dung trong chương trình BCF; đặt mặt phẳng cắt trong khung nhìn trước khi vào: xem [Xem xét mô hình bằng kính VR](topic:vr-review) |
| Thấy người ở bàn làm việc trong VR (chỉ người trong VR mới hiện), ghi lại một lần đi bộ trong VR | Mời họ tham gia trong VR, hoặc tạo [hoạt hình](topic:animation) cho lần đi bộ |

## Lưới

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Điêu khắc theo cấp (đa độ phân giải), và Chi tiết loại bỏ các tam giác đã trở nên rất nhỏ | [Điêu khắc](topic:sculpt) một lưới đã chia nhỏ; {{ui:Remesh}} để làm đều lại |
| Tạo lại lưới thành các mặt bốn cạnh bám theo hình dạng | {{ui:Remesh}} (tam giác đều), rồi dựng lại bằng [Retopology](topic:mesh-edit#retopology) |
| Trọng số vẽ trên đỉnh cho bộ sửa (Displace, Smooth và Shrinkwrap làm việc trên toàn bộ lưới) | Áp dụng bộ sửa, rồi điêu khắc hoặc chỉnh sửa các phần cần thiết |
| Sao chép và dán đỉnh, cạnh hoặc mặt; lát cắt dao kết thúc bên trong một mặt; cạnh dây không có mặt | Nhân bản lưới trong Mô hình; dùng dao cắt từ cạnh đến cạnh; [đùn](topic:mesh-edit#change-the-shape) các cạnh hở thành mặt |

## Sắp xếp và xem

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Các lớp của bản vẽ mặt bằng công trường DWG và DXF dưới dạng thẻ | Mặt bằng công trường vào dưới dạng một nhóm: phân rã nó và nhóm các phần bạn muốn gắn thẻ |
| Nhiều mặt cắt cùng lúc, hộp cắt, hoặc đường viền mặt cắt được xuất thành bản vẽ | Mỗi lần chỉ cắt một [mặt phẳng cắt](topic:sections); xuất khung nhìn thành ảnh |
| Hiển thị cạnh mềm dạng nét đứt, hoặc làm mềm khi bạn kéo thanh trượt | [Làm mềm theo góc](topic:soften) trong Thông tin đối tượng, và hoàn tác để thử góc khác |
| Thư viện mô hình trực tuyến để tìm kiếm, hoặc cấu kiện có tùy chọn để chọn (màu, kiểu) | [Thư viện khởi đầu](topic:starter); nhập mô hình Collada, OBJ hoặc glTF; [kéo giãn](topic:stretch) bản sao cho đúng kích thước |
| Đặt cây từ thư viện cây | [Rải](topic:live-view#scatter-plants-rocks-and-people) cây trong khung nhìn trực tiếp, hoặc đặt một cây từ thư viện khởi đầu |
| Các bản sao độc lập của một nhóm | Tạo thành cấu kiện, rồi {{ui:Make unique}} (xem [Khắc phục sự cố](topic:troubleshooting#editing-one-group-changed-another)) |

## Kết xuất

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Kết xuất trong khung nhìn (không gian {{ui:Render}}), hàng đợi kết xuất, và các tùy chọn camera, ảnh bầu trời, sương mù và trộn ánh sáng khi không có WebGPU | {{ui:Render a picture…}} ở {{ui:High quality}} dùng bộ dò đường đi WebGL ở đó, không có các tùy chọn đó ([Kết xuất ảnh](topic:render#high-quality)) |
| Chương trình khác vẽ ảnh Kết xuất mà không có tiện ích bộ kết xuất (CadCraft không bao giờ chạy chương trình theo giấy phép GNU GPL); camera toàn cảnh hoặc lập thể và ảnh bầu trời qua chương trình khác; plug-in Unreal Engine (các tệp được ghi, còn plug-in mở chúng thì chưa phát hành) | Bộ kết xuất Nhanh và Dò đường đi của chúng tôi; một bộ kết xuất từ tiện ích bổ sung ([vẽ ảnh bằng chương trình khác](topic:render-other-program)); một tệp thư mục USD, glTF hoặc Unreal từ danh sách Engine để mang sang bất kỳ chương trình nào |
| Cây và đá rải trong {{ui:Render a picture…}} | Chúng hiển thị trong [khung nhìn trực tiếp](topic:live-view), các toàn cảnh, trình xem và video của nó |

## Vật liệu và màu sắc

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Các đầu vào khác ngoài màu nền, độ nhám, độ kim loại, độ mờ, pháp tuyến và phát xạ thay đổi trên bề mặt trong ảnh chất lượng cao (chúng dùng giá trị trung bình) | [Tạo vật liệu bằng nút](topic:shading): cứ nối chúng, khung nhìn sẽ hiển thị chúng thay đổi |
| Chuyển vị trên mặt đẩy/kéo | Chuyển đối tượng thành lưới để dùng chuyển vị |
| Chia sẻ vật liệu của riêng bạn lên Thư viện từ ứng dụng, và bản đồ đóng gói (ARM/ORM) hoặc EXR trong bộ kết cấu được nhập | Giữ chúng trong tệp; nhập các bản đồ riêng dưới dạng PNG hoặc JPEG |
| Vật liệu của tệp trong phiên Live TeamWork (chúng ở lại trên máy đã tạo ra chúng) | Lưu tệp rồi chia sẻ |
| Decal uốn quanh bề mặt cong, decal trong Hoàn tác, hoặc vẽ kết cấu của nhiều mặt cùng lúc qua một đường nối | Đặt decal nhỏ hơn trên từng phần; vẽ từng bên của đường nối riêng |
| Nướng lên mặt đẩy/kéo, nướng nhiều đối tượng vào một ảnh, lồng nướng bạn tạo hình bằng tay, hoặc ánh sáng nướng từ đèn | Chuyển thành lưới và khai triển nó; nướng từng đối tượng; tăng khoảng cách tìm kiếm; kết xuất ảnh để có ánh sáng đèn |
| Vẽ độ nhám, độ kim loại hoặc độ cao, vẽ bằng ảnh (con dấu) và vẽ kết cấu lớn hơn 512 × 512 | Vẽ màu nền ở đây; làm các bản đồ khác trong trình chỉnh sửa ảnh và nhập chúng dưới dạng bộ kết cấu |
| Kết cấu trong các tệp xuất Collada, STL, PLY, 3MF, IFC, DWG và DXF, và đồ thị nút của vật liệu riêng của tệp trong các mô hình đã xuất | Các định dạng đó nhận màu của từng vật liệu; glTF và OBJ mang kết cấu đã nhập; xuất riêng một vật liệu dưới dạng [MaterialX](topic:shading#materialx); [USD](topic:usd) giữ toàn bộ mô hình cho ModelCraft |
| Kết cấu trong tệp Collada | Chúng được đếm và bỏ qua khi nhập; kết cấu trong tệp `.skp` và `.glb` vẫn được nhập |

## Tệp

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Lưu tệp SketchUp, và văn bản cùng kích thước từ chúng | [Nhập](topic:import-sketchup-files) giữ mặt, màu và kết cấu; xuất Collada (`.dae`) để quay lại SketchUp |
| Kích thước và đường dẫn hướng trong các tệp xuất DWG và DXF | Thêm chúng trong chương trình CAD sau khi xuất |
| Điểm, bảng và đường dẫn nhiều từ DWG và DXF | Chúng được đếm và bỏ qua; văn bản vào dưới dạng nét đơn, không theo phông chữ của bản vẽ |
| Bề mặt, lưới, bảng và đường dẫn nhiều từ DWG và DXF; các mặt của khối 3D trên bề mặt tự do quét, loft hoặc khác | Chúng cũng được đếm và bỏ qua (khối 3D thì được nhập). Xuất các phần đó từ chương trình CAD dưới dạng OBJ hoặc Collada rồi nhập tệp đó |
| Kiểu, thuộc tính hoặc vật liệu IFC | Xuất IFC có [tầng](topic:formats#ifc-ifc) và các phần tử chung; thêm phần còn lại trong chương trình BIM |
| Gửi thẳng mô hình sang BimCraft | Xuất {{ui:IFC for BimCraft (.ifc)}} và mở trong BimCraft |
| Cạnh rời trong glTF và STL | Dùng OBJ hoặc Collada cho nét vẽ |
| Vật liệu glTF và FBX ngoài màu nền (kim loại, độ nhám, bản đồ pháp tuyến, kính, lớp phủ trong, ánh bóng…) | Chúng được đọc và liệt kê; ModelCraft giữ màu nền hoặc kết cấu. Dựng lại diện mạo trong [không gian Đổ bóng](topic:shading) |
| Xương, hoạt hình và đích biến dạng glTF | Mô hình có khung xương vào ở trạng thái nghỉ; tạo hoạt hình trong [dòng thời gian](topic:animation) |
| Màu và tên chi tiết của lắp ráp từ tệp STEP | Chi tiết vào dưới dạng lưới ở đúng kích thước thật; [tô màu](topic:paint) và đặt tên sau khi nhập |
| Vật thể SubD, văn bản, kích thước và đèn từ tệp `.3dm` | Xem [những gì bị bỏ qua](topic:import-3dm-files#what-is-left-out-and-said); chuyển SubD thành lưới trong chương trình đã tạo tệp |
| Kết cấu KTX2 và biến thể vật liệu trong glTF | Xuất với kết cấu PNG hoặc JPEG; biến thể mặc định được dùng |
| Ghi glTF instancing (EXT_mesh_gpu_instancing) | Cấu kiện được ghi một lần và đặt nhiều lần, mà mọi trình xem đều đọc được |
| Hoạt hình Alembic (mọi mẫu của bộ nhớ đệm), điểm và đường cong Alembic, ghi Alembic | Mẫu đầu tiên được nhập; tạo hoạt hình trong [dòng thời gian](topic:animation); ghi glTF, USD hoặc OBJ |
| Bản đồ gờ và pháp tuyến trong vật liệu OBJ | Chỉ ảnh màu (`map_Kd`) được nhập |
| Xương và hoạt hình FBX, xuất FBX, tệp FBX 6 | Mô hình có khung xương vào ở trạng thái nghỉ; xuất glTF; lưu tệp cũ dưới dạng FBX 2011 trở lên |
| Skin, morph, camera, đèn, biến đổi look-at và nghiêng Collada, tham chiếu bên ngoài | Bị bỏ khi nhập và được đếm trong thông báo |
| Tệp sao lưu | {{ui:Save as}} ({{key:Mod+Shift+S}}) lưu một bản sao khác. Sau sự cố, ModelCraft đề nghị khôi phục công việc chưa lưu của bạn ("Khôi phục công việc của bạn?") |
| Lưu và đồng bộ đám mây giữa các máy tính | Chưa có sẵn. Lưu tệp vào máy tính của bạn, và sao chép chúng đến nơi cần |

## In 3D

| Chưa có | Thay vào đó, hiện nay |
|---|---|
| Giá đỡ thật của trình cắt lớp (giao diện, bè, mẫu giá đỡ chính xác) | [Xem trước giá đỡ](topic:print-tools#supports-preview) cho biết đặt ở đâu và khoảng bao nhiêu; xem trước của trình cắt lớp sẽ hiển thị giá đỡ thật |
| Gỡ một chi tiết tự xuyên qua chính nó, hoặc các cạnh nơi ba mặt trở lên gặp nhau | [Sửa chữa](topic:print-tools#repair) liệt kê chúng và vị trí; dùng [Giao các mặt](topic:intersect) rồi xóa phần bên trong |
| Mẫu điền đầy và mạng bên trong phần rỗng | [Làm rỗng](topic:print-tools#hollow) để trống; trình cắt lớp của bạn thêm lớp điền cho chi tiết đặc |
| Chi tiết quá nhỏ đối với đầu phun của bạn (ngoại trừ thành) | [Độ dày thành](topic:print-tools#wall-thickness) tìm các thành mỏng; xem trước lớp của trình cắt lớp sẽ hiển thị phần còn lại |

## Hiệu năng

Hoàn tác giữ một bản sao của mô hình cho mỗi bước ([lưới](topic:meshes) chỉ giữ phần đã thay đổi), nên các lần nhập rất lớn của hình học đẩy/kéo làm mọi chỉnh sửa chậm hơn. Giữ các lần nhập gọn nhẹ, và lưu rồi mở lại để xóa lịch sử.

## Ứng dụng và nền tảng

- **Máy tính để bàn:** ModelCraft chạy trong trình duyệt trên Mac, Windows và Linux, và trong CadCraft Studio, ứng dụng máy tính để bàn có cả tám ứng dụng trong một lần cài đặt. Trên Android, CadCraft Studio được cài từ tệp APK tại getcadcraft.com/download. Hiện chưa có bản dành cho iPad hay iPhone.
- **Cảm ứng:** xem [Xoay quanh, di chuyển khung nhìn và thu phóng](topic:orbit-pan-zoom) để biết cử chỉ ngón tay. Lực bút đặt cọ trong [Điêu khắc](topic:sculpt); ở nơi khác, lực bút và độ nghiêng bút không được dùng.
- **Tờ:** ModelCraft [in mỗi khung nhìn một trang](topic:export-model#print-the-view-or-save-it-as-a-pdf); không có bố cục tờ với nhiều khung nhìn hoặc khung tên. Xuất sang DWG/DXF thân thiện với CadCraft để có bản vẽ theo tỷ lệ.
