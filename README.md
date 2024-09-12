# blocksuite-treeshake

disable minimize to see

```js
/* harmony import */ var _blocksuite_blocks__WEBPACK_IMPORTED_MODULE_0__ =
  __webpack_require__(65261);

function cannot_tree_shaked() {
  console.log(EdgelessTemplatePanel);
}
function can_tree_shaked() {
  console.log("gone");
}
function any() {
  console.log("any");
}
```

the import of `_blocksuite_blocks__WEBPACK_IMPORTED_MODULE_0__` is not used but still
kept in the bundle because there is side effect in the module.
