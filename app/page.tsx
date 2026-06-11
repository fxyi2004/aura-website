"use client";

import Image from "next/image";
import { useState } from "react";

const scenarios = [
  {
    name: "智慧校园",
    description: "校园/园区管理解决方案",
    image: "/images/scenes/smart-campus.png",
  },
  {
    name: "智慧农业",
    description: "农场管理与作业解决方案",
    image: "/images/scenes/smart-agriculture.png",
  },
  {
    name: "巡检与安防",
    description: "安全巡检与监控解决方案",
    image: "/images/scenes/inspection-security.png",
  },
  {
    name: "山地物流",
    description: "山区与复杂地形物流解决方案",
    image: "/images/scenes/mountain-cargo.png",
  },
];

const products = [
  { name: "产品 1", src: "/images/products/1.png" },
  { name: "产品 2", src: "/images/products/2.png" },
  { name: "产品 3", src: "/images/products/3.png" },
  { name: "产品 4", src: "/images/products/4.png" },
  { name: "产品 5", src: "/images/products/5.png" },
  { name: "产品 6", src: "/images/products/6.png" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen text-gray-800">

      {/* NAV */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <div className="font-bold text-2xl">AURA</div>
          <nav className="hidden md:flex gap-6">
            <a href="#scenarios">解决方案</a>
            <a href="#products">产品</a>
            <a href="#about">关于</a>
            <a href="#contact">联系</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">AURA</h1>
            <p className="text-xl mb-2">SMART SYSTEMS, REAL IMPACT.</p>
            <p className="opacity-90 mb-6">
              Autonomous Robots & Intelligent Systems
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              智能选型助手
            </button>
          </div>

          <div className="flex-1">
            <Image
              src="/images/products/1.png"
              alt="hero"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* SCENES */}
      <section id="scenarios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            按场景选择解决方案
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg"
              >
                <Image
                  src={s.image}
                  alt={s.name}
                  width={140}
                  height={140}
                  className="mx-auto mb-4"
                />
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {s.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            核心产品
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="border rounded-xl overflow-hidden flex flex-col"
              >
                <div className="h-64 bg-gray-50 flex items-center justify-center">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="object-contain h-full"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="font-semibold text-center">{p.name}</div>
                  <div className="text-sm text-gray-500 text-center flex-1 mt-2">
                    核心卖点占位
                  </div>

                  <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg">
                    查看详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">关于 AURA</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          智能机器人系统提供商，专注农业、物流、巡检与安防场景解决方案。
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">联系我们</h2>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
          获取方案
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} AURA
      </footer>

      {/* ASSISTANT */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80">
            <div className="font-bold mb-2">智能选型助手</div>
            <p className="text-sm text-gray-600 mb-4">
              占位功能：后续做问答式选型
            </p>

            <button
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
            >
              关闭
            </button>
          </div>
        </div>
      )}

    </main>
  );
}