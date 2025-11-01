import { defineComponent as r, createElementBlock as l, openBlock as a, normalizeClass as p, renderSlot as m } from "vue";
const i = /* @__PURE__ */ r({
  __name: "Button",
  props: {
    type: {}
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    console.log("👊 ~ components props:", t);
    const n = o, c = (s) => {
      n("click", s);
    };
    return (s, f) => (a(), l("button", {
      class: p(["m-button", `m-button--${t.type}`]),
      onClick: c
    }, [
      m(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), u = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, c] of o)
    e[n] = c;
  return e;
}, d = /* @__PURE__ */ u(i, [["__scopeId", "data-v-821de223"]]), _ = [d], v = {
  install(t) {
    _.forEach((o) => {
      t.component(o.name, o);
    });
  }
};
export {
  d as Button,
  v as default
};
