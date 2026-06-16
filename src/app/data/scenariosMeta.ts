export const scenariosMeta = [
  {
    id: 'security',
    title: '巡检安防',
    subtitle: 'INSPECTION & SECURITY',
    description: '空地协同、全天候覆盖。无人机高空巡检与地面机器人联动，配合AI摄像系统，构建立体化安防网络，将人力成本降低60%以上。',
    image: '/images/scenes/inspection-security.png',
    highlights: ['24小时无人值守', 'AI异常行为识别', '空地联动响应', '实时预警推送'],
  },
  {
    id: 'campus',
    title: '智慧校园',
    subtitle: 'SMART CAMPUS',
    description: '从校园安保到快递配送，一套无人系统覆盖全场景。巡检无人机+地面配送机器人+固定摄像网络，打造真正的智慧校园基础设施。',
    image: '/images/scenes/smart-campus.png',
    highlights: ['校园安防巡逻', '快递末端配送', '人员轨迹分析', '异常事件告警'],
  },
  {
    id: 'agriculture',
    title: '智慧农业',
    subtitle: 'SMART AGRICULTURE',
    description: '精准植保，效率是人工的5倍。全自动航线规划，精准喷洒，实时监测作物长势，为农业生产提供数字化解决方案。',
    image: '/images/scenes/smart-agriculture.png',
    highlights: ['全自动航线规划', '精准变量喷洒', '作物健康监测', '作业数据存档'],
  },
  {
    id: 'logistics',
    title: '山地物流',
    subtitle: 'MOUNTAIN LOGISTICS',
    description: '打通偏远地区最后一公里。大载重无人机配合全地形运输车，克服山地、林区、雪地等复杂地形，实现物资高效精准投送。',
    image: '/images/scenes/mountain-cargo.png',
    highlights: ['50kg级载重投送', '全地形车协同', '复杂气象适应', '米级精准投放'],
  },
];

export type ScenarioMeta = typeof scenariosMeta[number];
