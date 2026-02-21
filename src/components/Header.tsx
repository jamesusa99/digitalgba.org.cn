"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/research", label: "研究方向" },
  { href: "/digital-collections", label: "数字全景" },
  { href: "/outcomes", label: "成果发布" },
  { href: "/industry-alliance", label: "产业联盟" },
  { href: "/cooperation", label: "合作交流" },
  { href: "/classroom", label: "文化课堂" },
  { href: "/contact", label: "联系我们" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-snow/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold text-bashu-bronze transition hover:text-bashu-bronze-light sm:text-xl"
        >
          大湾区文化数字研究院
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isAlliance = item.href === "/industry-alliance";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-3 py-2 text-sm transition ${
                  isActive
                    ? "text-bashu-bronze font-medium"
                    : "text-foreground/80 hover:text-bashu-bronze hover:bg-paper-warm/60"
                } ${isAlliance ? "text-brocade-gold font-medium" : ""}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-bashu-bronze"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-snow lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm ${
                    pathname === item.href
                      ? "bg-paper-warm text-bashu-bronze font-medium"
                      : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
