---
title: Nhập kích thước chính xác trong hộp giá trị
summary: Mọi cách nhập độ dài, kích thước, điểm, khoảng dời, góc, số cạnh và số bản sao, và cách đọc đơn vị cùng các số không kèm đơn vị.
keywords: hộp giá trị, hộp đo, vcb, nhập, chính xác, kích thước, độ dài, đơn vị, feet, inch, mét, milimét, tọa độ, dời, mảng, số cạnh, góc, dấu phẩy thập phân
from: 0148dc3d
---

Hộp giá trị nằm ở thanh trạng thái phía dưới, với nhãn thay đổi theo công cụ. Trong lúc bạn làm việc, nó hiển thị kích thước trực tiếp; bất cứ lúc nào bạn cũng có thể nhập một kích thước chính xác.

## Cách nhập

1. Bắt đầu thao tác bằng một lần nhấp (góc đầu tiên, mặt, điểm để di chuyển từ đó).
2. Nhập. Bạn không cần nhấp vào hộp giá trị: một chữ số hoặc một trong các ký tự `. , - ' " [ < * /` sẽ gửi phần bạn gõ vào đó.
3. Nhấn {{key:Enter}}.

Nhấn {{key:Esc}} trong hộp giá trị để xóa và quay lại khung nhìn. Trên màn hình cảm ứng, chạm vào hộp giá trị để hiện bàn phím.

Nếu ModelCraft không đọc được những gì bạn nhập, thanh trạng thái sẽ hiện "Nhập độ dài, ví dụ 3m, 10'6" hoặc 4m,3m." Nếu công cụ không dùng được nó, sẽ hiện "Không thực hiện được: …" kèm lý do.

## Độ dài

| Nhập | Nghĩa là |
|---|---|
| `3m` `320cm` `3200mm` | Mét, centimét, milimét |
| `10'` `10ft` `10 feet` | Feet |
| `6"` `6in` `6 inches` | Inch |
| `10'6"` `10' 6"` `10'-6 1/2"` | Feet và inch, có phân số |
| `6 1/2"` `6-1/2"` `3/4"` | Inch có phân số |
| `1.5ft` `.5m` | Số thập phân có đơn vị |
| `120` | Số không có đơn vị, theo đơn vị của mô hình |

**Một số không có đơn vị dùng đơn vị của mô hình**, như hiển thị trong bộ chọn ở góc dưới bên phải: inch trong mô hình feet và inch (nên `120` là 10 feet), milimét trong mô hình milimét, và tương tự. Nhập đơn vị luôn được ưu tiên, bất kể đơn vị của mô hình. Dấu nháy cong và dấu phẩy trên (’ ” ′ ″) cũng được đọc là feet và inch.

:::warning
Luôn dùng **dấu chấm** cho số thập phân: `2.5m`. Dấu phẩy ngăn cách hai giá trị, nên `2,5` có nghĩa là 2 và 5 (hai giá trị), bất kể cài đặt ngôn ngữ của bạn.
:::

## Phép tính

Mọi độ dài đều có thể là một phép tính: cộng `+`, trừ `-`, nhân `*`, chia `/`, và dùng dấu ngoặc. Không cần máy tính.

| Nhập | Nghĩa là |
|---|---|
| `2.5/3` | Một phần ba của 2.5 (theo đơn vị của mô hình) |
| `12'6"+3/4"` | 12' 6 3/4" |
| `(24'-0")/3` | 8' |
| `2*450mm` | 900 mm |
| `4+7/16` | 4 7/16" trong mô hình feet và inch |
| `3m-25cm` | 2.75 m |

Một số không có đơn vị là đơn vị của mô hình khi nó là độ dài (`2.5/3` trong mô hình mét là 0.833 m), và là một hệ số thuần khi nó nhân hoặc chia một độ dài (`2*450mm`). Góc và hệ số cũng nhận phép tính: `90/2` là 45°. Hai độ dài nhân với nhau tạo ra diện tích chứ không phải độ dài, nên `2m*3m` bị từ chối.

Nếu ModelCraft không tính được, thanh trạng thái sẽ cho biết lỗi là gì và ở đâu, ví dụ "Chia cho 0 (ký tự 4)." Dấu ngoặc cũng khởi động hộp giá trị, nên bạn có thể bắt đầu bằng `(`.

Các ký hiệu sau giữ nghĩa riêng của chúng: `/3`, `3x` và `*3` sau khi sao chép, `24s` cho số cạnh, và `/3` khi đang chọn một cạnh (nó [chia cạnh](topic:divide)).

## Theo công cụ

