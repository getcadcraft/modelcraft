---
title: Chi tiết về các định dạng tệp
summary: Chính xác những gì mỗi định dạng mà ModelCraft mở, nhập và xuất giữ lại, chuyển đổi và bỏ qua.
keywords: định dạng, loại tệp, modelcraft, json, 3dm, nurbs, skp, collada, dae, obj, mtl, gltf, glb, stl, step, stp, ap214, ap242, ply, alembic, abc, bộ đệm, fbx, 3mf, ifc, dwg, dxf, đơn vị, trục, trục Y lên, trục Z lên, milimét, giới hạn
from: c47d2d28
---

Mô hình của ModelCraft tính bằng mét, với trục Z (xanh dương) hướng lên. Mọi định dạng dưới đây đều được chuyển đổi đến hoặc đi từ hệ đó.

## ModelCraft (.modelcraft)

| Thao tác | Chi tiết |
|---|---|
| Mở | {{ui:Mở}} ({{key:Mod+O}}) hoặc thả tệp vào khung nhìn. Các tệp có đuôi `.json` cũng được chấp nhận |
| Lưu | {{ui:Lưu}} ({{key:Mod+S}}), dưới dạng tải về |
| Giữ lại | Mọi thứ: hình học, mặt và màu của chúng, vật liệu và hình ảnh kết cấu đã nhập, đèn, cạnh mềm, nhóm, cấu kiện, tên, đường dẫn, cảnh, đơn vị, camera và kiểu lần cuối |
| Bỏ qua | Lịch sử hoàn tác |
| Giới hạn | 200 MB |

Một tệp được lưu bởi ModelCraft mới hơn của bạn sẽ bị từ chối: "Mô hình này được lưu bởi ModelCraft mới hơn (phiên bản tệp …). Cập nhật ModelCraft để mở nó." Một tệp không phải là mô hình ModelCraft sẽ hiện "Tệp này không phải là mô hình ModelCraft (không phải JSON)." hoặc "Đây không phải là tệp ModelCraft mà chúng tôi có thể mở: …".

## USD (.usd, .usda, .usdc, .usdz)

Mở, nhập, và {{ui:Lưu thành}} hoặc {{ui:Xuất}} › {{ui:USD (.usda, .usdc, .usdz)…}}. Một tệp USD do ModelCraft lưu sẽ mở lại mà không mất gì; các tệp USD của chương trình khác được mở dưới dạng lưới, nhóm, cấu kiện, đèn và camera. Xem [Lưu, mở và xuất USD](topic:usd).

## Collada (.dae)

Nhập và xuất. Đây là định dạng tốt nhất để trao đổi mô hình với các trình dựng hình 3D khác.

- **Xuất:** Collada 1.4.1, trục Z lên, mét. Mỗi nhóm hoặc định nghĩa cấu kiện có một hình học; các cấu kiện được ghi một lần và đặt bằng tham chiếu, nên chúng vẫn dùng chung. Mặt có lỗ hoặc đường viền lõm được tách thành tam giác. Màu trở thành vật liệu. Các cạnh rời được ghi dưới dạng đường thẳng. Tên không hợp lệ với định dạng sẽ được điều chỉnh, và tên gốc được giữ bên cạnh.
- **Nhập:** tam giác, đa giác (có lỗ), quạt và dải tam giác trở thành mặt; đường thẳng trở thành cạnh. Các phép biến đổi của nút, trục lên của tệp và đơn vị của nó được áp dụng. Một nút đặt ở nhiều nơi, hoặc một hình học được nhiều nút dùng, sẽ vào như một cấu kiện; các nút khác vào như nhóm. Màu vật liệu (khuếch tán) trở thành màu của mặt.
- **Không nhập:** hình ảnh kết cấu, khung xương và biến dạng, camera, đèn, một số kiểu biến đổi (look-at và skew), và các tham chiếu đến tệp khác. Thanh trạng thái đếm chúng.
- **Mất khi xuất:** cạnh nào là mềm. **Khi nhập,** các bề mặt đã tam giác hóa vẫn là tam giác, với các đường chéo được làm mềm để các vùng phẳng vẫn hiển thị như một bề mặt.

## OBJ (.obj, .mtl)

Nhập và xuất.

