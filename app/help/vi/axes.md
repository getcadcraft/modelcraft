---
title: Di chuyển và xoay trục của bản vẽ
summary: Xoay các trục đỏ, xanh lá và xanh dương để khớp với một công trình không vuông góc với chúng, hoặc căn chúng theo một mặt, để việc vẽ và nhập liệu bám theo.
keywords: trục, trục bản vẽ, gốc, căn trục, xoay trục, đặt lại trục, công trình nghiêng, lệch, ucs, hệ tọa độ
from: cab258f7
---

Các trục đỏ, xanh lá và xanh dương hướng dẫn mọi thứ bạn vẽ: hình chữ nhật thẳng hàng với chúng, đường thẳng khóa vào chúng, và mặt đất là mặt phẳng đỏ–xanh lá. Khi một công trình nằm nghiêng (một mặt bằng không vuông góc với hướng bắc, một cánh nhà xoay 30°), hãy đưa các trục vào đúng vị trí của nó để việc vẽ theo các bức tường. Bản thân mô hình không di chuyển.

Cả ba lệnh đều nằm trong {{ui:Edit}} › {{ui:More}}.

## Đặt trục

1. {{ui:Edit}} › {{ui:More}} › {{ui:Place axes}}.
2. Nhấp vào vị trí gốc, chẳng hạn một góc của công trình.
3. Nhấp vào một điểm dọc theo trục đỏ mới, chẳng hạn xa hơn dọc một bức tường.
4. Nhấp vào một điểm theo hướng trục xanh lá mới. Xanh lá được làm vuông góc với đỏ, còn xanh dương vuông góc với cả hai.

Các trục được vẽ ở vị trí mới. Hình chữ nhật bạn vẽ trên mặt đất, hoặc nhập như `4m,3m`, chạy dọc theo đỏ và xanh lá đã xoay; các phím mũi tên khóa vào chúng; và điểm bắt gốc nằm tại gốc mới.

## Căn trục theo một mặt

Chọn một mặt, rồi {{ui:Edit}} › {{ui:More}} › {{ui:Align axes to face}}. Khi đó xanh dương hướng ra khỏi mặt, đỏ chạy dọc theo cạnh dài nhất của nó, và gốc nằm tại điểm đầu của cạnh đó. Dùng lệnh này để vẽ trên một mái dốc như thể đó là mặt đất.

## Đặt lại trục

{{ui:Edit}} › {{ui:More}} › {{ui:Reset axes}} đưa chúng về vị trí ban đầu của mô hình.

## Những điều cần biết

- Bên trong một nhóm hoặc cấu kiện đang mở, trục riêng của nó được dùng (chúng xoay cùng nó); trục của mô hình áp dụng ở cấp cao nhất.
- Các trục được lưu trong tệp ModelCraft, và mỗi thay đổi là một bước hoàn tác.
- Khi xuất và các khung nhìn tiêu chuẩn ({{ui:Top}}, {{ui:Front}}…) vẫn dùng hướng riêng của mô hình.
