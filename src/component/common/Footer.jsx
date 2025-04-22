import React from "react";
import Saleimage from "../../assets/images/discount.png";
import deliveryimage from "../../assets/images/free-delivery.png";
import refundimage from "../../assets/images/refund.png";

const Footer = () => {
  const infolist = [
    {
      Image: Saleimage,
      heading: "Seasonal Sale",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      Image: deliveryimage,
      heading: "Free Shipping",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      Image: refundimage,
      heading: "Money Back Guarantee",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 py-16 px-4">
      {infolist.map((value, index) => (
        <div key={index} className="max-w-sm text-center">
          <img
            src={value.Image}
            alt={value.heading}
            className="mx-auto mb-4 w-16 h-16 object-contain"
          />
          <h2 className="text-xl font-semibold mb-2">{value.heading}</h2>
          <p className="text-gray-600">{value.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
