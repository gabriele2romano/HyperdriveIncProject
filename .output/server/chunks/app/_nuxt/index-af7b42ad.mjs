import { BAccordion, BAccordionItem } from 'bootstrap-vue-next';
import { defineComponent, withAsyncContext, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-241c6edd.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ohash';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'destr';
import 'cookie-es';
import '@supabase/supabase-js';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => useFetch("/api", "$pqtWcjQkdb")), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_accordion = BAccordion;
      const _component_b_accordion_item = BAccordionItem;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_b_accordion, { class: "col-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_accordion_item, {
              title: "Accordion Item #1",
              visible: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Accordion 1 `);
                } else {
                  return [
                    createTextVNode(" Accordion 1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_b_accordion_item, { title: "Accordion Item #2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Accordion 2 `);
                } else {
                  return [
                    createTextVNode(" Accordion 2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_b_accordion_item, { title: "Accordion Item #3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Accordion 3 `);
                } else {
                  return [
                    createTextVNode(" Accordion 3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_b_accordion_item, {
                title: "Accordion Item #1",
                visible: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Accordion 1 ")
                ]),
                _: 1
              }),
              createVNode(_component_b_accordion_item, { title: "Accordion Item #2" }, {
                default: withCtx(() => [
                  createTextVNode(" Accordion 2 ")
                ]),
                _: 1
              }),
              createVNode(_component_b_accordion_item, { title: "Accordion Item #3" }, {
                default: withCtx(() => [
                  createTextVNode(" Accordion 3 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-af7b42ad.mjs.map
