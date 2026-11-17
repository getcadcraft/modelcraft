---
title: Kiểu và bóng đổ mặt trời
summary: Hiển thị mô hình dạng tô bóng, đường ẩn, khung dây hoặc xuyên thấu, và khảo sát bóng mà mô hình đổ xuống ở bất kỳ ngày, giờ và địa điểm nào.
keywords: chế độ trình bày, khung nhìn sạch, ẩn đường dẫn hướng, ẩn trục, kiểu, tô bóng, đường ẩn, khung dây, tia x, cạnh, bóng đổ, mặt trời, khảo sát mặt trời, năng lượng mặt trời, ngày, giờ, vĩ độ, kinh độ, múi giờ, hướng bắc
from: 09c95329
---

Bảng {{ui:Kiểu}} ở bên phải thay đổi cách mô hình được vẽ. Không có gì trong đó thay đổi chính mô hình, và nó không thuộc hoàn tác. Mỗi [cảnh](topic:scenes) ghi nhớ kiểu riêng của nó, còn tệp ghi nhớ kiểu bạn đã dùng khi lưu.

## Mặt

Chọn một kiểu trong danh sách {{ui:Mặt}}:

| Kiểu | Trông như |
|---|---|
| {{ui:Tô bóng}} | Mặt đặc, được chiếu sáng mềm. Mặt nhìn từ phía sau có màu xám xanh. Màu nhập vào được hiển thị. |
| {{ui:Ẩn đường khuất}} | Mặt có màu nền với cạnh màu mực: một bản vẽ đường sạch, đã loại bỏ các đường khuất. Trắng trên {{ui:Giấy}}, tối trên {{ui:Mô hình}}. |
| {{ui:Khung dây}} | Chỉ có cạnh. Mặt không được vẽ, nhưng vẫn được tính khi bạn nhấp và bắt điểm: bạn không thể chọn xuyên qua chúng. |
| {{ui:Tia X}} | Mặt xuyên thấu, để thấy những gì ở phía sau hoặc bên trong. Như ở khung dây, nhấp và bắt điểm vẫn dừng ở mặt gần nhất. |

{{ui:Hiện cạnh}} bật hoặc tắt cạnh trong mọi kiểu trừ {{ui:Khung dây}}. Khi tắt, {{ui:Ẩn đường khuất}} hầu như không hiển thị gì, vì các mặt của nó khớp với màu nền. Các cạnh mềm, chẳng hạn mép của một vòng tròn đã được đẩy/kéo, không bao giờ được vẽ.

## Bật bóng đổ mặt trời

1. Đánh dấu {{ui:Bóng đổ mặt trời}}. Các thiết lập mặt trời bên dưới trở nên khả dụng, và mô hình đổ bóng lên chính nó và lên mặt đất.
2. Đặt địa điểm:
   - {{ui:Vĩ độ}}: hướng bắc là dương, hướng nam là âm (New York khoảng 40.7, Sydney khoảng -33.9).
   - {{ui:Kinh độ}}: hướng đông là dương, hướng tây là âm (New York khoảng -74.0).
   - {{ui:Độ lệch UTC}}: độ lệch của địa điểm so với UTC tính bằng giờ, chẳng hạn `-5` cho New York vào mùa đông. ModelCraft không áp dụng giờ tiết kiệm ánh sáng ban ngày; dùng `-4` cho New York vào mùa hè.
3. Đặt {{ui:Ngày}} (tháng và ngày) và kéo thanh trượt {{ui:Giờ}}. Giờ di chuyển theo bước 15 phút và hiển thị bên cạnh thanh trượt, chẳng hạn "3:00 pm".

Một dòng bên dưới các thiết lập cho biết mặt trời ở đâu, chẳng hạn "Mặt trời cao 52°, lệch 250° so với hướng bắc. Hướng bắc là trục xanh lá." Vào ban đêm, nó hiển thị "Mặt trời đang lặn vào thời điểm này."

Một mô hình mới bắt đầu với mặt trời ở ngày 21 tháng 6 lúc 3:00 pm, vĩ độ 40, kinh độ -105, độ lệch UTC -7.

## Hướng mô hình về phía bắc

Hướng bắc của ModelCraft luôn là **trục xanh lá**. Để khảo sát một địa điểm thực, xoay mô hình sao cho phía bắc của nó hướng dọc theo màu xanh lá: chọn tất cả ({{key:Mod+A}}), nhấn {{key:Q}}, nhấp một tâm trên mặt đất, rồi xoay theo góc của địa điểm so với hướng bắc (xem [Xoay và tỷ lệ](topic:rotate-scale)).

## Khảo sát bóng mặt trời

1. Đặt địa điểm và ngày.
2. Thêm một cảnh ({{ui:Thêm cảnh}} trong {{ui:Cảnh}}).
3. Di chuyển thanh trượt giờ, rồi thêm một cảnh khác. Lặp lại cho mỗi giờ bạn muốn.
4. Nhấp {{ui:Phát}} để duyệt qua chúng. Xem [Lưu khung nhìn thành cảnh](topic:scenes).

## Lưu ý

- Bóng có thể trông răng cưa trên một mô hình rất lớn, vì một bản đồ bóng bao phủ toàn bộ mô hình.
- Bóng không được vẽ trong {{ui:Khung dây}}.
- Vị trí mặt trời theo thuật toán NOAA và chính xác đến một phần nhỏ của độ, đủ cho các khảo sát khối tích. Khúc xạ khí quyển bị bỏ qua, nên góc mặt trời rất thấp gần lúc mọc và lặn có thể lệch đi một chút.

## Chế độ trình bày

{{ui:Khung nhìn}} › {{ui:Chế độ trình bày}} (hoặc {{key:Shift+P}}) chỉ hiển thị mô hình: các trục, đường dẫn hướng và điểm dẫn hướng, đường viền của mặt phẳng cắt (phần cắt vẫn giữ), dấu của đèn, hộp của nhóm đang mở, dấu bắt điểm và gợi ý, và vùng chọn được tô sáng đều biến mất. Dùng nó để xem mô hình rõ ràng, hoặc trước khi chụp ảnh màn hình. Các công cụ vẫn hoạt động và vẫn bắt điểm; bạn chỉ không thấy các dấu. Nhấn {{key:Shift+P}} lần nữa để hiện lại chúng. Kích thước vẫn được giữ, vì chúng là một phần của bản vẽ. Khi bạn đang chỉnh sửa bên trong một nhóm, phần còn lại của mô hình không còn mờ đi: nó hiển thị như vốn có, kể cả kết cấu.
