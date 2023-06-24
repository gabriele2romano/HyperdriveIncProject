import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from 'bootstrap-vue-next';
import { resolveComponent, mergeProps, withCtx, createVNode, renderSlot, useSSRContext, createTextVNode, openBlock, createBlock, Fragment, renderList, defineComponent, ref, createElementBlock } from 'vue';
import { _ as _export_sfc, d as __nuxt_component_7 } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { u as useDevice } from './useDevice-a5a72bb5.mjs';
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

const __nuxt_component_6 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_b_navbar = BNavbar;
  const _component_b_navbar_brand = BNavbarBrand;
  const _component_v_img = resolveComponent("v-img");
  const _component_b_navbar_toggle = BNavbarToggle;
  const _component_b_collapse = BCollapse;
  const _component_b_navbar_nav = BNavbarNav;
  const _component_b_nav_item = BNavItem;
  const _component_ClientOnly = __nuxt_component_6;
  const _component_NuxtLink = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_b_navbar, {
    "smart-scroll": "",
    toggleable: "lg",
    type: "light",
    class: "bg-light pa-1",
    fixed: "top"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_navbar_brand, { href: "#" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_img, {
                src: "/favicon.ico",
                "max-width": "50",
                class: "mx-auto"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_img, {
                  src: "/favicon.ico",
                  "max-width": "50",
                  class: "mx-auto"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_b_navbar_toggle, { target: "nav-collapse" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_b_collapse, {
          id: "nav-collapse",
          "is-nav": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_navbar_nav, { class: "ml-auto" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_nav_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/",
                                  class: "nav-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Home")
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
                    _push4(ssrRenderComponent(_component_b_nav_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/people/.",
                                  class: "nav-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("About")
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
                    _push4(ssrRenderComponent(_component_b_nav_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/projects/1",
                                  class: "nav-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Projects")
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
                    _push4(ssrRenderComponent(_component_b_nav_item, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ClientOnly, null, {}, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_ClientOnly, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/contact/",
                                  class: "nav-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Contact")
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
                      createVNode(_component_b_nav_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/",
                                class: "nav-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Home")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_nav_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/people/.",
                                class: "nav-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_nav_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/projects/1",
                                class: "nav-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Projects")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_nav_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/contact/",
                                class: "nav-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Contact")
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
                createVNode(_component_b_navbar_nav, { class: "ml-auto" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_nav_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/",
                              class: "nav-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_nav_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/people/.",
                              class: "nav-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("About")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_nav_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/projects/1",
                              class: "nav-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Projects")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_nav_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/contact/",
                              class: "nav-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Contact")
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
          createVNode(_component_b_navbar_brand, { href: "#" }, {
            default: withCtx(() => [
              createVNode(_component_v_img, {
                src: "/favicon.ico",
                "max-width": "50",
                class: "mx-auto"
              })
            ]),
            _: 1
          }),
          createVNode(_component_b_navbar_toggle, { target: "nav-collapse" }),
          createVNode(_component_b_collapse, {
            id: "nav-collapse",
            "is-nav": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_b_navbar_nav, { class: "ml-auto" }, {
                default: withCtx(() => [
                  createVNode(_component_b_nav_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/",
                            class: "nav-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Home")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_nav_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/people/.",
                            class: "nav-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("About")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_nav_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/projects/1",
                            class: "nav-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Projects")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_nav_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_ClientOnly, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/contact/",
                            class: "nav-link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Contact")
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
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram"
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_footer, mergeProps({ class: "bg-indigo-lighten-1 text-center d-flex flex-column" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, {
                "align-self": "center",
                justify: "space-between"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "4",
                      xs: "12",
                      "align-self": "center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_img, {
                            src: "/img/logo.png",
                            "max-width": "100",
                            class: "ma-auto"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode(_component_v_img, {
                                src: "/img/logo.png",
                                "max-width": "100",
                                class: "ma-auto"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      md: "4",
                      xs: "12",
                      "align-self": "center"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div${_scopeId4}><!--[-->`);
                          ssrRenderList(_ctx.icons, (icon) => {
                            _push5(ssrRenderComponent(_component_v_btn, {
                              key: icon,
                              class: "mx-4",
                              icon,
                              variant: "text"
                            }, null, _parent5, _scopeId4));
                          });
                          _push5(`<!--]--></div><div class="pt-0 mx-auto"${_scopeId4}> via Leonardo 38 , Milano , 20123<br${_scopeId4}> Fax : 02383598429<br${_scopeId4}>Telefono : 3189893204<br${_scopeId4}>Mail : contact@megagroup.com </div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.icons, (icon) => {
                                return openBlock(), createBlock(_component_v_btn, {
                                  key: icon,
                                  class: "mx-4",
                                  icon,
                                  variant: "text"
                                }, null, 8, ["icon"]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "pt-0 mx-auto" }, [
                              createTextVNode(" via Leonardo 38 , Milano , 20123"),
                              createVNode("br"),
                              createTextVNode(" Fax : 02383598429"),
                              createVNode("br"),
                              createTextVNode("Telefono : 3189893204"),
                              createVNode("br"),
                              createTextVNode("Mail : contact@megagroup.com ")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "4",
                        xs: "12",
                        "align-self": "center"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(_component_v_img, {
                              src: "/img/logo.png",
                              "max-width": "100",
                              class: "ma-auto"
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "4",
                        xs: "12",
                        "align-self": "center"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.icons, (icon) => {
                              return openBlock(), createBlock(_component_v_btn, {
                                key: icon,
                                class: "mx-4",
                                icon,
                                variant: "text"
                              }, null, 8, ["icon"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "pt-0 mx-auto" }, [
                            createTextVNode(" via Leonardo 38 , Milano , 20123"),
                            createVNode("br"),
                            createTextVNode(" Fax : 02383598429"),
                            createVNode("br"),
                            createTextVNode("Telefono : 3189893204"),
                            createVNode("br"),
                            createTextVNode("Mail : contact@megagroup.com ")
                          ])
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
                createVNode(_component_v_row, {
                  "align-self": "center",
                  justify: "space-between"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "4",
                      xs: "12",
                      "align-self": "center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(_component_v_img, {
                            src: "/img/logo.png",
                            "max-width": "100",
                            class: "ma-auto"
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "4",
                      xs: "12",
                      "align-self": "center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.icons, (icon) => {
                            return openBlock(), createBlock(_component_v_btn, {
                              key: icon,
                              class: "mx-4",
                              icon,
                              variant: "text"
                            }, null, 8, ["icon"]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "pt-0 mx-auto" }, [
                          createTextVNode(" via Leonardo 38 , Milano , 20123"),
                          createVNode("br"),
                          createTextVNode(" Fax : 02383598429"),
                          createVNode("br"),
                          createTextVNode("Telefono : 3189893204"),
                          createVNode("br"),
                          createTextVNode("Mail : contact@megagroup.com ")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_container, null, {
            default: withCtx(() => [
              createVNode(_component_v_row, {
                "align-self": "center",
                justify: "space-between"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "4",
                    xs: "12",
                    "align-self": "center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(_component_v_img, {
                          src: "/img/logo.png",
                          "max-width": "100",
                          class: "ma-auto"
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    md: "4",
                    xs: "12",
                    "align-self": "center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.icons, (icon) => {
                          return openBlock(), createBlock(_component_v_btn, {
                            key: icon,
                            class: "mx-4",
                            icon,
                            variant: "text"
                          }, null, 8, ["icon"]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "pt-0 mx-auto" }, [
                        createTextVNode(" via Leonardo 38 , Milano , 20123"),
                        createVNode("br"),
                        createTextVNode(" Fax : 02383598429"),
                        createVNode("br"),
                        createTextVNode("Telefono : 3189893204"),
                        createVNode("br"),
                        createTextVNode("Mail : contact@megagroup.com ")
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
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useDevice();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_app, { id: "inspire" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppHeader, null, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "margin-top": "50px" })}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AppFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppHeader),
              createVNode("div", { style: { "margin-top": "50px" } }, [
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode(_component_AppFooter)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-ed7b1b37.mjs.map
