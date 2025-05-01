import React, { useEffect, useState, useRef } from "react";
import useThemeStore from "../store/themeStore";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HashLink } from "react-router-hash-link";
import { useThemeColors } from "../hooks/useThemeColors";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PricingPolicy = () => {
  const theme = useThemeStore((state) => state.theme);
  const [activeLink, setActiveLink] = useState("#pricing-policy-0");
  const themeColors = useThemeColors();
  const listRef = useRef(null);
  const barRef = useRef(null);
  const location = useLocation();
  const [barHeight, setBarHeight] = useState("5px");

  // Below ensure to page starts from top whenerever its visited
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [location.pathname]);

  const pricing_policy_details = [
    {
      qt: "Customized Pricing",
      ans: [
        "We offer personalized pricing based on the scope, complexity, and outcomes of the services requested.",
        "Each service quote is shared with you in advance, reflecting the time, effort, and quality involved.",
        "Typically, our pricing ranges from INR 500 to INR 14,000 depending on the nature of the service.",
      ],
    },
    {
      qt: "Payment Schedule",
      ans: [
        "Certain services are available on a subscription or time-bound basis. The duration for such services varies from 1 month to 1 year, as clearly mentioned in the service description.",
        "All payments must be made upfront unless otherwise specified in the agreement.",
      ],
    },
    {
      qt: "Price Matching",
      ans: [
        "We are committed to offering competitive pricing. If you find a similar product or service (matching in specifications, color, and size) at a lower price from a comparable retailer, we will do our best to match that price.",
        "Note: We do not match prices from auction sites, outlet stores, or websites offering discount coupons, promotional pricing, shipping offers, or gift card incentives.",
      ],
    },
    {
      qt: "Sale Adjustments",
      ans: [
        "If an item or service you have purchased is reduced in price within 14 days of your purchase, you are eligible for a one-time price adjustment. To request a sale adjustment, please contact our support team with your order details.",
        "Our Platform run sales offer time to time and such offers are not eligible for further adjustments.",
        "Note: Designer services or items bought on sale are not eligible for further adjustments. Discounted offers on other platforms are not applicable.",
      ],
    },
    {
      qt: "Pricing Errors",
      ans: [
        "While we strive for complete accuracy, inadvertent pricing errors may occur. If a product or service is listed at an incorrect price, we reserve the right to cancel the order and notify you of the error.",
        "If the correct price is higher than what was displayed, you may choose to proceed with the updated amount or cancel your order without penalty.",
      ],
    },
    {
      qt: "Shopping Cart Policy",
      ans: [
        "Prices displayed in your shopping cart reflect the most recent pricing from the product or service page. This price may differ from the one shown when you initially added the item.",
        "All offerings are intended for personal use only. We reserve the right to refuse orders that appear to be intended for resale.",
      ],
    },
  ];

  useEffect(() => {
    const triggers = [];

    pricing_policy_details.forEach((_, index) => {
      const id = `pricing-policy-${index}`;

      const trigger = ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 20%",
        end: "bottom 10%",
        markers: false,
        onEnter: () => setActiveLink(`#${id}`),
        onEnterBack: () => setActiveLink(`#${id}`),
        onLeave: (self) => {
          if (
            index === pricing_policy_details.length - 1 &&
            self.direction === 1
          ) {
            setActiveLink(`#pricing-policy-${index}`);
          }
        },
        onLeaveBack: (self) => {
          if (index === 0 && self.direction === -1) {
            setActiveLink("#pricing-policy-0");
          }
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!listRef.current || !barRef.current) return;

    const updateBarHeight = () => {
      const activeItem = listRef.current.querySelector(
        `a[href="${window.location.pathname + activeLink}"]`
      )?.parentElement;

      if (activeItem) {
        const he = activeItem.getBoundingClientRect();
        setBarHeight(`${he.height - 5}px`);
        const topPosition = activeItem.offsetTop + 2;
        gsap.to(barRef.current, {
          top: topPosition + "px",
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    updateBarHeight();

    window.addEventListener("resize", updateBarHeight);

    return () => {
      window.removeEventListener("resize", updateBarHeight);
    };
  }, [activeLink, location.pathname]);

  return (
    <div className="min-h-dvh md:p-10  text-center font-['outfit'] relative">
      <h1
        className={`text-5xl mt-10 md:mt-0 md:text-7xl p-2 font-bold ${
          theme == "dark" ? "text-gradient-fordark" : "text-gradient-light"
        }`}
      >
        Pricing Policy
      </h1>
      <p className="m-5 text-lg px-0 xl:px-80">
        At Chai Code, transparency, fairness, and customer satisfaction are
        central to our pricing structure. This Pricing Policy outlines the terms
        related to pricing, payments, discounts, and related matters associated
        with our services and offerings.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] mt-10 px-0 md:px-20 gap-8">
        {/* topics */}
        <div className="rounded-md hidden md:block">
          <ul
            ref={listRef}
            className="flex flex-col text-start gap-3 sticky top-20 p-4"
          >
            <div
              ref={barRef}
              className="bg-amber-600 absolute left-2 rounded w-[5px] followBar translate-x-2"
              style={{ height: barHeight }}
            ></div>
            {pricing_policy_details.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer font-semibold transition-all duration-200 ${
                  activeLink === `#pricing-policy-${index}`
                    ? "translate-x-2.5"
                    : "translate-x-0"
                }`}
              >
                <HashLink
                  className="hover:!opacity-100"
                  style={{
                    color:
                      activeLink === `#pricing-policy-${index}`
                        ? "#d97706"
                        : themeColors.secondryText,
                    opacity:
                      activeLink === `#pricing-policy-${index}` ? 1 : 0.5,
                  }}
                  smooth
                  scroll={(el) => {
                    const yOffset = -90;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                  to={`#pricing-policy-${index}`}
                >
                  {item.qt}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        {/* topics and content */}
        <div
          className={`rounded-md shadow-md p-6 text-start ${
            theme === "dark"
              ? "bg-neutral-800 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {pricing_policy_details.map((item, index) => (
            <div key={index} id={`pricing-policy-${index}`} className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-4">{item.qt}</h2>
              <div
                className="opacity-80"
                style={{
                  color: themeColors.secondryText,
                }}
              >
                {Array.isArray(item.ans)
                  ? item.ans.map((paragraph, pIndex) => (
                      <p key={pIndex} className=" mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  : item.ans.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
              </div>
            </div>
          ))}
          <p
            style={{
              color: themeColors.secondryText,
            }}
          >
            If you have any questions or need further assistance, please reach
            out to our Customer Service Team at
            <Link
              className="text-amber-600 font-semibold font-['Courier New']"
              to="mailto:team@chaicode.com?subject=Enquiry from Website&body=Hello Chai Code Team,  "
            >
              {" "}
              team@chaicode.com
            </Link>{" "}
            — available 24/7 to support you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPolicy;
