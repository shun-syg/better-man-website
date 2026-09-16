"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BatteryFull, Brain, ChevronDown, Clock3, HeartPulse, Menu, MessageCircle, Moon, Play, TrendingUp, X } from "lucide-react";
import type { PhotoReview, VideoReview } from "@/data/reviews";
import { whatsappHref } from "@/config/site";

const nav = [ ["产品介绍", "#benefits"], ["核心成分", "#ingredients"], ["食用方式", "#how-to-use"], ["顾客反馈", "#reviews"], ["FAQ", "#faq"] ];
function BrandLogo() { return <span className="brand-logo"><Image src="/brand/better-man-logo.png" alt="Better Man 官方 Logo" width={1391} height={970} priority /></span>; }
function WaButton({ children = "WhatsApp 咨询", light = false, className = "" }: { children?: React.ReactNode; light?: boolean; className?: string }) { return <a className={`button button-whatsapp ${light ? "button-whatsapp-light" : ""} ${className}`} href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="通过 WhatsApp 咨询 Better Man"><MessageCircle size={18}/>{children}<ArrowUpRight size={17}/></a>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
function SectionHeading({ eyebrow, title, desc, center = false }: { eyebrow: string; title: React.ReactNode; desc?: React.ReactNode; center?: boolean }) { return <div className={`section-heading ${center ? "center" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{desc && <p className="section-desc">{desc}</p>}</div>; }
function Header() { const [open, setOpen] = useState(false); return <header className="site-header"><div className="container header-inner"><a className="brand" href="#home" aria-label="Better Man 首页"><BrandLogo/></a><nav className="desktop-nav" aria-label="主导航">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><WaButton className="header-cta">WhatsApp 咨询</WaButton><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "关闭菜单" : "打开菜单"}>{open ? <X/> : <Menu/>}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="移动导航"><a className="mobile-brand" href="#home" onClick={() => setOpen(false)}><BrandLogo/></a>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}<WaButton>WhatsApp 立即咨询</WaButton></nav>}</header>; }
function Hero() { return <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy"><Eyebrow>BETTER MAN / 男性日常状态保养</Eyebrow><h1>不够硬、撑不久、<br/><em>状态越来越难维持？</em></h1><p className="hero-value">把精神、体力、耐力与男性状态，放回日常慢慢照顾。</p><div className="hero-primary-action"><WaButton>WhatsApp 私下了解</WaButton><small>一对一咨询 · 不清楚怎么吃可以直接问</small></div></div><div className="hero-visual"><div className="hero-art"><div className="hero-product"><Image src="/images/hero/better-man-product.png" alt="Better Man 宝马糖产品盒与独立包装" width={1254} height={1254} priority className="product-image" sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 900px) min(620px, calc(100vw - 48px)), 45vw"/></div></div></div><div className="hero-close"><p className="hero-slogan">Better Man，有心又有力，随时都 Ready.</p><a className="button button-secondary" href="#how-to-use">看看 Better Man 怎么吃 <ArrowDown size={17}/></a></div></div><div className="hero-bottom container"><span>从平时开始，照顾男人的状态。</span><a href="#state" aria-label="继续了解男性状态">向下探索 <ArrowDown size={15}/></a></div></section>; }
const problems = [
  { icon: HeartPulse, title: "硬度不如以前", desc: "状态没有以前那么好，也越来越难维持。" },
  { icon: Clock3, title: "时间越来越短", desc: "耐久度下降，状态比以前更容易结束。" },
  { icon: TrendingUp, title: "状态容易掉", desc: "刚开始还可以，但维持状态越来越吃力。" },
  { icon: Brain, title: "精神越来越差", desc: "工作一天就容易疲累，整个人没有以前有精神。" },
  { icon: BatteryFull, title: "体力跟不上", desc: "想做的事情还有很多，但身体状态明显没有以前好。" },
  { icon: Moon, title: "夜尿越来越频繁", desc: "晚上经常需要起来上厕所，睡眠和第二天精神也容易受到影响。" },
];
function Problems() { return <section id="state" className="section section-cream"><div className="container"><div className="lifestyle-feature-head"><div><SectionHeading eyebrow="01 / KNOW YOUR STATE" title={<>有些变化，<br/>不需要别人提醒。</>} desc="了解你的状态"/></div><div className="lifestyle-real-image"><Image src="/images/lifestyle/understand-your-state.png" alt="夜晚坐在床边疲惫思考的成年男性" width={1536} height={1024} loading="lazy" sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 52px), 55vw"/></div></div><div className="problem-grid">{problems.map((item, i) => <article className="problem-card" key={item.title}><div className="card-top"><item.icon size={23} strokeWidth={1.6}/><span>0{i+1}</span></div><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div><p className="problem-statement">如果这些情况开始越来越明显，就该开始关注自己的状态。</p></div></section>; }
const benefits = [
  [HeartPulse, "硬度状态", "照顾男人在意的硬度与整体男性状态。"],
  [TrendingUp, "耐久表现", "帮助维持耐力与持久状态。"],
  [Brain, "精神", "日常更有精神，不容易整天感觉疲惫。"],
  [BatteryFull, "体力", "照顾日常体力与活力状态。"],
  [Moon, "夜尿", "照顾夜间频繁起床上厕所的男性状态。"],
] as const;
function Benefits() { return <section id="benefits" className="section section-cream"><div className="container"><SectionHeading eyebrow="02 / WHAT BETTER MAN SUPPORTS" title={<>不只是关键时刻，<br/>是把男人的状态慢慢照顾回来。</>} desc="Better Man 照顾什么？"/><div className="benefit-grid support-grid">{benefits.map(([Icon,label,desc]) => <div className="benefit-item" key={label}><span><Icon size={22} strokeWidth={1.7}/></span><div><h3>{label}</h3><p>{desc}</p></div></div>)}</div><p className="support-close">Better Man，不只是为了关键时刻，而是从硬度、耐久、精神、体力到夜间状态，把男人整体状态慢慢照顾起来。</p></div></section>; }

const ingredientItems = [
  { number: "01", label: "CORE INGREDIENT", name: "红东革阿里", english: "RED TONGKAT ALI", image: "/images/ingredients/tongkat-ali.webp", description: "男性活力与日常状态保养。" },
  { number: "02", label: "CORE INGREDIENT", name: "黑玛卡", english: "BLACK MACA", image: "/images/ingredients/black-maca.webp", description: "体力、精力与耐力方面的日常补充。" },
];
function Ingredients() { return <section id="ingredients" className="section ingredient-showcase"><div className="container"><SectionHeading eyebrow="03 / THE INGREDIENTS" title={<>两种核心成分，<br/>专注男人需要的状态。</>} desc="核心成分"/><div className="ingredient-stories ingredient-stories-compact">{ingredientItems.map((item, index) => <article key={item.number} className={`ingredient-story ${index % 2 ? "ingredient-story-reverse" : ""} ingredient-story-core`}><div className="ingredient-story-image"><Image src={item.image} alt={`${item.name}原料视觉图片`} width={1536} height={1024} loading="lazy" sizes="(max-width: 650px) 100vw, 50vw"/></div><div className="ingredient-story-copy"><span className="ingredient-story-label">{item.label} / {item.number}</span><span className="ingredient-story-english">{item.english}</span><h3>{item.name}</h3><p className="ingredient-story-description">{item.description}</p></div></article>)}</div><p className="ingredients-close">少而专注，把重点放在男人真正关心的状态。</p></div></section>; }
const usePoints = [
  { number: "01", title: "食用方式", lead: "每5天食用1颗。" },
  { number: "02", title: "一盒份量", lead: "每盒14颗。" },
  { number: "03", title: "日常保养", lead: "适合作为平时规律保养。" },
];
function HowToUse() { return <section id="how-to-use" className="section how-to-use-section how-to-use-compact"><div className="container"><div className="how-to-use-heading"><div className="how-to-kicker"><span>05 / HOW TO USE</span><strong>简单吃，坚持养</strong></div><h2>不需要天天吃，<br/><em>5天1颗就够。</em></h2></div><div className="how-to-mobile-photo"><Image src="/images/how-to-use/better-man-handheld.png" alt="真人手持 Better Man 独立包装" width={1254} height={1254} loading="lazy" sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1200px) 42vw, 500px"/></div><div className="how-to-main"><div className="dose-visual" aria-label="每5天食用1颗"><span className="dose-caption">THE BETTER MAN ROUTINE</span><div className="dose-step"><strong>5</strong><div><b>DAYS</b><span>每5天</span></div></div><div className="dose-arrow" aria-hidden="true"><span></span><ArrowDown size={24}/></div><div className="dose-step dose-step-one"><strong>1</strong><div><b>PIECE</b><span>1颗</span></div></div></div><div className="use-points">{usePoints.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><strong>{item.lead}</strong></div></article>)}</div></div></div></section>; }
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
  const order: ({ kind: "photo"; item: PhotoReview } | { kind: "video"; item: VideoReview })[] = [
    { kind: "video", item: videos[0] }, { kind: "video", item: videos[1] },
    { kind: "photo", item: photos[0] }, { kind: "photo", item: photos[1] },
    { kind: "photo", item: photos[2] }, { kind: "photo", item: photos[3] },
  ];
  const photo = photoIndex !== null ? photos[photoIndex] : null;
  return <section id="reviews" className="section customer-reviews"><div className="container">
    <div className="reviews-heading"><div><span>06 / REAL CUSTOMER FEEDBACK</span><strong>真实顾客反馈</strong></div><div><h2>不是我们说好，<br/><em>是他们真的用过。</em></h2></div></div>
    <div className="mixed-grid"><div className="mobile-review-subhead mobile-video-subhead"><span>CUSTOMER STORIES</span><h3>听他们自己怎么说。</h3></div><div className="mobile-review-subhead mobile-photo-subhead"><span>REAL FEEDBACK</span><h3>来自顾客的真实反馈。</h3></div>{order.map((entry, i) => entry.kind === "photo" ? <button key={`p${entry.item.id}`} type="button" className={`mixed-card mixed-photo mixed-${i}`} disabled={!entry.item.available} onClick={() => setPhotoIndex(photos.indexOf(entry.item))} aria-label={entry.item.available ? `查看${entry.item.name}完整图片` : `${entry.item.name}素材待上传`}>
      {entry.item.available ? <Image src={entry.item.image} alt={entry.item.name} width={784} height={1280} loading="lazy" sizes="(max-width: 650px) calc(100vw - 36px), (max-width: 900px) 50vw, 25vw"/> : <span className="mixed-placeholder"><b>IMAGE / 0{entry.item.id}</b><small>真实图片待上传</small></span>}<span className="mixed-label"><span>REAL FEEDBACK / 0{entry.item.id}</span><ArrowUpRight size={16}/></span>
    </button> : <button key={`v${entry.item.id}`} type="button" className={`mixed-card mixed-video mixed-${i}`} disabled={!entry.item.available} onClick={() => setActiveVideo(entry.item)} aria-label={entry.item.available ? `播放${entry.item.title}` : `${entry.item.title}素材待上传`}>
      {entry.item.available ? <video src={entry.item.video} poster={entry.item.posterAvailable ? entry.item.poster : undefined} muted playsInline preload="metadata" aria-hidden="true"/> : <span className="mixed-video-placeholder"><b>VIDEO / 0{entry.item.id}</b><strong>顾客视频分享</strong><small>竖版视频待上传</small></span>}{entry.item.available && <span className="play-circle"><Play fill="currentColor" size={21}/></span>}<span className="mixed-label"><span>REAL VIDEO / 0{entry.item.id}</span><Play size={16}/></span>
    </button>)}</div>
    <Disclaimer/>
    <div className="review-simple-cta"><WaButton>WhatsApp 私下了解</WaButton><small>WhatsApp 一对一咨询</small></div>
  </div>
  {photo?.available && <div className="modal-backdrop" role="presentation" onMouseDown={() => setPhotoIndex(null)}><div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.name} onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setPhotoIndex(null)} aria-label="关闭图片"><X/></button><button className="modal-arrow left" onClick={() => step(-1)} aria-label="上一张"><ArrowLeft/></button><Image src={photo.image} alt={photo.name} width={1000} height={1100} className="lightbox-image"/><button className="modal-arrow right" onClick={() => step(1)} aria-label="下一张"><ArrowRight/></button><span className="modal-count">{available.indexOf(photoIndex!)+1} / {available.length}</span></div></div>}
  {activeVideo && <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveVideo(null)}><div className="video-modal" role="dialog" aria-modal="true" aria-label={activeVideo.title} onMouseDown={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveVideo(null)} aria-label="关闭视频"><X/></button><video ref={videoRef} src={activeVideo.video} poster={activeVideo.posterAvailable ? activeVideo.poster : undefined} controls playsInline preload="metadata" autoPlay/></div></div>}
  </section>;
}

function Trust() { return <section id="why-better-man" className="section why-better why-better-compact"><div className="container"><div className="why-compact-intro"><SectionHeading eyebrow="04 / WHY BETTER MAN" title="为什么选择 Better Man？"/><div className="why-compact-image"><Image src="/images/lifestyle/daily-support.png" alt="成熟男性手持 Better Man 产品" width={1536} height={1024} loading="lazy" sizes="(max-width: 768px) calc(100vw - 40px), 48vw"/></div></div><div className="why-mobile-value"><div className="why-mobile-cards"><article><span className="why-mobile-number">01</span><small>MEN&apos;S FORMULA</small><h3>专为男性状态设计</h3><p>从精神、体力到男人在意的关键状态，一起照顾。</p></article><article><span className="why-mobile-number">02</span><small>WHOLE STATE</small><h3>不只照顾一个问题</h3><p>不是只关注某一个时刻，而是从整体男性状态出发。</p></article><article><span className="why-mobile-number">03</span><small>DAILY SUPPORT</small><h3>把好状态放回日常</h3><p>简单、规律地保养，不必等状态不好了才开始。</p></article></div><div className="why-mobile-cta"><h3>不用一次买很多，<br/>先从一盒开始。</h3><p>想先了解适不适合自己，可以直接 WhatsApp 一对一咨询。</p><WaButton>WhatsApp 咨询 Better Man</WaButton></div></div></div></section>; }
const faqs = [
  { question: "Better Man 主要适合什么人？", paragraphs: ["适合开始感觉精神、体力、耐力或男性状态不如以前，希望从日常开始照顾整体状态的成年男性。"] },
  { question: "多久吃一次？", paragraphs: ["建议每5天食用1颗，按照规律持续补充即可。"] },
  { question: "一盒有多少颗？", paragraphs: ["每盒共有14颗。"] },
  { question: "Better Man 的主要成分是什么？", paragraphs: ["Better Man 以红东革阿里与黑玛卡为核心成分，并搭配锌与罗汉果。"] },
  { question: "第一次尝试应该怎么开始？", paragraphs: ["可以先从一盒开始。如果不确定是否适合自己，可通过 WhatsApp 联系我们了解产品与食用方式。"] },
];
function FAQ() { return <section id="faq" className="section section-cream"><div className="container faq-layout"><div><SectionHeading eyebrow="FAQ" title="你可能还想了解" desc="有关 Better Man 的常见问题，都在这里。"/></div><div className="faq-list">{faqs.map((item,i) => <details key={item.question}><summary><span className="faq-number">{String(i+1).padStart(2,"0")}</span><strong>{item.question}</strong><ChevronDown size={20}/></summary><div className="faq-answer"><div>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></details>)}</div></div></section>; }
function FinalCTA() { return <section className="final-cta"><div className="container final-inner"><Eyebrow>BETTER MAN</Eyebrow><h2>状态不会自己回来，<br/><em>但你可以从现在开始照顾。</em></h2><p>不确定自己适不适合 Better Man？直接 WhatsApp 私下问我们。</p><WaButton light>WhatsApp 私下了解</WaButton><div className="final-slogan">Better Man｜有心又有力，随时都 Ready。</div></div></section>; }
function Footer() { return <footer className="footer"><div className="container"><div className="footer-main"><div><a className="brand footer-brand" href="#home" aria-label="Better Man 首页"><BrandLogo/></a></div><nav aria-label="页脚导航"><a href="#benefits">产品介绍</a><a href="#ingredients">核心成分</a><a href="#how-to-use">食用方式</a><a href="#reviews">顾客反馈</a><a href="#faq">FAQ</a><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms</a></nav></div><div className="footer-bottom"><p>本网站提供的资料仅供一般产品资讯与日常保健参考，并非医疗建议、诊断或治疗用途。如有健康相关疑问，请咨询专业医疗人员。</p><span>© {new Date().getFullYear()} Better Man. All rights reserved.</span></div></div></footer>; }
function FloatingWhatsApp() { return <a className="floating-wa" href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="通过 WhatsApp 咨询 Better Man"><MessageCircle size={23} fill="currentColor"/><span>WhatsApp 咨询</span></a>; }
export function Site({ photos, videos }: { productAvailable: boolean; photos: PhotoReview[]; videos: VideoReview[] }) { return <><Header/><main><Hero/><Problems/><Benefits/><Ingredients/><Trust/><HowToUse/><CustomerReviews photos={photos} videos={videos}/><FAQ/><FinalCTA/></main><Footer/><FloatingWhatsApp/></>; }






