---
title: Xuất mô hình cho các chương trình khác
summary: Chọn đúng kiểu xuất cho kết xuất, web, in 3D, BIM và BimCraft, và kiểm tra những gì mỗi kiểu giữ lại.
keywords: in, 3mf, pdf, giấy, ảnh, hình ảnh, ảnh chụp màn hình, kết xuất, lưu khung nhìn, xuất, chia sẻ, gltf, glb, collada, dae, obj, stl, in 3D, ifc, bim, bimcraft, gửi, phần mềm khác
from: 9e13e80d
---

Xuất tạo một bản sao của mô hình ở một định dạng khác. Hãy giữ tệp `.modelcraft` của bạn: đó là tệp duy nhất giữ đủ mọi thứ, và là tệp duy nhất ModelCraft mở trực tiếp.

## Xuất

1. Lưu trước ({{key:Mod+S}}), để tệp làm việc của bạn được an toàn.
2. Nhấp {{ui:Xuất}} trong nhóm {{ui:Tệp}}.
3. Chọn định dạng. Trình duyệt tải tệp về, được đặt tên giống mô hình.

Toàn bộ mô hình được xuất. Để xuất một phần, hãy lưu, xóa phần còn lại, xuất, rồi hoàn tác hoặc mở lại.

## Chọn định dạng

| Bạn muốn | Chọn | Ghi chú |
|---|---|---|
| Mở trong một trình dựng hình 3D khác | {{ui:Collada (.dae)}} | Giữ nhóm, nhóm lồng nhau, cấu kiện (dùng chung, không sao chép), tên và màu. Trục Z hướng lên, đơn vị mét. |
| Kết xuất, hoặc dùng trong một chương trình trực quan hóa | {{ui:OBJ (.obj)}} hoặc {{ui:glTF nhị phân (.glb)}} | OBJ được đọc rộng rãi nhất; nó ghi vị trí của mỗi nhóm thành một đối tượng riêng, nhưng không có màu và không có cấu kiện dùng chung. glTF giữ cấu kiện và màu. |
| Đưa lên web, vào công cụ game hoặc AR | {{ui:glTF nhị phân (.glb)}} | Một tệp duy nhất chứa mọi thứ. |
| In 3D | {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}} | Kiểm tra mô hình đã khép kín và các mặt quay đúng hướng, rồi ghi STL hoặc 3MF theo milimét. Xem [Chuẩn bị mô hình để in 3D](topic:print-3d). {{ui:STL để in (.stl, milimét)}} ghi toàn bộ mô hình mà không kiểm tra. |
| Mở trong BimCraft hoặc một chương trình BIM khác | {{ui:IFC cho BimCraft (.ifc)}} | Mỗi nhóm hoặc cấu kiện ở cấp cao nhất trở thành một cấu kiện công trình. |

Thanh trạng thái xác nhận mỗi lần xuất, chẳng hạn "Đã xuất House.stl (milimét)." hoặc "Đã xuất House.dae (Collada 1.4.1, trục Z lên, mét; cấu kiện vẫn dùng chung)."

## Trước khi xuất

