"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BatteryFull, Brain, ChevronDown, Clock3, HeartPulse, Menu, MessageCircle, Moon, Play, TrendingUp, X } from "lucide-react";
import type { PhotoReview, VideoReview } from "@/data/reviews";
import { whatsappHref } from "@/config/site";

declare global {
  interface Window {
    gtag?: (command: "event", eventName: "conversion", parameters: { send_to: string }) => void;
  }
}

function trackWhatsAppConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18459690544/wwSsCK34zv8cELCMouJE",
    });
  }
}

const nav = [ ["产品介绍", "#benefits"], ["核心成分", "#ingredients"], ["食用方式", "#how-to-use"], ["顾客反馈", "#reviews"], ["FAQ", "#faq"] ];
function BrandLogo() { return <span className="brand-logo"><Image src="/brand/better-man-logo.png" alt="Better Man 官方 Logo" width={1391} height={970} priority /></span>; }
function WaButton({ children = "WhatsApp 咨询", light = false, className = "" }: { children?: React.ReactNode; light?: boolean; className?: string }) { return <a className={`button button-whatsapp ${light ? "button-whatsapp-light" : ""} ${className}`} href={whatsappHref()} onClick={trackWhatsAppConversion} target="_blank" rel="noopener noreferrer" aria-label="通过 WhatsApp 咨询 Better Man"><MessageCircle size={18}/>{children}<ArrowUpRight size={17}/></a>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
function SectionHeading({ eyebrow, title, desc, center = false }: { eyebrow: string; title: React.ReactNode; desc?: React.ReactNode; center?: boolean }) { return <div className={`section-heading ${center ? "center" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{desc && <p className="section-desc">{desc}</p>}</div>; }
function Header() { const [open, setOpen] = useState(false); return <header className="site-header"><div className="container header-inner"><a className="brand" href="#home" aria-label="Better Man 首页"><BrandLogo/></a><nav className="desktop-nav" aria-label="主导航">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><WaButton className="header-cta">WhatsApp 咨询</WaButton><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "关闭菜单" : "打开菜单"}>{open ? <X/> : <Menu/>}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="移动导航"><a className="mobile-brand" href="#home" onClick={() => setOpen(false)}><BrandLogo/></a>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}<WaButton>WhatsApp 立即咨询</WaButton></nav>}</header>; }
function Hero() { return <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy"><Eyebrow>BETTER MAN / 男性日常状态保养</Eyebrow><h1>不够硬、撑不久、<br/><em>状态越来越难维持？</em></h1><p className="hero-value">年纪慢慢上来，精神、体力、耐力都不像以前。<br/>很多男人不是不想，是身体真的开始跟不上。</p><div className="hero-primary-action"><WaButton>WhatsApp 私下了解</WaButton><small>不懂怎么吃？直接 WhatsApp 问我们。</small></div></div><div className="hero-visual"><div className="hero-art"><div className="hero-product"><Image src="/images/hero/better-man-product.png" alt="Better Man 宝马糖产品盒与独立包装" width={1254} height={1254} priority className="product-image" sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 900px) min(620px, calc(100vw - 48px)), 45vw"/></div></div></div><div className="hero-close"><div className="hero-slogan" aria-label="Better Man，有心又有力，随时都 Ready."><span className="hero-slogan-eyebrow">BETTER MAN</span><strong><span>有心又有力，</span><span>随时都 <em>Ready.</em></span></strong></div><a className="button button-secondary" href="#how-to-use">看看 Better Man 怎么吃 <ArrowDown size={17}/></a></div></div><div className="hero-bottom container"><span>从平时开始，照顾男人的状态。</span><a href="#state" aria-label="继续了解男性状态">向下探索 <ArrowDown size={15}/></a></div></section>; }
const problems = [
  { icon: HeartPulse, title: "硬度不如以前", desc: "明明有感觉，但就是没有以前那么硬，维持也越来越难。" },
  { icon: Clock3, title: "时间越来越短", desc: "以前还能撑，现在越来越快，自己都开始觉得尴尬。" },
  { icon: TrendingUp, title: "做到一半容易掉", desc: "刚开始明明还可以，做到一半却慢慢软下来，越急越不行。" },
  { icon: Brain, title: "精神越来越差", desc: "以前下班还有精神，现在工作一天回家，只想休息。" },
  { icon: BatteryFull, title: "体力明显跟不上", desc: "不是不想，是身体真的没有以前那么有力了。" },
  { icon: Moon, title: "晚上一直夜尿", desc: "一个晚上起来几次，觉都睡不好，第二天整个人更累。" },
];
function Problems() { return <section id="state" className="section section-cream"><div className="container"><div className="lifestyle-feature-head"><div><SectionHeading eyebrow="01 / KNOW YOUR STATE" title={<>这些情况，<br/>你有没有中几个？</>} desc={<>很多男人都是慢慢发现，<br/>自己真的没有以前那么好了。</>}/></div><div className="lifestyle-real-image"><Image src="/images/lifestyle/understand-your-state.png" alt="夜晚坐在床边疲惫思考的成年男性" width={1536} height={1024} loading="lazy" sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 52px), 55vw"/></div></div><div className="problem-grid">{problems.map((item, i) => <article className="problem-card" key={item.title}><div className="card-top"><item.icon size={23} strokeWidth={1.6}/><span>0{i+1}</span></div><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div><p className="problem-statement">如果中了几个，<br/>就别一直拖着不管。</p></div></section>; }
const benefits = [
  [HeartPulse, "硬度", "希望硬一点、稳一点，不要每次都难维持。"],
  [TrendingUp, "耐久", "想撑久一点，不要才刚开始就结束。"],
  [Brain, "精神", "白天做事有精神一点，不要整天感觉累累的。"],
  [BatteryFull, "体力", "身体有力一点，做什么都没那么容易累。"],
  [Moon, "夜尿", "晚上少被频繁起夜影响，睡得好，第二天精神也比较好。"],
  [HeartPulse, "三高", "平时也关注血压、血糖、血脂，作为日常健康管理的辅助。"],
] as const;
function Benefits() { return <section id="benefits" className="section section-cream support-section"><div className="container"><div className="support-visual-head"><SectionHeading eyebrow="02 / WHAT BETTER MAN SUPPORTS" title={<>Better Man，<br/>帮你把男人的状态找回来。</>} desc={<>硬度不够、时间越来越短、精神体力跟不上，晚上还一直夜尿？<br/>别再一个一个烦，Better Man 通通帮你解决。</>}/><div className="support-person-image"><Image src="/images/lifestyle/daily-support.png" alt="成熟男性在办公室手持 Better Man 产品并比赞" width={1536} height={1024} loading="lazy" sizes="(max-width: 768px) calc(100vw - 40px), 52vw"/></div></div><div className="benefit-grid support-grid">{benefits.map(([Icon,label,desc], index) => <article className="benefit-item support-item" key={label}><span className="support-icon"><Icon size={23} strokeWidth={1.7}/></span><small>0{index + 1}</small><div><h3>{label}</h3><p>{desc}</p></div></article>)}</div><p className="support-callout">男人要顾的，<br/>从来不只是那几分钟。</p></div></section>; }

const ingredientItems = [
  { number: "01", label: "CORE INGREDIENT", name: "红东革阿里", english: "RED TONGKAT ALI", image: "/images/ingredients/tongkat-ali.webp", highlight: "男性活力 · 日常精力 · 体力支持", description: "Better Man 的核心男性草本成分之一，用于支持男性日常活力、精力与体力状态。", tags: ["男性活力", "日常精力", "体力支持"], core: true },
  { number: "02", label: "CORE INGREDIENT", name: "黑玛卡", english: "BLACK MACA", image: "/images/ingredients/black-maca.webp", highlight: "精力 · 耐力 · 男性状态", description: "另一项核心男性草本成分，围绕日常精力、耐力与男性状态进行补充。", tags: ["日常精力", "耐力", "男性状态"], core: true },
  { number: "03", label: "SUPPORTING INGREDIENT", name: "锌", english: "ZINC", image: "/images/ingredients/zinc.webp", highlight: "人体必需微量元素 · 基础营养支持", description: "人体必需的微量元素，为 Better Man 配方补充男性日常所需的基础营养支持。", tags: ["必需微量元素", "基础营养", "日常支持"], core: false },
  { number: "04", label: "SUPPORTING INGREDIENT", name: "罗汉果", english: "MONK FRUIT", image: "/images/ingredients/monk-fruit.webp", highlight: "植物来源 · 配方体验", description: "植物来源的配方组成，主要用于完善整体配方与日常食用体验。", tags: ["植物来源", "配方组成", "食用体验"], core: false },
];
function Ingredients() { const core = ingredientItems.filter((item) => item.core); const supporting = ingredientItems.filter((item) => !item.core); return <section id="ingredients" className="section ingredient-showcase"><div className="container"><SectionHeading eyebrow="03 / THE INGREDIENTS" title={<>好状态，<br/>从好成分开始。</>} desc="Better Man 选的不是一堆花俏成分，而是把重点放在男人真正需要的地方。"/><div className="ingredient-core-grid">{core.map((item) => <article key={item.number} className="ingredient-core-card"><div className="ingredient-story-image"><Image src={item.image} alt={`${item.name}原料视觉图片`} width={1536} height={1024} loading="lazy" sizes="(max-width: 650px) calc(100vw - 40px), 48vw"/></div><div className="ingredient-story-copy"><span className="ingredient-story-label">{item.label} / {item.number}</span><span className="ingredient-story-english">{item.english}</span><h3>{item.name}</h3><p className="ingredient-story-highlight">{item.highlight}</p><p className="ingredient-story-description">{item.description}</p><div className="ingredient-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><div className="ingredient-support-grid">{supporting.map((item) => <article key={item.number} className="ingredient-support-card"><div className="ingredient-support-image"><Image src={item.image} alt={`${item.name}原料视觉图片`} width={1536} height={1024} loading="lazy" sizes="(max-width: 650px) calc(100vw - 40px), 24vw"/></div><div><span>{item.label} / {item.number}</span><small>{item.english}</small><h3>{item.name}</h3><strong>{item.highlight}</strong><p>{item.description}</p><div className="ingredient-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>; }
const usePoints = [
  { number: "01", title: "不用每天记着吃", lead: "每5天1颗，照着吃就可以。" },
  { number: "02", title: "一盒14颗", lead: "按每5天1颗来吃，一盒可以吃两个多月。" },
  { number: "03", title: "平时就可以开始", lead: "不用等到状态越来越差，平时就可以慢慢养起来。" },
];
function HowToUse() { return <section id="how-to-use" className="section how-to-use-section how-to-use-compact"><div className="container"><div className="how-to-use-heading"><div className="how-to-kicker"><span>04 / HOW TO USE</span><strong>简单吃，坚持养</strong></div><h2>不需要天天吃，<br/><em>5天1颗就够。</em></h2></div><div className="how-to-mobile-photo"><Image src="/images/how-to-use/better-man-handheld.png" alt="真人手持 Better Man 独立包装" width={1254} height={1254} loading="lazy" sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1200px) 42vw, 500px"/></div><div className="how-to-main"><div className="dose-visual" aria-label="每5天食用1颗"><span className="dose-caption">THE BETTER MAN ROUTINE</span><div className="dose-step"><strong>5</strong><div><b>DAYS</b><span>每5天</span></div></div><div className="dose-arrow" aria-hidden="true"><span></span><ArrowDown size={24}/></div><div className="dose-step dose-step-one"><strong>1</strong><div><b>PIECE</b><span>1颗</span></div></div></div><div className="use-points">{usePoints.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><strong>{item.lead}</strong></div></article>)}</div></div></div></section>; }
function Disclaimer() { return <p className="review-disclaimer">以上内容为顾客个人使用体验分享，实际感受会因个人身体状态及生活习惯而有所不同。</p>; }
function CustomerReviews({ photos, videos }: { photos: PhotoReview[]; videos: VideoReview[] }) {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoReview | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const available = photos.flatMap((p, i) => p.available ? [i] : []);
  const step = (direction: number) => setPhotoIndex((current) => current === null || !available.length ? null : available[(available.indexOf(current) + direction + available.length) % available.length]);
  useEffect(() => {
    if (photoIndex === null && !activeVideo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setPhotoIndex(null); setActiveVideo(null); } if (photoIndex !== null && e.key === "ArrowLeft") step(-1); if (photoIndex !== null && e.key === "ArrowRight") step(1); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { videoRef.current?.pause(); document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  });
  const photo = photoIndex !== null ? photos[photoIndex] : null;
  return <section id="reviews" className="section customer-reviews"><div className="container">
    <div className="reviews-heading"><div><span>05 / REAL CUSTOMER FEEDBACK</span><strong>真实顾客反馈</strong></div><div><h2>看看服用 Better Man 后，<br/><em>顾客怎么说。</em></h2></div></div>
    <div className="review-group"><div className="review-track review-video-track">{videos.map((item) => <button key={`v${item.id}`} type="button" className="mixed-card mixed-video" disabled={!item.available} onClick={() => setActiveVideo(item)} aria-label={item.available ? `播放${item.title}` : `${item.title}素材待上传`}>
      {item.available ? <video src={item.video} poster={item.posterAvailable ? item.poster : undefined} muted playsInline preload="metadata" aria-hidden="true"/> : <span className="mixed-video-placeholder"><b>VIDEO / 0{item.id}</b><strong>顾客视频分享</strong><small>竖版视频待上传</small></span>}{item.available && <span className="play-circle"><Play fill="currentColor" size={21}/></span>}<span className="mixed-label"><span>REAL VIDEO / 0{item.id}</span><Play size={16}/></span>
    </button>)}</div></div>
    <div className="review-group"><div className="mobile-review-subhead"><span>REAL FEEDBACK</span><h3>来自顾客的真实反馈。</h3></div><div className="review-track review-photo-track">{photos.map((item) => <button key={`p${item.id}`} type="button" className="mixed-card mixed-photo" disabled={!item.available} onClick={() => setPhotoIndex(photos.indexOf(item))} aria-label={item.available ? `查看${item.name}完整图片` : `${item.name}素材待上传`}>
      {item.available ? <Image src={item.image} alt={item.name} width={784} height={1280} loading="lazy" sizes="(max-width: 650px) 78vw, (max-width: 900px) 45vw, 25vw"/> : <span className="mixed-placeholder"><b>IMAGE / 0{item.id}</b><small>真实图片待上传</small></span>}<span className="mixed-label"><span>REAL FEEDBACK / 0{item.id}</span><ArrowUpRight size={16}/></span>
    </button>)}</div></div>
    <Disclaimer/>
    <div className="review-simple-cta"><WaButton>WhatsApp 私下了解</WaButton><small>WhatsApp 一对一咨询</small></div>
  </div>
  {photo?.available && <div className="modal-backdrop" role="presentation" onMouseDown={() => setPhotoIndex(null)}><div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.name} onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setPhotoIndex(null)} aria-label="关闭图片"><X/></button><button className="modal-arrow left" onClick={() => step(-1)} aria-label="上一张"><ArrowLeft/></button><Image src={photo.image} alt={photo.name} width={1000} height={1100} className="lightbox-image"/><button className="modal-arrow right" onClick={() => step(1)} aria-label="下一张"><ArrowRight/></button><span className="modal-count">{available.indexOf(photoIndex!)+1} / {available.length}</span></div></div>}
  {activeVideo && <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveVideo(null)}><div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveVideo(null)} aria-label="关闭视频"><X/></button><video ref={videoRef} src={activeVideo.video} poster={activeVideo.posterAvailable ? activeVideo.poster : undefined} controls playsInline preload="metadata" autoPlay/></div></div>}
  </section>;
}

const faqs = [
  { question: "Better Man 主要适合什么人？", paragraphs: ["适合开始感觉精神、体力、耐力或男性状态不如以前，希望从日常开始照顾整体状态的成年男性。"] },
  { question: "多久吃一次？", paragraphs: ["建议每5天食用1颗，按照规律持续补充即可。", "不需要天天吃，也不需要等到有需要的时候才想起食用。"] },
  { question: "一盒有多少颗？可以吃多久？", paragraphs: ["每盒共有14颗。", "按照每5天1颗的建议食用方式，一盒约可食用70天。"] },
  { question: "Better Man 的主要成分是什么？", paragraphs: ["Better Man 结合4种配方成分，以红东革阿里与黑玛卡作为核心，搭配锌与罗汉果，从男性日常精神、体力、耐力与活力等方向进行补充。"] },
  { question: "一般多久会感觉到变化？", paragraphs: ["每个人的身体状态、生活习惯和吸收情况不同，因此实际感受时间也会有所不同。", "Better Man 更强调规律补充与持续调理，而不是把它当成只追求一次即时感觉的产品。"] },
  { question: "Better Man 是有需要的时候才吃吗？", paragraphs: ["不是。", "Better Man 的理念是把男性状态放在平时照顾，而不是等到真正需要的时候才开始。", "按照建议每5天1颗规律补充，让日常保养变得更简单。"] },
  { question: "第一次尝试应该怎么开始？", paragraphs: ["可以先从一盒开始。如果不确定是否适合自己，可通过 WhatsApp 联系我们了解产品与食用方式。"] },
  { question: "食用 Better Man 需要注意什么？", paragraphs: ["请按照建议食用方式使用，不需要自行增加食用量。", "如果正在服用药物、正在接受治疗，或本身有特殊健康状况，建议食用前先咨询医生或合格医疗专业人士。"] },
  { question: "Better Man 多少钱？", paragraphs: ["Better Man 不同地区及活动期间的配套可能有所不同。", "点击 WhatsApp 联系我们，即可查看目前最新配套与优惠。"], link: "查看目前优惠 →" },
  { question: "怎样下单？", paragraphs: ["点击网站任何一个绿色 WhatsApp 按钮，即可进入一对一咨询与下单。", "告诉我们你所在的地区，我们会提供目前可选择的配套、价格及下单方式。"], link: "WhatsApp 立即咨询 ↗", button: true },
];
function FAQ() { return <section id="faq" className="section section-cream"><div className="container faq-layout"><div><SectionHeading eyebrow="FAQ" title="你可能还想了解" desc="有关 Better Man 的常见问题，都在这里。"/></div><div className="faq-list">{faqs.map((item,i) => <details key={item.question}><summary><span className="faq-number">{String(i+1).padStart(2,"0")}</span><strong>{item.question}</strong><ChevronDown size={20}/></summary><div className="faq-answer"><div>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{item.link && <a className={item.button ? "faq-answer-button" : "faq-answer-link"} href={whatsappHref()} onClick={trackWhatsAppConversion} target="_blank" rel="noopener noreferrer">{item.link}</a>}</div></div></details>)}</div></div></section>; }
function FinalCTA() { return <section className="final-cta"><div className="container final-inner"><Eyebrow>BETTER MAN</Eyebrow><h2>不确定 Better Man<br/><em>适不适合你？</em></h2><p>直接 WhatsApp 问我们，不用自己猜。</p><WaButton light>WhatsApp 问一问</WaButton><div className="final-slogan">Better Man｜有心又有力，随时都 Ready。</div></div></section>; }
function Footer() { return <footer className="footer"><div className="container"><div className="footer-main"><div><a className="brand footer-brand" href="#home" aria-label="Better Man 首页"><BrandLogo/></a></div><nav aria-label="页脚导航"><a href="#benefits">产品介绍</a><a href="#ingredients">核心成分</a><a href="#how-to-use">食用方式</a><a href="#reviews">顾客反馈</a><a href="#faq">FAQ</a><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Better Man. All rights reserved.</span></div></div></footer>; }
function FloatingWhatsApp() { return <a className="floating-wa" href={whatsappHref()} onClick={trackWhatsAppConversion} target="_blank" rel="noopener noreferrer" aria-label="通过 WhatsApp 咨询 Better Man"><MessageCircle size={23} fill="currentColor"/><span>WhatsApp 咨询</span></a>; }
export function Site({ photos, videos }: { productAvailable: boolean; photos: PhotoReview[]; videos: VideoReview[] }) { return <><Header/><main><Hero/><Problems/><Benefits/><Ingredients/><HowToUse/><CustomerReviews photos={photos} videos={videos}/><FAQ/><FinalCTA/></main><Footer/><FloatingWhatsApp/></>; }






