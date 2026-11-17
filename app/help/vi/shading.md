---
title: Tạo vật liệu bằng nút
summary: Tạo vật liệu từ kết cấu, hình ảnh và phép tính trong không gian làm việc Đổ bóng, xem nó trong khung nhìn ngay khi bạn làm, và tô mặt bằng vật liệu đó.
keywords: đổ bóng, bake, nướng, nướng kết cấu, occlusion môi trường, ao, độ cong, bake pháp tuyến, đa giác cao, đa giác thấp, bản đồ ánh sáng, decal, nhãn dán, logo, nhãn, tô kết cấu, cọ vẽ, vật liệu, materialx, mtlx, openpbr, standard surface, thư viện vật liệu, librarycraft, bộ kết cấu, pbr, nhập kết cấu, zip, cc0, kéo thả, nút, trình chỉnh sửa nút, shader, kết cấu, thủ tục, nhiễu, ô cờ, voronoi, ô, sóng, gạch, ngói, gỗ, đá cẩm thạch, chuyển màu, bụi bẩn, mòn cạnh, dải màu, trộn, bump, bản đồ pháp tuyến, độ nhám, kim loại, độ mờ, cắt hình, phát sáng, phát xạ, dịch chuyển, ánh xạ hộp, triplanar, uv, hình ảnh, nút hình ảnh
from: d7368b21
---

Một vật liệu tạo trong không gian làm việc **Đổ bóng** thuộc về tệp. Nó là một đồ thị nhỏ: các **nút** tạo kết cấu, hình ảnh và số, được nối vào **Đầu ra vật liệu**, mà các đầu vào là diện mạo của bề mặt — màu cơ bản, độ nhám, kim loại, pháp tuyến, độ mờ, phát xạ và phần còn lại của mô hình OpenPBR. Bạn tô mặt bằng nó như bất kỳ vật liệu thư viện nào, và mọi thay đổi hiển thị ngay trong khung nhìn.

## Mở ra

Chọn {{ui:Đổ bóng}} trong danh sách không gian làm việc. Khung nhìn 3D giữ phần trên của màn hình và **trình chỉnh sửa nút** chiếm phần dưới. Bảng bên phải liệt kê các vật liệu riêng của tệp.

- {{ui:Vật liệu mới}} tạo một vật liệu màu xám chỉ có Đầu ra vật liệu.
- **Tạo một bản sao chỉnh sửa được của vật liệu thư viện** biến gạch, gỗ, ngói và các vật liệu khác thành một đồ thị bạn có thể thay đổi: kết cấu của nó đi qua một nút Kết cấu thư viện, còn độ gồ ghề đi qua một nút Bump.
- {{ui:Tô bằng nó}} tô các mặt hoặc nhóm đang được chọn, hoặc chọn vật liệu cho công cụ Tô màu. Các vật liệu của công cụ Tô màu cũng liệt kê các vật liệu của tệp dưới **Trong tệp này**.
- {{ui:Nhân bản}} và {{ui:Xóa}} làm việc trên vật liệu bạn đang chỉnh sửa. Xóa không thể hoàn tác: các mặt đã tô bằng nó sẽ hiển thị màu mặc định cho đến khi bạn tô lại.

## Vật liệu từ thư viện

**Thư viện vật liệu (Library)** trong bảng liệt kê các vật liệu của thư viện, mỗi cái có ảnh xem trước được kết xuất bằng bộ theo dõi đường đi của CadCraft. Chúng là các bộ kết cấu phát hành theo CC0, được ghi công cho những người đã làm ra chúng.

- Nhấp một vật liệu để đưa nó vào tệp (các hình ảnh của nó đi kèm) và, khi đang chọn mặt hoặc nhóm, tô chúng.
- Kéo một vật liệu thả lên một mặt hoặc một nhóm trong khung nhìn để chỉ tô phần đó.
- Nó trở thành một trong các vật liệu của tệp: thay đổi các nút của nó như bất kỳ vật liệu nào. Phần ghi công hiển thị trong bảng và được giữ lại trong tệp.

## Nhập một bộ kết cấu

