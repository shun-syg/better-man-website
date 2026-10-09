import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用条款",
  description: "Better Man 网站使用条款与产品资讯说明",
};

export default function Terms() { return <main className="legal-page container"><Link href="/">← 返回首页</Link><h1>使用条款</h1><p>本网站提供 Better Man 的一般产品、配方与食用方式资讯，本产品不是药物，网站内容并非医疗建议，也不用于诊断、治疗、治愈或预防任何疾病</p><p>产品应按照包装标签及建议方式使用，不应自行增加食用量，营养补充不能替代均衡饮食、规律作息与适量运动</p><p>如正在服药、接受治疗、患有健康问题，或对任何成分有疑问，请在使用前咨询医生或合格医疗专业人士，产品与配套资料可通过网站所列 WhatsApp 联系方式确认</p></main>; }
