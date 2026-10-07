import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "Better Man 网站隐私政策与资料使用说明。",
};

export default function Privacy() { return <main className="legal-page container"><Link href="/">← 返回首页</Link><h1>隐私政策</h1><p>Better Man 尊重访客隐私。本网站不设账户、购物车或在线付款。点击 WhatsApp 咨询时，你将离开本网站，相关通讯由 WhatsApp 平台处理。</p><p>若你通过 WhatsApp 主动提供个人资料，我们仅将其用于回应咨询与处理你提出的需求。本网站使用 Google Ads 转化衡量功能，以了解广告带来的 WhatsApp 联系操作；相关技术资料可能由 Google 按其隐私政策处理。</p><p>你可以通过浏览器设置管理 Cookie 或相关追踪权限。如需查询与本网站有关的资料使用情况，可通过网站所列 WhatsApp 联系方式与我们联系。</p></main>; }
