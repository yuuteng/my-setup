// 家里的东西清单。要增删改，只改这个文件。
//
// 结构：pages（页面）→ groups（分组）→ items（物品）。
// 每个物品可以写的字段，都是可选的，没有就不写：
//   name     叫什么（如「显卡」「冰箱」）
//   model    型号，点击可复制
//   summary  汇总表里的一句话规格
//   specs    详细规格，[["名称", "内容"], ...]
//   buy      购买信息 { date: "2025-08-04", delivered: "2024-07-04", channel: "Amazon", price: "€1,299" }
//   links    详细规格的网页 [{ label: "官网规格", url: "https://..." }]
//   note     需要提醒的事
//   icon     图标名，见 index.html 里的 ICONS

window.SETUP = {
  updated: "2026-11-26",

  pages: [
    {
      id: "pc",
      title: "电脑",
      icon: "monitor",
      groups: [
        {
          id: "host",
          title: "主机",
          items: [
            {
              icon: "gpu",
              name: "显卡",
              model: "GIGABYTE GeForce RTX 5080 GAMING OC 16G",
              links: [
                { label: "技嘉官网规格", url: "https://www.gigabyte.com/Graphics-Card/GV-N5080GAMING-OC-16GD/sp" },
              ],
              summary: "16 GB GDDR7，DP 2.1b ×3 + HDMI 2.1b ×1",
              specs: [
                ["型号编号", "GV-N5080GAMING OC-16GD"],
                ["显存", "16 GB GDDR7"],
                ["加速频率", "2730 MHz"],
                ["视频接口", "DisplayPort 2.1b ×3，HDMI 2.1b ×1"],
                ["供电", "16 针 ×1，建议电源 850 W"],
                ["尺寸", "340 × 140 × 70 mm"],
                ["帧生成", "DLSS 多帧生成 x2 / x3 / x4"],
              ],
              buy: { date: "2025-08-04", channel: "Amazon" },
            },
            {
              icon: "cpu",
              name: "处理器",
              model: "Intel Core i5-12600KF",
              links: [
                { label: "Intel 官网规格", url: "https://www.intel.com/content/www/us/en/products/sku/134590/intel-core-i512600kf-processor-20m-cache-up-to-4-90-ghz/specifications.html" },
              ],
              summary: "10 核 16 线程，LGA 1700，无核显",
              specs: [
                ["核心", "10 核（6 性能核 + 4 能效核）"],
                ["线程", "16"],
                ["接口", "LGA 1700"],
                ["核显", "无（KF 型号）"],
              ],
            },
            {
              icon: "board",
              name: "主板",
              model: "MSI PRO Z690-A DDR4",
              links: [
                { label: "MSI 官网规格", url: "https://www.msi.com/Motherboard/PRO-Z690-A-DDR4/Specification" },
              ],
              summary: "Z690，ATX，DDR4",
              specs: [
                ["芯片组", "Intel Z690"],
                ["板型", "ATX"],
                ["内部编号", "MS-7D25"],
                ["BIOS", "1.00（2021-09）"],
                ["有线网卡", "Intel I225-V 2.5 GbE"],
              ],
            },
            {
              icon: "ram",
              name: "内存",
              model: "Crucial Ballistix BL8G36C16U4W ×2",
              summary: "16 GB（8 GB ×2），DDR4-3600 CL16",
              specs: [
                ["容量", "16 GB（8 GB × 2，双通道）"],
                ["规格", "DDR4-3600 CL16"],
                ["颜色", "白色"],
              ],
            },
            {
              icon: "cooler",
              name: "CPU 水冷",
              model: "MSI MAG CoreLiquid C240",
              links: [
                { label: "MSI 官网规格", url: "https://www.msi.com/Liquid-Cooling/MAG-CORELIQUID-C240/Specification" },
              ],
              summary: "240 一体式水冷",
              specs: [
                ["类型", "240 一体式水冷，2 个冷排风扇"],
                ["水泵转速", "约 3,800 转（满速）"],
                ["CPU 待机温度", "35°C（2026-11-26 实测）"],
              ],
              buy: { date: "2021-11-27" },
            },
            {
              icon: "case",
              name: "机箱",
              model: "NZXT H510",
              summary: "ATX 中塔，黑红配色，钢化玻璃侧板",
              specs: [
                ["类型", "ATX 中塔"],
                ["颜色", "黑 / 红"],
                ["侧板", "钢化玻璃"],
                ["前面板", "带 USB Type-C"],
              ],
              buy: { date: "2021-11-22", channel: "Amazon.fr" },
            },
            {
              icon: "psu",
              name: "电源",
              model: "Corsair RM850e（2023）",
              links: [
                { label: "Corsair 官网", url: "https://www.corsair.com/p/psu/cp-9020263-na/rme-series-rm850e-fully-modular-low-noise-atx-power-supply-cp-9020263-na" },
              ],
              summary: "850 W，80 PLUS 金牌，全模组，ATX 3.0",
              specs: [
                ["功率", "850 W"],
                ["认证", "80 PLUS 金牌"],
                ["模组", "全模组"],
                ["标准", "ATX 3.0，兼容 PCIe 5.0"],
                ["风扇", "120 mm，低负载停转"],
                ["长度", "140 mm"],
              ],
              buy: { date: "2024-07-28", channel: "Amazon.fr" },
            },
            {
              icon: "ssd",
              name: "固态硬盘 1",
              model: "Samsung PM9A1 1TB",
              links: [
                { label: "三星官网 PM9A1", url: "https://semiconductor.samsung.com/ssd/pc-ssd/pm9a1/" },
              ],
              summary: "NVMe PCIe 4.0，系统盘 C: 到 F:",
              specs: [
                ["料号", "MZVL21T0HCLR-00B00"],
                ["接口", "M.2 NVMe PCIe 4.0"],
                ["容量", "1 TB"],
                ["盘符", "C: D: E: F:（系统盘）"],
                ["健康", "寿命已用 4%（2026-11-26）"],
              ],
            },
            {
              icon: "ssd",
              name: "固态硬盘 2",
              model: "Samsung PM9A1 2TB",
              links: [
                { label: "三星官网 PM9A1", url: "https://semiconductor.samsung.com/ssd/pc-ssd/pm9a1/" },
              ],
              summary: "NVMe PCIe 4.0，O: P:",
              specs: [
                ["料号", "MZVL22T0HBLB-00BH1"],
                ["接口", "M.2 NVMe PCIe 4.0"],
                ["容量", "2 TB"],
                ["盘符", "O: P:"],
                ["健康", "寿命已用 0%（2026-11-26）"],
              ],
            },
            {
              icon: "ssd",
              name: "固态硬盘 3",
              model: "Samsung 850 EVO mSATA 250GB",
              summary: "SATA，G:",
              specs: [
                ["接口", "mSATA（SATA）"],
                ["容量", "250 GB"],
                ["盘符", "G:"],
                ["健康", "磨损剩余 96%，通电 19,780 小时"],
              ],
            },
            {
              icon: "hdd",
              name: "机械硬盘",
              model: "HGST Travelstar HTS541010A9E680",
              summary: "1 TB，2.5 英寸 5400 转，H: 到 N:",
              specs: [
                ["容量", "1 TB"],
                ["规格", "2.5 英寸，5400 转，SATA"],
                ["盘符", "H: 到 N:"],
                ["通电时间", "30,577 小时"],
                ["磁头加载次数", "575,074（设计寿命约 60 万）"],
              ],
              note: "从旧笔记本拆下来的盘，已接近设计寿命。重要数据要尽快备份。",
            },
            {
              icon: "net",
              name: "无线网卡",
              model: "Intel Wi-Fi 6E AX210",
              summary: "Wi-Fi 6E 160 MHz + 蓝牙",
              specs: [
                ["无线", "Wi-Fi 6E，160 MHz"],
                ["蓝牙", "Intel Wireless Bluetooth"],
              ],
            },
            {
              icon: "os",
              name: "系统",
              model: "Windows 11 专业版",
              summary: "64 位，版本 10.0.26200",
              specs: [
                ["版本号", "10.0.26200"],
                ["架构", "64 位"],
              ],
            },
          ],
        },

        {
          id: "display",
          title: "显示",
          items: [
            {
              icon: "monitor",
              name: "主显示器",
              model: "BenQ EX2780Q",
              links: [
                { label: "BenQ 官网规格", url: "https://www.benq.com/en-us/monitor/gaming/ex2780q/spec.html" },
              ],
              summary: "27 英寸 IPS，2560×1440，144 Hz",
              specs: [
                ["尺寸", "27 英寸 IPS"],
                ["分辨率", "2560 × 1440"],
                ["刷新率", "144 Hz"],
                ["HDR", "DisplayHDR 400"],
                ["可变刷新率", "FreeSync"],
              ],
            },
            {
              icon: "monitor",
              name: "副显示器",
              model: "HP E243d",
              links: [
                { label: "HP 支持页面", url: "https://support.hp.com/us-en/product/hp-elitedisplay-e243d-23.8-inch-docking-monitor/19887836" },
              ],
              summary: "23.8 英寸 IPS，1920×1080，60 Hz",
              specs: [
                ["尺寸", "23.8 英寸 IPS"],
                ["分辨率", "1920 × 1080"],
                ["刷新率", "60 Hz"],
                ["特点", "USB-C 扩展坞显示器，带摄像头"],
              ],
            },
            {
              icon: "tv",
              name: "电视",
              model: "TCL 85MQLED87",
              links: [
                { label: "规格表（tvsfaq）", url: "https://www.tvsfaq.com/en/specifications/tcl-85mqled87" },
              ],
              summary: "85 英寸 QLED Mini LED，4K 144 Hz（HDMI 1），VRR",
              specs: [
                ["尺寸", "85 英寸"],
                ["面板", "QLED 量子点，Mini LED 背光"],
                ["分辨率", "3840 × 2160（4K）"],
                ["刷新率", "原生 144 Hz，支持 4K 144 Hz"],
                ["游戏功能", "VRR、ALLM、FreeSync"],
                ["HDR", "HDR10、HDR10+、Dolby Vision IQ、HLG"],
                ["亮度", "2000 尼特（标称）"],
                ["HDMI 1", "4K 144 Hz"],
                ["HDMI 2", "4K 120 Hz"],
                ["HDMI 3", "4K 60 Hz"],
                ["HDMI 4", "4K 60 Hz，eARC / ARC"],
                ["其他接口", "USB 3.0、网口、光纤音频输出、耳机孔、天线和卫星输入"],
                ["音响", "2.1 声道 Onkyo，50 W"],
                ["系统", "Google TV"],
              ],
              buy: { delivered: "2024-07-12", channel: "U-Techno", price: "€1,599" },
            },
          ],
        },

        {
          id: "gear",
          title: "外设",
          items: [
            {
              icon: "mouse",
              name: "鼠标",
              model: "Logitech G PRO Wireless",
              links: [
                { label: "罗技官网", url: "https://www.logitechg.com/en-us/products/gaming-mice/pro-wireless-mouse.html" },
              ],
              summary: "LIGHTSPEED 无线",
              specs: [
                ["连接", "LIGHTSPEED 无线接收器"],
                ["软件", "Logitech G HUB"],
              ],
            },
            {
              icon: "keyboard",
              name: "键盘",
              model: "达尔优 EK815 机械合金版",
              summary: "Cherry 青轴，108 键，有线",
              specs: [
                ["轴体", "Cherry 青轴"],
                ["键数", "108 键"],
                ["连接", "有线"],
                ["颜色", "黑色"],
              ],
              buy: { date: "2017-08-31", channel: "天猫 达尔优翔远专卖店", price: "¥387" },
            },
            {
              icon: "headphones",
              name: "头戴耳机",
              model: "Sony WH-1000XM6",
              links: [
                { label: "索尼官网规格", url: "https://www.sony.co.uk/headphones/products/wh-1000xm6/spec" },
              ],
              summary: "蓝牙主动降噪",
              specs: [
                ["类型", "头戴式主动降噪"],
                ["连接", "蓝牙"],
              ],
            },
            {
              icon: "gamepad",
              name: "手柄 1",
              model: "飞智 八爪鱼 5 龙珠Z 联名标准款",
              links: [
                { label: "八爪鱼 5 发布报道（新浪科技）", url: "https://finance.sina.com.cn/tech/digi/2025-06-10/doc-inezrake8784392.shtml" },
              ],
              summary: "Flydigi，力反馈扳机，黑金配色",
              specs: [
                ["品牌", "Flydigi 飞智"],
                ["扳机", "力反馈扳机"],
                ["摇杆", "力调节合金摇杆 2.0（30 到 100 gf）"],
                ["配色", "黑金（龙珠Z 联名）"],
                ["软件", "飞智空间站"],
              ],
              buy: { date: "2026-05-30", channel: "天猫 flydigi飞智旗舰店", price: "¥550" },
            },
            {
              icon: "gamepad",
              name: "手柄 2",
              model: "Xbox Wireless Controller",
              links: [
                { label: "Xbox 官网", url: "https://www.xbox.com/en-US/accessories/controllers/xbox-wireless-controller" },
              ],
              summary: "蓝牙",
              specs: [["连接", "蓝牙"]],
            },
            {
              icon: "camera",
              name: "摄像头",
              model: "Insta360 Link 2",
              links: [
                { label: "Insta360 官网", url: "https://www.insta360.com/product/insta360-link2" },
              ],
              summary: "4K 云台摄像头，自带麦克风",
              specs: [
                ["类型", "4K 云台摄像头"],
                ["麦克风", "自带"],
              ],
            },
            {
              icon: "speaker",
              name: "音箱",
              model: "Marshall Stanmore III",
              links: [{ label: "Marshall 官网", url: "https://www.marshall.com/us/en/product/stanmore-iii" }],
              summary: "蓝牙 5.2，RCA + 3.5 mm，棕色",
              specs: [
                ["颜色", "棕色"],
                ["无线", "蓝牙 5.2"],
                ["有线输入", "RCA ×1，3.5 mm ×1"],
                ["功放", "低音 50 W ×1，高音 15 W ×2"],
                ["频响", "45 到 20,000 Hz"],
                ["尺寸", "350 × 203 × 188 mm，4.25 kg"],
              ],
            },
          ],
        },

        {
          id: "network",
          title: "网络",
          items: [
            {
              icon: "router",
              name: "路由器",
              model: "Bouygues Bbox（Sagemcom F@st 5688b）",
              links: [
                { label: "规格讨论（bbox-mag 论坛）", url: "https://www.bbox-mag.fr/forum/viewtopic.php?p=23767" },
              ],
              summary: "光纤，Wi-Fi 6E，运营商赠送",
              specs: [
                ["来源", "Bouygues Telecom 宽带赠送"],
                ["接入", "光纤 FTTH"],
                ["Wi-Fi", "Wi-Fi 6E（802.11ax），有 5 GHz 和 6 GHz"],
                ["固件", "25.1.22"],
                ["开始使用", "2025-03-04"],
              ],
            },
          ],
        },
      ],
      todo: [],
    },

    {
      id: "appliances",
      title: "家电",
      icon: "fridge",
      groups: [
        {
          id: "kitchen",
          title: "厨房",
          items: [
            {
              icon: "fridge",
              name: "冰箱",
              model: "LG GBV5240DPY",
              links: [{ label: "LG 官网", url: "https://www.lg.com/fr/refrigerateur/combine/gbv5240dpy-refrigerateurs-combines/" }],
              summary: "双门冰箱",
              specs: [["类型", "上冷藏下冷冻"]],
              buy: { delivered: "2024-07-04", price: "€649" },
            },
            {
              icon: "hob",
              name: "电磁炉",
              model: "Bosch PUE611BB5E",
              links: [{ label: "Amazon 商品页", url: "https://www.amazon.fr/dp/B09VPQVN1T" }],
              summary: "嵌入式电磁炉",
              specs: [["类型", "嵌入式电磁炉"]],
              buy: { delivered: "2024-07-01", channel: "Amazon.fr", price: "€297.50" },
            },
            {
              icon: "oven",
              name: "烤箱",
              model: "AEG BPB331061W",
              summary: "嵌入式烤箱，高温自清洁",
              specs: [["类型", "嵌入式烤箱"], ["清洁", "高温热解自清洁"]],
              buy: { delivered: "2024-07-12", channel: "Abribat", price: "€490" },
            },
            {
              icon: "oven",
              name: "微波炉",
              model: "Bosch BEL524MS0",
              links: [{ label: "Amazon 商品页", url: "https://www.amazon.fr/dp/B07679B4M9" }],
              summary: "嵌入式微波炉",
              specs: [["类型", "嵌入式微波炉"]],
              buy: { delivered: "2024-08-29", channel: "Amazon.fr", price: "€130" },
            },
            {
              icon: "hood",
              name: "抽油烟机",
              model: "Siemens iQ500 LJ67BAM60",
              summary: "iQ500 系列",
              specs: [["系列", "Siemens iQ500"]],
              buy: { delivered: "2024-06-29", channel: "Darty（到店自取）", price: "€699" },
            },
            {
              icon: "washer",
              name: "洗碗机",
              model: "Siemens SR65ZX10ME",
              links: [{ label: "Cdiscount 商品页", url: "https://www.cdiscount.com/electromenager/lave-vaisselle/lave-vaisselle-tout-integrable-siemens-sr65zx10me/f-11025-sie1695696095412.html" }],
              summary: "全嵌入式洗碗机",
              specs: [["类型", "全嵌入式"]],
              buy: { delivered: "2024-07-03", channel: "Cdiscount", price: "€644.98" },
            },
            {
              icon: "box",
              name: "净水器",
              model: "Brita mypure SLIM V-MF",
              summary: "龙头净水系统",
              specs: [["类型", "厨房龙头净水系统"]],
              buy: { price: "€127" },
            },
            {
              icon: "box",
              name: "水槽和龙头",
              model: "Arrow 箭牌 60×43",
              summary: "水槽 60 × 43 cm",
              specs: [["水槽尺寸", "60 × 43 cm"]],
              buy: { channel: "淘宝", price: "€150" },
            },
          ],
        },
        {
          id: "laundry",
          title: "洗衣和清洁",
          items: [
            {
              icon: "washer",
              name: "洗衣机",
              model: "LG F94D14STS",
              summary: "滚筒洗衣机",
              specs: [["类型", "滚筒洗衣机"]],
              buy: { delivered: "2024-07-09", price: "€699.99" },
              note: "表格里型号写的是 F94D14STS，但旁边的链接是另一个型号 F94R92WSTE。以机器铭牌为准。",
            },
            {
              icon: "washer",
              name: "烘干机",
              model: "LG RH9V71WHN",
              links: [{ label: "LG 官网", url: "https://www.lg.com/fr/lavage/seche-linge/rh9v71whn-seche-linges/" }],
              summary: "烘干机",
              specs: [["类型", "烘干机"]],
              buy: { delivered: "2024-07-09", price: "€699" },
            },
            {
              icon: "box",
              name: "吸尘器",
              model: "Dyson Gen5",
              summary: "无线吸尘器",
              specs: [["类型", "无线吸尘器"]],
              buy: { delivered: "2024-07-09", price: "€799" },
            },
          ],
        },
      ],
      todo: [],
    },
    {
      id: "furniture",
      title: "家具",
      icon: "sofa",
      groups: [
        {
          id: "bedroom",
          title: "卧室",
          items: [
            {
              icon: "bed",
              name: "床",
              model: "Maxcolchon Rond Contour Premium",
              summary: "带床头",
              specs: [["配件", "带床头"], ["换货", "2024-07-12 换过一次"]],
              buy: { delivered: "2024-06-29", channel: "Maxcolchon（邮件下单）", price: "€966.88" },
            },
            {
              icon: "bed",
              name: "床垫",
              model: "Simmons 160×200",
              links: [{ label: "Amazon 商品页", url: "https://www.amazon.fr/dp/B07KRMXN2C" }],
              summary: "160 × 200 cm，厚 29 cm",
              specs: [["尺寸", "160 × 200 cm"], ["厚度", "29 cm"]],
              buy: { delivered: "2024-07-09", channel: "Amazon.fr", price: "€698.99" },
            },
            {
              icon: "table",
              name: "化妆桌",
              buy: { delivered: "2024-07-12", channel: "Cdiscount", price: "€120" },
            },
          ],
        },
        {
          id: "living",
          title: "客厅",
          items: [
            {
              icon: "sofa",
              name: "沙发",
              model: "Bobochic ATILLA",
              links: [{ label: "Bobochic 商品页", url: "https://bobochicparis.com/fr/canapes-d-angle-convertibles/17496-canape-d-angle-convertible-coffre-atilla-tissu-texture.html" }],
              summary: "转角沙发床，带储物",
              specs: [["类型", "转角沙发床，带储物"]],
              buy: { delivered: "2024-08", channel: "Bobochic", price: "€1,284.06" },
            },
            {
              icon: "table",
              name: "电视柜",
              model: "Homary Fero",
              links: [{ label: "Homary 商品页", url: "https://fr.homary.com/lditem/fero-minimalist-walnut-rectangle-extendable-tv-stand-with-3-drawers-up-to-120-44425.html?currency=eur&language=fr&gad_source=1" }],
              summary: "可伸缩，胡桃木色，3 个抽屉",
              specs: [["特点", "可伸缩，3 个抽屉"], ["颜色", "胡桃木色"]],
              buy: { delivered: "2024-07-02", channel: "Homary", price: "€424.99" },
            },
            {
              icon: "table",
              name: "升降桌",
              model: "IKEA MITTZON 140×80",
              links: [{ label: "IKEA 商品页", url: "https://www.ikea.com/fr/fr/p/mittzon-bureau-assis-debout-electrique-plaque-chene-blanc-s69528971/" }],
              summary: "电动升降，140 × 80 cm",
              specs: [["类型", "电动升降桌"], ["桌面", "140 × 80 cm，橡木贴面"], ["颜色", "白色"]],
              buy: { delivered: "2024-06-30", channel: "IKEA", price: "€509" },
            },
            {
              icon: "table",
              name: "餐桌",
              model: "IKEA NORDEN",
              links: [{ label: "IKEA 商品页", url: "https://www.ikea.com/fr/fr/p/norden-table-a-rabat-bouleau-90423887/" }],
              summary: "折叠桌，桦木",
              specs: [["类型", "折叠桌"], ["材质", "桦木"]],
              buy: { delivered: "2024-06-30", channel: "IKEA", price: "€279" },
            },
            {
              icon: "box",
              name: "墙架",
              model: "IKEA TRANHULT / SANDSHULT",
              summary: "120 × 30 cm，杨木",
              specs: [["尺寸", "120 × 30 cm"], ["材质", "杨木"]],
              buy: { delivered: "2024-06-30", channel: "IKEA", price: "€179.96" },
            },
            {
              icon: "box",
              name: "椅子 ×4",
              model: "Maisons du Monde Varna",
              summary: "4 把",
              specs: [["数量", "4 把"]],
              buy: { delivered: "2024-07-04", channel: "Maisons du Monde", price: "€269.10" },
            },
          ],
        },
        {
          id: "custom",
          title: "定制",
          items: [
            {
              icon: "box",
              name: "橱柜",
              model: "中华橱柜 定制",
              summary: "台面、柜子、墙面",
              specs: [["内容", "台面、柜子、墙面"], ["测量", "2024-07-05"]],
              buy: { channel: "中华橱柜", price: "€6,300" },
            },
          ],
        },
      ],
      todo: [],
    },
  ],
};
