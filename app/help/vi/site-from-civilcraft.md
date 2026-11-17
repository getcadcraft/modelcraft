---
title: Lấy mặt bằng từ CivilCraft
summary: Mở tệp địa chỉ-sang-mặt-bằng mà CivilCraft tạo, rồi thêm các công trình và thửa đất xung quanh dưới dạng khối và đường mặt bằng, chỉ những mục bạn đánh dấu.
keywords: mặt bằng, civilcraft, địa chỉ, thửa đất, công trình lân cận, khối, bối cảnh, ccsite, dữ liệu mở, openstreetmap
from: f28e4a3b
---

CivilCraft có thể tra một địa chỉ và lưu lại những gì các nguồn dữ liệu mở biết xung quanh nó: các công trình lân cận, thửa đất, và các đường bao lũ lụt, quy hoạch và đất. ModelCraft dùng tệp đó làm gợi ý. Không có gì được thêm vào cho đến khi bạn yêu cầu.

## Đưa tệp vào

1. Trong CivilCraft, gửi mặt bằng sang ModelCraft, hoặc lưu tệp (tên tệp kết thúc bằng `.ccsite.json`).
2. Trong ModelCraft, mở hoặc thả tệp vào. Một danh sách mở ra, với một ô đánh dấu cho mỗi công trình và cho thửa đất.
3. Nhập chiều cao cho các công trình mà nguồn không cung cấp chiều cao. Bên cạnh mỗi mục có một dòng cho biết chiều cao lấy từ đâu: số tầng nhân 3 m mỗi tầng, hoặc chiều cao bạn đã nhập.
4. Nhấn {{ui:Thêm các mục đã đánh dấu}}.

Các công trình được đánh dấu trở thành các khối đùn trong một cấu kiện, và thửa đất trở thành một đường bao quanh mặt bằng. Tất cả là một bước hoàn tác. Điểm địa chỉ nằm ở gốc tọa độ, tính bằng mét về phía đông và phía bắc của nó.

Lũ lụt, quy hoạch và đường bao đất chỉ được liệt kê để tham khảo; chúng không được vẽ.

Dữ liệu đến từ các nguồn mở và ghi nguồn ở cuối danh sách. Các chiều cao không được cung cấp là giả định, nên nên kiểm tra chúng trước khi bạn dựa vào.
