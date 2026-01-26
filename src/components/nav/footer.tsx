import Link from "next/link";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerLinks = {
  products: [
    { label: "TrustOS", href: "/products/trustos" },
    { label: "Voice ERP", href: "/products/voice-erp" },
    { label: "InfinityLearn", href: "/products/infinitylearn" },
    { label: "PromptSite", href: "/products/promptsite" },
    { label: "Distribution OS", href: "/products/distribution-os" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Industries", href: "/industries" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      <div className="section-container">
        <div className="content-max">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  className="w-36"
                  src="/logo.png"
                  alt="logo"
                  height={70}
                  width={120}
                />
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                We build intelligent products that define markets. AI,
                platforms, design, engineering, and growth systems under one
                roof.
              </p>
              <div className="flex gap-3">
                <Link href="/">
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/company/msslbd/posts/?feedView=all">
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.facebook.com/mapleitfirm/">
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Column */}
            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ready to build something exceptional? Let's talk about your next
                project.
              </p>
              <Link href="/contact">
                <Button className="w-full">Start a Project</Button>
              </Link>
              <div className="mt-4">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  Download Company Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Maple Service Solution Limited. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
