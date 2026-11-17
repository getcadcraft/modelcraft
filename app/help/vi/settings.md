---
title: Cài đặt ModelCraft
summary: Chọn kiểu phím bạn quen, làm cho bàn di chuột xoay và di chuyển khung nhìn mà không cần nút camera, và bật hoặc tắt bắt điểm và va chạm khối đặc.
keywords: cài đặt, tùy chọn, điều khiển, kiểu phím, bản đồ phím, phím tắt, blender, bàn di chuột, cuộn, xoay quanh, chụm, bắt điểm, va chạm, chồng lấn, giao, xuyên qua
from: caf77d5b
---

Mở {{ui:Cài đặt}} bằng biểu tượng bánh răng trên thanh ứng dụng hoặc bằng {{key:Mod+,}}. Thẻ đầu tiên, {{ui:ModelCraft}}, chứa các cài đặt thuộc riêng ứng dụng này; {{ui:Chung}} chứa các cài đặt mà mọi ứng dụng CadCraft dùng chung (giao diện, thanh công cụ, bảng). Cài đặt của ModelCraft chỉ tồn tại trong ứng dụng: bạn thay đổi chúng tại đây, và trình duyệt này sẽ ghi nhớ chúng.

## Điều khiển: phím và nút chuột nào

Có hai kiểu phím. Chuyển đổi tại đây, bằng {{ui:Phím: Đẩy/kéo}} / {{ui:Phím: Mô hình hóa}} ở góc dưới bên phải khung nhìn, hoặc ở cuối menu {{ui:Thêm}} của thanh công cụ:

- **Kiểu đẩy/kéo** (mặc định khi bắt đầu; các chữ cái của những công cụ mô hình đẩy/kéo như SketchUp): một chữ cái chọn một công cụ — {{key:L}} đường thẳng, {{key:R}} hình chữ nhật, {{key:P}} đẩy/kéo, {{key:M}} di chuyển, {{key:Q}} xoay, {{key:S}} tỷ lệ, {{key:G}} tạo cấu kiện. Xem [Phím và thao tác chuột](topic:keyboard).
- **Kiểu Mô hình hóa** (các phím của công cụ mô hình lưới như Blender): chọn trước, rồi thao tác ngay lên vùng chọn. {{key:G}} di chuyển nó, {{key:R}} xoay và {{key:S}} co giãn nó từ vị trí con trỏ — không cần nhấp lần đầu. Trong khi nó đang di chuyển, {{key:X}}, {{key:Y}} hoặc {{key:Z}} khóa trục đỏ, xanh lục hoặc xanh dương; khoảng cách bạn gõ vào sẽ đặt khoảng cách (hoặc số độ, hoặc hệ số), và một cú nhấp hoặc {{key:Enter}} đặt nó xuống; {{key:Esc}} hoặc nhấp chuột phải sẽ đưa nó trở về chỗ cũ. Sau đó bạn quay lại {{ui:Chọn}}.

