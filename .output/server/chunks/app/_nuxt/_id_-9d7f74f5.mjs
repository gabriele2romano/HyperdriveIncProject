import { resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const prevMember = "Kad Nellalav", nextMember = "Son Kadut", name = "Steve Kadend", role = "General Administrator";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_divider = resolveComponent("v-divider");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        class: "font-weight-bold my-auto",
        "max-width": "1140"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          class: "text-light text-body-1 bg-dark-blue",
                          variant: "tonal",
                          rounded: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` See our whole team `);
                            } else {
                              return [
                                createTextVNode(" See our whole team ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            class: "text-light text-body-1 bg-dark-blue",
                            variant: "tonal",
                            rounded: "6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" See our whole team ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          class: "text-darker-blue text-body-1",
                          variant: "text",
                          ripple: false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-arrow-left" }, null, _parent5, _scopeId4));
                              _push5(` Previous member:<br${_scopeId4}>${ssrInterpolate(prevMember)}`);
                            } else {
                              return [
                                createVNode(_component_v_icon, { icon: "mdi-arrow-left" }),
                                createTextVNode(" Previous member:"),
                                createVNode("br"),
                                createTextVNode(toDisplayString(prevMember))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            class: "text-darker-blue text-body-1",
                            variant: "text",
                            ripple: false
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "mdi-arrow-left" }),
                              createTextVNode(" Previous member:"),
                              createVNode("br"),
                              createTextVNode(toDisplayString(prevMember))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          class: "text-darker-blue text-body-1",
                          variant: "text",
                          ripple: false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Next member:<br${_scopeId4}>${ssrInterpolate(nextMember)} `);
                              _push5(ssrRenderComponent(_component_v_icon, { icon: "mdi-arrow-right" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Next member:"),
                                createVNode("br"),
                                createTextVNode(toDisplayString(nextMember) + " "),
                                createVNode(_component_v_icon, { icon: "mdi-arrow-right" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            class: "text-darker-blue text-body-1",
                            variant: "text",
                            ripple: false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Next member:"),
                              createVNode("br"),
                              createTextVNode(toDisplayString(nextMember) + " "),
                              createVNode(_component_v_icon, { icon: "mdi-arrow-right" })
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
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          class: "text-light text-body-1 bg-dark-blue",
                          variant: "tonal",
                          rounded: "6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See our whole team ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          class: "text-darker-blue text-body-1",
                          variant: "text",
                          ripple: false
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "mdi-arrow-left" }),
                            createTextVNode(" Previous member:"),
                            createVNode("br"),
                            createTextVNode(toDisplayString(prevMember))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          class: "text-darker-blue text-body-1",
                          variant: "text",
                          ripple: false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Next member:"),
                            createVNode("br"),
                            createTextVNode(toDisplayString(nextMember) + " "),
                            createVNode(_component_v_icon, { icon: "mdi-arrow-right" })
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
            _push2(ssrRenderComponent(_component_v_sheet, {
              class: "text-body-2 mx-auto bg-darker-blue",
              "max-width": "1140"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, { fluid: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_img, {
                                      src: "https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png",
                                      height: "100%",
                                      cover: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_img, {
                                        src: "https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png",
                                        height: "100%",
                                        cover: ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_container, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, { "align-content": "space-between" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, { cols: "9" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="text-h3 pa-2"${_scopeId8}>${ssrInterpolate(name)}</div><div class="text-h4 pa-2"${_scopeId8}>${ssrInterpolate(role)}</div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                                        createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_col, { justify: "end" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<div class="text-subtitle-2 pa-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_v_icon, { icon: "mdi-phone" }, null, _parent9, _scopeId8));
                                                      _push9(` +39 (123) 4567890 </div><div class="text-subtitle-2 pa-2"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_v_icon, { icon: "mdi-email" }, null, _parent9, _scopeId8));
                                                      _push9(` stevekad@mega.inc </div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                          createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                                          createTextVNode(" +39 (123) 4567890 ")
                                                        ]),
                                                        createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                          createVNode(_component_v_icon, { icon: "mdi-email" }),
                                                          createTextVNode(" stevekad@mega.inc ")
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, { cols: "9" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                                      createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_col, { justify: "end" }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                        createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                                        createTextVNode(" +39 (123) 4567890 ")
                                                      ]),
                                                      createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                        createVNode(_component_v_icon, { icon: "mdi-email" }),
                                                        createTextVNode(" stevekad@mega.inc ")
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p class="text-body-2 pa-2"${_scopeId8}> Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. </p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_col, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_row, { "align-content": "space-between" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "9" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                                    createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_col, { justify: "end" }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                      createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                                      createTextVNode(" +39 (123) 4567890 ")
                                                    ]),
                                                    createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                      createVNode(_component_v_icon, { icon: "mdi-email" }),
                                                      createTextVNode(" stevekad@mega.inc ")
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_container, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, { "align-content": "space-between" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "9" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                                  createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_col, { justify: "end" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                    createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                                    createTextVNode(" +39 (123) 4567890 ")
                                                  ]),
                                                  createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                    createVNode(_component_v_icon, { icon: "mdi-email" }),
                                                    createTextVNode(" stevekad@mega.inc ")
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: "https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png",
                                      height: "100%",
                                      cover: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "9"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_container, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, { "align-content": "space-between" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, { cols: "9" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                                createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_col, { justify: "end" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                  createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                                  createTextVNode(" +39 (123) 4567890 ")
                                                ]),
                                                createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                  createVNode(_component_v_icon, { icon: "mdi-email" }),
                                                  createTextVNode(" stevekad@mega.inc ")
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: "https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png",
                                    height: "100%",
                                    cover: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "9"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_container, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, { "align-content": "space-between" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "9" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                              createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_col, { justify: "end" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                                createTextVNode(" +39 (123) 4567890 ")
                                              ]),
                                              createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                                createVNode(_component_v_icon, { icon: "mdi-email" }),
                                                createTextVNode(" stevekad@mega.inc ")
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, { fluid: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: "https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png",
                                  height: "100%",
                                  cover: ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "9"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_container, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, { "align-content": "space-between" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "9" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                            createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { justify: "end" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                              createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                              createTextVNode(" +39 (123) 4567890 ")
                                            ]),
                                            createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                              createVNode(_component_v_icon, { icon: "mdi-email" }),
                                              createTextVNode(" stevekad@mega.inc ")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
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
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h4 text-center text-darker-blue"${_scopeId3}> Discover the projects supervised by ${ssrInterpolate(name)}</div>`);
                        _push4(ssrRenderComponent(_component_v_divider, {
                          thickness: 3,
                          color: "darker-blue",
                          class: "border-opacity-100"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-h4 text-center text-darker-blue" }, " Discover the projects supervised by " + toDisplayString(name)),
                          createVNode(_component_v_divider, {
                            thickness: 3,
                            color: "darker-blue",
                            class: "border-opacity-100"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h4 text-center text-darker-blue" }, " Discover the projects supervised by " + toDisplayString(name)),
                        createVNode(_component_v_divider, {
                          thickness: 3,
                          color: "darker-blue",
                          class: "border-opacity-100"
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
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        class: "text-light text-body-1 bg-dark-blue",
                        variant: "tonal",
                        rounded: "6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" See our whole team ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        class: "text-darker-blue text-body-1",
                        variant: "text",
                        ripple: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { icon: "mdi-arrow-left" }),
                          createTextVNode(" Previous member:"),
                          createVNode("br"),
                          createTextVNode(toDisplayString(prevMember))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        class: "text-darker-blue text-body-1",
                        variant: "text",
                        ripple: false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Next member:"),
                          createVNode("br"),
                          createTextVNode(toDisplayString(nextMember) + " "),
                          createVNode(_component_v_icon, { icon: "mdi-arrow-right" })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_sheet, {
                class: "text-body-2 mx-auto bg-darker-blue",
                "max-width": "1140"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, { fluid: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: "https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png",
                                height: "100%",
                                cover: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_container, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, { "align-content": "space-between" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "9" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-h3 pa-2" }, toDisplayString(name)),
                                          createVNode("div", { class: "text-h4 pa-2" }, toDisplayString(role))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { justify: "end" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                            createVNode(_component_v_icon, { icon: "mdi-phone" }),
                                            createTextVNode(" +39 (123) 4567890 ")
                                          ]),
                                          createVNode("div", { class: "text-subtitle-2 pa-2" }, [
                                            createVNode(_component_v_icon, { icon: "mdi-email" }),
                                            createTextVNode(" stevekad@mega.inc ")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-body-2 pa-2" }, " Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. ")
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h4 text-center text-darker-blue" }, " Discover the projects supervised by " + toDisplayString(name)),
                      createVNode(_component_v_divider, {
                        thickness: 3,
                        color: "darker-blue",
                        class: "border-opacity-100"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-9d7f74f5.mjs.map
