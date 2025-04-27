import React, { useEffect, useState, useRef } from "react";
import useStore from "../store/themeStore";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HashLink } from "react-router-hash-link";
import { useThemeColors } from "../hooks/useThemeColors";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const RefundPolicy = () => {
  const theme = useStore((state) => state.theme);
  const [activeLink, setActiveLink] = useState("#refund-policy-0");
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

  const refund_policy_details = [
    {
      qt: "Digital Course Purchases - No Refund Policy",
      ans: [
        "All our courses are digital products and are non-refundable. Once a course has been purchased, we do not offer refunds under any circumstances unless explicitly mentioned.",
        "To help you make an informed decision:",
        "Most courses offer free sample videos for preview.",
        "You can also explore our content on YouTube to assess the teaching style and course quality before purchasing.",
      ],
    },
    {
      qt: "Course/Batches Cancellation by Chai Code",
      ans: [
        "In the rare event that a course or scheduled batch is cancelled by Chai Code and we are unable to deliver the promised service, a 100% refund will be issued to the original payment method.",
      ],
    },
    {
      qt: "No Refunds on Sale or Discounted Courses",
      ans: [
        "Courses purchased at a discounted price or during special sales are not eligible for refunds under any condition.",
      ],
    },
    {
      qt: "No Exchanges",
      ans: [
        "Each course is a self-contained digital property. Therefore, we do not allow exchanges between courses or upgrades after purchase.",
      ],
    },
    {
      qt: "Gifting Courses",
      ans: [
        "Currently, we do not support gifting of courses. All purchases are for individual use only.",
      ],
    },
    {
      qt: "No Physical Shipping",
      ans: [
        "All our offerings are delivered digitally through our website. We do not ship physical copies like CDs or DVDs.",
      ],
    },
  ];

  useEffect(() => {
    const triggers = [];

    refund_policy_details.forEach((_, index) => {
      const id = `refund-policy-${index}`;

      const trigger = ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 20%",
        end: "bottom 10%",
        markers: false,
        onEnter: () => setActiveLink(`#${id}`),
        onEnterBack: () => setActiveLink(`#${id}`),
        onLeave: (self) => {
          if (
            index === refund_policy_details.length - 1 &&
            self.direction === 1
          ) {
            setActiveLink(`#refund-policy-${index}`);
          }
        },
        onLeaveBack: (self) => {
          if (index === 0 && self.direction === -1) {
            setActiveLink("#refund-policy-0");
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
        className={`text-5xl mt-10 md:mt-0 p-2 md:text-7xl font-bold ${
          theme == "dark" ? "text-gradient-fordark" : "text-gradient-light"
        }`}
      >
        Refund policy
      </h1>
      <p className="m-5 text-lg px-0 xl:px-80">
        At Chai Code, we strive to deliver the highest quality online learning
        experiences. Please read our refund policy carefully before making a
        purchase.
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
              className="bg-amber-600 absolute left-2 rounded w-[5px] followBar"
              style={{ height: barHeight }}
            ></div>
            {refund_policy_details.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer font-semibold transition-colors duration-200"
              >
                <HashLink
                  className="hover:!opacity-100"
                  style={{
                    color:
                      activeLink === `#refund-policy-${index}`
                        ? "#d97706"
                        : themeColors.secondryText,
                    opacity: activeLink === `#refund-policy-${index}` ? 1 : 0.5,
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
                  to={`#refund-policy-${index}`}
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
          {refund_policy_details.map((item, index) => (
            <div key={index} id={`refund-policy-${index}`} className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{item.qt}</h2>
              <div
                className="opacity-80"
                style={{
                  color: themeColors.secondryText,
                }}
              >
                {Array.isArray(item.ans)
                  ? item.ans.map((paragraph, pIndex) =>
                      paragraph.startsWith("To help you") ? (
                        <p key={pIndex} className="mb-2 font-semibold">
                          {paragraph}
                        </p>
                      ) : paragraph.startsWith("Most courses") ||
                        paragraph.startsWith("You can also") ? (
                        <li key={pIndex} className="list-disc">
                          {paragraph}
                        </li>
                      ) : (
                        <p key={pIndex} className="mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      )
                    )
                  : item.ans.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
              </div>
            </div>
          ))}
          <Link to="mailto:team@chaicode.com?subject=Enquiry from Website&body=Hello Chai Code Team,  ">
            📧 team@chaicode.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
