---
title: Nhóm và cấu kiện
summary: Giữ các đối tượng không dính vào nhau, sửa một bản sao để thay đổi tất cả, và dùng bảng Cây đối tượng và Cấu kiện.
keywords: nhóm, cấu kiện, tạo nhóm, tạo cấu kiện, phân rã, tạo bản riêng, cây đối tượng, bản sao, khối, lồng nhau, sửa nhóm, đặt
from: 7cb925f3
---

Hình học rời trong ModelCraft dính vào nhau: các đường thẳng chạm nhau sẽ cắt nhau, và các mặt chung một cạnh di chuyển cùng nhau. Đó là điều giúp vẽ trên mặt hoạt động, nhưng cũng có nghĩa là một hộp vẽ sát một hộp khác sẽ hợp nhất với nó. **Nhóm** và **cấu kiện** giữ các thứ tách biệt.

- Một **nhóm** bao một phần hình học để nó hoạt động như một đối tượng. Không có gì bên ngoài có thể dính vào nó.
- Một **cấu kiện** là một nhóm có thể đặt nhiều lần. Mọi bản sao dùng chung cùng nội dung: sửa một bản thì tất cả đều thay đổi. Dùng cấu kiện cho mọi thứ lặp lại: cửa sổ, cột, bàn, cây.

## Tạo nhóm hoặc cấu kiện

1. Chọn hình học. Nhấp ba lần vào một mặt sẽ chọn toàn bộ đối tượng liên kết; kéo cửa sổ sẽ chọn mọi thứ trong hộp.
2. Nhấn {{key:Shift+G}} để tạo nhóm, hoặc {{key:G}} để tạo cấu kiện. Bạn cũng có thể nhấp {{ui:Nhóm}} hoặc {{ui:Cấu kiện}} trong nhóm {{ui:Sắp xếp}} của thanh công cụ, hoặc {{ui:Tạo nhóm (Shift+G)}} hoặc {{ui:Tạo cấu kiện (G)}} trong {{ui:Thông tin đối tượng}}.

   Thanh trạng thái ghi "Đã nhóm thành Group#1." hoặc "Đã tạo cấu kiện Component#1.", đối tượng mới được chọn và xuất hiện trong {{ui:Cây đối tượng}}.

3. Để đặt tên, nhập tên vào ô {{ui:Tên}} của {{ui:Thông tin đối tượng}} rồi nhấn {{key:Enter}} hoặc nhấp ra ngoài.

Chọn một mặt sẽ kéo theo các cạnh của nó. Nếu chưa chọn gì, thanh trạng thái ghi "Chọn hình học trước (kéo một cửa sổ, hoặc nhấp ba lần để chọn mọi thứ liên kết)."

Bạn cũng có thể nhóm các nhóm: chọn nhiều nhóm rồi nhấn {{key:Shift+G}}. {{ui:Cây đối tượng}} thể hiện cấu trúc lồng nhau.

:::note
Các chữ cái phím trùng với mặc định của SketchUp: {{key:G}} tạo cấu kiện, {{key:Shift+G}} tạo nhóm.
:::

## Sửa bên trong nhóm hoặc cấu kiện

1. Nhấp đúp vào nó (trong khung nhìn hoặc trong {{ui:Cây đối tượng}}), hoặc chọn nó rồi nhấp {{ui:Chỉnh sửa}} trong {{ui:Thông tin đối tượng}}.

   Phần còn lại của mô hình mờ đi, các trục chuyển sang trục riêng của nhóm, và {{ui:Cây đối tượng}} ghi "Đang sửa: Mô hình › Group#1". Thanh trạng thái ghi "Đang sửa Group#1. Esc hoặc nhấp đúp ra ngoài sẽ đóng nó."

2. Vẽ, đẩy/kéo, di chuyển và xóa như bình thường. Mọi thao tác đều nằm bên trong nhóm.
3. Để đóng: nhấn {{key:Esc}} (hai lần nếu có gì đang được chọn), nhấp đúp vào khoảng trống, hoặc nhấp {{ui:Đóng nhóm}} trong {{ui:Cây đối tượng}}.

Khi một cấu kiện đang mở, mọi bản sao của nó đều thay đổi khi bạn làm việc.

## Đặt thêm bản sao của cấu kiện

- Sao chép bằng {{ui:Di chuyển}} và {{key:Ctrl}} (xem [Di chuyển và sao chép](topic:move-copy)). Mỗi bản sao là một vị trí khác của cùng cấu kiện.
- Hoặc nhấp {{ui:Đặt}} bên cạnh nó trong bảng {{ui:Cấu kiện}}, rồi nhấp nơi cần đặt. Gốc của nó, tức góc dưới cùng của hộp bao quanh phần bạn đã chọn khi tạo, sẽ nằm tại nơi bạn nhấp. Sau đó công cụ quay về {{ui:Chọn}}.

