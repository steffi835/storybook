"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Dropdown: () => Dropdown,
  Input: () => Input
});
module.exports = __toCommonJS(index_exports);

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/components/Button/button.css
styleInject('.button {\n  align-items: center;\n  border: 0.5px solid transparent;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Roboto",\n    "Oxygen",\n    "Ubuntu",\n    "Cantarell",\n    "Fira Sans",\n    "Droid Sans",\n    "Helvetica Neue",\n    sans-serif;\n  font-weight: 500;\n  gap: 10px;\n  justify-content: center;\n  line-height: 1;\n  transition: all 0.2s ease;\n}\n.button-primary {\n  background-color: #dfdede;\n  box-shadow: none;\n}\n.button-primary:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.button-secondary {\n  background-color: #ffdbea;\n  border-color: currentColor;\n  color: #ff3092;\n}\n.button-secondary:hover {\n  background-color: #ff2c8f;\n  color: #ffdbea;\n}\n.button-small {\n  font-size: 12px;\n  padding: 8px 20px;\n}\n.button-medium {\n  font-size: 14px;\n  padding: 12px 25px;\n}\n.button-large {\n  font-size: 16px;\n  padding: 16px 30px;\n}\n');

// src/components/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (props) => {
  const {
    id,
    testId,
    label,
    onClick,
    backgroundColor,
    disabled = false,
    primary = true,
    size = "medium"
  } = props;
  const mode = primary ? "button-primary" : "button-secondary";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      id,
      "data-testid": testId,
      className: ["button", `button-${size}`, mode].join(" "),
      disabled,
      style: { backgroundColor },
      type: "button",
      onClick,
      children: label
    }
  );
};

// src/components/Dropdown/Dropdown.tsx
var import_react = require("react");

// src/components/Dropdown/dropdown.css
styleInject(`.dropdown {
  display: inline-block;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;
  position: relative;
}
.dropdown-trigger {
  align-items: center;
  border: 0.5px solid;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  gap: 12px;
  line-height: 1;
  padding: 12px 40px 12px 16px;
  transition: all 0.2s ease;
  width: 100%;
}
.dropdown-trigger::after {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 4.5L6 8l3.5-3.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E") no-repeat center;
  content: "";
  height: 12px;
  width: 12px;
}
.dropdown-menu {
  background-color: #fff;
  border: 0.5px solid;
  border-radius: 10px;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 6px;
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  z-index: 1000;
}
.dropdown-item {
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  gap: 8px;
  transition: all 0.2s ease;
}
.dropdown-primary .dropdown-trigger {
  background-color: #fff;
  border-color: #d9d9d9;
  color: #333;
}
.dropdown-primary .dropdown-trigger:hover {
  background-color: #fafafa;
  border-color: #bfbfbf;
}
.dropdown-primary .dropdown-trigger:focus {
  border-color: #999999;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
}
.dropdown-primary .dropdown-menu {
  background-color: #ffffff;
  border-color: #d9d9d9;
}
.dropdown-primary .dropdown-item {
  color: #333333;
}
.dropdown-primary .dropdown-item:hover {
  background-color: #f5f5f5;
}
.dropdown-primary .dropdown-item.active {
  background-color: #eeeeee;
  color: #111111;
}
.dropdown-primary .check {
  color: #333333;
}
.dropdown-secondary .dropdown-trigger {
  background-color: #fff7fa;
  border-color: #ffb3d1;
  color: #ff3092;
}
.dropdown-secondary .dropdown-trigger:hover {
  background-color: #ffeaf3;
  border-color: #ff8fc0;
}
.dropdown-secondary .dropdown-trigger:focus {
  border-color: #ff5ca8;
  box-shadow: 0 0 0 3px rgba(255, 48, 146, 0.15);
}
.dropdown-secondary .dropdown-trigger::after {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 4.5L6 8l3.5-3.5' stroke='%23ff3092' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E") no-repeat center;
}
.dropdown-secondary .dropdown-menu {
  background-color: #ffffff;
  border-color: #ffb3d1;
}
.dropdown-secondary .dropdown-item {
  color: #ff3092;
}
.dropdown-secondary .dropdown-item:hover {
  background-color: #fff0f6;
}
.dropdown-secondary .dropdown-item.active {
  background-color: #ffebf5;
  color: #ff0f7b;
}
.dropdown-secondary .check {
  color: #ff3092;
  font-size: 12px;
}
.dropdown-small .dropdown-trigger {
  font-size: 12px;
  padding: 8px 14px;
}
.dropdown-medium .dropdown-trigger {
  font-size: 14px;
  padding: 12px 18px;
}
.dropdown-large .dropdown-trigger {
  font-size: 16px;
  padding: 16px 20px;
}
.dropdown-small .dropdown-item {
  padding: 8px 10px;
  font-size: 12px;
}
.dropdown-medium .dropdown-item {
  padding: 10px 12px;
  font-size: 14px;
}
.dropdown-large .dropdown-item {
  padding: 12px 14px;
  font-size: 16px;
}
`);

