---
title: Danh sách công cụ
summary: Mọi công cụ của ModelCraft cùng phím của nó, mỗi lần nhấp làm gì, và những gì bạn có thể nhập vào ô giá trị khi nó hoạt động.
keywords: công cụ, thanh công cụ, lệnh, danh sách, đường thẳng, hình chữ nhật, vòng tròn, đa giác, dời song song, cung tròn, đường cong, spline, theo đường dẫn, quét, cung 2 điểm, cung từ tâm, chọn, đẩy kéo, di chuyển, xoay, tỷ lệ, tẩy, thước dây, kích thước, xoay quanh, di chuyển khung nhìn, thu phóng, đặt cấu kiện
from: e08a274f
---

Dòng gợi ý trên thanh trạng thái luôn cho biết công cụ hiện tại cần gì tiếp theo. {{key:Esc}} hủy thao tác mà công cụ đang làm dở.

## Công cụ vẽ

| Công cụ | Phím | Thao tác nhấp | Nhập vào ô giá trị |
|---|---|---|---|
| {{ui:Đường thẳng}} | {{key:L}} | Điểm đầu, rồi mỗi điểm tiếp theo. Dừng khi một mặt khép kín, hoặc khi nhấn {{key:Esc}} | Độ dài theo hướng con trỏ; `[x,y,z]` cho một điểm; `<dx,dy,dz>` cho một độ dời ({{ui:Chiều dài}}) |
| {{ui:Hình chữ nhật}} | {{key:R}} | Góc đầu tiên (mặt đất hoặc một mặt), góc đối diện | Chiều rộng và chiều sâu: `4m,3m` ({{ui:Kích thước}}) |
| {{ui:Vòng tròn}} | {{key:C}} | Tâm (mặt đất hoặc một mặt), một điểm trên cạnh | Trước lần nhấp đầu tiên: số cạnh, `24s` hoặc `24` ({{ui:Số cạnh}}). Sau đó: bán kính ({{ui:Bán kính}}) |
| {{ui:Đa giác}} | {{key:N}} | Tâm, một góc | Giống như Vòng tròn; bắt đầu với 6 cạnh |
| {{ui:Cung tròn}} | {{key:A}} | Điểm đầu, điểm cuối, rồi độ phồng | Độ dài dây cung sau điểm đầu ({{ui:Chiều dài}}); độ phồng sau điểm cuối ({{ui:Độ phồng}}); `12s` cho số đoạn |
| {{ui:Thước đo góc}} | — | Tâm, điểm 0°, rồi góc | Góc theo độ ({{ui:Góc}}) |
| {{ui:Theo đường dẫn}} | — | Chọn một đường dẫn, rồi nhấp mặt (hoặc nhấp mặt, rồi một cạnh của đường dẫn) | — |
| {{ui:Tô màu}} | {{key:B}} | Một mặt, nhóm hoặc cấu kiện | — ({{key:Ctrl}} liên kết, {{key:Shift}} tất cả cùng màu, {{key:Alt}} lấy một màu) |
| {{ui:Dời song song}} | {{key:F}} | Một mặt (hoặc chọn trước mặt hoặc các cạnh), rồi phía và khoảng cách | Khoảng cách ({{ui:Khoảng cách}}); đi vào mặt là hướng vào trong |
| {{ui:Đường cong}} | — | Các điểm mà đường cong đi qua; {{key:Enter}} hoặc nhấp đúp để kết thúc | Độ dài theo con trỏ, `[x,y,z]` hoặc `<dx,dy,dz>` cho điểm tiếp theo |
| {{ui:Cung tròn theo tâm}} | — | Tâm, điểm đầu, rồi điểm cuối | Bán kính sau tâm; góc theo độ sau điểm đầu; `12s` cho số đoạn |

## Công cụ chỉnh sửa