Kiểu phím cũng là một lựa chọn chung với kiểu menu: kiểu phím Mô hình hóa tương ứng với kiểu menu {{ui:Mô hình hóa}}, và chọn một bên là chọn luôn bên kia. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse). Danh sách đầy đủ của kiểu Mô hình hóa nằm trong [Phím và thao tác chuột](topic:keyboard#modeler-keys). Chú giải công cụ trên thanh công cụ và thẻ bắt đầu sẽ theo kiểu bạn chọn.

## Cuộn: con lăn chuột hoặc bàn di chuột

- **Tự nhận biết** (mặc định khi bắt đầu): ModelCraft theo dõi thao tác cuộn. Cuộn ngang hoặc cuộn mịn, như bàn di chuột gửi đi, sẽ xoay quanh; các nấc con lăn nguyên sẽ thu phóng.
- **Con lăn chuột**: cuộn luôn thu phóng về phía con trỏ.
- **Bàn di chuột**: vuốt bằng hai ngón tay để xoay quanh, giữ {{key:Shift}} và vuốt để di chuyển khung nhìn, chụm để thu phóng. Bạn không bao giờ cần các nút {{ui:Xoay quanh}}, {{ui:Di chuyển khung nhìn}} hay {{ui:Thu phóng}}.

Chụm để thu phóng có trong mọi lựa chọn. Nếu "Tự nhận biết" đoán sai cho chuột hoặc bàn di chuột của bạn, hãy chọn loại bạn đang dùng.

:::tip
Trong kiểu Mô hình hóa, bạn cũng có thể xoay quanh bằng cách giữ {{key:Alt}} và kéo, và di chuyển khung nhìn bằng {{key:Alt+Shift}} và kéo — tiện trên máy tính xách tay không có nút giữa.
:::

## Bắt điểm

**Bắt vào điểm, cạnh và trục** (bật khi bắt đầu) kéo con trỏ tới các điểm cuối, trung điểm, cạnh, đường dẫn hướng và các trục đỏ, xanh lục, xanh dương — xem [Suy luận](topic:inference). Tắt nó khi bạn muốn đặt thứ gì đó tự do gần hình khác mà không bị nhảy. Mặt, mặt đất và các khóa trục vẫn hoạt động khi tắt bắt điểm.

Nút {{ui:Bắt điểm}} ở góc dưới bên phải khung nhìn làm điều tương tự cho công việc của phiên này (cũng được lưu lại). Trong kiểu Mô hình hóa, {{key:Shift+Tab}} chuyển đổi nó.

## Khối đặc dừng khi chạm

**Dừng khối đặc khi chạm** (bật khi bắt đầu) ngăn một bức tường bị kéo xuyên qua bức tường khác. Với {{ui:Di chuyển}} (và {{key:G}}, và dán rồi di chuyển bằng {{key:Mod+D}}), vùng chọn trượt tới khối đặc khác và dừng khi chạm vào nó; với {{ui:Đẩy/kéo}}, một mặt dừng lại khi gặp khối đặc khác. Đặt lên trên một thứ và trượt dọc theo nó đều được — chỉ việc đi vào bên trong mới bị chặn. Những thứ đã chồng lên nhau khi bạn bắt đầu vẫn có thể được kéo tách ra.

Để đẩy một thứ xuyên qua một cách có chủ ý, nhấp {{ui:Va chạm}} ở góc dưới bên phải (hoặc tắt cài đặt), thực hiện di chuyển, rồi nhấp lại.

:::note
Va chạm được kiểm tra khi di chuyển và khi đẩy/kéo. {{ui:Xoay}} và {{ui:Tỷ lệ}} chưa kiểm tra chúng, và hình học rời mà chạm nhau vẫn dính liền, như trước đây: hãy giữ các thứ riêng biệt trong [nhóm](topic:groups-components) để chúng luôn tách rời.
:::

## Bàn in 3D

Kích thước bàn in của máy in: {{ui:Chưa đặt}} (mặc định khi bắt đầu), 180 × 180 × 180, 220 × 220 × 250, 256 × 256 × 256 hoặc 300 × 300 × 400 mm. Chọn kích thước gần nhất với thể tích in của máy in. [Kiểm tra in 3D](topic:print-3d) sau đó sẽ báo khi một mô hình lớn hơn bàn in; với {{ui:Chưa đặt}}, kích thước không được kiểm tra.

## Xoay quanh và di chuyển khung nhìn

**Xoay quanh phần dưới con trỏ** (bật khi bắt đầu): xoay quanh phần mô hình nằm dưới con trỏ, và di chuyển khung nhìn giữ điểm đó dưới con trỏ; trên khoảng trống, cả hai đều dùng tâm khung nhìn. Tắt để luôn xoay quanh tâm khung nhìn. **Tốc độ xoay quanh** và **Tốc độ di chuyển khung nhìn** nằm trong khoảng từ 0.25× đến 3× (1× là mặc định) và áp dụng cho chuột, bàn di chuột, cảm ứng và phím mũi tên. Xem [Xoay quanh, di chuyển khung nhìn và thu phóng](topic:orbit-pan-zoom).

## Chỉ báo góc

Thứ hiển thị ở góc khung nhìn 3D: **Khối xem** (mặc định; góc trên bên phải — nhấp vào một mặt, cạnh hoặc góc để nhìn từ đó, kéo để xoay quanh, kéo vòng la bàn để xoay mô hình), **Biểu tượng trục** (một ký hiệu X, Y, Z nhỏ ở góc dưới bên trái, xoay theo khung nhìn: X đỏ, Y xanh lục, Z xanh dương) hoặc **Không**. Xem [Khối xem](topic:view-cube).
