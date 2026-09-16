import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "Better Man 网站隐私政策与资料使用说明。",
};

export default function Privacy() { return <main className="legal-page container"><Link href="/">← 返回首页</Link><h1>隐私政策</h1><p>Better Man 尊重访客隐私。本网站不设账户、购物车或在线付款。点击 WhatsApp 咨询时，你将离开本网站，相关通讯由 WhatsApp 平台处理。</p><p>若你通过 WhatsApp 主动提供个人资料，我们仅将其用于回应咨询与处理你提出的需求。正式上线前，请根据实际运营主体、广告追踪工具及适用地区法规补充完整政策。</p></main>; }