| Công cụ | Phím | Thao tác nhấp | Nhập vào ô giá trị |
|---|---|---|---|
| {{ui:Chọn}} | {{key:Space}} | Nhấp, nhấp đúp, nhấp ba lần, kéo một cửa sổ chọn. Xem [Chọn đối tượng](topic:select) | Khi đã chọn một kích thước hoặc cạnh: một độ dài mới, sẽ đổi kích thước mô hình |
| {{ui:Đẩy/kéo}} | {{key:P}} | Mặt, rồi khoảng cách. Nhấp đúp một mặt để lặp lại khoảng cách trước | Một khoảng cách; số âm đi theo chiều ngược lại ({{ui:Khoảng cách}}) |
| {{ui:Di chuyển}} | {{key:M}} | Từ một điểm, đến một điểm. Giữ {{key:Ctrl}} hoặc {{key:Alt}} để sao chép | Một khoảng cách theo con trỏ, `<dx,dy,dz>` hoặc `[x,y,z]` ({{ui:Khoảng cách}}). Sau khi sao chép: `3x` hoặc `/3` |
| {{ui:Xoay}} | {{key:Q}} | Tâm (trên một mặt để xoay trong mặt phẳng của nó), hướng đầu, hướng cuối | Góc theo độ ({{ui:Góc}}) |
| {{ui:Tỷ lệ}} | {{key:S}} | Điểm giữ nguyên, điểm tham chiếu, kích thước mới | Một hệ số: `2`, `0.5` ({{ui:Tỷ lệ}}) |
| {{ui:Tẩy}} | {{key:E}} | Nhấp hoặc kéo qua các cạnh, nhóm, đường dẫn và kích thước | không có |
| {{ui:Thước dây}} | {{key:T}} | Từ một cạnh: một đường dẫn song song. Từ một điểm: đo và để lại một điểm dẫn hướng | Độ dời ({{ui:Dời song song}}) hoặc khoảng cách ({{ui:Chiều dài}}) |
| {{ui:Kích thước}} | {{key:D}} | Hai góc (hoặc một cạnh), rồi nơi đặt đường kích thước. Xem [Kích thước và thay đổi kích thước](topic:dimensions) | Độ dời ({{ui:Dời song song}}). Ngay sau đó: một độ dài mới, sẽ đổi kích thước mô hình |

{{ui:Di chuyển}}, {{ui:Xoay}} và {{ui:Tỷ lệ}} hoạt động trên vùng chọn. Nếu không có gì được chọn, chúng lấy thứ bạn nhấp trước (một mặt sẽ mang theo các cạnh của nó).

## Công cụ camera

| Công cụ | Phím | Kéo để |
|---|---|---|
| {{ui:Xoay quanh}} | {{key:O}} | Xoay quanh phần mô hình dưới con trỏ ({{key:Shift}} để di chuyển khung nhìn) |
| {{ui:Di chuyển khung nhìn}} | {{key:H}} | Trượt khung nhìn |
| {{ui:Thu phóng}} | {{key:Z}} | Thu phóng: kéo lên là phóng to, kéo xuống là thu nhỏ |
| {{ui:Phạm vi}} | {{key:Shift+Z}} | (một nút, không phải công cụ) Vừa toàn bộ mô hình |

Bạn hiếm khi cần những thứ này với chuột: kéo bằng nút giữa để xoay quanh, kéo bằng nút phải để di chuyển khung nhìn, và bánh xe để thu phóng với mọi công cụ. Xem [Xoay quanh, di chuyển khung nhìn và thu phóng](topic:orbit-pan-zoom).

## Sắp xếp

| Nút | Phím | Chức năng |
|---|---|---|
| {{ui:Cấu kiện}} | {{key:G}} | Biến vùng chọn thành một cấu kiện |
| {{ui:Nhóm}} | {{key:Shift+G}} | Biến vùng chọn thành một nhóm |
| {{ui:Phân rã}} | không có | Biến các nhóm và cấu kiện đã chọn trở lại thành hình học rời |

## Đặt cấu kiện

Không nằm trên thanh công cụ: nhấp {{ui:Đặt}} bên cạnh một cấu kiện trong bảng {{ui:Cấu kiện}}. Nhấp một lần nơi gốc của cấu kiện sẽ đặt nó; sau đó công cụ quay về {{ui:Chọn}}.