| Công cụ | Nhãn | Nhập |
|---|---|---|
| {{ui:Đường thẳng}} | {{ui:Chiều dài}} | Một độ dài (hướng về con trỏ), hoặc một điểm hay khoảng dời (bên dưới) |
| {{ui:Hình chữ nhật}} | {{ui:Kích thước}} | Hai độ dài: `4m,3m`, `12',10'`. Dấu chấm phẩy cũng được: `4m;3m` |
| {{ui:Vòng tròn}}, {{ui:Đa giác}} | {{ui:Số cạnh}}, rồi {{ui:Bán kính}} | Trước lần nhấp đầu tiên, số cạnh: `12s` hoặc `12` (3 đến 999). Sau đó là bán kính |
| {{ui:Đẩy/kéo}} | {{ui:Khoảng cách}} | Một độ dài. Giá trị âm đi theo chiều ngược lại |
| {{ui:Di chuyển}} | {{ui:Khoảng cách}} | Một độ dài (hướng về con trỏ), hoặc một điểm hay khoảng dời. Sau khi sao chép: `3x`, `*3`, `/3` |
| {{ui:Xoay}} | {{ui:Góc}} | Độ: `90`, `-45`, `22.5` |
| {{ui:Tỷ lệ}} | {{ui:Tỷ lệ}} | Hệ số lớn hơn 0: `2`, `0.5`, `1.25` |
| {{ui:Thước dây}} | {{ui:Dời song song}} hoặc {{ui:Chiều dài}} | Một độ dài |
| {{ui:Chia đều}} | {{ui:Số phần}} | Số phần bằng nhau: `5`, `5s` hoặc `/5` (2 đến 1000). Xem [Chia một cạnh hoặc đường cong thành các phần bằng nhau](topic:divide) |
| {{ui:Kích thước}} | {{ui:Dời song song}}, rồi {{ui:Chiều dài}} | Vị trí đường kích thước; ngay sau khi đặt, một độ dài mới sẽ đổi kích thước mô hình |
| {{ui:Chọn}} | {{ui:Giá trị}} | Khi đã chọn một kích thước hoặc một cạnh, một độ dài mới sẽ đổi kích thước mô hình. Xem [Kích thước và đổi kích thước](topic:dimensions) |

## Điểm và khoảng dời

Với {{ui:Đường thẳng}} và {{ui:Di chuyển}}, sau lần nhấp đầu tiên:

- `[x,y,z]` đi đến điểm chính xác đó trong mô hình (theo trục riêng của nhóm khi bạn đang chỉnh sửa bên trong một nhóm). Ví dụ: `[0,0,3m]` là 3 m thẳng phía trên gốc tọa độ.
- `<dx,dy,dz>` đi một khoảng đó từ điểm đầu tiên theo trục đỏ, xanh lá và xanh dương. Ví dụ: `<0,0,10'>` là 10 feet thẳng lên trên.

Mỗi giá trị trong ba giá trị có thể có đơn vị riêng: `<12',0,6">`.

## Bản sao sau khi di chuyển

Ngay sau khi sao chép bằng {{ui:Di chuyển}}:

| Nhập | Tạo |
|---|---|
| `3x` hoặc `*3` | 3 bản sao liên tiếp với cùng khoảng cách |
| `/3` | 3 bản sao trải đều từ bản gốc đến bản sao đầu tiên |

Tối đa 500 bản sao. Xem [Di chuyển, sao chép và tạo mảng](topic:move-copy#a-row-of-copies).

## Độ dài nhập cần một hướng

Một độ dài nhập đơn lẻ đi theo hướng con trỏ chỉ từ lần nhấp đầu tiên. Nếu bạn nhập ngay sau khi nhấp, trước khi di chuyển chuột, thì chưa có hướng và không có gì xảy ra. Hãy di chuyển con trỏ một chút về hướng bạn muốn đi, rồi nhập.

## Đơn vị của mô hình

Đổi đơn vị trong bộ chọn ở góc dưới bên phải: {{ui:ft và in}}, in, ft, yd, mi, mil, µm, mm, cm, m hoặc km, miễn là chúng được bật trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} (đơn vị riêng của mô hình luôn có sẵn). Một độ dài nhập với ký hiệu của bất kỳ đơn vị nào sẽ được đọc theo đơn vị đó. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists). Đơn vị chỉ thay đổi cách hiển thị độ dài và cách đọc các số không có đơn vị; kích thước mô hình vẫn giữ nguyên. Đơn vị được lưu trong tệp.

Cách hiển thị kích thước:

| Đơn vị | Độ dài | Diện tích | Thể tích |
|---|---|---|---|
| ft và in | `10' 6 1/2"` (đến 1/16") | ft² | ft³ |
| in | `126 1/2"` | in² | in³ |
| m | `3.2 m` | m² | m³ |
| cm | `320 cm` | cm² | cm³ |
| mm | `3200 mm` | m² từ 0.01 m², còn lại là mm² | m³ từ 0.01 m³, còn lại là mm³ |

Mô hình mới bắt đầu bằng feet và inch khi ngôn ngữ trình duyệt được đặt ở vùng Hoa Kỳ (cùng Liberia và Myanmar), và bằng milimét ở mọi nơi khác. Đơn vị được đánh dấu sao trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} sẽ được dùng thay thế, khi ModelCraft có đơn vị đó. Hoặc đổi bộ chọn sau {{ui:Mới}}.
