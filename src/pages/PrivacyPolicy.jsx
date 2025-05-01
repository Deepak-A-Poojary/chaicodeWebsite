import React, { useEffect, useState, useRef } from "react";
import useThemeStore from "../store/themeStore";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { HashLink } from "react-router-hash-link";
import { useThemeColors } from "../hooks/useThemeColors";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const theme = useThemeStore((state) => state.theme);
  const [activeLink, setActiveLink] = useState("#privacy-policy-0");
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

  const privacy_policy_details = [
    {
      title: "1 - What do we do with your information?",
      qt: "SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?",
      ans: [
        "When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.",
        "When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.",
        "Email marketing: With your permission, we may send you emails about our store, new products and other updates.",
      ],
    },
    {
      title: "2 - Consent",
      qt: "SECTION 2 - CONSENT",
      ans: [
        "How do you get my consent?",
        "When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.",
        "If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.",
        "How do I withdraw my consent?",
        "If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at team@chaicode.com or mailing us at: 507, AB Nirman nagar, Ajmer Road, Jaipur, Rajasthan 302019, India",
      ],
    },
    {
      title: "3 - Disclosure",
      qt: "SECTION 3 - DISCLOSURE",
      ans: [
        "We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.",
      ],
    },
    {
      title: "4 - Payment",
      qt: "SECTION 4 - PAYMENT",
      ans: [
        "We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment.",
        "Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.",
        "Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.",
        "For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com",
      ],
    },
    {
      title: "5 - Third-party services",
      qt: "SECTION 5 - THIRD-PARTY SERVICES",
      ans: [
        "In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.",
        "However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.",
        "For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.",
        "In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.",
        "Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.",
        "Links When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.",
      ],
    },
    {
      title: "6 - Security",
      qt: "SECTION 6 - SECURITY",
      ans: [
        "To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.",
      ],
    },
    {
      title: "7 - Cookies",
      qt: "SECTION 7 - COOKIES",
      ans: [
        "We use cookies to maintain session of your user. It is not used to personally identify you on other websites.",
      ],
    },
    {
      title: "8 - Age of consent",
      qt: "SECTION 8 - AGE OF CONSENT",
      ans: [
        "By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.",
      ],
    },
    {
      title: "9 - Changes to this privacy policy",
      qt: "SECTION 9 - CHANGES TO THIS PRIVACY POLICY",
      ans: [
        "We reserve the right to modify this privacy policy at any time, so please review it frequently.",
        "Changes and clarifications will take effect immediately upon their posting on the website.",
        "If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.",
        "If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.",
      ],
    },
  ];

  useEffect(() => {
    const triggers = [];

    privacy_policy_details.forEach((_, index) => {
      const id = `privacy-policy-${index}`;

      const trigger = ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top 20%",
        end: "bottom 10%",
        markers: false,
        onEnter: () => setActiveLink(`#${id}`),
        onEnterBack: () => setActiveLink(`#${id}`),
        onLeave: (self) => {
          if (
            index === privacy_policy_details.length - 1 &&
            self.direction === 1
          ) {
            setActiveLink(`#privacy-policy-${index}`);
          }
        },
        onLeaveBack: (self) => {
          if (index === 0 && self.direction === -1) {
            setActiveLink("#privacy-policy-0");
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
        Privacy Policy
      </h1>
      <p className="m-5 text-lg px-0 xl:px-80">
        These Privacy Policy govern your use of our website and services. By
        accessing or using our services, you agree to be bound by these terms.
        Most importantly, we do not sell your data to any third party. And our
        platform does not allow users to share accounts or resell courses.
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
            {privacy_policy_details.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer font-semibold transition-all duration-200 ${
                  activeLink === `#privacy-policy-${index}`
                    ? "translate-x-2.5"
                    : "translate-x-0"
                }`}
              >
                <HashLink
                  className="hover:!opacity-100"
                  style={{
                    color:
                      activeLink === `#privacy-policy-${index}`
                        ? "#d97706"
                        : themeColors.secondryText,
                    opacity:
                      activeLink === `#privacy-policy-${index}` ? 1 : 0.5,
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
                  to={`#privacy-policy-${index}`}
                >
                  {item.title}
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
          {privacy_policy_details.map((item, index) => (
            <div key={index} id={`privacy-policy-${index}`} className="mb-10">
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

export default PrivacyPolicy;