- **Nhập:** thả tệp `.obj` cùng với `.mtl` và các ảnh kết cấu (hoặc chỉ nhập `.obj`: nó vào mà không có vật liệu, và thanh trạng thái cho biết `.mtl` nào đang cần). Đọc theo mét với trục Y hướng lên. Mỗi đối tượng (`o`, nếu không có thì `g`) trở thành một [lưới](topic:meshes), giữ nguyên các mặt của nó (tứ giác vẫn là tứ giác). Tọa độ kết cấu, pháp tuyến và màu theo đỉnh được giữ lại. Ảnh màu của vật liệu (`map_Kd`, PNG, JPEG hoặc WebP) vào như một hình ảnh kết cấu, với các tùy chọn tỷ lệ và độ lệch; nếu không thì dùng màu của nó (`Kd`). Các cạnh nơi pháp tuyến của tệp bị gãy là cạnh cứng; khi không có pháp tuyến, các nhóm làm mượt của tệp quyết định. Các bản đồ khác (bump, normal), điểm, đường thẳng và đường cong được đếm và bỏ qua. OBJ không có đơn vị, nên một mô hình làm bằng milimét hoặc inch sẽ vào với kích thước sai: hãy co giãn nó sau khi nhập (xem [Xoay và co giãn](topic:rotate-scale#fix-an-import-that-came-in-the-wrong-size)).
- **Xuất:** mét, trục Y hướng lên, tọa độ thế giới. Một đối tượng cho mỗi vị trí nhóm; các cấu kiện được ghi đầy đủ tại mỗi vị trí. Lưới giữ các mặt, tọa độ kết cấu và pháp tuyến của riêng chúng; các mặt nối bằng [cạnh mềm](topic:soften) có một pháp tuyến cho mỗi góc. Khi mô hình có màu, một tệp `.mtl` được tải về cùng với `.obj`. Khi có hình ảnh kết cấu đã nhập, `.obj`, `.mtl` và các ảnh được tải về cùng nhau trong một tệp `.zip`.
- **Giới hạn:** 2 triệu đỉnh hoặc mặt; 64 MB văn bản.

## glTF (.glb, .gltf)

Nhập và xuất, glTF 2.0.

- **Nhập:** một `.glb`, hoặc một `.gltf` cùng với `.bin` và các tệp kết cấu: thả tất cả vào khung nhìn cùng lúc (hoặc chọn `.glb`). Một `.gltf` đứng riêng sẽ cho biết tệp nào nó cần: "Tệp .gltf này cần "…": hãy mở phiên bản .glb, hoặc thả .gltf cùng với các tệp của nó."
  - **Lưới** vào như các [lưới](topic:meshes), mỗi lưới trong tệp một cái, với pháp tuyến, tọa độ kết cấu và màu theo đỉnh của tệp được giữ lại. Các cạnh nơi pháp tuyến của tệp bị gãy là cạnh cứng; phần còn lại là cạnh mềm. Một lưới được dùng ở nhiều nơi vẫn dùng chung.
  - **Nút** trở thành nhóm, được đặt tên như trong tệp. Các lưới được tạo thể hiện (EXT_mesh_gpu_instancing) vào như một lưới đặt nhiều lần.
  - **Vật liệu:** một hình ảnh kết cấu màu cơ sở (PNG, JPEG hoặc WebP) vào như một hình ảnh kết cấu, đặt theo tọa độ kết cấu của tệp (cùng với bất kỳ phép biến đổi kết cấu nào), và được giữ khi bạn lưu; nếu không thì dùng màu cơ sở. Kim loại, độ nhám, bản đồ pháp tuyến, kính, lớp phủ bóng, lớp vải và các phần mở rộng vật liệu khác được đọc nhưng chưa được giữ: thanh trạng thái sẽ nói điều đó.
  - **Đèn** (KHR_lights_punctual): đèn điểm và đèn chiếu trở thành [đèn](topic:lights). Đèn định hướng được đếm: mặt trời chiếu sáng mô hình.
  - **Camera** trở thành [cảnh](topic:scenes).
  - **Nhân vật có khung xương** vào ở tư thế nghỉ như tệp đặt; xương và hoạt ảnh của chúng, cùng với các đích biến dạng, được đếm và chưa được giữ.
  - **Tệp nén** (Draco, meshopt) và dữ liệu lượng tử hóa được đọc. Bộ giải mã chỉ được tải cho tệp cần chúng.
  - Điểm và đường thẳng được đếm và bỏ qua (lưới chỉ chứa mặt). Hình ảnh KTX2 bị bỏ qua; các mặt giữ màu của chúng.
- **Xuất** (`.glb`): glTF 2.0 nhị phân, mét, trục Y hướng lên. Một lưới cho mỗi định nghĩa, nên cấu kiện vẫn dùng chung. Lưới giữ pháp tuyến, tọa độ kết cấu và màu theo đỉnh; các mặt nối bằng [cạnh mềm](topic:soften) mang pháp tuyến mượt. Màu và vật liệu trở thành vật liệu (một vật liệu là màu của nó); các hình ảnh kết cấu đã nhập được ghi là kết cấu. Đèn đang bật trở thành đèn điểm và đèn chiếu (đèn diện tích không có tương đương trong glTF và bị bỏ qua); cảnh trở thành camera. Các cạnh rời bị bỏ qua.
- **Giới hạn:** tệp đến 300 MB; khoảng 130 triệu số của hình học.

## STL (.stl)

Nhập và xuất.

- **Nhập:** nhị phân hoặc ASCII. STL không có đơn vị: nó được đọc là **milimét**, giống cách máy in và chính ModelCraft xuất nó. Các góc ở cùng một điểm được nối lại, nên một chi tiết khép kín vào như một [lưới](topic:meshes) khép kín. Màu trong tệp (các quy ước VisCAM / SolidView và Materialise) tô màu các mặt.
- **Xuất,** để in 3D: STL nhị phân, **milimét**, trục Z hướng lên. Chỉ có tam giác: các nhóm và cạnh rời bị bỏ qua. Mặt đã tô màu mang màu của chúng theo quy ước VisCAM / SolidView, mà các chương trình khác bỏ qua nếu không đọc được. Hãy xuất khối đặc khép kín để in sạch.

## STEP (.step, .stp)

Chỉ nhập. STEP là định dạng mà các nhà mô hình chi tiết và nhà cung cấp gửi: các tệp AP203, AP214 và AP242.

- **Nhập:** ModelCraft tự đọc tệp, ngay trong trang, và biến mọi khối đặc thành một [lưới](topic:meshes) khép kín gồm các tam giác: mặt phẳng vẫn phẳng, các mặt cong (trụ, nón, cầu, xuyến, mặt B-spline) trở thành nhiều mặt phẳng nhỏ, với các cạnh bên trong một mặt cong là mềm và các cạnh giữa hai mặt là sắc. Tệp STEP ghi đơn vị của nó; mô hình vào đúng kích thước thật. Một cụm lắp ráp vào với mọi chi tiết ở vị trí tệp đặt, mỗi chi tiết là một lưới riêng trong một nhóm mang tên tệp. Màu, tên chi tiết của cây lắp ráp và dung sai (PMI) không được đọc.
- **Thông báo:** những gì bị bỏ qua hoặc được vẽ thô hơn sẽ được thêm vào dòng trạng thái ("Ghi chú: …"); một tệp không có khối đặc, một tệp hỏng hoặc vượt giới hạn sẽ nói rõ lý do và không thêm gì.
- **Giới hạn:** tệp đến 300 MB; 400 000 mặt và 8 triệu tam giác.

## .3dm

Chỉ nhập. Tệp `.3dm` chứa mô hình NURBS: khối đa bề mặt, bề mặt, lưới, đường cong và khối.

- **Nhập:** ModelCraft tự đọc tệp, ngay trong trang. Lưới vào như chúng đang là; mọi mặt của một khối đa bề mặt hoặc khối đùn lấy từ lưới kết xuất được lưu kèm trong tệp, nếu không thì ModelCraft tạo lưới cho nó (mặt phẳng, bề mặt NURBS, bề mặt quay tròn, đường cong đùn, khối đùn; được cắt theo cạnh của chúng, và các khối đa bề mặt khép kín thành lưới khép kín). Đường cong thành cạnh, khối thành cấu kiện (các khối trong khối được giữ), lớp thành thẻ (ẩn khi tắt), và màu của đối tượng (của chính nó, của lớp hoặc của vật liệu) tô các mặt. Tệp ghi đơn vị của nó; mô hình vào đúng kích thước thật. Từng bước: [Nhập mô hình .3dm](topic:import-3dm-files).
- **Thông báo:** dòng trạng thái cho biết có bao nhiêu mặt lấy từ lưới đã lưu và bao nhiêu mặt được tạo lưới, và nêu tên những gì bị bỏ qua: điểm, đám mây điểm, văn bản, kích thước, hình tô, đèn, đối tượng SubD, các mặt thuộc loại bề mặt chưa được đọc, các khối liên kết.
- **Giới hạn:** tệp đến 300 MB.

## PLY (.ply)

Nhập và xuất, cho các lưới có màu (quét, in 3D có màu, các trình dựng hình khác).

- **Nhập:** ASCII và nhị phân. Các mặt trở thành một [lưới](topic:meshes) với pháp tuyến, tọa độ kết cấu và màu theo đỉnh được giữ lại; mỗi mặt được tô bằng màu gần nhất trong 4.096 màu để bạn thấy màu ngay bây giờ. PLY không có đơn vị hay quy ước trục: tọa độ vào đúng như chúng là (mét, trục Z hướng lên). Một PLY chỉ có điểm là một đám mây điểm: mở nó trong BimCraft hoặc CivilCraft.
- **Xuất:** PLY nhị phân với vị trí, pháp tuyến và màu (và tọa độ kết cấu khi mô hình có), theo mét, trục Z hướng lên.

## FBX (.fbx)

Chỉ nhập. Tệp FBX 7 (từ năm 2011 trở đi), nhị phân hoặc ASCII, được đọc bởi trình đọc riêng của ModelCraft.

- Lưới vào như [lưới](topic:meshes) với pháp tuyến, tọa độ kết cấu (mọi bộ UV) và màu theo đỉnh; một lưới mà nhiều đối tượng dùng vẫn dùng chung. Đối tượng trở thành nhóm với các phép biến đổi của chúng (điểm xoay, độ lệch và xoay trước được bao gồm).
- Vật liệu: hình ảnh kết cấu khuếch tán — được nhúng trong tệp, hoặc một ảnh thả cùng với `.fbx` — vào như một hình ảnh kết cấu (ảnh TGA được giữ dưới dạng PNG); nếu không thì dùng màu khuếch tán. Các thiết lập vật liệu khác đợi mô hình vật liệu mới.
- Trục lên và đơn vị của tệp được áp dụng: mọi thứ vào với trục Z hướng lên, theo mét.
- Đèn điểm và đèn chiếu trở thành [đèn](topic:lights) (cường độ FBX 100 là đèn mặc định của ModelCraft, 800 lumen: cường độ FBX không có đơn vị). Camera trở thành [cảnh](topic:scenes).
- Nhân vật có khung xương vào ở tư thế nghỉ; xương và hoạt ảnh được đếm và chưa được giữ. Đèn định hướng và đèn diện tích, cùng các hình học khác ngoài lưới (NURBS, đường cong), được đếm và bỏ qua.
- Tệp FBX 6 trở về trước bị từ chối: hãy lưu lại chúng dưới dạng FBX 2011 trở lên.

## Alembic (.abc)

Chỉ nhập: bộ đệm hình học từ các chương trình hoạt hình và hiệu ứng.

- Lưới (lưới đa giác và lưới chia nhỏ) vào như [lưới](topic:meshes), với tọa độ kết cấu và pháp tuyến của chúng; các phép biến đổi trở thành nhóm. Alembic dùng trục Y hướng lên và được xoay thành trục Z hướng lên; mét.
- Một bộ đệm có nhiều mẫu (một hoạt ảnh) vào ở mẫu đầu tiên; thanh trạng thái cho biết nó có bao nhiêu mẫu.
- Điểm, đường cong, bề mặt NURBS, camera và đèn được đếm và bỏ qua. Các tệp theo bố cục HDF5 cũ bị từ chối: hãy lưu lại chúng dưới dạng tệp Alembic Ogawa.

{{ui:Kiểm tra in 3D (STL hoặc 3MF)…}} kiểm tra hình dạng trước và ghi phần đã chọn, hoặc mọi thứ đang hiển thị. Xem [Chuẩn bị mô hình để in 3D](topic:print-3d).

## 3MF (.3mf)

Chỉ xuất, từ {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}. Lõi 3MF: một lưới theo **milimét**, trục Z hướng lên, với màu của nó là vật liệu. Hầu hết các phần mềm cắt lớp đọc được, và không giống STL, nó ghi đơn vị của mình. Những thứ đang ẩn bị bỏ qua. Xem [Chuẩn bị mô hình để in 3D](topic:print-3d).

## Xuất DWG và DXF (.dwg, .dxf)

Cho các chương trình CAD. Mô hình được ghi theo đơn vị riêng của nó: inch cho mô hình theo feet và inch, ngược lại là milimét, xentimét hoặc mét (thanh trạng thái nêu tên đơn vị).

- **Mặt** trở thành mặt 3D (tam giác). Các đường bên trong một mặt, và các cạnh mềm, được ghi ở trạng thái ẩn, nên các mặt trông giống như trong ModelCraft.
- **Cạnh rời** trở thành đường thẳng.
- **Nhóm và cấu kiện** trở thành khối: một cấu kiện được ghi một lần và đặt bao nhiêu lần tùy theo số lần nó được dùng, kể cả các bản sao đã xoay và lật đối xứng. Một nhóm bị kéo giãn sau khi xoay (nên nó bị nghiêng) thì được ghi ra đúng vị trí của nó.
- **Màu:** DWG giữ đúng màu của từng mặt; DXF dùng màu gần nhất trong 255 màu CAD tiêu chuẩn.
- **Phiên bản:** DWG được ghi theo AutoCAD 2004 (AC1018), mà các chương trình CAD từ 2004 trở đi mở được. DXF là R12 (AC1009), phiên bản mà mọi chương trình CAD đọc được; R12 không có trường đơn vị, nên hãy cho chương trình CAD biết đơn vị cần dùng.
- **Không ghi:** đường dẫn, kích thước, cảnh và camera.

## IFC (.ifc)

Chỉ xuất, cho BimCraft và các chương trình BIM khác. IFC4 với một dự án, một khu đất, một công trình và các tầng của nó. Mỗi nhóm hoặc cấu kiện ở cấp cao nhất trở thành một cấu kiện công trình đại diện với tên của nó; các nhóm khép kín được ghi như hình khối đặc (faceted brep), các nhóm hở được ghi như mô hình bề mặt; các lỗ trên mặt được giữ lại. Hình học rời ở cấp cao nhất trở thành một cấu kiện tên "Hình học rời". Không có kiểu, thuộc tính hay vật liệu.

**Tầng:** {{ui:Xuất}} › {{ui:Các tầng IFC…}} liệt kê chúng, mỗi tầng có tên và cao độ ({{ui:Thêm tầng}}, hoặc {{ui:Đoán từ mô hình}}, tạo một tầng cho mỗi độ cao mà các nhóm cấp cao nhất của bạn đứng trên đó). Khi xuất, mỗi nhóm hoặc cấu kiện được đặt lên tầng ở ngang hoặc thấp hơn điểm thấp nhất của nó, và giữ vị trí của nó. Không có tầng nào thì mọi thứ nằm trên một tầng, "Tầng 1", ở cao độ 0. Các tầng được lưu trong tệp ModelCraft.

## DWG (.dwg) và DXF (.dxf)

Nhập dưới dạng đường thẳng trên nền (hình tô và mặt 3D vào như mặt); xuất như mô tả ở trên. Xem [Mô hình trên bản vẽ mặt bằng khu đất](topic:site-plan).

- **Đọc:** đường thẳng, đa tuyến (có cung tròn), đa tuyến 3D, vòng tròn, cung tròn, và các tham chiếu khối bao gồm cả mảng, từ không gian mô hình. Các đối tượng vô hình (chẳng hạn các trạng thái ẩn của khối động) bị bỏ qua. Đường cong trở thành 48 đoạn thẳng cho mỗi vòng đầy đủ.
- **Đọc từ 0.4:** spline và elip (như cạnh), văn bản, văn bản nhiều dòng và giá trị thuộc tính (như cạnh trong kiểu chữ nét đơn), hình tô (mặt có lỗ), mặt 3D và các khối đặc tô (mặt), và kích thước (được vẽ từ các khối kích thước của chính bản vẽ).
- **Đọc từ 0.7:** khối đặc 3D, vùng và thân (dữ liệu ACIS của chúng, DWG và DXF của mọi phiên bản), mỗi cái là một nhóm riêng, các cái khép kín là khối đặc. Mặt trên các bề mặt không phải mặt phẳng, trụ, nón, cầu, xuyến và bề mặt spline đơn giản bị bỏ qua và được liệt kê.
- **Không đọc:** điểm, bảng, đa chú thích, hình ảnh và mọi thứ trong không gian giấy.
- **Đơn vị:** lấy từ bản vẽ khi bản vẽ ghi rõ. Nếu không, ModelCraft sẽ hỏi.
- **DXF** phải là ASCII. DXF nhị phân bị từ chối.
- **DWG** từ AutoCAD R13 đến định dạng hiện tại (AutoCAD 2018 trở lên; AC1012 đến AC1032) được đọc bởi trình đọc DWG riêng của ModelCraft, ngay trong trang; nó là một phần của ModelCraft, nên hoạt động ngoại tuyến bất cứ khi nào ModelCraft hoạt động. Các phiên bản cũ hơn (R12 trở về trước) và các tệp hư hỏng nặng không thể đọc; hãy lưu chúng dưới dạng DXF.
- **Giới hạn:** tọa độ cách gốc hơn 10.000 km, hoặc hơn 2 triệu đoạn đường thẳng, bị từ chối.

## Tệp SKP

{{ui:Nhập}} (hoặc thả tệp vào khung nhìn) đọc tệp SketchUp bằng trình đọc riêng của ModelCraft, ngay trong trang: không có gì được tải lên, và nó hoạt động ngoại tuyến bất cứ khi nào ModelCraft hoạt động. Đã thử nghiệm với các tệp từ SketchUp 3, 6, 7, 2014, 2017, 2018, 2020, 2025 và 2026; các phiên bản khác có lẽ cũng mở được, nhưng chưa được thử. Mô hình vào như một nhóm mang tên tệp. Một {{key:Mod+Z}} sẽ gỡ nó đi. Từng bước: [Nhập mô hình SKP](topic:import-sketchup-files).

- **Giữ lại:** mặt có lỗ, nhóm (như nhóm) và cấu kiện (như cấu kiện, dùng chung), tên và vị trí của chúng, màu, thẻ trên nhóm và cấu kiện, các cạnh không thuộc mặt nào, và các cạnh mềm và mượt, nên các bề mặt cong vẫn mượt.
- **Màu:** vật liệu riêng của mặt cho màu của nó. Một vật liệu được sơn lên một nhóm hoặc cấu kiện trở thành lớp sơn của vị trí đó, nên các mặt bên trong không có màu riêng sẽ nhận nó, như trong SketchUp; một cấu kiện được sơn hai màu vẫn là một cấu kiện.
- **Thẻ** trên nhóm và cấu kiện trở thành thẻ của ModelCraft, được hiện hoặc ẩn như trước. Thẻ trên mặt và cạnh rời không được giữ (ModelCraft chỉ gắn thẻ cho nhóm và cấu kiện); thanh trạng thái đếm chúng.
- **Những thứ ẩn vào ở trạng thái ẩn** (mặt, cạnh, nhóm, cấu kiện, và mặt và cạnh trên một thẻ đang ẩn), nên bạn thấy những gì SketchUp đã hiển thị; {{ui:Hiện tất cả}} sẽ hiện chúng.
- **Kết cấu:** một mặt được sơn bằng vật liệu có kết cấu giữ kết cấu của nó, được đặt như trong tệp, và tệp ModelCraft giữ ảnh. Kết cấu trên toàn bộ nhóm hoặc cấu kiện, kết cấu bị thiếu trong tệp, hoặc một ảnh mà trình duyệt không hiển thị được (như tệp Photoshop) chỉ giữ màu của vật liệu.
- **Bỏ qua, và được đếm trong thanh trạng thái:** các ảnh đặt trong mô hình. Văn bản, kích thước, đường dẫn, mặt cắt, cảnh và kiểu không được đọc.
- **Đơn vị:** tệp SketchUp tính bằng inch bên trong; ModelCraft chuyển đổi chúng, nên kích thước ra đúng ở mọi đơn vị.
- **Lưu `.skp`** chưa được xây dựng. Để đưa một mô hình về SketchUp, hãy xuất Collada (`.dae`).

## Không được hỗ trợ

ModelCraft không thể mở tệp 3DS hoặc IFC, và không thể lưu tệp 3DS, FBX, STEP, `.3dm` hoặc SketchUp (`.skp`).
