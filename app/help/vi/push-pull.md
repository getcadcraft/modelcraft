---
title: Đẩy và kéo mặt thành khối đặc
summary: Biến một mặt thành hộp, làm tòa nhà cao hơn hoặc thấp hơn, thêm một khoang lồi hoặc lõm, và lặp lại một khoảng cách bằng nhấp đúp.
keywords: đẩy kéo, đùn, chiều cao, khối đặc, hộp, khối lượng, cao hơn, hốc lõm, đẩy ra, lặp lại, nhấp đúp, thể tích, cao độ, trên mặt, phẳng, cùng chiều cao
from: dc093c91
---

{{ui:Đẩy/kéo}} ({{key:P}}) di chuyển một mặt theo chính hướng của nó: lên và xuống với sàn, vào và ra với tường. Điều xảy ra tùy thuộc vào mặt đó.

## Tạo khối đặc từ một mặt

1. Vẽ một mặt, ví dụ một hình chữ nhật trên nền ([Vẽ mặt](topic:draw-faces)).
2. Nhấn {{key:P}}.
3. Di chuột qua mặt. Mặt được làm nổi bật.
4. Nhấp vào mặt, rồi di chuyển con trỏ. Mặt nâng lên (hoặc hạ xuống) và các cạnh bên mọc ra từ các mép của nó. Ô giá trị ({{ui:Khoảng cách}}) và gợi ý hiển thị khoảng cách.
5. Nhấp để kết thúc, hoặc nhập khoảng cách và nhấn {{key:Enter}}: `3m`, `10'`, `2700` trong mô hình đơn vị milimét.

   Bây giờ bạn có một khối đặc kín. Chọn tất cả và nhóm chúng (xem [Nhóm và cấu kiện](topic:groups-components)): {{ui:Thông tin đối tượng}} khi đó hiển thị "Khối đặc: Có" và thể tích của nó.

Một mặt đơn lẻ có thể đi theo hai hướng: kéo lên để có một khối nhô khỏi mặt đất, đẩy xuống để có một hố hoặc móng.

:::tip
Thay vì nhấp hai lần, hãy nhấn giữ trên mặt, kéo và thả. Trên màn hình cảm ứng, đó là cách tự nhiên: nhấn, kéo, nhấc lên.
:::

## Kéo tới cao độ của một thứ khác

Khi đang kéo, di chuột qua một góc, điểm giữa, cạnh hoặc đường dẫn của một phần khác của mô hình. Mặt sẽ bắt vào cao độ đó và một dấu hiện điểm đó. Dùng để làm hai khối cùng chiều cao, hoặc dừng tại một đường dẫn bạn đã đặt bằng [thước dây](topic:guides-measure).

Bạn cũng có thể di chuột qua một mặt song song với mặt đang đẩy, chẳng hạn đỉnh của một khối khác hoặc đỉnh của hộp mà một cột đứng trên. Gợi ý nói "Trên mặt", và mặt bạn đang đẩy sẽ kết thúc ngang bằng với nó. Ví dụ, đẩy mặt trong của một ống xuống cho đến khi ngang bằng với hộp dưới ống.

Một mặt nghiêng so với mặt bạn đang đẩy không đặt được cao độ. Khoảng cách đi theo con trỏ. Mặt nằm phía sau mặt bạn đang đẩy cũng vậy.

Khi một mặt được đẩy kết thúc bằng phẳng với các mặt xung quanh, các cạnh bên của nó biến mất. Không có cạnh bên cao bằng không nào còn sót lại, và đường viền bạn đã vẽ vẫn nằm trên mặt, nên bạn có thể đẩy lại sau. Để nó thành một mặt lại, xóa các cạnh của đường viền bằng {{ui:Tẩy}}: hai mặt sẽ nối lại.

## Làm hộp cao hơn hoặc thấp hơn

Đẩy/kéo đỉnh của một hộp. Vì các cạnh bên đã chạy thẳng lên từ đó, đỉnh chỉ đơn giản di chuyển: hộp cao hơn hoặc thấp hơn, và không có cạnh mới nào được tạo.

- Đẩy đỉnh xuống hết tới đáy sẽ xóa hộp. ModelCraft dừng ở chiều cao bằng không; nó không bao giờ lật hộp trong ra ngoài.
- Điều tương tự áp dụng cho mọi mặt mà các mặt lân cận đều chạy dọc theo hướng của nó, chẳng hạn đầu của một bức tường.

## Thêm khoang lồi hoặc hốc lõm

1. Vẽ một hình chữ nhật ở cạnh của một hộp (bắt đầu trên mặt; nó nằm trong mặt phẳng của mặt).
2. Nhấn {{key:P}} và kéo hình chữ nhật mới **ra ngoài**. Nó thêm vật liệu: một khoang lồi, một ống khói, một mái che.
3. Hoặc đẩy nó **vào trong**. Nó cắt một hốc lõm: một hiên, một hốc tường, một lối vào lùi sâu.

Khi các cạnh bên của phần mới thẳng hàng với các mặt đã có sẵn, chúng gộp thành một mặt, nên bạn không có các đường thừa trên một bức tường phẳng.

## Đẩy xuyên qua hết

Đẩy một mặt vào một khối đặc sẽ dừng ở mặt đầu tiên phía sau nó. Khi chạm tới mặt đó, nó cắt một lỗ thông qua. Đó là cách bạn tạo cửa sổ và cửa đi trong một bức tường có độ dày. Xem [Cắt lỗ mở qua tường](topic:openings).

## Nhập khoảng cách

Sau khi nhấp vào mặt, nhập khoảng cách và nhấn {{key:Enter}}.

- Khoảng cách đã nhập đi theo hướng bạn đang di chuyển. Nếu bạn chưa di chuyển, nó đi về phía trước của mặt (ra khỏi khối đặc, lên từ mặt đất).
- Nhập một số âm, chẳng hạn `-500`, để đi theo hướng ngược lại.
- Nếu bạn đổi ý trước khi nhấp, nhấn {{key:Esc}}. Mặt sẽ quay lại.

## Lặp lại khoảng cách cuối

Sau một lần đẩy/kéo, nhấp đúp vào một mặt khác khi {{ui:Đẩy/kéo}} vẫn đang được chọn. Nó di chuyển cùng khoảng cách. Đây là cách nhanh để đặt nhiều bức tường hoặc nhiều sàn có cùng độ dày hoặc chiều cao.

ModelCraft ghi nhớ khoảng cách cho đến khi bạn chuyển sang công cụ khác.

## Điều cần biết

- Đẩy/kéo hoạt động trên một mặt tại một thời điểm. Nếu bạn nhấp vào thứ không phải mặt, thanh trạng thái sẽ nói "Đẩy/kéo hoạt động trên một mặt. Hãy nhấp vào một mặt."
- Để đẩy/kéo một mặt bên trong một nhóm hoặc cấu kiện, hãy mở nó trước (nhấp đúp vào nó).
- Khi bật **Va chạm**, một lần đẩy hoặc kéo chạm vào khối đặc khác sẽ dừng ở chỗ chạm, và gợi ý nói nó chạm vào cái gì (tên đối tượng, hoặc "hình học rời trong nhóm này") và làm nổi bật các mặt nó đã gặp. Một hốc mà bạn đẩy vào chính khối đặc của nó (ví dụ một mặt dời song song được đẩy xuống lại) là một phần của khối đó và không bao giờ bị các thành của nó chặn lại.
- Hai khối đặc bị đẩy vào nhau không cắt hay nối nhau: các mặt của chúng chỉ xuyên qua. Xem [Chưa xây dựng](topic:not-built-yet).
