import { isCallExpression, isIdentifier } from 'babel-types';
import { babelTestSuite } from '../../apps/angular-presentation/src/app/exercise/runners/ts-code-test-runner/babel-helpers';

const tests = [
  {
    title: `@@allSetBootstrapApp`,
    condition: ({node, parent}) =>
      isIdentifier(node, {name: 'AppModule'}) && isCallExpression(parent) && parent.callee.property.name === 'bootstrapModule'
  }
];

export const createBootstrapTest = babelTestSuite('main.ts', tests);
