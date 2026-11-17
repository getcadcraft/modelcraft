---
title: Xem lại mô hình trong kính VR
summary: Đi bộ trong mô hình ở kích thước thật bằng kính VR: nhảy quanh, xoay, đo, cắt mở, đặt vấn đề bằng hình ảnh, xem như mô hình để bàn, và gặp những người khác trong phiên trực tiếp.
keywords: vr, thực tế ảo, kính, webxr, xr, nhập vai, quest, oculus, vive, index, pico, đi qua, đi bộ, dịch chuyển, xem lại, xem lại thiết kế, đo, mặt cắt, cắt, vấn đề, bcf, để bàn, mô hình tỷ lệ, hiện diện, hình đại diện, trực tiếp, cùng nhau
from: fa2f591a
---

{{ui:Xem lại trong VR}} đưa bạn vào bên trong mô hình bằng kính VR, ở kích thước thật. Bạn đứng tại vị trí camera của khung nhìn, trên sàn bên dưới, hướng về cùng một phía. Không có gì được tải lên: kính hiển thị những gì trình duyệt vẽ trên máy tính này (hoặc trong trình duyệt của chính kính).

## Bạn cần gì

- Một kính mà trình duyệt điều khiển được (WebXR): trình duyệt riêng của kính độc lập, hoặc Chrome hay Edge trên PC có kết nối kính.
- ModelCraft mở trên một trang an toàn (https), như trên trang này.

Khi không có kính, {{ui:Xem lại trong VR}} bị mờ và cho biết lý do.

## Bắt đầu

1. Đặt khung nhìn ở nơi bạn muốn bắt đầu: trong một căn phòng, hoặc bên ngoài nhìn vào tòa nhà.
2. Nhấp {{ui:Khung nhìn}} trong nhóm {{ui:Camera}}, rồi {{ui:Xem lại trong VR}}.
3. Đeo kính vào.

Menu nằm ở mu bàn tay trái của bạn. Trỏ vào nó bằng tay cầm bên phải và bóp cò để chọn một nút. (Chỉ với một tay, menu lơ lửng trước vị trí bạn bắt đầu.)

## Nó trông như thế nào

Kính hiển thị mô hình theo kiểu [xem trực tiếp](topic:live-view): các kiểu và vật liệu bạn đã gán cho mặt, bầu trời và mặt trời theo vị trí và ngày của mô hình cùng bóng đổ của nó, đèn, cây và đá rải rác, và ánh sáng phản xạ từ tường và sàn (được tính trên máy tính này khi bạn nhìn quanh, và theo bạn khi bạn di chuyển). Độ sáng và phép biến đổi khung nhìn (ACES hoặc AgX) là của [Kết xuất ảnh](topic:render). Lượng hiển thị phụ thuộc vào những gì trình duyệt của kính có, như trên máy tính; che khuất môi trường (ambient occlusion), phản xạ và độ sáng tỏa (bloom) vẫn chỉ có trên máy tính.

## Di chuyển

- **Nhảy:** trong {{ui:Di chuyển}}, trỏ vào một sàn và bóp cò; bạn sẽ đáp xuống đó. Hoặc đẩy cần điều khiển về phía trước để nhắm, rồi thả để nhảy. Bạn chỉ có thể đáp xuống sàn và mặt đất (các bề mặt hướng lên), không bao giờ lên tường.
- **Xoay:** đẩy cần sang trái hoặc phải: bạn xoay 30° mỗi lần.
- **Đi bộ:** trong khu vực chơi của bạn, cứ đi bộ.

## Đo

Chọn {{ui:Đo}}, rồi bóp cò tại hai điểm. Khoảng cách hiện giữa chúng, theo đơn vị của mô hình. Một điểm gần góc sẽ bắt vào góc.

## Cắt mở

Chọn {{ui:Mặt cắt}} và bóp cò trên một bề mặt:

- trên tường (hoặc bất cứ thứ gì không phải sàn): mọi thứ giữa bạn và bề mặt đó bị cắt bỏ, để bạn nhìn vào bên trong. Cách này hoạt động tốt nhất từ bên ngoài, hoặc qua một căn phòng;
- trên sàn, từ trên cao: một mặt cắt mặt bằng cách sàn đó 1.2 m, để các tường hiển thị phần dưới.

{{ui:Xóa}} bỏ mặt cắt và các phép đo. Nếu một mặt phẳng cắt đang cắt mô hình trong khung nhìn khi bạn bắt đầu, kính sẽ bắt đầu với nó.

## Đặt một vấn đề

Chọn {{ui:Vấn đề}} và bóp cò tại chỗ có vấn đề. Một ghim có số sẽ đánh dấu nó, và ModelCraft giữ vấn đề cùng một hình ảnh của những gì bạn thấy và vị trí bạn đứng. Khi rời VR, các vấn đề nằm trong danh sách {{ui:Vấn đề}} ở bên phải:

- nút con mắt hiển thị vấn đề từ nơi nó được đặt;
- {{ui:Lưu dạng BCF}} tải xuống tất cả dưới dạng tệp BCF, mà các chương trình xem xét BIM mở được (có cả camera và hình ảnh);
- chúng cũng được lưu trong tệp `.modelcraft`.

Thêm bình luận vào một vấn đề sau khi rời VR, trong một chương trình BCF: nhập trong kính hiện chưa xây dựng.

## Xem như mô hình để bàn

{{ui:Mặt bàn}} thu nhỏ mô hình để vừa một chiếc bàn trước mặt bạn; đi quanh nó, hoặc xoay nó bằng cần điều khiển. {{ui:Kích thước thật}} đưa bạn về nơi bạn đã đứng.

## Cùng những người khác, trực tiếp

Trong một [phiên trực tiếp](topic:work-live), mọi người trong VR thấy những người khác là một đầu và hai bàn tay với màu riêng, kèm tên của họ, và một chấm ở nơi mỗi người đang trỏ. Mọi chỉnh sửa của bất kỳ ai đều đến kính của bạn trong chốc lát. Những người ngồi ở bàn chưa được hiển thị trong kính.

## Rời khỏi

Chọn {{ui:Thoát VR}} (hoặc tháo kính và kết thúc tại đó). Khung nhìn trên màn hình sẽ di chuyển đến nơi đầu bạn đã ở.

:::note
Chỉ mới thử nghiệm bằng trình giả lập kính, chưa thử với kính thật. Một mô hình lớn có thể làm kính giật hình: hãy ẩn những gì không cần trước ([ẩn và cô lập](topic:hide-isolate)).
:::
