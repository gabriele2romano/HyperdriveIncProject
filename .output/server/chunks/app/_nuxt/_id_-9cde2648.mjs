import { _ as __nuxt_component_0 } from './layout-6270dac5.mjs';
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const problem = "Inefficiencies in Solar Energy Management", solution = "Intelligent Solar Energy Management Platform";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_v_parallax = resolveComponent("v-parallax");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_img = resolveComponent("v-img");
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_parallax, {
              height: "auto",
              src: "/img/bg-projects.jpg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, { class: "d-flex fill-height text-light" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "8",
                                sx: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_sheet, {
                                      class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                      height: "250",
                                      "max-width": "800",
                                      width: "100%"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-h5"${_scopeId6}>Problem</div><div class="text-body-2 mb-2"${_scopeId6}>${ssrInterpolate(problem)}</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-h5" }, "Problem"),
                                            createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(problem))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_sheet, {
                                        class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                        height: "250",
                                        "max-width": "800",
                                        width: "100%"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h5" }, "Problem"),
                                          createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(problem))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4",
                                sx: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_sheet, {
                                      class: "bg-darker-blue justify-center align-center flex-wrap text-center mx-auto",
                                      height: "250",
                                      "max-width": "800",
                                      width: "100%"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, {
                                            src: "/img/bg-projects.jpg",
                                            height: "100%",
                                            cover: ""
                                          }, null, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_sheet, {
                                        class: "bg-darker-blue justify-center align-center flex-wrap text-center mx-auto",
                                        height: "250",
                                        "max-width": "800",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "8",
                                  sx: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, {
                                      class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                      height: "250",
                                      "max-width": "800",
                                      width: "100%"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-h5" }, "Problem"),
                                        createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(problem))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4",
                                  sx: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, {
                                      class: "bg-darker-blue justify-center align-center flex-wrap text-center mx-auto",
                                      height: "250",
                                      "max-width": "800",
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_row, { class: "d-flex order-xs" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "8",
                                sx: "12",
                                "order-md": "last"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_sheet, {
                                      class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                      height: "250",
                                      "max-width": "800",
                                      width: "100%"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-h5"${_scopeId6}>Solution</div><div class="text-body-2 mb-2"${_scopeId6}>${ssrInterpolate(solution)}</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-h5" }, "Solution"),
                                            createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(solution))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_sheet, {
                                        class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                        height: "250",
                                        "max-width": "800",
                                        width: "100%"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h5" }, "Solution"),
                                          createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(solution))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "4",
                                sx: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_sheet, { class: "bg-darker-blue" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_img, {
                                            src: "/img/bg-projects.jpg",
                                            height: "100%",
                                            cover: ""
                                          }, null, _parent7, _scopeId6));
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_sheet, { class: "bg-darker-blue" }, {
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "8",
                                  sx: "12",
                                  "order-md": "last"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, {
                                      class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                      height: "250",
                                      "max-width": "800",
                                      width: "100%"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-h5" }, "Solution"),
                                        createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(solution))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "4",
                                  sx: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_sheet, { class: "bg-darker-blue" }, {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "8",
                                sx: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, {
                                    class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                    height: "250",
                                    "max-width": "800",
                                    width: "100%"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h5" }, "Problem"),
                                      createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(problem))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4",
                                sx: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, {
                                    class: "bg-darker-blue justify-center align-center flex-wrap text-center mx-auto",
                                    height: "250",
                                    "max-width": "800",
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
                          createVNode(_component_v_row, { class: "d-flex order-xs" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "8",
                                sx: "12",
                                "order-md": "last"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, {
                                    class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                    height: "250",
                                    "max-width": "800",
                                    width: "100%"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-h5" }, "Solution"),
                                      createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(solution))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "4",
                                sx: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_sheet, { class: "bg-darker-blue" }, {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, { class: "d-flex fill-height text-light" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "8",
                              sx: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, {
                                  class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                  height: "250",
                                  "max-width": "800",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h5" }, "Problem"),
                                    createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(problem))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4",
                              sx: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, {
                                  class: "bg-darker-blue justify-center align-center flex-wrap text-center mx-auto",
                                  height: "250",
                                  "max-width": "800",
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
                        createVNode(_component_v_row, { class: "d-flex order-xs" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "8",
                              sx: "12",
                              "order-md": "last"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, {
                                  class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                  height: "250",
                                  "max-width": "800",
                                  width: "100%"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-h5" }, "Solution"),
                                    createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(solution))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "4",
                              sx: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_sheet, { class: "bg-darker-blue" }, {
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
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_parallax, {
                height: "auto",
                src: "/img/bg-projects.jpg"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, { class: "d-flex fill-height text-light" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "8",
                            sx: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                "max-width": "800",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h5" }, "Problem"),
                                  createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(problem))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4",
                            sx: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                class: "bg-darker-blue justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                "max-width": "800",
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
                      createVNode(_component_v_row, { class: "d-flex order-xs" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "8",
                            sx: "12",
                            "order-md": "last"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, {
                                class: "d-flex bg-darker-blue text-light font-weight-thin mb-4 justify-center align-center flex-wrap text-center mx-auto",
                                height: "250",
                                "max-width": "800",
                                width: "100%"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-h5" }, "Solution"),
                                  createVNode("div", { class: "text-body-2 mb-2" }, toDisplayString(solution))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4",
                            sx: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_sheet, { class: "bg-darker-blue" }, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-9cde2648.mjs.map