{{ui:Hình ảnh hoặc tệp zip…}} hoặc {{ui:Một thư mục…}} dưới **Nhập bộ kết cấu** tạo một vật liệu từ một bộ bản đồ. Các bản đồ được nhận diện qua các từ trong tên tệp: color, albedo, diffuse hoặc basecolor cho màu; roughness (hoặc gloss, được đổi thành độ nhám) hoặc metalness hay metallic cho kim loại; normal (OpenGL hoặc DirectX, theo `gl` / `dx` trong tên) cho pháp tuyến; height hoặc displacement cho độ cao; ambient occlusion; opacity; emission. Các bản đồ đóng gói (ARM, ORM) bị bỏ qua. Ô lát bắt đầu ở 1 × 1 m: đặt kích thước thực của nó trên Đầu ra vật liệu. Độ cao được đưa vào dịch chuyển với tỷ lệ là 0 — tăng tỷ lệ để dùng nó trên lưới.

## MaterialX

MaterialX là định dạng mở mà các chương trình 3D và kết xuất khác dùng để chuyển vật liệu cho nhau.

- {{ui:Xuất thành MaterialX…}} lưu vật liệu bạn đang chỉnh sửa: các giá trị của nó, và mỗi kết cấu dưới dạng ảnh PNG bên cạnh tệp `.mtlx` (trong một tệp zip). Chọn shader để ghi: **OpenPBR Surface** (MaterialX 1.39, cùng mô hình mà ModelCraft dùng) hoặc **Standard Surface** (MaterialX 1.38, được nhiều chương trình đọc hiện nay). Các kết cấu được đặt theo tọa độ UV tính bằng mét; cách đặt hộp và triplanar được ghi dưới dạng UV.
- {{ui:Nhập MaterialX…}} (hoặc {{ui:Từ một thư mục…}}) đọc các tệp `.mtlx` với shader OpenPBR, Standard Surface, UsdPreviewSurface hoặc glTF PBR. Hãy đưa thêm các hình ảnh, hoặc một tệp zip chứa mọi thứ: một hình ảnh được tìm theo đường dẫn, tên, hoặc tên với một loại ảnh khác (một tệp `.exr` có thể đến dưới dạng `.jpg` đi kèm bên cạnh). Kết cấu, bản đồ pháp tuyến, phép tính, phép trộn và dịch chuyển được đưa vào dưới dạng nút; mọi thứ khác giữ lại giá trị của nó, và dòng trạng thái cho biết những gì bị bỏ qua.

## Decal

Decal là một hình ảnh được đặt lên một bề mặt — một logo, một biển hiệu, một nhãn, một vết bẩn — với vật liệu riêng.

- Đặt **Chiều rộng decal mới**, rồi {{ui:Đặt decal…}} (hoặc {{ui:Decal}} trên thanh công cụ), chọn một ảnh PNG, JPEG hoặc WebP và nhấp vào một mặt. Hình ảnh được chiếu lên các bề mặt ở đó, giữ nguyên tỷ lệ; phần trong suốt của PNG vẫn xuyên thấu.
- Decal thuộc về nhóm hoặc cấu kiện bạn đã nhấp vào và di chuyển cùng nó. Nó phủ các mặt nằm trong hộp của nó và hướng về cùng một phía, và dừng ở các cạnh của thứ nó nằm trên.
- Mỗi decal có vật liệu riêng, được đặt tên **Decal: <hình ảnh>**, trong danh sách của tệp: chỉnh sửa như bất kỳ vật liệu nào (độ nhám, một độ gồ ghề, một độ phát sáng). {{ui:Vật liệu}} bên cạnh decal sẽ mở nó.
- Bên cạnh mỗi decal có: chiều rộng của nó (chiều cao theo hình ảnh), {{ui:Xoay}} (một phần tư vòng) và {{ui:Xóa}}. Decal được giữ cùng các vật liệu của tệp, nằm ngoài Hoàn tác.
- Chúng hiển thị trong khung nhìn có bóng, trong kết xuất nhanh và trong ảnh chất lượng cao.

## Vẽ lên kết cấu

{{ui:Tô họa tiết}} (hoặc {{ui:Tô màu}} dưới **Tô trên kết cấu**) biến con trỏ thành một cọ tròn. Kéo trên một mặt đang mang một trong các vật liệu của tệp này: cọ vẽ lên hình ảnh nằm sau màu cơ bản của nó.