- **Nhóm các đối tượng.** Collada, glTF và IFC giữ nhóm và cấu kiện thành các đối tượng riêng. Hình học rời được xuất thành một khối; trong IFC nó trở thành một cấu kiện tên "Hình học rời".
- **Đặt tên cho chúng.** Tên nhóm và cấu kiện được đưa vào Collada và IFC, nên một bức tường tên "North wall" sẽ được giữ nguyên thành "North wall".
- **Kiểm tra hướng mặt.** Các mặt hiển thị màu xám xanh ở phía ngoài sẽ hướng vào trong khi xuất. Sửa chúng bằng {{ui:Đảo ngược mặt}} (xem [Xóa và dọn dẹp](topic:erase#a-face-facing-the-wrong-way)).
- **Để in,** làm cho các chi tiết thành khối đặc khép kín: chọn từng nhóm và kiểm tra {{ui:Thông tin đối tượng}} có ghi "Solid: Yes" hay không. Sau đó co giãn mô hình về kích thước in, hoặc co giãn trong phần mềm máy in.

## Gửi mô hình sang BimCraft

1. Biến mỗi phần của công trình thành một nhóm hoặc cấu kiện và đặt tên cho nó.
2. Chọn {{ui:Xuất}}, rồi {{ui:IFC cho BimCraft (.ifc)}}.
3. Mở tệp `.ifc` đã tải về trong BimCraft.

Với khối tích sơ bộ, dùng {{ui:Xuất}} › {{ui:Khối tích sang BimCraft…}} thay thế: mỗi nhóm được gửi như một phương án khối tích với số tầng, diện tích sàn và thể tích. Xem [Gửi khối tích sang BimCraft](topic:massing-to-bimcraft).

Xuất IFC thông thường không có liên kết trực tiếp giữa hai ứng dụng. IFC có một tầng, và mọi cấu kiện là một đối tượng công trình chung không có kiểu hay thuộc tính: nó chỉ mang hình dạng và tên. Các nhóm khép kín trở thành khối đặc; các nhóm hở trở thành bề mặt.

## Đường thẳng không có mặt

Các cạnh không thuộc mặt nào (đường dẫn kiểu đường dẫn hướng, hoặc mặt bằng khu đất đã nhập) được đưa vào OBJ và Collada dưới dạng đường thẳng. glTF và STL không có chỗ cho chúng và bỏ qua chúng. Đường dẫn và cảnh không được xuất sang bất kỳ định dạng nào.

## Lưu khung nhìn thành ảnh

{{ui:Xuất}} › {{ui:Ảnh khung nhìn (.png)}} lưu đúng những gì khung nhìn 3D hiển thị, ở kích thước trên màn hình. {{ui:Ảnh gấp đôi kích cỡ (.png)}} lưu ảnh rộng gấp đôi và cao gấp đôi (dùng để in hoặc cho một slide sắc nét), với kích thước và các dấu được vẽ lại ở kích thước đó thay vì bị kéo giãn.

Với một hình ảnh giống ánh sáng ban ngày (bầu trời, mặt trời, bóng mềm, kính), thay vào đó dùng {{ui:Xuất}} › {{ui:Kết xuất ảnh…}}: xem [Kết xuất ảnh](topic:render).

Để có một hình ảnh sạch, hãy bật [chế độ trình bày](topic:styles-shadows#presentation-view) ({{key:Shift+P}}) trước: các trục, đường dẫn, đường viền mặt cắt và phần đang chọn sẽ bị bỏ qua. Thiết lập camera, kiểu và bóng theo ý bạn, hoặc chuyển đến một [cảnh](topic:scenes); để lưu một phim chuyển động từ các cảnh, dùng {{ui:Xuất hoạt ảnh}} trong bảng {{ui:Cảnh}}.

## In khung nhìn, hoặc lưu thành PDF

- {{ui:Xuất}} › {{ui:PDF khung nhìn (.pdf)}} lưu một tệp PDF một trang: khung nhìn ở gấp đôi kích thước trên màn hình, kèm kích thước của nó, trên trang A4 (Letter khi mô hình theo feet và inch), nằm ngang, với một dòng bên dưới ghi tên tệp, ngày và đơn vị.
- {{ui:Xuất}} › {{ui:In khung nhìn…}} đưa cùng trang đó vào hộp thoại in của trình duyệt. Chọn máy in, hoặc "Lưu thành PDF".

Trang hiển thị khung nhìn đúng như nó đang là: một khung nhìn phối cảnh không có tỷ lệ. Để có bản vẽ theo tỷ lệ, tắt {{ui:Phối cảnh}} và nhìn từ {{ui:Trên}} hoặc {{ui:Trước}}, rồi thêm [kích thước](topic:dimensions) cho các kích thước quan trọng. [Chế độ trình bày](topic:styles-shadows#presentation-view) bỏ qua các trục, đường dẫn và phần đang chọn; kích thước vẫn được giữ lại.