{{ui:Cấu kiện}} hiện số bản sao đã đặt ("4×"), và {{ui:Cây đối tượng}} hiện số lượng sau tên.

## Sắp xếp lại trong Cây đối tượng

Kéo một hàng trong {{ui:Cây đối tượng}} để đổi vị trí của nó. Không có gì di chuyển trong khung nhìn: nhóm giữ nguyên vị trí trong mô hình.

- **Vào trong một nhóm:** thả lên giữa hàng của nhóm (hàng sẽ có viền đứt nét). Nó vào bên trong, ở cuối.
- **Đổi thứ tự:** thả lên cạnh trên hoặc cạnh dưới của một hàng (sẽ có một đường hiện ra). Nó nằm ngay trước hoặc sau hàng đó, bên trong cùng nhóm với hàng đó, nên cũng có thể đưa vào một nhóm tại vị trí bạn chọn.
- **Ra cấp cao nhất:** thả lên tiêu đề {{ui:Cây đối tượng}}. Nó nằm ở cuối.

Mỗi lần thả là một bước: {{key:Mod+Z}} sẽ đưa nó về chỗ cũ. {{key:Esc}} trong lúc kéo sẽ hủy việc thả. Một nhóm không thể nằm trong chính nó hoặc trong một nhóm mà nó chứa. Việc kéo bị tắt khi {{ui:Tìm theo tên}} có chữ trong ô.

:::touch
Giữ ngón tay trên một hàng một lúc, rồi kéo. Vuốt nhanh sẽ cuộn danh sách thay vì kéo.
:::

## Làm một bản sao khác đi

Chọn bản sao rồi nhấp {{ui:Tạo bản riêng}} trong {{ui:Thông tin đối tượng}} (chỉ hiện khi cấu kiện được đặt nhiều hơn một lần). Bản sao đó sẽ có định nghĩa riêng, đặt tên giống bản gốc nhưng có số mới. Sửa nó mà không ảnh hưởng đến các bản khác.

## Chuyển nhóm thành cấu kiện

Chọn nhóm rồi nhấp {{ui:Tạo cấu kiện}} trong {{ui:Thông tin đối tượng}}. Nó nhận tên mới, như Component#2, ngay cả khi bạn đã đặt tên cho nhóm; nhập lại tên trong {{ui:Tên}}.

## Phân rã

Chọn một nhóm hoặc cấu kiện rồi nhấp {{ui:Phân rã}} (trên thanh công cụ hoặc trong {{ui:Thông tin đối tượng}}). Nội dung của nó trở thành hình học rời ngay tại vị trí cũ, và dính vào những gì chúng chạm vào. Các nhóm bên trong vẫn là nhóm.

## Khối đặc và thể tích

Khi chọn một nhóm hoặc cấu kiện, {{ui:Thông tin đối tượng}} hiện **Khối đặc: Có** nếu các mặt của nó khép kín, không có khe hở (mỗi cạnh được chia sẻ bởi đúng hai mặt) và không có nhóm nào lồng bên trong. Khi đó nó cũng hiện **thể tích**. Một hộp, một bức tường có cửa sổ cắt xuyên qua, và một hình trụ được kéo ra là các khối đặc; một hộp có mặt trên bị xóa thì không phải.

## Khi bản sao cuối cùng bị xóa

Xóa bản sao cuối cùng của một cấu kiện cũng sẽ gỡ nó khỏi bảng {{ui:Cấu kiện}}. {{key:Mod+Z}} sẽ đưa nó trở lại.

## Điều cần biết

- Các bản sao của một **nhóm** được tạo bằng Di chuyển trong bản dựng này dùng chung nội dung, giống như bản sao cấu kiện: sửa một bản sẽ thay đổi các bản khác. Để tạo bản độc lập, nhấp {{ui:Tạo cấu kiện}}, rồi {{ui:Tạo bản riêng}}. Xem [Xử lý sự cố](topic:troubleshooting#editing-one-group-changed-another).
- Cấu kiện không cắt lỗ mở trên tường hoặc dính vào mặt, và không có thư viện cấu kiện dựng sẵn. Bạn tự tạo hoặc nhập chúng.
- Các tệp nhập vào sẽ đến dưới dạng một nhóm. Tệp Collada giữ nhóm và cấu kiện riêng bên trong nó.