- Trên lưới, nó vẽ theo UV của lưới (hãy mở UV trong không gian làm việc UV trước); trên các mặt khác, nó vẽ xuyên qua mặt, nên nét vẽ lặp lại theo ô lát của vật liệu.
- Một vật liệu có màu cơ bản là một màu đơn sẽ nhận một hình ảnh mới 512 × 512 pixel của màu đó lần đầu bạn vẽ lên nó. Một vật liệu có màu cơ bản đến từ các nút khác cần một nút Hình ảnh nối vào Màu cơ bản.
- Đặt màu cọ, kích thước (tính bằng pixel của hình ảnh), độ mạnh và độ cứng trong bảng. {{ui:Hoàn tác nét tô}} hoặc Ctrl+Z (khi đang vẽ) sẽ lấy lại một nét, tối đa 20 nét gần nhất.
- Hình ảnh đã vẽ được lưu trong tệp. Không thể vẽ lên vật liệu thư viện: hãy tạo một bản sao chỉnh sửa được trước.

## Nướng kết cấu

**Nướng kết cấu** ghi những gì hình dạng và cảnh tạo ra cho một bề mặt thành các hình ảnh dọc theo UV của một lưới.

- Chọn một lưới có UV (mở UV trong không gian làm việc UV), đánh dấu các bản đồ và nhấn {{ui:Bake}}:
  - **Ambient occlusion** — mỗi điểm thoáng đến mức nào: các góc, khe nếp gấp và chỗ nằm dưới vật khác sẽ tối hơn. Mọi thứ hiển thị trong mô hình đều đổ bóng lên nó, tới khoảng cách occlusion.
  - **Curvature** — sáng dọc các cạnh ngoài, tối ở các góc trong, xám trung bình trên các phần phẳng hoặc cong nhẹ, trong phạm vi độ rộng cạnh bạn đặt.
  - **Pháp tuyến từ đối tượng chi tiết cao** — chọn thêm một bản sao chi tiết: độ chi tiết bề mặt của nó được ghi thành bản đồ pháp tuyến cho vật đơn giản hơn (vật có ít tam giác hơn được nướng lên). Khoảng cách tìm kiếm là khoảng cách tối đa giữa hai bề mặt.
  - **Lighting** — mặt trời ở vị trí và ngày của mô hình (Style) cùng bóng đổ của nó, cộng với bầu trời, thành một bản đồ ánh sáng.
- Các hình ảnh được thêm vào tệp và xuất hiện trong các nút Hình ảnh. Nếu vật liệu bạn đang chỉnh sửa có một nút **Bụi bẩn và mòn cạnh**, nó sẽ đọc ngay occlusion và độ cong mới.
- Càng nhiều tia trên mỗi texel thì occlusion và ánh sáng càng mịn và càng lâu. Nướng chạy trên các nhân bộ xử lý của máy ở nền; {{ui:Dừng bake}} sẽ dừng nó.

## Xây dựng đồ thị

1. {{ui:Thêm nút…}} (hoặc {{key:Shift+A}} trong trình chỉnh sửa nút) thêm một nút vào giữa trình chỉnh sửa.
2. Kéo từ một chấm đầu ra (bên phải nút) tới một chấm đầu vào (bên trái nút) để nối chúng. Một liên kết thứ hai vào cùng đầu vào sẽ thay thế liên kết đầu tiên; kéo một đầu vào đã nối ra xa để gỡ liên kết.
3. Đầu vào chưa nối sẽ hiển thị giá trị của nó: gõ một số hoặc chọn một màu. Cài đặt nằm ở dưới cùng của mỗi nút.

Kéo một nút bằng tiêu đề để di chuyển nó, kéo vùng trống để di chuyển khung nhìn, và dùng con lăn để thu phóng. {{key:Delete}} xóa các nút hoặc liên kết đang chọn, {{key:Mod+Z}} hoàn tác, {{key:Mod+D}} nhân bản, {{key:F}} hiển thị mọi nút. Mỗi thay đổi là một bước hoàn tác của trình chỉnh sửa nút. Hoàn tác của mô hình không thay đổi vật liệu.

