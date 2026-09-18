import type { Metadata } from "next";
import Script from "next/script";
import { siteUrl } from "@/config/seo";
import "./globals.css";
import "./brand.css";

const title = "Better Man 宝马糖 | 男性日常状态与活力保养";
const description = "Better Man 宝马糖，以红东革阿里与黑玛卡为核心成分，为男性提供精神、体力、耐力与日常状态保养。每5天1颗，一盒14颗，简单方便。";
const socialImage = siteUrl ? `${siteUrl}/images/hero/better-man-product.png` : undefined;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: title, template: "%s | Better Man" },
  description,
  applicationName: "Better Man",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Better Man",
    locale: "zh_SG",
    url: siteUrl,
    images: socialImage ? [{ url: socialImage, width: 1254, height: 1254, alt: "Better Man 宝马糖产品盒与独立包装" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: socialImage ? [socialImage] : undefined,
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-SG">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18459690544"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18459690544');
          `}
        </Script>
      </body>
    </html>
  );
}
