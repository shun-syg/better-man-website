"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, BatteryFull, Brain, ChevronDown, HeartPulse, Menu, MessageCircle, TrendingUp, X } from "lucide-react";
import { whatsappHref } from "@/config/site";

declare global {
  interface Window {
    gtag?: (command: "event", eventName: "conversion", parameters: { send_to: string }) => void;
  }
}

function trackWhatsAppConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: "AW-18459690544/wwSsCK34zv8cELCMouJE" });
  }
}

const nav = [
  ["功效", "#benefits"],
  ["核心成分", "#ingredients"],
  ["食用方式", "#how-to-use"],
  ["顾客反馈", "#reviews"],
  ["FAQ", "#faq"],
];

function BrandLogo() {
  return <span className="brand-logo"><Image src="/brand/better-man-logo.webp" alt="Better Man 官方 Logo" width={1391} height={970} priority /></span>;
}

function WaButton({ children = "WhatsApp 咨询产品", light = false, className = "" }: { children?: React.ReactNode; light?: boolean; className?: string }) {
  return <a className={`button button-whatsapp ${light ? "button-whatsapp-light" : ""} ${className}`} href={whatsappHref()} onClick={trackWhatsAppConversion} target="_blank" rel="noopener noreferrer" aria-label="通过 WhatsApp 了解 Better Man 产品"><MessageCircle size={19} aria-hidden="true"/>{children}<ArrowUpRight size={17} aria-hidden="true"/></a>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: React.ReactNode }) {
  return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{desc && <p className="section-desc">{desc}</p>}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><a className="brand" href="#home" aria-label="Better Man 首页"><BrandLogo/></a><nav className="desktop-nav" aria-label="主导航">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><WaButton className="header-cta">WhatsApp 咨询产品</WaButton><button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "关闭菜单" : "打开菜单"}>{open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="移动导航">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} aria-hidden="true"/></a>)}<WaButton>WhatsApp 咨询产品</WaButton></nav>}</header>;
}

function Hero() {
  return <section id="home" className="campaign-hero"><Image className="campaign-hero-image" src="/images/hero/better-man-bedroom.webp" alt="Better Man 产品盒与独立包装置于高级卧室环境中" fill priority sizes="100vw"/><div className="campaign-hero-shade" aria-hidden="true"/><div className="container campaign-hero-inner"><div className="campaign-hero-copy"><Eyebrow>BETTER MAN</Eyebrow><h1>关键时刻，<br/>男人要有底气</h1><p className="campaign-hero-category">有心又有力，随时都 Ready</p><p className="campaign-hero-support">男人的好状态，不只在生活，更在两个人的亲密时刻</p><WaButton light>WhatsApp 了解 Better Man</WaButton></div></div></section>;
}

const benefitItems = [
  { icon: HeartPulse, title: "关键时刻，状态要在线" },
  { icon: BatteryFull, title: "好状态，不该匆匆结束" },
  { icon: TrendingUp, title: "两个人的亲密时刻" },
  { icon: Brain, title: "让彼此的相处更有温度" },
];

function Benefits() {
  return <section id="benefits" className="section benefits-section"><div className="container"><div className="benefits-intro"><SectionHeading eyebrow="02 / BENEFITS · 功效" title={<>男人想要的，<br/>无非是更好的状态</>}/><div className="benefits-visual"><Image src="/images/lifestyle/intimate-bedroom.webp" alt="深蓝色卧室中身穿香槟色丝绸睡袍的成年亚洲女性" width={2056} height={765} loading="lazy" sizes="(max-width: 767px) calc(100vw - 36px), 55vw"/></div></div><div className="benefits-list">{benefitItems.map((item) => <article key={item.title}><item.icon size={23} strokeWidth={1.7} aria-hidden="true"/><div><h3>{item.title}</h3></div></article>)}</div></div></section>;
}

const ingredientItems = [
  { name: "红东革阿里", english: "RED TONGKAT ALI", image: "/images/ingredients/tongkat-ali.webp", description: "传统男性草本，关注日常活力与状态" },
  { name: "黑玛卡", english: "BLACK MACA", image: "/images/ingredients/black-maca.webp", description: "植物营养精华，为忙碌生活补充活力" },
  { name: "锌", english: "ZINC", image: "/images/ingredients/zinc.webp", description: "男性重要营养元素，帮助维持正常生理机能" },
  { name: "罗汉果", english: "MONK FRUIT", image: "/images/ingredients/monk-fruit.webp", description: "天然植物成分，让整体营养配方更丰富" },
];

function Ingredients() {
  return <section id="ingredients" className="section ingredients-section"><div className="container"><SectionHeading eyebrow="03 / INGREDIENTS · 成分" title="四大核心成分"/><div className="ingredients-grid">{ingredientItems.map((item) => <article className="ingredient-card-visual" key={item.english}><div className="ingredient-card-image"><Image src={item.image} alt={`${item.name}原料图片`} width={1536} height={1024} loading="lazy" sizes="(max-width: 767px) calc(100vw - 36px), 48vw"/></div><div className="ingredient-card-copy"><p>{item.english}</p><h3>{item.name}</h3><span>{item.description}</span></div></article>)}</div></div></section>;
}

