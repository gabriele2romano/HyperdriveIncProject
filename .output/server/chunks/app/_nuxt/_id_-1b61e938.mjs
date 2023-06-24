import { withAsyncContext, resolveComponent, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, mergeProps, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useDevice } from './useDevice-a5a72bb5.mjs';
import { b as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-29ebf79f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'destr';
import 'cookie-es';
import 'ohash';
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
import 'http-graceful-shutdown';

const _sfc_main$2 = {
  __name: "infocard",
  __ssrInlineRender: true,
  props: {
    "country": String,
    "foundationYear": String,
    "fundingDate": String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "my-10" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, {
                          icon: "mdi-flag-variant",
                          size: "80"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="text-h5 font-weight-bold mt-2" style="${ssrRenderStyle({ "white-space": "nowrap" })}"${_scopeId3}>Country</div><div class="text-h6 mt-1"${_scopeId3}>${ssrInterpolate(__props.country)}</div>`);
                      } else {
                        return [
                          createVNode(_component_v_icon, {
                            icon: "mdi-flag-variant",
                            size: "80"
                          }),
                          createVNode("div", {
                            class: "text-h5 font-weight-bold mt-2",
                            style: { "white-space": "nowrap" }
                          }, "Country"),
                          createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.country), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, {
                          icon: "mdi-calendar-month",
                          size: "80"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="text-h5 font-weight-bold mt-2" style="${ssrRenderStyle({ "white-space": "nowrap" })}"${_scopeId3}>Founded in</div><div class="text-h6 mt-1"${_scopeId3}>${ssrInterpolate(__props.foundationYear)}</div>`);
                      } else {
                        return [
                          createVNode(_component_v_icon, {
                            icon: "mdi-calendar-month",
                            size: "80"
                          }),
                          createVNode("div", {
                            class: "text-h5 font-weight-bold mt-2",
                            style: { "white-space": "nowrap" }
                          }, "Founded in"),
                          createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.foundationYear), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, {
                          icon: "mdi-hand-coin",
                          size: "80"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="text-h5 font-weight-bold mt-2" style="${ssrRenderStyle({ "white-space": "nowrap" })}"${_scopeId3}>Funding started in</div><div class="text-h6 mt-1"${_scopeId3}>${ssrInterpolate(__props.fundingDate)}</div>`);
                      } else {
                        return [
                          createVNode(_component_v_icon, {
                            icon: "mdi-hand-coin",
                            size: "80"
                          }),
                          createVNode("div", {
                            class: "text-h5 font-weight-bold mt-2",
                            style: { "white-space": "nowrap" }
                          }, "Funding started in"),
                          createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.fundingDate), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          icon: "mdi-flag-variant",
                          size: "80"
                        }),
                        createVNode("div", {
                          class: "text-h5 font-weight-bold mt-2",
                          style: { "white-space": "nowrap" }
                        }, "Country"),
                        createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.country), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          icon: "mdi-calendar-month",
                          size: "80"
                        }),
                        createVNode("div", {
                          class: "text-h5 font-weight-bold mt-2",
                          style: { "white-space": "nowrap" }
                        }, "Founded in"),
                        createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.foundationYear), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          icon: "mdi-hand-coin",
                          size: "80"
                        }),
                        createVNode("div", {
                          class: "text-h5 font-weight-bold mt-2",
                          style: { "white-space": "nowrap" }
                        }, "Funding started in"),
                        createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.fundingDate), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        icon: "mdi-flag-variant",
                        size: "80"
                      }),
                      createVNode("div", {
                        class: "text-h5 font-weight-bold mt-2",
                        style: { "white-space": "nowrap" }
                      }, "Country"),
                      createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.country), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        icon: "mdi-calendar-month",
                        size: "80"
                      }),
                      createVNode("div", {
                        class: "text-h5 font-weight-bold mt-2",
                        style: { "white-space": "nowrap" }
                      }, "Founded in"),
                      createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.foundationYear), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        icon: "mdi-hand-coin",
                        size: "80"
                      }),
                      createVNode("div", {
                        class: "text-h5 font-weight-bold mt-2",
                        style: { "white-space": "nowrap" }
                      }, "Funding started in"),
                      createVNode("div", { class: "text-h6 mt-1" }, toDisplayString(__props.fundingDate), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project/infocard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "IconCard",
  __ssrInlineRender: true,
  props: {
    "card_icon": String,
    "card_title": String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_container, { class: "my-10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { size: "80" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(`mdi-${__props.card_icon}`)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(`mdi-${__props.card_icon}`), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="text-h5 font-weight-bold mt-2" style="${ssrRenderStyle({ "white-space": "nowrap" })}"${_scopeId3}>${ssrInterpolate(__props.card_title)}</div>`);
                      } else {
                        return [
                          createVNode(_component_v_icon, { size: "80" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(`mdi-${__props.card_icon}`), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", {
                            class: "text-h5 font-weight-bold mt-2",
                            style: { "white-space": "nowrap" }
                          }, toDisplayString(__props.card_title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { size: "80" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(`mdi-${__props.card_icon}`), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("div", {
                          class: "text-h5 font-weight-bold mt-2",
                          style: { "white-space": "nowrap" }
                        }, toDisplayString(__props.card_title), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { class: "d-flex flex-column justify-center align-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, { size: "80" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(`mdi-${__props.card_icon}`), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        class: "text-h5 font-weight-bold mt-2",
                        style: { "white-space": "nowrap" }
                      }, toDisplayString(__props.card_title), 1)
                    ]),
                    _: 1
                  })
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
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project/IconCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useDevice();
    const route = useRoute();
    const id = route.params.id;
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/projects/" + id, "$NLv8nVzATR")), __temp = await __temp, __restore(), __temp);
    const project_title = project.value.title;
    const problem = project.value.problem;
    const solution = project.value.solution;
    const project_description = project.value.description;
    const company_name = project.value.company.name;
    const company_description = project.value.company.description;
    const project_areas = project.value.area;
    const project_country = project.value.country;
    const project_foundation_year = project.value.foundation_year;
    const project_investment_date = project.value.investment_date;
    const supervisor = {
      name: project.value.person.name,
      surname: project.value.person.surname,
      role: project.value.person.role,
      picture: project.value.person.picture
    };
    const image = project.value.image;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_parallax = resolveComponent("v-parallax");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_ProjectInfocard = __nuxt_component_0;
      const _component_v_divider = resolveComponent("v-divider");
      const _component_ProjectIconCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_parallax, { src: unref(image) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex fill-height justify-center align-center bg-darken"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_container, {
              class: "text-light",
              "max-width": "80%"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          class: "d-flex flex-column",
                          cols: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-h2 pt-3 font-weight-bold"${_scopeId4}>${ssrInterpolate(unref(project_title))}</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-h2 pt-3 font-weight-bold" }, toDisplayString(unref(project_title)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            class: "d-flex flex-column",
                            cols: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h2 pt-3 font-weight-bold" }, toDisplayString(unref(project_title)), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "8",
                          sx: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_sheet, {
                                class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}><div class="text-h4"${_scopeId5}>Problem</div><div class="text-body-3 mb-2"${_scopeId5}>${ssrInterpolate(unref(problem))}</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-h4" }, "Problem"),
                                        createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(problem)), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_sheet, {
                                  class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                                  height: "250",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-h4" }, "Problem"),
                                      createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(problem)), 1)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "4",
                          sx: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_sheet, {
                                class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_img, {
                                      src: "/img/bg-projects.jpg",
                                      height: "100%",
                                      cover: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_img, {
                                        src: "/img/bg-projects.jpg",
                                        height: "100%",
                                        cover: ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_sheet, {
                                  class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                                  height: "250",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: "/img/bg-projects.jpg",
                                      height: "100%",
                                      cover: ""
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            class: "d-flex flex-column justify-center align-center",
                            cols: "12",
                            md: "8",
                            sx: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-h4" }, "Problem"),
                                    createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(problem)), 1)
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            class: "d-flex flex-column justify-center align-center",
                            cols: "12",
                            md: "4",
                            sx: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: "/img/bg-projects.jpg",
                                    height: "100%",
                                    cover: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "8",
                          sx: "12",
                          "order-md": "last"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_sheet, {
                                class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}><div class="text-h4"${_scopeId5}>Solution</div><div class="text-body-3 mb-2"${_scopeId5}>${ssrInterpolate(unref(solution))}</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-h4" }, "Solution"),
                                        createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(solution)), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_sheet, {
                                  class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                                  height: "250",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-h4" }, "Solution"),
                                      createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(solution)), 1)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "4",
                          sx: "12"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_sheet, {
                                class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_img, {
                                      src: "/img/bg-projects.jpg",
                                      height: "100%",
                                      cover: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_img, {
                                        src: "/img/bg-projects.jpg",
                                        height: "100%",
                                        cover: ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_sheet, {
                                  class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                                  height: "250",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: "/img/bg-projects.jpg",
                                      height: "100%",
                                      cover: ""
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            class: "d-flex flex-column justify-center align-center",
                            cols: "12",
                            md: "8",
                            sx: "12",
                            "order-md": "last"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-h4" }, "Solution"),
                                    createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(solution)), 1)
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            class: "d-flex flex-column justify-center align-center",
                            cols: "12",
                            md: "4",
                            sx: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: "/img/bg-projects.jpg",
                                    height: "100%",
                                    cover: ""
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h2 pt-3 font-weight-bold" }, toDisplayString(unref(project_title)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "8",
                          sx: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-h4" }, "Problem"),
                                  createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(problem)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "4",
                          sx: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: "/img/bg-projects.jpg",
                                  height: "100%",
                                  cover: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "8",
                          sx: "12",
                          "order-md": "last"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-h4" }, "Solution"),
                                  createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(solution)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "4",
                          sx: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: "/img/bg-projects.jpg",
                                  height: "100%",
                                  cover: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex fill-height justify-center align-center bg-darken" }, [
                createVNode(_component_v_container, {
                  class: "text-light",
                  "max-width": "80%"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column",
                          cols: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h2 pt-3 font-weight-bold" }, toDisplayString(unref(project_title)), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "8",
                          sx: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-h4" }, "Problem"),
                                  createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(problem)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "4",
                          sx: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: "/img/bg-projects.jpg",
                                  height: "100%",
                                  cover: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "8",
                          sx: "12",
                          "order-md": "last"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-h4" }, "Solution"),
                                  createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(solution)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          class: "d-flex flex-column justify-center align-center",
                          cols: "12",
                          md: "4",
                          sx: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_sheet, {
                              class: "bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto",
                              height: "250",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: "/img/bg-projects.jpg",
                                  height: "100%",
                                  cover: ""
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        class: "bg-dark-blue"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    class: "d-flex flex-column justify-center",
                    cols: "12",
                    lg: "8",
                    md: "8",
                    sx: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4"${_scopeId3}>Project Description</div><p class="text-body-2"${_scopeId3}>${ssrInterpolate(unref(project_description))}</p>`);
                        _push4(ssrRenderComponent(_component_v_carousel, { "hide-delimiters": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_carousel_item, {
                                src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                                cover: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_carousel_item, {
                                src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
                                cover: ""
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_carousel_item, {
                                src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                cover: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                                  cover: ""
                                }),
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
                                  cover: ""
                                }),
                                createVNode(_component_v_carousel_item, {
                                  src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                  cover: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_ProjectInfocard, {
                          country: unref(project_country),
                          "foundation-year": unref(project_foundation_year),
                          "funding-date": unref(project_investment_date)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-h4" }, "Project Description"),
                          createVNode("p", { class: "text-body-2" }, toDisplayString(unref(project_description)), 1),
                          createVNode(_component_v_carousel, { "hide-delimiters": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                                cover: ""
                              }),
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
                                cover: ""
                              }),
                              createVNode(_component_v_carousel_item, {
                                src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                cover: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ProjectInfocard, {
                            country: unref(project_country),
                            "foundation-year": unref(project_foundation_year),
                            "funding-date": unref(project_investment_date)
                          }, null, 8, ["country", "foundation-year", "funding-date"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      class: "d-flex flex-column justify-center",
                      cols: "12",
                      lg: "8",
                      md: "8",
                      sx: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4" }, "Project Description"),
                        createVNode("p", { class: "text-body-2" }, toDisplayString(unref(project_description)), 1),
                        createVNode(_component_v_carousel, { "hide-delimiters": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_carousel_item, {
                              src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                              cover: ""
                            }),
                            createVNode(_component_v_carousel_item, {
                              src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
                              cover: ""
                            }),
                            createVNode(_component_v_carousel_item, {
                              src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                              cover: ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ProjectInfocard, {
                          country: unref(project_country),
                          "foundation-year": unref(project_foundation_year),
                          "funding-date": unref(project_investment_date)
                        }, null, 8, ["country", "foundation-year", "funding-date"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    class: "d-flex flex-column justify-center",
                    cols: "12",
                    lg: "8",
                    md: "8",
                    sx: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h4" }, "Project Description"),
                      createVNode("p", { class: "text-body-2" }, toDisplayString(unref(project_description)), 1),
                      createVNode(_component_v_carousel, { "hide-delimiters": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_carousel_item, {
                            src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                            cover: ""
                          }),
                          createVNode(_component_v_carousel_item, {
                            src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
                            cover: ""
                          }),
                          createVNode(_component_v_carousel_item, {
                            src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                            cover: ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ProjectInfocard, {
                        country: unref(project_country),
                        "foundation-year": unref(project_foundation_year),
                        "funding-date": unref(project_investment_date)
                      }, null, 8, ["country", "foundation-year", "funding-date"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        class: "bg-mega-grey"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center align-items-center mt-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "2",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="pa-6 bg-light rounded-circle d-inline-block"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_img, {
                          src: "/img/logo.png",
                          class: "ma-auto",
                          "max-height": "150",
                          "max-width": "150"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "pa-6 bg-light rounded-circle d-inline-block" }, [
                            createVNode(_component_v_img, {
                              src: "/img/logo.png",
                              class: "ma-auto",
                              "max-height": "150",
                              "max-width": "150"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    class: "d-flex flex-column justify-center align-center",
                    cols: "12",
                    lg: "4",
                    md: "4",
                    sx: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="justify-center align-center flex-wrap text-left pa-2 ma-2 pl-5 font-weight-medium" height="250" width="100%"${_scopeId3}><div class="text-h4 font-weight-medium"${_scopeId3}>${ssrInterpolate(unref(company_name))}</div><div class="text-body-3 mb-2"${_scopeId3}>${ssrInterpolate(unref(company_description))}</div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "justify-center align-center flex-wrap text-left pa-2 ma-2 pl-5 font-weight-medium",
                            height: "250",
                            width: "100%"
                          }, [
                            createVNode("div", { class: "text-h4 font-weight-medium" }, toDisplayString(unref(company_name)), 1),
                            createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(company_description)), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "2",
                      class: "d-flex justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pa-6 bg-light rounded-circle d-inline-block" }, [
                          createVNode(_component_v_img, {
                            src: "/img/logo.png",
                            class: "ma-auto",
                            "max-height": "150",
                            "max-width": "150"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      class: "d-flex flex-column justify-center align-center",
                      cols: "12",
                      lg: "4",
                      md: "4",
                      sx: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "justify-center align-center flex-wrap text-left pa-2 ma-2 pl-5 font-weight-medium",
                          height: "250",
                          width: "100%"
                        }, [
                          createVNode("div", { class: "text-h4 font-weight-medium" }, toDisplayString(unref(company_name)), 1),
                          createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(company_description)), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "8",
                    "justify-center": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_divider, {
                          thickness: 4,
                          class: "border-opacity-75",
                          color: "light",
                          style: { "border-radius": "10%" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_divider, {
                            thickness: 4,
                            class: "border-opacity-75",
                            color: "light",
                            style: { "border-radius": "10%" }
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "8",
                      "justify-center": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_divider, {
                          thickness: 4,
                          class: "border-opacity-75",
                          color: "light",
                          style: { "border-radius": "10%" }
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-h3 text-center font-weight-bold"${_scopeId}>Involved Areas</div>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(project_areas), (area) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "3",
                      key: area.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ProjectIconCard, {
                            card_icon: area.icon,
                            card_title: area.name
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ProjectIconCard, {
                              card_icon: area.icon,
                              card_title: area.name
                            }, null, 8, ["card_icon", "card_title"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(project_areas), (area) => {
                      return openBlock(), createBlock(_component_v_col, {
                        cols: "12",
                        md: "3",
                        key: area.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ProjectIconCard, {
                            card_icon: area.icon,
                            card_title: area.name
                          }, null, 8, ["card_icon", "card_title"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { class: "d-flex justify-center align-items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, {
                          class: "d-flex justify-center align-center bg-darker-blue text-light font-weight-thin text-center",
                          width: "100%"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { class: "ma-5" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "8",
                                      class: "d-flex align-self-center justify-center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><div class="text-h4 pa-2 font-weight-thin"${_scopeId6}>Meet the Project Supervisor</div><div class="text-body-1 pt-2 d-none d-sm-block"${_scopeId6}>${ssrInterpolate(supervisor.name)} ${ssrInterpolate(supervisor.surname)}</div><div class="text-body-2 pb-2 d-none d-sm-block"${_scopeId6}>${ssrInterpolate(supervisor.role)}</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-h4 pa-2 font-weight-thin" }, "Meet the Project Supervisor"),
                                              createVNode("div", { class: "text-body-1 pt-2 d-none d-sm-block" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                              createVNode("div", { class: "text-body-2 pb-2 d-none d-sm-block" }, toDisplayString(supervisor.role), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "4",
                                      "order-md": "first"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="pa-2 bg-light rounded-circle d-inline-block"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_img, {
                                            src: "/img/logo.png",
                                            "max-height": "250",
                                            "max-width": "250"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "pa-2 bg-light rounded-circle d-inline-block" }, [
                                              createVNode(_component_v_img, {
                                                src: "/img/logo.png",
                                                "max-height": "250",
                                                "max-width": "250"
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      class: "d-md-none"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div${_scopeId6}><div class="text-body-1 pt-2"${_scopeId6}>${ssrInterpolate(supervisor.name)} ${ssrInterpolate(supervisor.surname)}</div><div class="text-body-2 pb-2"${_scopeId6}>${ssrInterpolate(supervisor.role)}</div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, [
                                              createVNode("div", { class: "text-body-1 pt-2" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                              createVNode("div", { class: "text-body-2 pb-2" }, toDisplayString(supervisor.role), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "8",
                                        class: "d-flex align-self-center justify-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-h4 pa-2 font-weight-thin" }, "Meet the Project Supervisor"),
                                            createVNode("div", { class: "text-body-1 pt-2 d-none d-sm-block" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                            createVNode("div", { class: "text-body-2 pb-2 d-none d-sm-block" }, toDisplayString(supervisor.role), 1)
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "4",
                                        "order-md": "first"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "pa-2 bg-light rounded-circle d-inline-block" }, [
                                            createVNode(_component_v_img, {
                                              src: "/img/logo.png",
                                              "max-height": "250",
                                              "max-width": "250"
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        class: "d-md-none"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", null, [
                                            createVNode("div", { class: "text-body-1 pt-2" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                            createVNode("div", { class: "text-body-2 pb-2" }, toDisplayString(supervisor.role), 1)
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { class: "ma-5" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "8",
                                      class: "d-flex align-self-center justify-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-h4 pa-2 font-weight-thin" }, "Meet the Project Supervisor"),
                                          createVNode("div", { class: "text-body-1 pt-2 d-none d-sm-block" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                          createVNode("div", { class: "text-body-2 pb-2 d-none d-sm-block" }, toDisplayString(supervisor.role), 1)
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "4",
                                      "order-md": "first"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "pa-2 bg-light rounded-circle d-inline-block" }, [
                                          createVNode(_component_v_img, {
                                            src: "/img/logo.png",
                                            "max-height": "250",
                                            "max-width": "250"
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      class: "d-md-none"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", null, [
                                          createVNode("div", { class: "text-body-1 pt-2" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                          createVNode("div", { class: "text-body-2 pb-2" }, toDisplayString(supervisor.role), 1)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, {
                            class: "d-flex justify-center align-center bg-darker-blue text-light font-weight-thin text-center",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { class: "ma-5" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "8",
                                    class: "d-flex align-self-center justify-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-h4 pa-2 font-weight-thin" }, "Meet the Project Supervisor"),
                                        createVNode("div", { class: "text-body-1 pt-2 d-none d-sm-block" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                        createVNode("div", { class: "text-body-2 pb-2 d-none d-sm-block" }, toDisplayString(supervisor.role), 1)
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "4",
                                    "order-md": "first"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "pa-2 bg-light rounded-circle d-inline-block" }, [
                                        createVNode(_component_v_img, {
                                          src: "/img/logo.png",
                                          "max-height": "250",
                                          "max-width": "250"
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    class: "d-md-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, [
                                        createVNode("div", { class: "text-body-1 pt-2" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                        createVNode("div", { class: "text-body-2 pb-2" }, toDisplayString(supervisor.role), 1)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_sheet, {
                          class: "d-flex justify-center align-center bg-darker-blue text-light font-weight-thin text-center",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { class: "ma-5" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "8",
                                  class: "d-flex align-self-center justify-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-h4 pa-2 font-weight-thin" }, "Meet the Project Supervisor"),
                                      createVNode("div", { class: "text-body-1 pt-2 d-none d-sm-block" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                      createVNode("div", { class: "text-body-2 pb-2 d-none d-sm-block" }, toDisplayString(supervisor.role), 1)
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4",
                                  "order-md": "first"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-2 bg-light rounded-circle d-inline-block" }, [
                                      createVNode(_component_v_img, {
                                        src: "/img/logo.png",
                                        "max-height": "250",
                                        "max-width": "250"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  class: "d-md-none"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("div", { class: "text-body-1 pt-2" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                      createVNode("div", { class: "text-body-2 pb-2" }, toDisplayString(supervisor.role), 1)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "d-flex justify-center align-items-center mt-5" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "2",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "pa-6 bg-light rounded-circle d-inline-block" }, [
                        createVNode(_component_v_img, {
                          src: "/img/logo.png",
                          class: "ma-auto",
                          "max-height": "150",
                          "max-width": "150"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    class: "d-flex flex-column justify-center align-center",
                    cols: "12",
                    lg: "4",
                    md: "4",
                    sx: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "justify-center align-center flex-wrap text-left pa-2 ma-2 pl-5 font-weight-medium",
                        height: "250",
                        width: "100%"
                      }, [
                        createVNode("div", { class: "text-h4 font-weight-medium" }, toDisplayString(unref(company_name)), 1),
                        createVNode("div", { class: "text-body-3 mb-2" }, toDisplayString(unref(company_description)), 1)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "d-flex justify-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "8",
                    "justify-center": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_divider, {
                        thickness: 4,
                        class: "border-opacity-75",
                        color: "light",
                        style: { "border-radius": "10%" }
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "text-h3 text-center font-weight-bold" }, "Involved Areas"),
              createVNode(_component_v_row, { class: "d-flex justify-center" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(project_areas), (area) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      md: "3",
                      key: area.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ProjectIconCard, {
                          card_icon: area.icon,
                          card_title: area.name
                        }, null, 8, ["card_icon", "card_title"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { class: "d-flex justify-center align-items-center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "8" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_sheet, {
                        class: "d-flex justify-center align-center bg-darker-blue text-light font-weight-thin text-center",
                        width: "100%"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { class: "ma-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "8",
                                class: "d-flex align-self-center justify-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-h4 pa-2 font-weight-thin" }, "Meet the Project Supervisor"),
                                    createVNode("div", { class: "text-body-1 pt-2 d-none d-sm-block" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                    createVNode("div", { class: "text-body-2 pb-2 d-none d-sm-block" }, toDisplayString(supervisor.role), 1)
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4",
                                "order-md": "first"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-2 bg-light rounded-circle d-inline-block" }, [
                                    createVNode(_component_v_img, {
                                      src: "/img/logo.png",
                                      "max-height": "250",
                                      "max-width": "250"
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                class: "d-md-none"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "text-body-1 pt-2" }, toDisplayString(supervisor.name) + " " + toDisplayString(supervisor.surname), 1),
                                    createVNode("div", { class: "text-body-2 pb-2" }, toDisplayString(supervisor.role), 1)
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-1b61e938.mjs.map
