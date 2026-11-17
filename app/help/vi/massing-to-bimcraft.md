---
title: Gửi khối tích sang BimCraft
summary: Chuyển các khối đẩy/kéo sang BimCraft dưới dạng phương án khối tích, với số tầng, diện tích chiếm đất, tổng diện tích sàn và thể tích được tính từ mỗi khối đặc.
keywords: khối tích, khối, ý tưởng, phương án, bimcraft, ifc, bim, đẩy/kéo, tầng, tổng diện tích sàn, diện tích chiếm đất, thể tích, gửi, bàn giao, khối công trình, giai đoạn 2
from: 73c51f3f
---

## Bạn sẽ làm gì

Biến các khối bạn đã mô hình hóa bằng đẩy/kéo thành các phương án khối tích mà BimCraft hiểu, để ý tưởng tiếp tục như một mô hình công trình.

## Trước khi bắt đầu

Biến mỗi khối thành một **nhóm** hoặc **cấu kiện** và đặt tên cho nó. Mỗi khối trở thành một phương án. Hình học rời không được gửi.

## Gửi

1. Chọn các nhóm cần gửi. Khi không chọn gì, mọi nhóm và cấu kiện ở mức cao nhất sẽ được gửi.
2. Chọn {{ui:Export}}, rồi {{ui:Massing to BimCraft…}}.
3. Nhập {{ui:Name of the option set}} và {{ui:Floor height}}.
4. Kiểm tra danh sách: số tầng, diện tích chiếm đất, tổng diện tích sàn và thể tích của mỗi phương án.
5. Chọn **Gửi sang BimCraft** để mở BimCraft trong một thẻ mới với các phương án, hoặc {{ui:Save as IFC}} để tải tệp về và tự mở ở đó.

Trong BimCraft, các phương án được liệt kê dưới "Các phương án khối tích trong mô hình", nơi có thể đặt một phương án làm phương án hiện hành và phát triển thành tường và sàn.

## Một khối đặc trở thành khối tích thế nào

- **Tầng** là chiều cao của khối đặc chia cho chiều cao tầng, làm tròn, và tối thiểu là một. Các tầng sau đó chia đều chiều cao của khối đặc, nên khối 10 m với tầng 3 m có 3 tầng, mỗi tầng 3.33 m.
- **Diện tích một tầng** là diện tích của mặt cắt ngang nằm ngang của chính khối đặc ở độ cao của tầng đó. Một khối lùi vào sẽ có các tầng trên nhỏ hơn, và tổng diện tích sàn là tổng của chúng.
- **Diện tích chiếm đất** là đường viền của mặt cắt ngay phía trên đáy khối đặc.
- **Thể tích** là thể tích của chính khối đặc.

Trong tệp IFC, mỗi phương án là một phần tử proxy của công trình (diện tích chiếm đất được nâng lên đến chiều cao khối đặc), với một không gian cho mỗi tầng mang tổng diện tích sàn của tầng đó. Tất cả phương án dùng chung một công trình, với số tầng bằng phương án cao nhất.

## Hình dạng đơn giản hóa

Một khối đứng thẳng đơn giản được chuyển đi đúng như đã mô hình hóa. Mọi hình khác vẫn được gửi, và danh sách cho biết lý do hình dạng được đơn giản hóa:

- **Các tầng không cùng kích thước với đáy** (khối lùi vào hoặc nghiêng): khối trong BimCraft là đường viền đáy được nâng lên đến toàn bộ chiều cao, nhưng diện tích các tầng và thể tích là của chính khối đặc.
- **Khối đặc không kín**: các tầng có mặt cắt không thể khép kín sẽ không được đo và được tính là không có gì. Hãy đóng khối đặc ({{ui:Entity info}} ghi "Khối đặc: Có") để có số liệu đầy đủ.
- **Đáy có nhiều hơn một đường viền**: đường viền lớn nhất được dùng làm diện tích chiếm đất.

## Điều nên biết

- {{ui:IFC for BimCraft (.ifc)}} là một kiểu xuất khác: nó chỉ gửi hình dạng và tên, không có tầng hay diện tích.
- Không có gì được tải lên. Tệp được chuyển đến thẻ BimCraft trên máy tính này.
