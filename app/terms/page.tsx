import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用条款",
  description: "Better Man 网站使用条款与产品资讯说明。",
};

export default function Terms() { return <main className="legal-page container"><Link href="/">← 返回首页</Link><h1>使用条款</h1><p>本网站提供 Better Man 产品的一般资讯与日常保健参考，并非医疗建议、诊断或治疗用途。产品资料与配套请通过 WhatsApp 向我们确认。</p><p>顾客分享属于个人体验，实际感受可能因身体状态及生活习惯而异。如有健康相关疑问，请咨询专业医疗人员。正式上线前，请根据实际运营主体与适用地区法规完善本条款。</p></main>; }
