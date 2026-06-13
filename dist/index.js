import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useRef as i, useState as a } from "react";
var o = {
	base: "_base_15v3f_1",
	primary: "_primary_15v3f_15",
	secondary: "_secondary_15v3f_24",
	small: "_small_15v3f_35",
	medium: "_medium_15v3f_40",
	large: "_large_15v3f_45"
}, s = (e) => {
	let { id: n, testId: r, label: i, onClick: a, backgroundColor: s, disabled: c = !1, primary: l = !0, size: u = "medium" } = e, d = l ? o.primary : o.secondary;
	return /* @__PURE__ */ t("button", {
		id: n,
		"data-testid": r,
		className: [
			o.base,
			o[u],
			d
		].join(" "),
		disabled: c,
		style: { backgroundColor: s },
		type: "button",
		onClick: a,
		children: i
	});
}, c = {
	base: "_base_hh3j8_1",
	label: "_label_hh3j8_7",
	trigger: "_trigger_hh3j8_14",
	menu: "_menu_hh3j8_39",
	item: "_item_hh3j8_53",
	primary: "_primary_hh3j8_65",
	active: "_active_hh3j8_94",
	check: "_check_hh3j8_99",
	secondary: "_secondary_hh3j8_103"
}, l = (o) => {
	let { id: s, options: l, primary: u = !0, label: d, placeholder: f = "Select", value: p, onChange: m } = o, [h, g] = a(!1), _ = i(null), v = l.find((e) => e.value === p), y = u ? `${c.primary}` : `${c.secondary}`;
	return r(() => {
		let e = (e) => {
			_.current && !_.current.contains(e.target) && g(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("label", {
		htmlFor: s,
		className: c.label,
		children: d
	}), /* @__PURE__ */ n("div", {
		id: s,
		"data-testid": s,
		className: `${c.base} ${y}`,
		ref: _,
		children: [/* @__PURE__ */ t("button", {
			type: "button",
			className: c.trigger,
			onClick: () => g((e) => !e),
			children: v?.label || f
		}), h && /* @__PURE__ */ t("ul", {
			className: c.menu,
			children: l.map((e) => /* @__PURE__ */ n("li", {
				className: `${c.item} ${e.value === p ? c.active : ""}`,
				onClick: () => {
					m({ target: {
						name: s,
						value: e.value
					} }), g(!1);
				},
				children: [e.value === p && /* @__PURE__ */ t("span", {
					className: c.check,
					children: "✓"
				}), e.label]
			}, e.value))
		})]
	})] });
}, u = {
	input: "_input_15mqv_1",
	primary: "_primary_15mqv_13",
	secondary: "_secondary_15mqv_27",
	medium: "_medium_15mqv_43"
}, d = (e) => {
	let { id: n, testId: r, onChange: i, placeholder: a = "Enter", primary: o = !0, size: s = "medium", type: c = "text", value: l } = e, d = o ? u.primary : u.secondary;
	return /* @__PURE__ */ t("input", {
		id: n,
		"data-testid": r,
		className: [
			u.base,
			u[s],
			d
		].join(" "),
		placeholder: a,
		type: c,
		value: l,
		onChange: i
	});
};
//#endregion
export { s as Button, l as Dropdown, d as Input };
