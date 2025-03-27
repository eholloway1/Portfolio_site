import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, useNavigate, useLocation } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, List, ListItem, ListItemButton, ListItemText, Skeleton, Button, Drawer, Card, CardMedia, CardContent, Typography, Divider, CardActions, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(ThemeProvider, {
    theme: darkTheme,
    children: [/* @__PURE__ */ jsx(CssBaseline, {}), /* @__PURE__ */ jsx(Outlet, {})]
  });
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function NavBar() {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navArr = [
    {
      pageName: "Portfolio",
      path: "/"
    },
    {
      pageName: "About Me",
      path: "/about"
    }
  ];
  function MakePageTitle(path) {
    if (path == "/") {
      return /* @__PURE__ */ jsx("h2", { children: "Evan Holloway's Portfolio" });
    }
    if (path == "/about") {
      return /* @__PURE__ */ jsx("h2", { children: "About Evan Holloway" });
    }
  }
  const DrawerList = /* @__PURE__ */ jsx(Box, { sx: { width: 250 }, role: "presentation", onClick: toggleDrawer(false), children: /* @__PURE__ */ jsx(List, { children: navArr.map((obj) => /* @__PURE__ */ jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsx(ListItemButton, { onClick: () => {
    nav(obj.path);
  }, children: /* @__PURE__ */ jsx(ListItemText, { primary: obj.pageName }) }) }, obj.pageName)) }) });
  return /* @__PURE__ */ jsxs("div", { className: "navBar", children: [
    MakePageTitle(pathname) ?? /* @__PURE__ */ jsx(Skeleton, { animation: "wave" }),
    /* @__PURE__ */ jsx(Button, { onClick: toggleDrawer(true), children: "More Links" }),
    /* @__PURE__ */ jsx(Drawer, { open, onClose: toggleDrawer(false), anchor: "right", children: DrawerList })
  ] });
}
function Portfolio() {
  const portfolioProjects = [
    {
      name: "PokeverseUI",
      url: "https://github.com/eholloway1/pokeverseUI",
      img: null,
      descr: "This frontend React SPA is a product from my time in the Multiverse bootcamp. We were tasked with enabling features ranging from displaying the original 151 pokemon by reading the response object of a get request,to displaying nested information of each pokemone object returned."
    },
    {
      name: "currency_converter",
      url: "https://github.com/eholloway1/currency_converter",
      img: null,
      descr: "This full-stack application starts up a simple back end with an endpoint to return cart objects on get requests. The frontend retrieves carts, based off the url path, and displays the cart. users can then select a currency from a dropdown and see their cart price convert to their selected currency type."
    },
    {
      name: "Noodle Search",
      url: "https://github.com/Multiverse-frontend-project/NoodleSearch",
      img: null,
      descr: "This frontend React SPA allows users to enter in a search query. It then calls a google api with the users search query and appends 'noodle' to it. It then returns the noodlefied images, organized on Material UI cards, of the search query."
    },
    {
      name: "Scooter App",
      url: "https://github.com/MV-Open-SWE-9/scooter-project-eholloway1",
      img: null,
      descr: "This frontend application allows users to create accounts, login and logout, and rent Scooters. Scooters can be stationed, rented, lose charge, recharge, and be labeled as broken. Users are not able to create duplicate accounts, logout if they are not logged in, station Scooters in stations that do not exist or are already stationed."
    },
    {
      name: "Mojo the Summoning (Card game project)",
      url: "https://github.com/MV-Open-SWE-9/mojo-the-summoning-eholloway1",
      img: null,
      descr: "A frontend application that allows each user to create a deck of cards. Each deck may contain many cards, but a card may only belong to one deck. Each card has an attack, and attacks can belong to many cards."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsx("div", { className: "portfolioBody", children: portfolioProjects.map((obj) => /* @__PURE__ */ jsxs(Card, { sx: { maxWidth: 345 }, children: [
      /* @__PURE__ */ jsx(
        CardMedia,
        {
          sx: { height: 140 },
          image: obj.img == null ? "https://i.imgur.com/YpsNkal.jpeg" : obj.img
        }
      ),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(Typography, { variant: "h5", component: "div", children: obj.name }),
        /* @__PURE__ */ jsx(Divider, {}),
        /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { color: "text.secondary" }, children: obj.descr })
      ] }),
      /* @__PURE__ */ jsx(CardActions, { children: /* @__PURE__ */ jsx(Button, { size: "small", href: obj.url, children: "Project repo" }) })
    ] })) })
  ] });
}
function meta$1({}) {
  return [{
    title: "The Portflio Page"
  }, {
    name: "description",
    content: "Welcome to my portfolio!"
  }];
}
const portfolio = withComponentProps(function Portflio() {
  return /* @__PURE__ */ jsx(Portfolio, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: portfolio,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function AboutMe() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(NavBar, {}),
    /* @__PURE__ */ jsxs(Box, { className: "AboutBody", children: [
      /* @__PURE__ */ jsxs(Accordion, { children: [
        /* @__PURE__ */ jsx(AccordionSummary, { expandIcon: /* @__PURE__ */ jsx(ExpandMoreIcon, {}), "aria-controls": "panel1-content", id: "panel1-header", children: /* @__PURE__ */ jsx(Typography, { component: "span", children: "Brief Summary About Me" }) }),
        /* @__PURE__ */ jsx(AccordionDetails, { children: "I am currently a Seattle based, full-stack software engineer. I have spent the last five years working in the airline industry. I began my career as a Ramper/Customer Service agent (Passenger Service Agent) for Horizon Airlines. I gained great friends and worked my way to become a Team Captain at the Eugene, OR station. I applied to and was accepted as a new Central Load Planner for Horizon Airlines. This gave me the opportunity to move to Seattle, WA. While there, I was granted opportunities like refreshing our department troubleshooting binders, and reorganizing and updating our internal support documentation. Unfornately, despite these extra opportunities, there was also a LOT of downtime in my role. This helped me to asses what I wanted to prioritize with my time. I began trying to relearn programming around early 2023. A massive stroke of luck struck when around late 2023, an opportunity to begin a software engineering role with Alaska Airlines opened up. Turns out, over half my department alone had applied. Words cannot express how ecstatic and grateful I am to have been given to opportunity to complete the Multiveres Apprenticeship for Alaska Air, and how much I look forward to a long career in software engineering." })
      ] }),
      /* @__PURE__ */ jsxs(Accordion, { children: [
        /* @__PURE__ */ jsx(AccordionSummary, { expandIcon: /* @__PURE__ */ jsx(ExpandMoreIcon, {}), "aria-controls": "panel2-content", id: "panel2-header", children: /* @__PURE__ */ jsx(Typography, { component: "span", children: "Profesional Summary" }) }),
        /* @__PURE__ */ jsx(AccordionDetails, { children: "Fullstack software engineer with experience developing using React, Typescript, C#, and .NET 8. Led the effort to bring our payment processor, serving 200,000 users per month, into PCI compliance. This enabled a company-wide decrease of PCI scope for all current and future teams consuming our microsite. Led innersource efforts using GoLang and Protobuf to enable usage of ApplePay, used by 50% of users, for a product accounting for $8 million of our monthly revenue. Led efforts to implement usage of saved payment methods, used by 20% of users per month. Updated documentation for and guided consumer teams through technical integration requirements for our product and payment systems. Experienced in interdepartmental coordination, process improvement, and working within a fast-paced, highly-technical environment." })
      ] })
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "About Me"
  }, {
    name: "description",
    content: "Learn about me!"
  }];
}
const about = withComponentProps(function Portflio2() {
  return /* @__PURE__ */ jsx(AboutMe, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Blwopobz.js", "imports": ["/assets/chunk-K6CSEXPM-C3lO4Mx0.js", "/assets/index-Tv0UqtDK.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-CsGNVdyo.js", "imports": ["/assets/chunk-K6CSEXPM-C3lO4Mx0.js", "/assets/index-Tv0UqtDK.js", "/assets/DefaultPropsProvider-BM8TEHQD.js"], "css": ["/assets/root-Bd_XWjZJ.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/portfolio-mOhz2Mwd.js", "imports": ["/assets/DefaultPropsProvider-BM8TEHQD.js", "/assets/chunk-K6CSEXPM-C3lO4Mx0.js", "/assets/navBar-bzC_wtH3.js", "/assets/index-Tv0UqtDK.js"], "css": ["/assets/portfolio-DUK936bn.css", "/assets/navBar-mRrq413q.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "/about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-C2QeV3KA.js", "imports": ["/assets/DefaultPropsProvider-BM8TEHQD.js", "/assets/chunk-K6CSEXPM-C3lO4Mx0.js", "/assets/navBar-bzC_wtH3.js", "/assets/index-Tv0UqtDK.js"], "css": ["/assets/about-BkccJsSM.css", "/assets/navBar-mRrq413q.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-cfdd55bf.js", "version": "cfdd55bf" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "/about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
