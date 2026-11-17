---
title: Làm mềm và làm trơn cạnh
summary: Ẩn các cạnh giữa những mặt gặp nhau ở góc nông, để hình cong trông như một bề mặt mịn, trong ModelCraft và trong tệp xuất.
keywords: làm mềm, làm trơn, cạnh mềm, tô bóng trơn, ẩn cạnh, mặt nhỏ, nhiều mặt, cong, pháp tuyến, làm cứng, góc
from: 52d32453
---

Một hình cong trong ModelCraft được tạo từ các mặt phẳng. Các cạnh **mềm** giữa những mặt đó không được vẽ, và các mặt chúng nối được tô bóng như một bề mặt mịn, nên một hình trụ 24 cạnh trông tròn.

Khi bạn kéo một vòng tròn lên bằng {{ui:Đẩy/kéo}}, các cạnh của nó được làm mềm cho bạn. Với các hình khác, hãy làm mềm theo góc.

## Làm mềm theo góc

1. Chọn những gì cần làm mềm: các mặt và cạnh, hoặc một nhóm hay cấu kiện (toàn bộ cạnh của nó).
2. Trong {{ui:Thông tin đối tượng}}, gõ một góc vào {{ui:Làm mềm đến}}, chẳng hạn `20`, rồi nhấp {{ui:Làm mềm}}.

Mọi cạnh trong vùng chọn mà hai mặt của nó quay một góc bằng hoặc nhỏ hơn góc đó sẽ trở thành mềm; các cạnh có góc gấp sắc hơn sẽ trở thành cứng. Các mặt bên của một lăng trụ 12 cạnh quay 30°, còn các mép của nó quay 90°, nên `31` chỉ làm mềm các mặt bên.

{{ui:Làm cứng tất cả}} làm mọi cạnh trong vùng chọn trở lại cứng. Mỗi thao tác là một bước hoàn tác.

## Những điều cần biết

- Chỉ các cạnh nằm giữa đúng hai mặt mới được làm mềm. Các cạnh rời giữ nguyên.
- Tô bóng trơn chỉ hoạt động qua các cạnh mềm: một mặt không có cạnh mềm nào sẽ được tô phẳng.
- Các cạnh mềm được giữ trong tệp ModelCraft. Các tệp xuất **glTF (.glb)** và **OBJ** mang theo tô bóng trơn (một pháp tuyến ở mỗi góc), nên các chương trình khác hiển thị cùng bề mặt. Collada và STL xuất các mặt phẳng.
- Cạnh mềm bị ẩn trong mọi kiểu mặt, kể cả {{ui:Tia X}} và {{ui:Khung dây}}. Để thấy chúng, chọn hình và nhấp {{ui:Làm cứng tất cả}}; hoàn tác sẽ đưa lại việc làm mềm.
