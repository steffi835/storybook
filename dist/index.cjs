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

// src/components/Button/button.module.css
var button_default = {};

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
  const mode = primary ? button_default.primary : button_default.secondary;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      id,
      "data-testid": testId,
      className: [button_default.base, button_default[size], mode].join(" "),
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

// src/components/Dropdown/dropdown.module.css
var dropdown_default = {};

// src/components/Dropdown/Dropdown.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Dropdown = (props) => {
  const {
    id,
    options,
    primary = true,
    label,
    placeholder = "Select",
    value,
    onChange
  } = props;
  const [open, setOpen] = (0, import_react.useState)(false);
  const ref = (0, import_react.useRef)(null);
  const selected = options.find((o) => o.value === value);
  const mode = primary ? `${dropdown_default.primary}` : `${dropdown_default.secondary}`;
  (0, import_react.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: id, className: dropdown_default.label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        id,
        "data-testid": id,
        className: `${dropdown_default.base} ${mode}`,
        ref,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: dropdown_default.trigger,
              onClick: () => setOpen((prev) => !prev),
              children: selected?.label || placeholder
            }
          ),
          open && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: dropdown_default.menu, children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "li",
            {
              className: `${dropdown_default.item} ${option.value === value ? dropdown_default.active : ""}`,
              onClick: () => {
                const event = {
                  target: {
                    name: id,
                    value: option.value
                  }
                };
                onChange(event);
                setOpen(false);
              },
              children: [
                option.value === value && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: dropdown_default.check, children: "\u2713" }),
                option.label
              ]
            },
            option.value
          )) })
        ]
      }
    )
  ] });
};

// src/components/Input/input.module.css
var input_default = {};

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
  const mode = primary ? input_default.primary : input_default.secondary;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "input",
    {
      id,
      "data-testid": testId,
      className: [input_default.base, input_default[size], mode].join(" "),
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
//# sourceMappingURL=index.cjs.map