---
title: Bộ điều chỉnh trên lưới, nhóm hoặc cấu kiện
summary: Đổi tỷ lệ, đối xứng, tạo mảng, làm mượt, vát mép, cắt và uốn cong một lưới mà không thay đổi nó; lặp lại hoặc đổi tỷ lệ một nhóm hoặc cấu kiện với cùng một chồng; làm cho nó vĩnh viễn khi bạn sẵn sàng.
keywords: bộ điều chỉnh, chồng, nhóm, cấu kiện, tỷ lệ, bake, chỉnh sửa nguồn, không phá hủy, đối xứng, mảng, mảng xuyên tâm, bề mặt chia nhỏ, làm mượt, vát mép, làm đặc, boolean, cắt, dịch chuyển, nhiễu, hàn, giảm mặt, đơn giản hóa, lồng lưới, biến dạng theo đường cong, uốn cong, bọc co, áp dụng
from: dd5ec1cb
---

Một **bộ điều chỉnh** thay đổi những gì một lưới hiển thị mà không thay đổi chính lưới. Phản chiếu một nửa của một chi tiết và chỉ mô hình hóa nửa đó; bo tròn một hộp bằng bề mặt chia nhỏ và tiếp tục chỉnh sửa hộp. Các bộ điều chỉnh nằm trong một **chồng** và hoạt động theo thứ tự, từ trên xuống dưới. Những gì bạn thấy, xuất, in và kết xuất là lưới với mọi bộ điều chỉnh đang bật.

## Thêm bộ điều chỉnh

1. Chọn một lưới. Trong không gian làm việc **Mô hình**, mục **Bộ điều chỉnh** của nó nằm trong {{ui:Entity info}}; trong không gian làm việc Lưới, nó nằm trong bảng bên phải.
2. Chọn một bộ từ {{ui:Add a modifier…}}. Nó được đặt xuống cuối chồng.
3. Thay đổi các thiết lập của nó bên dưới tên. Các độ dài nhận cùng giá trị như ô giá trị, nên `600mm`, `2'6"` và `(6m)/4` đều dùng được.

Mỗi thay đổi là một bước hoàn tác: {{key:Mod+Z}} thu hồi nó.

## Các nút trên mỗi bộ điều chỉnh

- Ô đánh dấu bật hoặc tắt nó.
- Nút màn hình hiển thị hoặc ẩn nó trong khung nhìn (nó vẫn nằm trong chồng).
- Nút máy ảnh hiển thị hoặc ẩn nó trong ảnh kết xuất và video, nên một bộ điều chỉnh có thể chỉ dành cho kết xuất (hoặc chỉ cho khung nhìn).
- Các mũi tên di chuyển nó lên hoặc xuống chồng. Thứ tự quan trọng: đối xứng rồi chia nhỏ cho một đường nối mượt; chia nhỏ rồi đối xứng thì không.
- {{ui:Apply}} biến hình dạng thành một phần của lưới: các bộ điều chỉnh ở trên nó và chính nó được áp vào lưới và rời khỏi chồng. Đây là một bước hoàn tác.
- Dấu nhân xóa nó.

## Các bộ điều chỉnh

