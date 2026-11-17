---
title: Đo và đặt đường dẫn hướng
summary: Đọc chiều dài và diện tích, đo khoảng cách giữa hai điểm bằng thước dây, và bố trí đường thẳng và điểm dẫn hướng để vẽ theo.
keywords: đo, thước dây, thước đo góc, góc, đường dẫn hướng, đường dẫn, đường dựng, khoảng cách, kích thước, chiều dài, diện tích, dời song song, bố cục, điểm dẫn hướng
from: de6d04d9
---

## Đọc kích cỡ mà không cần đo

Chọn một thứ và xem {{ui:Thông tin đối tượng}}:

- Một cạnh hiện **chiều dài** của nó.
- Một mặt hiện **diện tích** và số lỗ của nó.
- Nhiều mặt hiện **tổng diện tích**.
- Một nhóm hoặc cấu kiện hiện **kích cỡ** (chiều rộng × chiều sâu × chiều cao của hộp bao quanh) và, nếu là khối đặc kín, **thể tích**.
- Khi không chọn gì, {{ui:Thông tin đối tượng}} hiện kích cỡ của toàn bộ mô hình.

Chiều dài và diện tích dùng đơn vị trong bộ chọn ở góc dưới bên phải. Mô hình theo milimét hiển thị diện tích từ 0.01 m² trở lên bằng mét vuông (một phòng 4 × 3 m hiển thị "12 m²").

Khi bạn vẽ, ô nhập giá trị hiện chiều dài, kích cỡ, bán kính hoặc khoảng cách trực tiếp, nên hiếm khi bạn phải đo sau đó.

Để đổi kích cỡ sau khi vẽ, chọn một cạnh hoặc một nhóm rồi nhập lại chiều dài hoặc kích cỡ trong {{ui:Thông tin đối tượng}}. Hoặc đặt một [kích thước](topic:dimensions) rồi nhập chiều dài mới vào đó.

## Đo giữa hai điểm

1. Nhấn {{key:T}} để dùng {{ui:Thước dây}} đo.
2. Nhấp một điểm: một góc, một trung điểm, một điểm trên mặt, hoặc mặt đất. (Nhấp vào một cạnh sẽ làm việc khác; xem bên dưới.)
3. Di chuyển đến điểm thứ hai. Đầu con trỏ và ô nhập giá trị ({{ui:Chiều dài}}) hiện khoảng cách. Nó bắt điểm vào các điểm và các hướng đỏ, xanh lá và xanh dương.
4. Nhấp. Thanh trạng thái ghi "Đã đo 4' 6"." và một **điểm dẫn hướng** được để lại tại điểm thứ hai.

Để đặt điểm dẫn hướng ở một khoảng cách chính xác, nhập khoảng cách sau cú nhấp đầu tiên rồi nhấn {{key:Enter}}: điểm sẽ đi theo hướng bạn đang trỏ.

## Đặt đường dẫn hướng

Đường dẫn hướng là một đường nét đứt vô tận, song song với một cạnh, ở khoảng cách bạn chọn. Dùng đường dẫn hướng để bố trí khoảng lùi, chiều cao tầng, hoặc vị trí bắt đầu của một cửa sổ.

1. Nhấn {{key:T}}.
2. Nhấp vào một **cạnh** (không phải đầu mút của nó). Đầu con trỏ hiện "Trên cạnh".
3. Di chuyển ra khỏi cạnh, về phía mà đường dẫn hướng nên nằm. Một đường nét đứt sẽ đi theo, song song với cạnh, và ô nhập giá trị ({{ui:Dời song song}}) hiện khoảng cách.
4. Nhấp, hoặc nhập khoảng cách dời rồi nhấn {{key:Enter}}: `1.5m`, `5'`.

   Thanh trạng thái ghi "Đường dẫn hướng cách cạnh 1.5 m."

Bắt đầu trên một đường dẫn hướng có sẵn sẽ tạo một đường dẫn hướng khác song song với nó, nhờ đó bạn có thể mở rộng một lưới từ một đường dẫn hướng.

Nếu bạn nhập khoảng cách dời mà chưa rời khỏi cạnh trước, ModelCraft không thể biết bạn muốn phía nào: "Rời khỏi cạnh trước để chỉ định phía."

## Đường dẫn hướng theo góc: Thước đo góc

1. Nhấp {{ui:Thước đo góc}} trong nhóm {{ui:Sửa đổi}}.
2. Nhấp vào tâm: điểm mà đường dẫn hướng đi qua. Trên một mặt, thước đo góc nằm trên mặt đó; ở nơi khác thì nằm phẳng. Sau cú nhấp này, {{key:Right}}, {{key:Left}} hoặc {{key:Up}} sẽ dựng nó thẳng góc với đỏ, xanh lá hoặc xanh dương (nhấn lại để hủy).
3. Nhấp vào một điểm xác lập 0°, chẳng hạn dọc theo một cạnh.
4. Di chuyển đến góc bạn muốn rồi nhấp: nó bắt theo bước 15°. Hoặc nhập góc theo độ, như `22.5`, rồi nhấn {{key:Enter}}; đường dẫn hướng đi về phía con trỏ đang ở.

Đường dẫn hướng đi qua tâm ở góc đó. Vẽ dọc theo nó bằng {{ui:Đường thẳng}} cho độ dốc mái, vát mép hoặc tường xiên.

## Vẽ theo đường dẫn hướng

Các công cụ vẽ bắt vào đường dẫn hướng ("Trên đường dẫn hướng") và điểm dẫn hướng ("Điểm dẫn hướng"), cũng như nơi một đường dẫn hướng cắt một hướng trục. Bắt đầu một {{ui:Hình chữ nhật}} tại nơi hai đường dẫn hướng cắt nhau để đặt nó chính xác.

## Xóa đường dẫn hướng

- Một đường dẫn hướng: nhấp vào nó bằng {{ui:Chọn}} rồi nhấn {{key:Delete}}, hoặc nhấp vào nó bằng {{ui:Tẩy}}.
- Tất cả đường dẫn hướng: khi không chọn gì, nhấp {{ui:Xóa tất cả đường dẫn hướng}} trong {{ui:Thông tin đối tượng}}.

Đường dẫn hướng được lưu trong tệp `.modelcraft`. Chúng không được xuất sang các định dạng khác.
