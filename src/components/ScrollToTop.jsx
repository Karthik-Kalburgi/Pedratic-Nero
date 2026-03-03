import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change.
 * Works on all devices (desktop, laptop, tablet, mobile)
 * @param {boolean} smooth - set true for smooth scroll, false for instant
 */
export default function ScrollToTop({ smooth = true }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "instant", // smooth on nav clicks, instant for restoration/back
    });
  }, [pathname, smooth]);

  return null;
}