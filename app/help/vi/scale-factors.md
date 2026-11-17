---
title: Tỷ lệ theo hệ số và phần bù co ngót
summary: Đổi tỷ lệ vùng chọn theo một hệ số cho mỗi trục quanh một điểm bạn chọn, hoặc làm một khuôn mẫu lớn hơn theo phần trăm mà chi tiết đúc sẽ co lại.
keywords: tỷ lệ, không đều, hệ số, phần trăm, kéo giãn, co ngót, co, đúc, khuôn mẫu, xưởng đúc, phần bù, đổi kích thước
from: 37e1bbff
---

Công cụ Tỷ lệ ({{key:S}}) đổi tỷ lệ đều, hoặc kéo một tay nắm để kéo giãn một hoặc hai hướng. **Tỷ lệ theo hệ số…** (menu Công cụ, hoặc nhóm Sửa đổi) là dạng nhập bằng số: một số cho mỗi trong ba trục.

1. Chọn các cạnh, mặt, nhóm hoặc thành phần.
2. Mở {{ui:Tỷ lệ theo hệ số…}}. Gõ một hệ số cho đỏ, xanh lá và xanh dương. Hệ số có thể là `1.015`, `101.5%` hoặc `+1.5%` (và `-2%` để nhỏ hơn). {{ui:Giống nhau trên cả ba trục}} sao chép giá trị đầu tiên sang hai trục còn lại.
3. Chọn điều gì **giữ nguyên**: giữa vùng chọn, góc thấp nhất của nó, giữa cạnh đáy của nó, hoặc gốc tọa độ.
4. Dòng dưới các ô cho biết kích thước hiện tại và sau khi đổi. {{ui:Tỷ lệ}} thực hiện trong một bước hoàn tác.

Các trục là của nhóm bạn đang mở (của mô hình, ở mức cao nhất). Một nhóm hoặc thành phần đang xoay sẽ bị nghiêng nếu các hệ số khác nhau; hãy đổi tỷ lệ nhóm chứa nó. Nội dung của một thành phần không bị động tới, nên các bản sao khác của nó vẫn giữ nguyên.

## Phần bù co ngót

Chi tiết đúc co lại khi nguội, nên khuôn mẫu của nó được làm lớn hơn. Dưới **Phần bù co ngót**, gõ phần trăm cho mỗi trục (xưởng đúc hoặc thợ làm khuôn sẽ cho bạn con số này theo kim loại của bạn; 1.5 % bên dưới chỉ là ví dụ), rồi nhấn {{ui:Dùng làm hệ số}}.

- **Chính phần trăm** làm hệ số bằng 1 cộng phần trăm: 1.5 % cho 1.015, thứ mà thước co ngót đánh dấu.
- **Vừa đủ** làm hệ số bằng 1 chia cho (1 trừ phần trăm): 1.5 % cho 1.0152, nên chi tiết đúc ra có kích thước của chi tiết sau khi nó co đúng bằng mức đó.

Các phần trăm gần nhất của bạn được ghi nhớ trong trình duyệt này.

:::note
Phần trăm là do bạn cung cấp: ModelCraft không biết gì về kim loại, khuôn hay quy trình của bạn.
:::
