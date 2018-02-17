const acorn = require('acorn');
const walk = require('acorn/dist/walk');

const main = function (code = '', options = {}) {
    let ast;
    try {
        ast = acorn.parseExpressionAt(code, 0, options);
    } catch (e) {
        ast = acorn.parse(code, options);
    }
    walk.simple(ast, {
        FunctionExpression(node) {
            debugger
        },
        ArrowFunctionExpression(node) {
            debugger
        },
        Function(node) {
            debugger
        },
        ObjectPattern(node) {
            debugger
        },
        Identifier(node) {
            debugger
        },
        VariableDeclaration(node) {
            debugger
        }
    });
};

module.exports = main;