// src/components/Dropdown/Dropdown.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Dropdown = (props) => {
  const {
    id,
    testId,
    options,
    primary = true,
    placeholder = "Select",
    size = "medium",
    value,
    onChange
  } = props;
  const [open, setOpen] = (0, import_react.useState)(false);
  const ref = (0, import_react.useRef)(null);
  const selected = options.find((o) => o.value === value);
  const mode = primary ? "dropdown-primary" : "dropdown-secondary";
  (0, import_react.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      id,
      "data-testid": testId,
      className: ["dropdown", `dropdown-${size}`, mode].join(" "),
      ref,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: "dropdown-trigger",
            onClick: () => setOpen((prev) => !prev),
            children: selected?.label || placeholder
          }
        ),
        open && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "dropdown-menu", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "li",
          {
            className: `dropdown-item ${option.value === value ? "active" : ""}`,
            onClick: () => {
              onChange?.(option.value);
              setOpen(false);
            },
            children: [
              option.value === value && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "check", children: "\u2713" }),
              option.label
            ]
          },
          option.value
        )) })
      ]
    }
  );
};

// src/components/Input/input.css
styleInject('.input {\n  background-color: #fff;\n  border: 0.5px solid #d9d9d9;\n  border-radius: 5px;\n  display: inline-flex;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Roboto",\n    "Oxygen",\n    "Ubuntu",\n    "Cantarell",\n    "Fira Sans",\n    "Droid Sans",\n    "Helvetica Neue",\n    sans-serif;\n  font-weight: 500;\n  line-height: 1;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.input-primary {\n  color: #333;\n}\n.input-primary:focus {\n  border-color: #999;\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);\n}\n.input-primary::placeholder {\n  color: #999;\n  font-weight: 400;\n}\n.input-secondary {\n  background-color: #fff7fa;\n  border-color: #ffb3d1;\n  color: #ff3092;\n}\n.input-secondary:focus {\n  border-color: #ff3092;\n  box-shadow: 0 0 0 3px rgba(255, 48, 146, 0.12);\n}\n.input-secondary::placeholder {\n  color: #ff3092;\n  font-weight: 400;\n}\n.input-medium {\n  padding: 12px 25px;\n  font-size: 14px;\n}\n');

// src/components/Input/Input.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = (props) => {
  const {
    id,
    testId,
    onChange,
    placeholder = "Enter",
    primary = true,
    size = "medium",
    type = "text",
    value
  } = props;
  const mode = primary ? "input-primary" : "input-secondary";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "input",
    {
      id,
      "data-testid": testId,
      className: ["input", `input-${size}`, mode].join(" "),
      placeholder,
      type,
      value,
      onChange
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Dropdown,
  Input
});
