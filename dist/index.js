// src/components/Button/button.module.css
var button_default = {};

// src/components/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
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
import { useEffect, useRef, useState } from "react";

// src/components/Dropdown/dropdown.module.css
var dropdown_default = {};

// src/components/Dropdown/Dropdown.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find((o) => o.value === value);
  const mode = primary ? `${dropdown_default.primary}` : `${dropdown_default.secondary}`;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2("label", { htmlFor: id, className: dropdown_default.label, children: label }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        id,
        "data-testid": id,
        className: `${dropdown_default.base} ${mode}`,
        ref,
        children: [
          /* @__PURE__ */ jsx2(
            "button",
            {
              type: "button",
              className: dropdown_default.trigger,
              onClick: () => setOpen((prev) => !prev),
              children: selected?.label || placeholder
            }
          ),
          open && /* @__PURE__ */ jsx2("ul", { className: dropdown_default.menu, children: options.map((option) => /* @__PURE__ */ jsxs(
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
                option.value === value && /* @__PURE__ */ jsx2("span", { className: dropdown_default.check, children: "\u2713" }),
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
import { jsx as jsx3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx3(
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
export {
  Button,
  Dropdown,
  Input
};
//# sourceMappingURL=index.js.map