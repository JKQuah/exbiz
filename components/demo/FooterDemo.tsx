import Link from "next/link";
import AppImage from "../elements/image/app-image";
import Copywrite from "../features/footer/copywrite";

export default function FooterDemo() {
  const footerItems = [
    {
      title: "Product",
      links: [
        {
          label: "Sole Proprietorship",
          href: "#",
        },
        {
          label: "Partnership",
          href: "#",
        },
        {
          label: "Companies (Shd. Bhd. & Bhd.)",
          href: "#",
        },
        {
          label: "Limited Liability Partnerships (LLPs)",
          href: "#",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "Contact Us",
          href: "#",
        },
        {
          label: "FAQs",
          href: "#",
        },
        {
          label: "Blog",
          href: "#",
        },
        {
          label: "Our History",
          href: "/history",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          label: "Terms & Condition",
          href: "#",
        },
        {
          label: "Privacy Policy",
          href: "#",
        },
      ],
    },
  ];

  return (
    <div className="bg-secondary py-8">
      <div className="max-container flex flex-col items-start justify-between gap-8 py-4 md:flex-row lg:py-8">
        <div className="w-full md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <AppImage.Logo />
          </Link>

          <p className="p-6 text-sm text-gray-500 max-w-80 leading-6">
            This project is independent and not affiliated with anyone. No part
            of this site may be reproduced without permission.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:flex md:gap-12 lg:gap-16">
            {footerItems.map((item, index) => (
              <div className="min-w-[120px]" key={index}>
                <h3 className="text-muted-foreground-subtle text-sm font-semibold">
                  {item.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {item.links.map((link, index) => (
                    <li className="hover:text-primary" key={index}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-muted-foreground-subtle text-sm font-semibold">
                Social
              </h3>
              <div className="text-muted-foreground-subtle mt-4 grid grid-cols-3 gap-4">
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:text-primary"
                >
                  <AppImage.Facebook />
                </Link>

                <Link
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="hover:text-primary"
                >
                  <AppImage.Instagram />
                </Link>

                <Link
                  href="https://Linkedin.com"
                  aria-label="Linkedin"
                  className="hover:text-primary"
                >
                  <AppImage.LinkedIn />
                </Link>

                <Link
                  href="https://x.com"
                  aria-label="X"
                  className="hover:text-primary"
                >
                  <AppImage.X />
                </Link>

                <Link
                  href="https://youtube.com"
                  aria-label="Youtube"
                  className="hover:text-primary"
                >
                  <AppImage.Youtube />
                </Link>

                <Link
                  href="https://whatsapp.com"
                  aria-label="Whatsapp"
                  className="hover:text-primary"
                >
                  <AppImage.Whatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copywrite />
    </div>
  );
}
