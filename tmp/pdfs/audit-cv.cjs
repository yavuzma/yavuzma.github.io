const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const root = path.resolve(__dirname, '../../portfolio-next');
const req = Module.createRequire(path.join(root, 'package.json'));
const ts = req('typescript');
const sourcePath = path.join(root, 'app/components/CVDocument.tsx');
const compiled = ts.transpileModule(fs.readFileSync(sourcePath, 'utf8'), {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
}).outputText;
const mod = new Module(sourcePath, module);
mod.filename = sourcePath;
mod.paths = Module._nodeModulePaths(path.dirname(sourcePath));
mod._compile(compiled, sourcePath);
const React = req('react');
const renderer = req('@react-pdf/renderer');
renderer.renderToFile(React.createElement(mod.exports.default), path.join(__dirname, 'cv-audit.pdf'))
  .then(() => console.log('Rendered tmp/pdfs/cv-audit.pdf'))
  .catch(error => { console.error(error); process.exitCode = 1; });
