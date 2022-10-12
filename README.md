# playwright-cucumber-typescript-template

Framework uses Cucumber as Runner and Typescript for Client Libraries

#####            Steps to setup the Automation Environment/Framework            #####

1. Initialize node.js project
   Command: npm init 
   The npm init command is used to create a Node. js project. The npm init command will create a package where the project files will be stored. All the modules you download will be stored in the package

2. Initialze tsconfig.json file
   Command: npx -p typescript tsc --init
   The tsconfig.json file specifies the root files and the compiler options required to compile the project. JavaScript projects can use a jsconfig.json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.
   
   Note: This option is applicable for the compiler. Most of the times we end up using some packages which do not completely implemented in Typescript. In this scenario we need to let Typescript engine know that its ok
   Option to be added in tsconfig.json file
   "noImplicitAny": false
   In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type.

3. Install Playwright
   Command: npm install playwright -D

4. Install Playwright/Test
   Command: npm install @playwright/test -D

5. Install Cucumber Testing Framework
   Command: npm install @cucumber/cucumber -D

6. Install TypeScript
   Command: npm install typescript -D

7. Install ts-node
   Command: npm install ts-node -D
   ts-node is a TypeScript execution engine and REPL for Node. js. It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node. js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.

