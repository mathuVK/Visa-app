/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Visa Process Updates",
    description: "Key Updates on Travel and Visa Policies",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Page Headers",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Features",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "FAQ",
        count: 1,
        pro: true,
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Blog Posts",
        count: 11,
        pro: true,
      },
    

    
    ],
  },
  {
    title: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Navbars",
        count: 4,
        route: "/sections/navigation/navbars",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Nav Tabs",
        count: 2,
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Pagination",
        count: 3,
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "Elements",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: "Buttons",
        count: 6,
        route: "/sections/elements/buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: "Avatars",
        count: 2,
        route: "/sections/elements/avatars",
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: "Dropdowns",
        count: 2,
        route: "/sections/elements/dropdowns",
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        name: "Toggles",
        count: 2,
        route: "/sections/elements/toggles",
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        name: "Social Buttons",
        count: 2,
        pro: true,
      },
  
    ],
  },
];