| Bộ điều chỉnh | Tác dụng |
| --- | --- |
| Tỷ lệ | Đổi tỷ lệ quanh gốc của đối tượng, với một hệ số cho đỏ, xanh lá và xanh dương. Cũng áp dụng cho nhóm hoặc cấu kiện. |
| Đối xứng | Thêm một bản sao đối xứng qua đỏ, xanh lá hoặc xanh dương, đi qua gốc của lưới, và nối hai nửa tại chỗ gặp nhau. |
| Mảng | Sao chép theo một hàng (bước bằng kích thước riêng của nó nhân với các số bạn đưa, cộng thêm một bước cố định), quanh một trục, hoặc dọc theo một đường cong trong mô hình. Nhóm hoặc cấu kiện cũng theo hàng. |
| Bề mặt chia nhỏ | Làm mượt lưới bằng chia nhỏ Catmull-Clark. Các cạnh sắc vẫn có nếp gấp. Kết xuất có thể dùng nhiều cấp hơn khung nhìn. |
| Vát mép | Bo tròn mọi cạnh sắc hơn góc bạn đưa ra. |
| Làm đặc | Cho một bề mặt một độ dày và đóng vành. |
| Boolean | Cắt đi, gộp hoặc giữ phần chồng lên nhau với một đối tượng khác trong mô hình. Cả hai đều cần là khối đặc kín. |
| Dịch chuyển | Đẩy bề mặt vào trong hoặc ra ngoài bằng nhiễu mượt. Cùng hạt giống cho cùng các gồ ghề mỗi lần. |
| Hàn | Nối các đỉnh gần hơn một khoảng cách. |
| Giảm mặt | Giữ một tỷ lệ các tam giác, bỏ đi những tam giác làm thay đổi hình dạng ít nhất. |
| Làm mượt | Làm dịu các đỉnh về phía các đỉnh lân cận. |
| Lồng lưới | Uốn lưới bằng một lồng: di chuyển các điểm của lồng và lưới sẽ đi theo. |
| Biến dạng theo đường cong | Uốn lưới dọc theo một đường cong trong mô hình, theo đỏ, xanh lá hoặc xanh dương. |
| Bọc co | Di chuyển mọi đỉnh lên điểm gần nhất của một đối tượng khác. |

## Trên một nhóm hoặc cấu kiện

Một nhóm hoặc cấu kiện cũng có thể giữ một công thức, nên chụp đèn có thể là một **Tỷ lệ** và một **Mảng** của một chụp, và đổi một con số sẽ đổi cả đèn.

1. Chọn một nhóm hoặc cấu kiện. Trong {{ui:Entity info}}, mục **Bộ điều chỉnh** của nó liệt kê chồng (ban đầu trống).
2. Chọn {{ui:Scale}} hoặc {{ui:Array}} từ {{ui:Add a modifier…}}. Nhóm trở thành một cấu kiện là **bản gốc, được đặt bởi chồng**. Bản gốc được giữ lại: chỉnh sửa nó và mọi bản sao sẽ theo ngay lập tức.
3. Tỷ lệ nhận một hệ số cho đỏ, xanh lá và xanh dương (`1, 1, 2` nhân đôi chiều cao). Mảng nhận số bản sao, một bước như một phần của kích thước kết quả cho đến lúc này, và một bước thêm bằng độ dài.

Chồng chạy từ trên xuống dưới trên các trục riêng của bản gốc quanh gốc của nó, nên thứ tự quan trọng: một Mảng ba bản sao cách nhau 3 m, rồi Tỷ lệ 2 theo đỏ, sẽ đặt các bản sao cách nhau 6 m; Tỷ lệ trước rồi đến Mảng sẽ giữ chúng cách nhau 3 m. Ô đánh dấu, mũi tên và dấu nhân hoạt động như trên lưới; nút khung nhìn và nút máy ảnh trên một bộ điều chỉnh, và {{ui:Apply}}, thì không, vì một chồng trên nhóm là một thứ duy nhất.

