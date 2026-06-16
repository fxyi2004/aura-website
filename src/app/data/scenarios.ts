export interface Product {
  id: string;
  name: string;
  specs: string;
  emoji: string;
}

export interface Scenario {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  image: string;  // 新增图片路径
  products: Product[];
}

export const scenarios: Scenario[] = [
  {
    id: "campus",
    name: "智慧校园",
    description: "校园/园区管理解决方案",
    icon: "🏫",
    color: "#4285f4",
    image: "/images/scenes/smart-campus.webp",
    products: [
      { id: "p1", name: "巡检无人机", specs: "校园安防巡逻，AI识别异常行为", emoji: "✈️" },
      { id: "p2", name: "物流机器人", specs: "园区快递配送，自主导航避障", emoji: "🤖" }
    ]
  },
  {
    id: "agriculture",
    name: "智慧农业",
    description: "农场管理与作业解决方案",
    icon: "🌾",
    color: "#22c55e",
    image: "/images/scenes/smart-agriculture.webp",
    products: [
      { id: "p3", name: "植保无人机", specs: "自动喷洒，精准作业，效率提升5倍", emoji: "🚁" },
      { id: "p4", name: "农业巡检机器人", specs: "作物健康监测，病虫害预警", emoji: "🤖" }
    ]
  },
  {
    id: "security",
    name: "巡检与安防",
    description: "安全巡检与监控解决方案",
    icon: "🚔",
    color: "#ef4444",
    image: "/images/scenes/inspection-security.webp",
    products: [
      { id: "p5", name: "安防巡逻无人机", specs: "24小时巡检，异常实时报警", emoji: "✈️" },
      { id: "p6", name: "安防机器人", specs: "自主巡逻，人脸识别，联动指挥", emoji: "🤖" }
    ]
  },
  {
    id: "logistics",
    name: "山地物流",
    description: "山区与复杂地形物流解决方案",
    icon: "⛰️",
    color: "#f59e0b",
    image: "/images/scenes/mountain-cargo.webp",
    products: [
      { id: "p7", name: "重载物流无人机", specs: "载重50kg，山区物资投送", emoji: "📦" },
      { id: "p8", name: "全地形运输车", specs: "履带底盘，复杂地形适应", emoji: "🚜" }
    ]
  }
];