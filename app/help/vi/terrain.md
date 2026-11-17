---
title: Địa hình: mặt đất từ đường đồng mức, và tạo hình cho nó
summary: Tạo mặt đất từ các đường đồng mức hoặc dưới dạng lưới, rồi nâng và hạ nó bằng cọ mềm.
keywords: địa hình, mặt đất, cảnh quan, địa hình học, đường đồng mức, công trường, dốc, đồi, gò, hộp cát, smoove, tạo hình, mái dốc, TIN
from: 407652b3
---

Địa hình là mặt đất được tạo từ các tam giác, nên nó có thể theo bất kỳ hình dạng nào. Nó là một nhóm: nhấp đúp để chỉnh sửa.

## Từ các đường đồng mức

1. Có các đường đồng mức ở đúng cao độ của chúng: vẽ chúng, hoặc [nhập mặt bằng công trường](topic:site-plan) và di chuyển từng đường lên đúng cao độ.
2. Chọn chúng (tất cả các cạnh của mọi đường đồng mức).
3. {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Địa hình từ các đường đồng mức đã chọn}}.

ModelCraft nối các điểm đồng mức bằng tam giác (TIN) và làm mềm mọi cạnh bên trong để mặt đất đổ bóng mượt. Các đường vẫn còn nguyên; xóa hoặc ẩn chúng khi bạn không cần nữa. Các đường đồng mức quá dày được rút gọn còn 8 000 điểm.

## Lưới để tạo hình

{{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Lưới địa hình…}} yêu cầu chiều rộng, chiều sâu và kích thước ô, rồi đặt một lưới phẳng gồm các tam giác tại nơi bạn nhấp góc của nó. Ô nhỏ tạo hình mượt hơn nhưng tạo thêm mặt (tối đa 200 × 200 ô).

## Tạo hình: nâng và hạ mặt đất

1. Nhấp đúp vào địa hình để mở nó.
2. {{ui:Chỉnh sửa}} › {{ui:Thêm}} › {{ui:Tạo hình địa hình}}. Một vòng tròn hiển thị cọ trên mặt đất dưới con trỏ.
3. Kéo lên để nâng mặt đất dưới cọ, hoặc kéo xuống để hạ. Phần giữa di chuyển nhiều nhất, và mặt đất giảm dần về không ở mép vòng tròn, nên các gò và hố hiện ra mượt mà.

Để tạo một gò có chiều cao chính xác, nhấp một lần, rồi nhập chiều cao, chẳng hạn `1.5m` (dấu trừ sẽ hạ xuống), và nhấn {{key:Enter}}. Để đổi cọ, nhập một độ dài trước khi nhấp: `5m` tạo cọ có bán kính 5 m.

Mỗi lần tạo hình là một bước hoàn tác.

## Lưu ý

- Tạo hình chỉ di chuyển các mặt tam giác, nên mọi mặt vẫn phẳng. Các mặt vẽ tay (hình chữ nhật, đa giác) không phải là địa hình: công cụ sẽ thông báo điều đó.
- Tạo hình chỉ di chuyển các điểm thẳng lên và xuống; nó không thêm điểm. Để có chi tiết mịn hơn, hãy tạo lưới với ô nhỏ hơn.
- Địa hình xuất như mọi nhóm khác. Trong IFC, nó là một proxy phần tử công trình, như mọi thứ khác.
