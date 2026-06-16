export interface ProductSpecs {
  [key: string]: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  emoji: string;
  image: string;
  color: string;
  category: 'uav' | 'ugv' | 'robot' | 'usv' | 'sensor';
  usecase: string;
  scenarios: string[];
  specs: ProductSpecs;
}

export const allProducts: ProductDetail[] = [
  // 巡检类优先
  {
    id: "p1",
    name: "巡检无人机",
    description: "校园安防巡逻，AI识别异常行为",
    fullDescription: "专为校园、园区安防设计的智能巡检无人机，支持24小时自动巡逻，AI实时识别异常行为，可与指挥中心联动。",
    emoji: "✈️",
    image: "/images/products/1.png",
    color: "#4285f4",
    category: "uav",
    usecase: "inspection",
    scenarios: ["campus", "security"],
    specs: { "续航时间": "45分钟", "图传距离": "10公里", "相机配置": "4K变焦+热成像", "AI功能": "人脸识别、异常检测" }
  },
  {
    id: "p9",
    name: "球形巡检摄像头",
    description: "360°全景巡检，AI行为分析",
    fullDescription: "专为园区、校园、仓储等场景设计的智能球形摄像头，内置AI芯片，支持人员行为分析、越界报警、人群密度检测，可与无人机巡检系统联动，构建空地一体化巡检网络。",
    emoji: "📷",
    image: "/images/products/1.png",
    color: "#475569",
    category: "sensor",
    usecase: "inspection",
    scenarios: ["campus", "security"],
    specs: { "分辨率": "4K 超高清", "视角": "360° 全景", "夜视距离": "100米红外", "AI功能": "行为分析、越界检测", "防护等级": "IP67" }
  },
  {
    id: "p10",
    name: "变焦激光摄像头",
    description: "远距离目标锁定，昼夜兼顾",
    fullDescription: "高倍变焦激光摄像头，光学变焦30倍，配备940nm不可见激光补光，夜间300米清晰成像。适用于边界巡检、电力线路巡检、大型厂区周界防护，可与无人机图传系统联动。",
    emoji: "🔭",
    image: "/images/products/5.png",
    color: "#475569",
    category: "sensor",
    usecase: "inspection",
    scenarios: ["security", "campus"],
    specs: { "光学变焦": "30倍", "激光补光": "940nm 不可见", "夜视距离": "300米", "图像稳定": "三轴防抖", "接口": "ONVIF / RTSP" }
  },
  {
    id: "p3",
    name: "植保无人机",
    description: "自动喷洒，精准作业",
    fullDescription: "专业农业植保无人机，支持全自动航线规划，精准喷洒，效率是人工的5倍以上，适用于大田、果园等多种场景。",
    emoji: "🚁",
    image: "/images/products/3.png",
    color: "#22c55e",
    category: "uav",
    usecase: "agriculture",
    scenarios: ["agriculture"],
    specs: { "载药量": "20L", "作业效率": "150亩/小时", "喷洒宽度": "5-7米", "避障系统": "前后雷达" }
  },
  {
    id: "p5",
    name: "安防巡逻无人机",
    description: "24小时巡检，异常报警",
    fullDescription: "专业安防巡逻无人机，支持24小时无人值守巡检，异常情况实时报警，可搭载喊话器、爆闪灯等多种载荷。",
    emoji: "✈️",
    image: "/images/products/5.png",
    color: "#ef4444",
    category: "uav",
    usecase: "security",
    scenarios: ["security"],
    specs: { "变焦倍数": "30倍光学", "热成像": "支持", "喊话器": "支持", "续航时间": "40分钟" }
  },
  {
    id: "p11",
    name: "AI安防摄像头",
    description: "智能人脸识别，实时预警",
    fullDescription: "搭载端侧AI芯片的安防摄像头，支持人脸识别、车牌识别、烟火检测，响应时间低于200ms。与无人机、巡逻机器人联动，形成完整的安防闭环，适用于园区、社区、重点单位等场景。",
    emoji: "🔒",
    image: "/images/products/6.png",
    color: "#475569",
    category: "sensor",
    usecase: "security",
    scenarios: ["security", "campus"],
    specs: { "识别能力": "人脸、车牌、烟火", "响应时间": "<200ms", "并发路数": "16路", "存储": "本地+云端双备份", "防护等级": "IP66" }
  },
  {
    id: "p6",
    name: "安防机器人",
    description: "自主巡逻，人脸识别",
    fullDescription: "地面安防巡逻机器人，支持自主巡逻、人脸识别、异常报警，可与指挥中心联动，适用于园区、社区、商业广场等场景。",
    emoji: "🤖",
    image: "/images/products/6.png",
    color: "#ef4444",
    category: "robot",
    usecase: "security",
    scenarios: ["security", "campus"],
    specs: { "巡逻速度": "1m/s", "续航时间": "10小时", "传感器": "激光雷达+超声波", "识别功能": "人脸、车牌、烟火" }
  },
  {
    id: "p2",
    name: "物流机器人",
    description: "园区快递配送，自主导航避障",
    fullDescription: "智能物流配送机器人，适用于园区、校园、社区等场景的快递配送，自主导航、智能避障，支持多机协同。",
    emoji: "🤖",
    image: "/images/products/2.png",
    color: "#4285f4",
    category: "robot",
    usecase: "logistics",
    scenarios: ["campus"],
    specs: { "载重能力": "30kg", "续航时间": "8小时", "导航方式": "激光雷达+视觉", "最高速度": "1.5m/s" }
  },
  {
    id: "p7",
    name: "重载物流无人机",
    description: "山区物资投送",
    fullDescription: "大载重物流无人机，专为山区、偏远地区物资投送设计，载重能力达50kg，可适应复杂气象条件。",
    emoji: "📦",
    image: "/images/products/7.png",
    color: "#f59e0b",
    category: "uav",
    usecase: "cargo",
    scenarios: ["logistics"],
    specs: { "最大载重": "50kg", "飞行距离": "30km", "抗风等级": "6级", "投送精度": "米级" }
  },
  {
    id: "p8",
    name: "全地形运输车",
    description: "复杂地形适应",
    fullDescription: "全地形无人运输车，采用履带底盘设计，可适应山地、泥地、雪地等复杂地形，载重能力强，续航持久。",
    emoji: "🚜",
    image: "/images/products/8.png",
    color: "#f59e0b",
    category: "ugv",
    usecase: "transport",
    scenarios: ["logistics"],
    specs: { "载重能力": "100kg", "续航时间": "6小时", "爬坡角度": "30度", "控制方式": "遥控+自主" }
  }
];

export const getProductById = (id: string): ProductDetail | undefined => {
  return allProducts.find((p) => p.id === id);
};