| Nút | Chúng tạo ra gì |
|---|---|
| Tọa độ kết cấu | Vị trí một điểm trên ô lát: lặp lại, dịch chuyển, xoay một phần tư. |
| Giá trị, Màu | Một số, một màu. |
| Hình ảnh | Một hình ảnh của tệp (một ảnh đi kèm với mô hình đã nhập, hoặc một ảnh bạn thêm bằng {{ui:Thêm hình ảnh…}}). Chọn **Màu** cho ảnh chụp và **Dữ liệu** cho bản đồ độ nhám hoặc pháp tuyến. |
| Kết cấu thư viện | Kết cấu, độ nhám và độ cao của một vật liệu thư viện. |
| Ô cờ, Nhiễu | Các ô vuông; nhiễu fractal mịn với chi tiết, độ nhám và hạt giống của nó. |
| Ô Voronoi, Sóng, Chuyển màu | Các ô (khoảng cách tới điểm gần nhất, các cạnh giữa các ô, một màu cho mỗi ô); các dải ngang, dọc hoặc chéo, dạng sin, răng cưa hoặc tam giác, bị uốn bởi nhiễu; các chuyển màu tuyến tính, bậc hai, tỏa tròn và cầu. |
| Gạch, Ngói lát | Các hàng gạch lệch đều, hoặc lưới ngói: màu, vữa hoặc chất trám, khe hở và vát mép tính bằng mét, độ cao cho các độ gồ ghề, một số ngẫu nhiên cho mỗi viên. |
| Gỗ, Đá cẩm thạch | Các vòng dọc theo thớ với các sợi mịn; các vân bị uốn bởi xoáy rối. |
| Bụi bẩn và mòn cạnh | Làm mòn các cạnh lồi và làm bẩn các chỗ lõm từ độ cong và các ảnh occlusion của lưới ([Nướng kết cấu](topic:shading#bake-textures) tạo chúng; hoặc đặt hai cài đặt hình ảnh của nó, trong bố cục UV của lưới: đặt vật liệu theo tọa độ UV). Không có chúng thì nó không thay đổi gì. |
| Trộn màu, Dải màu, Sắc độ/bão hòa/giá trị, Độ sáng và tương phản, Đảo ngược, Gamma, Tách và gộp RGB | Xử lý màu. |
| Toán, Ánh xạ khoảng | Phép tính trên số (cộng, nhân, lũy thừa, bước mượt và hơn thế). |
| Bump, Bản đồ pháp tuyến | Một pháp tuyến từ độ cao (Bump) hoặc từ một ảnh bản đồ pháp tuyến (Bản đồ pháp tuyến: chọn hướng của kênh xanh lục). |

## Đầu ra vật liệu

Các cài đặt của nó cho biết kết cấu nằm trên các bề mặt như thế nào:

- **Chiều rộng ô lát** và **Chiều cao ô lát**: một ô kết cấu phủ bao nhiêu mét. Mọi thứ đồ thị tạo ra đều lặp lại trên ô lát mà không có đường nối.
- **Đặt theo**: **Tọa độ UV** đi theo mặt (mặt đẩy/kéo: dọc theo mỗi mặt; lưới: theo UV của chúng, một đơn vị UV = một ô lát), **Hộp** chiếu từ trục gần nhất trong ba trục, **Triplanar** trộn ba phép chiếu trên các bề mặt nghiêng (**Độ sắc nét hòa trộn**: càng cao thì hòa trộn càng cứng).
- **Độ mạnh pháp tuyến** điều chỉnh đầu vào pháp tuyến. **Tỷ lệ dịch chuyển** đặt mức đầu vào dịch chuyển đưa các đỉnh của lưới đi bao xa.
- {{ui:Thêm đầu vào}} hiển thị các đầu vào OpenPBR còn lại: lớp phủ, lông, dưới bề mặt, màng mỏng, truyền qua và màu của chúng.

## Trong ảnh chất lượng cao

Bộ theo dõi đường đi đọc màu cơ bản, độ nhám, kim loại, độ mờ, pháp tuyến và phát xạ từ đồ thị khi chúng thay đổi trên bề mặt. Mọi đầu vào khác bạn nối (ví dụ một lớp phủ thay đổi) được dùng ở giá trị trung bình; bảng cho biết điều đó. Một phần cắt từ một kết cấu độ mờ hiển thị hình dạng của nó, và bóng của nó là một lớp xuyên thấu đều. Một kết cấu phát sáng chiếu sáng những gì nó hướng tới, mà không được lấy mẫu như một đèn.

**Độ cao** chỉ dịch chuyển các đỉnh của lưới, nên hãy thêm một bộ điều chỉnh Subdivision để có chi tiết ([Bộ điều chỉnh](topic:modifiers)). Các mặt đẩy/kéo giữ hình dạng và nhận độ gồ ghề từ pháp tuyến.

:::tip
Trên máy tính có WebGPU, đồ thị được tính trên card đồ họa; không có WebGPU, nó được tính trên bộ xử lý. Kết quả giống nhau.
:::