function HowToUse() {
  return <section id="how-to-use" className="section use-section"><div className="container"><Eyebrow>04 / HOW TO USE · 吃法</Eyebrow><div className="use-layout-new"><div className="use-photo-new"><Image src="/images/how-to-use/better-man-handheld.webp" alt="成年消费者手持 Better Man 独立包装" width={1254} height={1254} loading="lazy" sizes="(max-width: 767px) calc(100vw - 36px), 50vw"/></div><div className="use-copy-new"><div className="use-facts" aria-label="Better Man 食用方式与规格"><strong>每 5 天 1 颗</strong><strong>每盒 14 颗</strong><strong>独立包装</strong></div><p className="use-water">建议搭配温水食用</p><p className="use-notice">请按照建议食用量使用，不要自行增加食用量，如正在服药、接受治疗或有特殊健康状况，食用前建议咨询合格医疗专业人士</p></div></div></div></section>;
}

const videoReviews = [
  { video: "/reviews/videos/review-video-01.mp4", poster: "/reviews/posters/video-01.jpg", label: "顾客真实分享 01" },
  { video: "/reviews/videos/review-video-02.mp4", poster: "/reviews/posters/video-02.jpg", label: "顾客真实分享 02" },
];

function Reviews() {
  return <section id="reviews" className="section reviews-section"><div className="container"><div className="reviews-heading"><Eyebrow>05 / REAL CUSTOMER FEEDBACK</Eyebrow><h2>看看服用 Better Man 后，<br/>顾客的真实反馈</h2></div><div className="reviews-video-grid">{videoReviews.map((item) => <figure key={item.video}><video controls playsInline preload="none" poster={item.poster} aria-label={item.label}><source src={item.video} type="video/mp4"/>您的浏览器暂不支持视频播放</video><figcaption>{item.label}</figcaption></figure>)}</div><p className="review-disclaimer-new">以上内容为顾客个人使用体验分享，实际感受会因个人身体状态及生活习惯而有所不同</p></div></section>;
}

const faqs = [
  { question: "Better Man 适合什么人？", paragraphs: ["主要面向希望补充日常营养、维持男性活力、体力与整体状态的成年男性"] },
  { question: "Better Man 是药物吗？", paragraphs: ["不是，Better Man 是成年男性日常营养补充产品，不用于诊断、治疗、治愈或预防任何疾病"] },
  { question: "需要每天吃吗？", paragraphs: ["不需要，请按照产品建议食用方式使用，详细食用方法可参考上方「食用方式」"] },
  { question: "多久会感觉到变化？", paragraphs: ["每个人的身体状况、生活习惯与饮食不同，实际体验会因人而异，建议按照产品建议方式使用，并保持规律作息与生活习惯"] },
  { question: "可以自行增加食用量吗？", paragraphs: ["不建议，请按照建议食用量使用，不要自行增加食用量"] },
  { question: "正在服药可以吃吗？", paragraphs: ["如正在服用药物、接受治疗，或有特殊健康状况，建议食用前先咨询专业医疗人员"] },
  { question: "还有其他问题怎么办？", paragraphs: ["可以直接通过 WhatsApp 联系我们，了解产品成分、食用方式及其他产品资讯"], link: true },
];

function FAQ() {
  return <section id="faq" className="section faq-section"><div className="container faq-layout-new"><SectionHeading eyebrow="06 / FAQ" title="你可能还想了解" desc="有关 Better Man 的常见问题，都在这里"/><div className="faq-list">{faqs.map((item, index) => <details key={item.question}><summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><strong>{item.question}</strong><ChevronDown size={21} aria-hidden="true"/></summary><div className="faq-answer"><div>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{item.link && <a className="faq-answer-button" href={whatsappHref()} onClick={trackWhatsAppConversion} target="_blank" rel="noopener noreferrer">WhatsApp 咨询产品 ↗</a>}</div></div></details>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="final-cta"><div className="container final-inner"><Eyebrow>BETTER MAN</Eyebrow><h2>想知道 Better Man<br/><em>是否适合你？</em></h2><p>WhatsApp 联系我们，了解产品详情及最新优惠</p><WaButton light>WhatsApp 问一问</WaButton><div className="final-slogan">Better Man | 有心又有力，随时都 Ready</div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><a className="brand footer-brand" href="#home" aria-label="Better Man 首页"><BrandLogo/></a><nav aria-label="页脚导航">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Better Man. All rights reserved.</span></div></div></footer>;
}

function FloatingWhatsApp() {
  return <a className="floating-wa" href={whatsappHref()} onClick={trackWhatsAppConversion} target="_blank" rel="noopener noreferrer" aria-label="通过 WhatsApp 咨询 Better Man 产品"><MessageCircle size={23} fill="currentColor" aria-hidden="true"/><span>WhatsApp 咨询产品</span></a>;
}

export function Site() {
  return <><a className="skip-link" href="#main-content">跳至主要内容</a><Header/><main id="main-content" tabIndex={-1}><Hero/><Benefits/><Ingredients/><HowToUse/><Reviews/><FAQ/><FinalCTA/></main><Footer/><FloatingWhatsApp/></>;
}
