---
title: Lưu khung nhìn thành cảnh
summary: Lưu một camera và kiểu hiển thị thành cảnh, cập nhật và đổi tên, rồi chuyển hoặc phát qua các cảnh để trình bày thiết kế.
keywords: cảnh, khung nhìn, khung nhìn đã lưu, camera, thuyết trình, hoạt ảnh, phát, trình chiếu, page up, page down, thẻ, hướng dẫn từng bước
from: 38680d6e
---

Một **cảnh** ghi nhớ vị trí camera, kiểu hiển thị và những gì đang bị ẩn: bạn nhìn từ đâu, phối cảnh hay song song, kiểu mặt, cạnh, cài đặt mặt trời, các nhóm bị ẩn, các thẻ đã tắt và lát cắt. Cảnh được lưu trong tệp `.modelcraft`.

## Thêm cảnh

1. Thiết lập khung nhìn: xoay, thu phóng, chọn một kiểu, đặt mặt trời.
2. Trong bảng {{ui:Cảnh}} bên phải, nhấn {{ui:Thêm cảnh}}.

   Cảnh xuất hiện trong danh sách, có tên "Cảnh 1", "Cảnh 2" và cứ thế tiếp tục, và như một thẻ phía trên khung nhìn 3D. Thanh trạng thái ghi "Đã lưu Cảnh 1: camera, kiểu và những gì đang ẩn hiện tại."

## Chuyển đến một cảnh

- Nhấp vào thẻ của nó phía trên khung nhìn 3D, hoặc tên của nó trong danh sách {{ui:Cảnh}}.
- Hoặc nhấn {{key:PageDown}} cho cảnh kế tiếp và {{key:PageUp}} cho cảnh trước. {{ui:Tiếp}} và {{ui:Trước}} dưới danh sách làm điều tương tự.

Camera trượt tới cảnh trong hơn nửa giây. Nếu máy tính của bạn được đặt giảm chuyển động, nó sẽ nhảy thẳng tới đó.

## Đổi, đổi tên hoặc xóa một cảnh

Mỗi cảnh trong danh sách có ba nút nhỏ sau tên:

- **Cập nhật** (mũi tên tròn): lưu camera, kiểu và những gì đang ẩn hiện tại vào cảnh đó. "Đã cập nhật Cảnh 2."
- **Đổi tên** (bút chì): mở hộp thoại "Đổi tên cảnh". Gõ tên mới và nhấp {{ui:Lưu}}.
- **Xóa** (thùng rác): xóa cảnh. "Đã xóa Cảnh 2. Ctrl+Z khôi phục lại."

Thêm, cập nhật, đổi tên và xóa cảnh là các bước hoàn tác, giống như các thay đổi mô hình.

## Khóa camera của một cảnh

Khi bạn kết xuất cùng một khung nhìn nhiều lần trong lúc thiết kế thay đổi, hãy khóa camera của cảnh đó để khung nhìn không bị xê dịch do vô tình.

1. Trong danh sách {{ui:Cảnh}}, nhấp nút **khóa** (ổ khóa mở) sau tên cảnh. Nó đóng lại, và thẻ của cảnh phía trên khung nhìn 3D hiện một ổ khóa nhỏ. Thanh trạng thái ghi "Cảnh 2: camera đã khóa."
2. Chuyển đến cảnh bất cứ khi nào bạn muốn kết xuất: camera quay về đúng khung nhìn đã lưu, nên các ảnh được tạo từ nó khớp với các ảnh trước.

Khi camera bị khóa, **Cập nhật** vẫn lưu kiểu và những gì đang ẩn vào cảnh, nhưng camera giữ nguyên chỗ cũ, ngay cả khi bạn đã xoay đi nơi khác. Nhấp lại ổ khóa để mở khóa; khi đó Cập nhật lưu lại khung nhìn hiện tại. Khóa và mở khóa là các bước hoàn tác, và trạng thái khóa được lưu trong tệp `.modelcraft`.

## Trình bày

1. Thêm hai cảnh trở lên.
2. Nhấp {{ui:Phát}} dưới danh sách. ModelCraft chuyển sang cảnh kế tiếp sau mỗi vài giây và quay lại cảnh đầu tiên sau cảnh cuối.
3. Nhấp {{ui:Dừng}} (cùng nút đó) hoặc nhấn {{key:Esc}} để dừng.

Để nghiên cứu mặt trời, thêm một cảnh cho mỗi giờ chỉ đổi {{ui:Giờ}}, rồi phát chúng. Xem [Kiểu và bóng mặt trời](topic:styles-shadows#a-sun-study).

Để trình bày mà không có các thanh, nhấn {{key:Ctrl+Shift+F}} hai lần: toàn màn hình, rồi toàn màn hình với các thanh bị ẩn. Các thẻ cảnh vẫn nằm trên khung nhìn.

## Cảnh hiển thị những gì

Một cảnh ghi nhớ những gì đã bị ẩn khi bạn lưu nó: các nhóm và thành phần bạn đã [ẩn](topic:hide-isolate), các [thẻ](topic:tags) bạn đã tắt, và các [mặt phẳng cắt](topic:sections) nào đang cắt. Chuyển đến cảnh sẽ ẩn và hiện chúng lại. Vì vậy một cảnh có thể hiện cả ngôi nhà, cảnh kế tiếp là ngôi nhà với thẻ mái đã tắt, và cảnh sau nữa là một mặt cắt đi qua nó.

Các mặt và cạnh rời đang bị ẩn không thuộc về cảnh. Chuyển đến một cảnh không tạo bước hoàn tác. Các cảnh được lưu bởi một bản dựng ModelCraft cũ sẽ giữ nguyên trạng thái ẩn; nhấp Cập nhật để lưu nó vào các cảnh đó.

## Xuất hoạt ảnh

{{ui:Xuất hoạt ảnh}}, dưới danh sách, phát các cảnh từ đầu đến cuối, di chuyển camera mượt giữa chúng, và lưu thước phim thành một video **WebM** (hai giây di chuyển và một khoảng dừng ngắn cho mỗi cảnh). Nó ghi khung nhìn như bạn thấy, ở kích thước trên màn hình, trong [chế độ trình bày](topic:styles-shadows#presentation-view) (không có trục, hướng dẫn hay vùng chọn). Nhấn {{key:Esc}} hoặc nhấp nút lần nữa để dừng mà không lưu. WebM phát được trên trình duyệt và VLC, và các trình chỉnh sửa video có thể chuyển đổi nó.

Để có một hướng dẫn từng bước đã kết xuất (bầu trời, mặt trời, bóng, vật liệu) ở kích thước bạn chọn, dùng {{ui:Kết xuất video…}} thay thế: khi không có khóa hoạt ảnh, nó lấy các cảnh theo thứ tự làm đường đi của camera. Xem [Tạo hoạt ảnh cho camera và vật thể](topic:animation).

## Điều cần biết

- Đổi kiểu hoặc di chuyển camera sau khi chuyển đến một cảnh sẽ không đổi cảnh đó cho tới khi bạn nhấp Cập nhật.
- Cảnh không được xuất sang Collada, OBJ, glTF, STL hoặc IFC.