- {{ui:Edit source}} mở bản gốc tại chỗ. Thay đổi hiển thị trong mọi bản sao; đóng nó sẽ quay về nơi bạn đã ở.
- {{ui:Bake modifiers}} làm kết quả thành các cạnh và mặt thường, và bỏ chồng đi, trong một bước hoàn tác. Các bản sao chồng lên nhau vẫn là hình học riêng: Bake không phải là phép hợp.
- Các bản sao của cấu kiện dùng chung công thức; {{ui:Make unique}} tách nó ra (bản gốc vẫn dùng chung).
- Chồng được lưu trong tệp, được mang theo bởi sao chép và dán cũng như bởi hoàn tác, và Dọn mục không dùng giữ lại bản gốc. Một chương trình không biết bộ điều chỉnh vẫn hiển thị các bản sao.
- Cho đến khi Bake, kết quả không thể vào, phân rã, đổi kích thước hoặc kéo giãn: nó sẽ được dựng lại ở lần thay đổi tiếp theo. Mỗi thao tác đều thông báo điều này.
- Giới hạn là 32 bộ điều chỉnh và 1,000 bản sao. Một cấu kiện được làm để kéo giãn (Stretch) và một chồng hiện chưa thể dùng chung một định nghĩa.

## Bề mặt chia nhỏ

Chia nhỏ làm mượt một lưới bằng Catmull-Clark: mỗi mặt trở thành các mặt bốn cạnh, và mỗi cấp tạo gấp bốn lần số mặt. Một hộp với hai hoặc ba cấp đã trông như một hình bo tròn, và bạn tiếp tục chỉnh sửa hộp.

- **Cấp trong khung nhìn** đặt độ mượt của nó.
- **Cấp trong ảnh kết xuất** đặt độ mượt của ảnh và video kết xuất; kết xuất có thể dùng nhiều cấp hơn khung nhìn.
- **Kết xuất trên bề mặt mượt thật** đặt các điểm của lưới được kết xuất lên mặt giới hạn mà các cấp hướng tới, nên ngay cả hai cấp cũng kết xuất mượt như nhiều cấp.
- **Nếp gấp** giữ cạnh sắc: trong không gian làm việc Lưới, chọn các cạnh và dùng {{ui:Crease}} (1 giữ sắc, 0.5 bo nhẹ, 0 là mượt). Xem [Chỉnh sửa lưới](topic:mesh-edit).
- **Hạ cấp khung nhìn cho lưới lớn:** khi các cấp bạn yêu cầu sẽ cho nhiều mặt hơn mức máy tính này xử lý tốt trong khung nhìn, khung nhìn hiển thị một cấp thấp hơn và nói rõ điều đó. {{ui:Apply}} luôn dùng mọi cấp. Số mặt được đặt theo lớp máy của bạn trong {{ui:Settings}} › Kết xuất › Máy của bạn.
- Các viền hở giữ góc của chúng và nằm trên đường thẳng của cạnh.

## Uốn bằng lồng lưới

1. Thêm một bộ {{ui:Lattice}} và nhấn {{ui:Add a lattice cage round the mesh}}. Một lồng 3 × 3 × 3 điểm xuất hiện quanh lưới, được vẽ dưới dạng dây.
2. Mở lồng trong không gian làm việc Lưới (nhấp đúp vào nó) và di chuyển các điểm của nó. Lưới đi theo một cách mượt mà.

:::tip
Một lồng là một lưới như mọi lưới khác: ẩn nó bằng thẻ của nó khi bạn xong.
:::

## Lưới lớn

Chồng nhỏ được tính ngay. Chồng lớn được tính ở nền trên mọi nhân của máy tính: khung nhìn tiếp tục hiển thị kết quả cuối cùng cho đến khi kết quả mới sẵn sàng. Các phép boolean tải bộ mô hình hóa khối đặc lần đầu; khung nhìn nói điều đó trong chốc lát.

## Những gì bộ điều chỉnh chưa làm được

- Trọng số theo từng đỉnh (một độ suy giảm được sơn lên lưới) cho Dịch chuyển, Làm mượt và Bọc co.
- Các bộ điều chỉnh khác Tỷ lệ và Mảng tuyến tính trên hình học đẩy/kéo (nhóm và cấu kiện): hãy chuyển nó thành lưới trước ({{ui:Convert to mesh}}). Đối xứng, Mảng tròn hoặc Mảng theo đường cong, Uốn và Thu côn trên nhóm sẽ đến sau.
